[![Publish to GitHub Pages](https://github.com/MaastrichtU-IDS/best-practices/workflows/Publish%20to%20GitHub%20Pages/badge.svg)](https://github.com/MaastrichtU-IDS/best-practices/actions?query=workflow%3A%22Publish+to+GitHub+Pages%22)

Best practices documentation website for the [Institute of Data Science](https://maastrichtuniversity.nl/ids) at Maastricht University.

The documentation website at https://maastrichtu-ids.github.io/best-practices is **automatically updated** by a [GitHub Action](https://github.com/MaastrichtU-IDS/best-practices/actions) when a change is pushed to the `main` branch 🔄

## Contribute 👨‍💻

Contributions are welcome! **See the [guidelines to contribute](https://maastrichtu-ids.github.io/best-practices/contributing)**.

## Edit documentation pages 📝

Editing a documentation file is as easy as going to https://github.com/MaastrichtU-IDS/best-practices/edit/main/website/docs/introduction.md if your account has edit permissions.

Otherwise **fork the repository** and modify the files you want. Pull requests are welcome!

> We recommend using [Typora](https://typora.io/) to edit [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) files on your computer.

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
GIT_USER=MaastrichtU-IDS CURRENT_BRANCH=main USE_SSH=true yarn deploy
```

## Install Docusaurus boostrap tool

```shell
sudo npm install --global yarn
sudo npm install --global docusaurus-init

npx docusaurus-init
```

# Acknowledgments

Documentation website generated using [Docusaurus](https://docusaurus.io/).
