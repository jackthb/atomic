import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaLightbulb, FaMoon } from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header>
      <div className="py-0 px-5 sm:text-xl text-sm onLoad max-w-5xl m-auto h-28 flex items-center">
        <div
          className={`${
            router.pathname == "/" ? "hidden" : ""
          } hover:underline`}
        >
          <Link href="/">Jack Burgess</Link>
        </div>
        <nav className="flex align-center ml-auto">
          <Link href="/about" legacyBehavior>
            <a
              className={`${
                router.pathname.includes("/about") ? "underline" : ""
              } mr-4 hover:underline`}
            >
              About
            </a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a
              className={`${
                router.pathname.includes("/projects") ? "underline" : ""
              } mr-4 hover:underline`}
            >
              Projects
            </a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a
              className={`${
                router.pathname.includes("/blog") ? "underline" : ""
              } mr-4 hover:underline`}
            >
              Blog
            </a>
          </Link>
          <a href="mailto:jack@sien.vision" className="mr-4 hover:underline">
            Contact
          </a>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <FaMoon />
          </button>
        </nav>
      </div>
    </header>
  );
}
