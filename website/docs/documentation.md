---
id: documentation
title: Write documentation
---

For most projects a simple well-written `README.md` is enough documentation, and it will greatly improve the exposure and re-usability of your code.

If you wish to make contributing to your project easier, it is standard practice to additionally put a `CONTRIBUTING.md` file at the root of your repository, with instructions on how to contribute.

## At least a README 

The `README.md` at the root of the git repository should be used for all information targeted at other developers. Check [this `README.md` for a Python package](https://github.com/MaastrichtU-IDS/python-template) for a direct example. 

At the **minimum** it should contain the following information:

📝 Provide a **short description** of the tool. So that users knows exactly what is this tool for in 2 min of reading.

✔️ Provide a list of **prerequisites** to run the application. Such as supported language versions, e.g. `Python 3.6+` 

📥 Provide instructions on how to **install the program locally**. E.g. `pip install my_package`

📖 Provide a few **working examples** that illustrate how to run the program main features.
* Whenever possible users should be able to copy paste the provided examples.

* If necessary, store sample files in the git repository (so everything is accessible with a `git clone`).

  > E.g.: "Start the API on port 8080 by running `python3 start_api.py -p 8080`"

**Optionally** you can add more information

📦 Provide instructions on **how to build and publish** the application if applicable (e.g. with `pip` or docker).

🐳 Provide build/run/stop/update **docker instructions** if applicable (try to use docker as much as possible).
* Should not be more than `docker run` or a `docker-compose up -d` in case of multiple containers.
* Add details about Docker deployment if necessary (shared volume, initialization and so on).

## Make contributing easier

If you wish to make contributing to your project easier, it is standard practice to add a `CONTRIBUTING.md` file at the root of your repository.

This file should explain how to easily contribute to your code:

* Important file locations and comments on the general code structure
* How to run in development and test the code
* The process to submit a change (pull request requirements)

:::caution Avoid duplicates

Try to not duplicate information from the `README.md` file.

:::

## Additional in-depth documentation

:::info GitHub wiki

Use GitHub wikis to easily add more documentation pages in markdown without the need to maintain a codebase.

:::

Add additional **Wiki pages** on GitHub or GitLab for in-depth documentation targeted at developers.

* Architecture and logic of the code
* Diagrams to explain your code
* Additional deployments (for production, Docker, Kubernetes)
* Initialization and ETL tasks

## Create a website

Use [GitHub Pages](https://pages.github.com/) for all extensive documentation website on general information, and how to use the software targeted at a general audience. 

:::tip Markdown documentation website

We recommend to use the [Docusaurus v2 framework](https://v2.docusaurus.io/) to easily create and maintain high quality documentation websites based on markdown files (see this website as an example).

:::