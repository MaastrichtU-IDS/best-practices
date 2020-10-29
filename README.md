[![Publish to GitHub Pages](https://github.com/MaastrichtU-IDS/best-practices/workflows/Publish%20to%20GitHub%20Pages/badge.svg)](https://github.com/MaastrichtU-IDS/best-practices/actions?query=workflow%3A%22Publish+to+GitHub+Pages%22)

# IDS best practices documentation

Best practices documentation website for the [Institute of Data Science](https://maastrichtuniversity.nl/ids) at Maastricht University.

The documentation website at https://maastrichtu-ids.github.io/best-practices is **automatically updated** by a [GitHub Action](https://github.com/MaastrichtU-IDS/best-practices/actions) when a change is pushed to the `master` branch.

## Edit documentation pages

Editing a documentation file is as easy as going to https://github.com/MaastrichtU-IDS/best-practices/edit/master/docs/introduction.md if your account has edit permissions.

Otherwise **fork the repository** and modify the files you want. Pull requests are welcome!

Browse all documentation markdown pages in [/docs](https://github.com/MaastrichtU-IDS/best-practices/tree/master/docs).

> We recommend using [Typora](https://typora.io/) to edit [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) files on your computer.

### Files locations

* Add new `docs` pages:
  * **Markdown file** in [docs/](https://github.com/MaastrichtU-IDS/best-practices/tree/master/docs)
  * Add the **link in the sidebar** in the [website/sidebars.json](https://github.com/MaastrichtU-IDS/best-practices/blob/master/website/sidebars.json) file.
* Main parameters of the website can be found in [website/siteConfig.js](https://github.com/MaastrichtU-IDS/best-practices/blob/master/website/siteConfig.js).
* Static content (any resource to download, images, css, js) can be provided in [website/static](https://github.com/MaastrichtU-IDS/best-practices/tree/master/website/static)
* JS pages (index, help, users) are in [website/pages/en](https://github.com/MaastrichtU-IDS/best-practices/tree/master/website/pages/en)

> See our [contributor code of conduct](https://github.com/MaastrichtU-IDS/best-practices/blob/master/CODE_OF_CONDUCT.md).

## Run for development

If you want to test it locally: to run from the `/website` folder.

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

# Contribute

Contributions are welcome! See the [guidelines to contribute](/CONTRIBUTING.md).

# Acknowledgments

Documentation website generated using [Docusaurus](https://docusaurus.io/).
