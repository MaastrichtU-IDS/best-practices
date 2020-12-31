---
id: documentation
title: Documentation
---

## README

The `README.md` at the root of the git repository should be used for all informations targeted at other developers. The `README.md` [here](https://github.com/MaastrichtU-IDS/python-template) can be used as an outline or example. 

At the minimum it should contain the following information:

* Provide a **short description** of the tool (2 to 3 lines will not kill anyone).
* Provide which **language versions are supported**, e.g. `Python 3.6+`  
* Provide a list of prerequisites to run the application.
* Provide instructions on how to **install the program locally**, e.g. `pip install my_package` if applicable.
* Provide **a few working examples** that illustrate how to run the program.
  * Whenever possible users should be able to copy paste the provided examples.
  * If necessary, store sample files in the git repository (so everything is accessible with a `git clone`).
  * Try to cover a few features and mechanisms of your program.
  * Try to keep those examples up-to-date.
* Provide instructions on **how to build and publish** the application if applicable.
* Provide build/run/stop/update **docker instructions** if applicable (try to use docker as much as possible).
  * Should not be more than `docker run` or a `docker-compose up -d` in case of multiple containers.
  * Add details about Docker deployment if necessary (shared volume, initialization and so on).

## Additional in-depth documentation

:::info GitHub wiki

Use GitHub wikis to easily add more documentation pages in markdown without the need to maintain a codebase.

:::

Add additional **Wiki pages** on GitHub or GitLab for in-depth documentation targeted at developers.

* How to contribute (pull request etiquette, how to run tests) in `CONTRIBUTING.md`
* Diagrams to explain your code
* Additional deployments (for production, Docker, Kubernetes)
* Initialization and ETL tasks

## Documentation website

Use [GitHub Pages](https://pages.github.com/) for all extensive documentation website on general information, and how to use the software targeted at a general audience. 

:::tip Markdown documentation website

We recommend to use the [Docusaurus framework](https://v2.docusaurus.io/) to easily create and maintain high quality documentation websites based on markdown files.

:::