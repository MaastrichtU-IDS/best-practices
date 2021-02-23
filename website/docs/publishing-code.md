---
id: publishing-code
title: Publishing Code
---

The best way to share your work is to use existing frameworks to publish your code in a manner that is easily run by other researchers. Below are some of the most common ways to publish your research code.

## Notebooks

Notebooks are popular among Data Scientists to show how they obtained their results, especially for Python or R programs. Notebooks are a good way to convey to others how to perform the various steps in your algorithm, but should be used sparingly when the goal is to publish for mass reuse. When publishing notebooks we ask you to also provide a `requirements.txt` at the root of the git repository with all the Python packages to install to use your program.

## Packages

The best to distribute reusable software is to create a package using the go to standards for your language. For example:

* [PyPI](https://pypi.org/) for Python
* [NPM](https://www.npmjs.com/) for JavaScript
* [Maven](https://mvnrepository.com) for Java


## Docker containers

Docker containers can be seen as extremely lightweight virtual environments in which you can run your code. The biggest advantage is knowing your container will work regardless of the environment it's being used in; no more 'On my laptop it works'.
Additionally, containers can be persisted and shared as *images* so that others can expand on your code. For example, when creating a container for a Python application it is possible to *pull* a Python Docker Image and start your work from there. Since images exist for most usecases, such applications and databases, Docker can be used to quickly use some prerequisites without installing them on your machine. 

:::info Install Docker

[Click here to install Docker on your machine 🐳](https://docs.docker.com/get-docker/)

:::