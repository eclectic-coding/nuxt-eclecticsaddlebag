---
title: Webstorm and Nuxtjs Linting
slug: /webstorm-nuxtjs-linting
short: Recently I starting experimenting with Vue.js and Nuxt.js, partly out of curiosity and partly to learn a new framework, before I start a job search in a few months. This article is about my troubleshooting getting Nuxt.js, Linting, and Webstorm to play nicely together.
date: 2020-01-07
image: webstorm-lint.jpg
tags:
    - Webstorm
    - Nuxtjs
    - Eslint
---
Recently I starting experimenting with Vue.js and Nuxt.js, partly out of curiosity and partly to learn a new framework, before I start a job search in a few months. This article is about my troubleshooting getting Nuxt.js, Linting, and Webstorm to play nicely together.

## The Journey

This is my journey (*it is okay to skip this part if you like*). I have always loved technology and have been a self-taught coding hobbyist since 1998. The first web site I developed was for my business, using HTML 3.2, way back when tables were a layout tool 🤫 . I worked in the Content Management Systems (CMS) of [Joomla](https://www.joomla.org/) and [WordPress](https://wordpress.org/) developing web sites for non-profits. Last year, I started experimenting with [GatsbyJS](https://www.gatsbyjs.org/) with no JavaScript experience. I am **bold** like that! This led me to level up a hobby and finally decide to pursue a career in tech and this fall I started at [Flatiron School](https://flatironschool.com/). This background is why I have been so apt to try some thing new.

**TLTR**: Go to the [repository](https://github.com/eclectic-coding/nuxt-linting).

## Introduction
The first time I created a Nuxtjs project and opened [Webstorm]() and used the [Reformat Code](https://www.jetbrains.com/help/webstorm/reformat-file-dialog.html) tool, my world turned red (41 errors). Again, the purpose of this article is to troubleshoot getting Nuxt.js, Linting, and Webstorm to play nicely together.

![eslint-error.png](/eslint-error.png)

### Setup
To get started create a Nuxt App: `yarn create nuxt-app nuxt-linting` or `npx create-nuxt-app nuxt-linting`. I am selecting the defaults but I add Axios (although not required for thus tutorial), select both Eslint, and Prettier. You output should look something like below:

```bash
Create-nuxt-app v2.12.0
✨  Generating Nuxt.js project in nuxt-linting
? Project name nuxt-linting
? Project description My Nuxt.js project
? Author name eclectic-coding
? Choose the package manager Yarn
? Choose UI framework None
? Choose custom server framework None (Recommended)
? Choose Nuxt.js modules Axios
? Choose linting tools ESLint, Prettier
? Choose test framework None
? Choose rendering mode Universal (SSR)
? Choose development tools (Press <space> to select, <a> to toggle all, <i> to invert selection)
yarn run v1.21.1
$ eslint --ext .js,.vue --ignore-path .gitignore . --fix
✨  Done in 0.87s.

🎉  Successfully created project nuxt-linting
```
Notice the configuration runs `eslint --fix` at the end to correct any errors based on the default eslint and prettier configuration. Change to the project directory and start the dev server: `yarn dev` or `npm run dev`. When you open the project on the browser it opens with no errors.

## Errors Arrive


