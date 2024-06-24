---
title: "Next output and other landmines"
date: "20/06/2024"
excerpt: "Me when I'm really happy to finally find the time to upgrade to Next 14 but 15 has just come out"
song_link: "https://open.spotify.com/embed/track/4E64eAph6AYI98ucunrGH8"
hidden: true
---

Recently, I’ve been trying to migrate a site from Next 12.3 to 14. Thanks to [codemods](https://nextjs.org/docs/pages/building-your-application/upgrading/codemods) and the backwards compatibility with the pages router, this is not nearly as arduous a process as I would’ve imagined. Most of the toil involved is due to the necessary React upgrade, but that’s not what this post is about.

The repo I work with has *a lot* of images in the public directory (~500MB). Should this post instead be about how I moved to a cloud hosting service (or even just Google Cloud buckets / S3)? Maybe. Prioritisation is a funny thing and building a tool to iterate over 200+ .mdx files to replace local URLs with remotes wasn't on my Q2 2024 bingo sheet.

Local files are traditionally not a problem. These aren't needed on the server-side, so you don't hit the [250MB unzipped lambda size limit](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html). This is a hard-and-fast rule, because I'm assuming that much like me, your Next project is deployed straight to Vercel, or God forbid, Netlify.

When I run into an issue whilst working, the debugging process usually starts at the source. This is frustrating because that isn't necessarily what's wrong, nor is it correct due process. I'd imagine a good process would be something like:

1. Run into problem
2. Understand the area around the problem
3. Use that understanding to solve it

However, what usually happens (with me at least) is something more along the lines of:

1. Run into problem
2. Google problem and implement a rational fix
3. Pick the next reasonable looking fix because the last one didn't work and implement that
4. Rinse and repeat steps 2-3 until problem is solved

I'd love to say I was able to follow this process precisely, but I actually ended up having to implement the advanced version of the above in order to solve the problem I'll describe here.

We deploy our site using Netlify. This is just what we use, we have no reason to not be on Vercel. If that brings adds net suffering to my 2024, I'll likely write about that too. For reasons that I don't yet understand (or perhaps due to the solution I found), whilst on Next 12.3, we ran into what I can only assume is a regular issue: [Large function error](https://docs.netlify.com/frameworks/next-js/runtime-v4/troubleshooting/#large-function-error). Our public directory was being inserted into the function bundle, so that the total size was closer to 1GB than it was to 250MB. Using Next Runtime V4, this had a fairly simple solution.

```toml
[functions]
  included_files = ["!public/**/*", "!another-large-directory/**/*", "!/**/*"]
```

If these directories exist, don't copy them over for the server function. Very easy to implement, and fairly easy to understand.  Or so I thought.

What the hell? Didn't I already fix this?

My first instinct was that Netlify was doing something wrong. This made sense, because Netlify is always doing something wrong. Given that they're responsible for building Next here, it'd make sense that the configuration they previously setup would no longer be working after upgrading to v5 (which only recently came out of beta).

When I was fixing this, the [source code](https://github.com/netlify/next-runtime) wasn't available on GitHub, which meant a lot of frustrating `console.logs("hi")` in the node_modules directory in order to decipher what all the minified code meant.

I'm going to skip ahead a little here because it's apparent I like waffling, or perhaps the trauma of going through this was too much for me and I need an outlet.

I ended up writing the below patch to solve it. The new version of `@netlify/next-runtime` just copies now, and so presumably exclusion rules don't work anymore. I should've reported this, but they've just had a RIF and I don't think they've solve it anytime soon.

```typescript
diff --git a/dist/build/content/server.js b/dist/build/content/server.js
index 23e5a88281f50afe19aa1a00fa4e0fb57db1b24c..164ac70913b0230b6f4855350162ee9430b43b77 100644
--- a/dist/build/content/server.js
+++ b/dist/build/content/server.js
@@ -3,7 +3,7 @@
         var { createRequire } = await import("node:module");
         return createRequire(import.meta.url);
       })();
-
+
 import {
   require_out
 } from "../../esm-chunks/chunk-FHR56UHE.js";
@@ -170,13 +170,27 @@ async function patchNextModules(ctx, nextVersion, serverHandlerRequireResolve) {
 var copyNextDependencies = async (ctx) => {
   await tracer.withActiveSpan("copyNextDependencies", async () => {
     const entries = await readdir(ctx.standaloneDir);
+    const { included_files: includedFiles = [] } = ctx.netlifyConfig.functions?.["*"] || [];
+    const exclusionPatterns = includedFiles.filter(file => file.startsWith("!")).map(pattern => pattern.slice(1));
+    const shouldExclude = (src) => {
+      return exclusionPatterns.some(pattern => {
+        const normalizedPattern = pattern.replace('/**/*', '');
+        return src.includes(join(ctx.standaloneDir, normalizedPattern));
+      });
+    }
+
     const promises = entries.map(async (entry) => {
       if (entry === "package.json" || entry === ctx.nextDistDir) {
         return;
       }
       const src = join(ctx.standaloneDir, entry);
       const dest = join(ctx.serverHandlerDir, entry);
-      await cp(src, dest, { recursive: true, verbatimSymlinks: true, force: true });
+      await cp(src, dest, { recursive: true, verbatimSymlinks: true, force: true, filter: (src) => {
+        if (shouldExclude(src)) {
+          return false;
+        }
+        return true;
+      }});
       if (entry === "node_modules") {
         await recreateNodeModuleSymlinks(ctx.resolveFromSiteDir("node_modules"), dest);
       }
```

`copyNextDependencies` is the main culprit here and does as one might expect. It was here that I was able to see that before this runs, `/public` doesn't exist, and afterwards it does.

Okay, so there was definitely something wrong with Netlify then. I went ahead and created a minimum viable reproduction repository.

It worked. The public folder was able to be excluded using the previous method.

And therein was my issue and why I spent a day chasing a red-herring. My lack of a thorough understanding of Next meant that I was so convinced that Netlify was the issue that I wrote a patch (that did actually work), but ultimately didn't solve the problem.



`ctx.standaloneDir`