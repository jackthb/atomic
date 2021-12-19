---
title: "sentry"
date: "September 1, 2020 -> May 7, 2021"
excerpt: "Final year project using Twitter and Google Cloud Natural Language API"
cover_image: "https://res.cloudinary.com/du2zxsy39/image/upload/v1639924677/sentry/searchq_jkvk0t.png"
---

# What is sentry/sa-for-twitter?

For my third year of university, we had a 'final year project', which is a long form project or dissertation based on a topic of our choice. Mine was a Chrome extension that enabled searching recent tweets for their sentiment. 

![main screen for sentry](https://res.cloudinary.com/du2zxsy39/image/upload/v1639924677/sentry/searchq_jkvk0t.png)

To integrate it into Twitter, I made a chrome extension that utilised a FLASK backend to pull tweets with tweepy. Then the extension sends these tweets to the Google Cloud Natural Language API to return a sentiment score for each.

It had a host of other functionalities, such as querying by entity or by account.

![search entity functionality](https://res.cloudinary.com/du2zxsy39/image/upload/v1639924676/sentry/searchent_cdwdny.png)

![search account functionality](https://res.cloudinary.com/du2zxsy39/image/upload/v1639924691/sentry/searchaa_zuutod.png)

Additionally, with the use of content scripts, you can make the same Cloud Natural Language calls direct to your feed for individual tweets.

![image showing on Twitter functionality with a negative tweet](https://res.cloudinary.com/du2zxsy39/image/upload/v1639924675/sentry/extweet_zmjztu.png)

Over the course of the project, it went over various iterations based on feedback from peers. It's name was changed from sa-for-twitter (highly imaginative) to sentry, and it's design was refreshed so it was more modern and inline with today's standards. 

![old design for sentry](https://res.cloudinary.com/du2zxsy39/image/upload/v1639924674/sentry/og-popup_h8usuw.png)