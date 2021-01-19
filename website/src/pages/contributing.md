---
title: Contribute
description: Contribute to IDS best practices documentation
hide_table_of_contents: false
---

:::tip Contributions are welcome

Contributions to this documentation website are encouraged!

:::

## ⚠️ Issues

Check if there are [issues](https://github.com/MaastrichtU-IDS/best-practices/issues) related to your contribution, or create a [new issue](https://github.com/MaastrichtU-IDS/best-practices/issues/new) to discuss your problem. 

<a href="https://github.com/MaastrichtU-IDS/best-practices/issues" target="_blank" rel="noopener noreferrer" aria-label="GitHub issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/MaastrichtU-IDS/best-practices?label=best-practices"/>
</a>

---

## ⚡ Quick edit on GitHub

:::info Make changes in this repository

If you are part of the [MaastrichtU-IDS organization on GitHub](https://github.com/MaastrichtU-IDS) you can directly create a new branch to make your change in the main repository. 

:::

:::note Otherwise fork it

Otherwise you will need to first [fork this repository](https://github.com/MaastrichtU-IDS/best-practices/fork), then send a pull request when your changes have been pushed.

:::

You can really easily make quick changes directly on the GitHub website by clicking the **Edit this page** button at the bottom left of each documentation page.

For example to edit this page you can go to https://github.com/MaastrichtU-IDS/best-practices/edit/main/website/src/pages/contributing.md

:::tip Quick changes on main branch

For small changes to the documentation feel free to make them directly on the `main` branch.

:::

---

## 🏗️ Larger changes locally

To make larger changes to the documentation it is easier to clone the repository on your laptop.

:::info Use a Markdown editor

We strongly recommend you to use a markdown editor, such as [Typora](https://typora.io/). It makes writing documentation much faster, and more enjoyable.

:::

1. Clone the repository on your machine:

```bash
git clone https://github.com/MaastrichtU-IDS/best-practices.git
cd best-practices
```

2. Create a new branch from the `main` branch 🕊️

```bash
git checkout -b my-branch
```

3. Add your changes in this branch ✒️

4. Start the website on [http://localhost:3000](http://localhost:3000) to test it:

```bash
cd website
yarn install
yarn start
```

:::info Send a pull request

Send a pull request to the `main` branch when your changes are done

:::

---

## 🔄 Automated deployment

The documentation website is automatically updated and redeployed at each change to the `main` branch using a [GitHub Actions workflow](https://github.com/MaastrichtU-IDS/best-practices/actions).

[![Publish to GitHub Pages](https://github.com/MaastrichtU-IDS/best-practices/workflows/Publish%20to%20GitHub%20Pages/badge.svg)](https://github.com/MaastrichtU-IDS/best-practices/actions?query=workflow%3A%22Publish+to+GitHub+Pages%22)

---

## 📝 Help

Most pages of this website are written in Markdown, hence they are really easy to edit, especially when you are using a [convenient markdown editor](https://typora.io/). Only the `index.js` page is written in React JavaScript.

### 🔎 Files locations

* Main "best practices" documentation markdown files in `website/docs`
  * Left docs menu defined in `website/sidebars.json` 
* Blog articles as markdown files in `website/docs`
* Index and contribute pages in `website/src/pages`
* Images in `website/src/static/img`
* Website configuration file in `website/docusaurus.config.js` 

:::caution Blog specificities

Blog articles files name needs to include the date at the beginning, e.g. `2020-12-31-my-article.md`

And the text can be truncated to use the first part as description for the article on the main blog page using `<!--truncate-->`

:::

### 🦄 Markdown tip

:::warning Colorful boxes

Use the following tags to create colorful boxes in markdown files:

:::

```markdown
:::note You can specify an optional title
Grey box
:::

:::tip Green box
The content and title *can* include markdown.
:::

:::info Blue box
Useful information.
:::

:::caution Be careful!
Yellow box
:::

:::danger Fire red box
Danger danger, mayday!
:::
```

### 📬 Contact on Slack

<img alt="Chat on Slack" src="https://img.shields.io/badge/Chat%20on-Slack-blueviolet"/>

Contact **Vincent Emonet** on the **IDS Slack** if you have any question.