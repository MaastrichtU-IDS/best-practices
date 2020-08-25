[![Publish to GitHub Pages](https://github.com/MaastrichtU-IDS/best-practices/workflows/Publish%20to%20GitHub%20Pages/badge.svg)](https://github.com/MaastrichtU-IDS/best-practices/actions?query=workflow%3A%22Publish+to+GitHub+Pages%22)

# IDS best practices documentation

## Edit documentation pages

Editing a documentation file is as easy as going to https://github.com/MaastrichtU-IDS/best-practices/edit/master/docs/introduction.md.

- Edit a page by login with an account that has edit permissions.

- Otherwise fork the repository and modify the files you want. Pull requests are welcome!

Browse all documentation pages [here](https://github.com/MaastrichtU-IDS/best-practices/tree/master/docs).

> We recommend using [Typora](https://typora.io/) to edit [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) files on your computer.

### Files locations

* Add new `docs` pages:
  * Markdown in [docs/](https://github.com/MaastrichtU-IDS/best-practices/tree/master/docs)
  * Sidebar link in [website/sidebars.json](https://github.com/MaastrichtU-IDS/best-practices/blob/master/website/sidebars.json).
* Main parameters of the website can be found in [website/siteConfig.js](https://github.com/MaastrichtU-IDS/best-practices/blob/master/website/siteConfig.js).
* Static content (any resource to download, images, css, js) can be provided in [website/static](https://github.com/MaastrichtU-IDS/best-practices/tree/master/website/static)
* HTML pages (other than docs markdown) are in [website/pages/en](https://github.com/MaastrichtU-IDS/best-practices/tree/master/website/pages/en)

## Run for development

To run locally in the `/website` directory.

```shell
cd website
yarn install
yarn start
```

## Run with Docker

```shell
docker-compose up
```

> Access at http://localhost:3000/

## Deploy to GitHub Pages

To run in `website/` directory. Make sure the `website/build` directory has been generated before deploying.

```shell
yarn install
yarn build
GIT_USER=MaastrichtU-IDS CURRENT_BRANCH=master USE_SSH=true yarn run publish-gh-pages
```

## Install Docusaurus boostrap tool

```shell
sudo npm install --global yarn
sudo npm install --global docusaurus-init

npx docusaurus-init
```

# Acknowledgments

Documentation website generated using [Docusaurus](https://docusaurus.io/).
