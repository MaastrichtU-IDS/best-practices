---
title: Contribute
description: Contribute to IDS best practices
hide_table_of_contents: true
---

:::info Contributions welcome

Contributions to this documentation website are encouraged!

:::

## ℹ️ Submit issues

<a href="https://github.com/MaastrichtU-IDS/best-practices/issues" target="_blank" rel="noopener noreferrer" aria-label="GitHub issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/MaastrichtU-IDS/best-practices?label=best-practices"/>
</a>

Submit [issues](https://github.com/MaastrichtU-IDS/best-practices/issues) or [pull requests](https://github.com/MaastrichtU-IDS/best-practices/pulls) to discuss improvement to the documentation.

---

## 📝 Improve the documentation

:::tip 

If you are part of the [MaastrichtU-IDS organization on GitHub](https://github.com/MaastrichtU-IDS) you can directly create a new branch to make your change in the main repository. 

:::

:::warning Otherwise fork the repository

Otherwise you will need to first [fork this repository](https://github.com/MaastrichtU-IDS/best-practices/fork).

:::

### ⚡ Quick edit on GitHub

You can really easily make quick changes directly on the GitHub website by clicking the **Edit this page** button at the bottom left of each documentation page.

For example to edit this page you can go to https://github.com/MaastrichtU-IDS/best-practices/edit/master/website/src/pages/contributing.md

:::tip Quick changes

For small changes to the documentation feel free to make them directly on the `main` branch.

:::

### 🏗️ Larger changes locally

To make larger changes to the documentation it is easier to clone the repository on your laptop.

:::info Use a Markdown editor

We strongly recommend you to use a markdown editor to make writing documentation more convenient.

:::

1. Clone the repository on your machine:

```bash
git clone https://github.com/MaastrichtU-IDS/best-practices.git
cd best-practices
```

2. Create a new branch from the `main` branch

```bash
git checkout -b my-branch
```

3. Add your changes to this branch

4. Make sure the website works as expected:

```bash
cd website
yarn install
yarn start
```

:::tip Send a pull request

Send a pull request to the `main` branch when your changes are done

:::

### Automatic deployment

The documentation website is automatically updated and redeployed at each change to the `main` branch.

---

## 📬 Contact on Slack

<img alt="Chat on Slack" src="https://img.shields.io/badge/Chat%20on-Slack-blueviolet"/>

Contact **Vincent Emonet** on the **IDS Slack** if you have any question.