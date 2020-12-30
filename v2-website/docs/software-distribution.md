---
id: software-distribution
title: Software distribution
---

## Notebooks

Notebooks are popular among Data Scientists to show how they obtained their results, especially for Python or R programs.

Notebooks are good to publish a piece of code you want other people to see, but it is not the best solution to publish code you want other people to reuse.

Nevertheless, when you publish notebooks we ask you to also provide a `requirements.txt` at the root of the git repository with all the Python packages to install to use your program.

## Packages

The best to distribute a reusable software is to make it a package.

* [PyPI](https://pypi.org/) for Python
* [NPM](https://www.npmjs.com/) for JavaScript
* [Maven](https://mvnrepository.com) for Java


## Docker containers

Docker containers can be seen as extremely lightweight virtual environments in which you can run your code. The biggest advantage is knowing your container will work regardless of the environment it's being used in; no more 'On my laptop it works'.

Additionally, containers can be persisted and shared as *images* so that others can expand on your code. For example, when creating a container for a Python application it is possible to *pull* a Python Docker Image and start your work from there. Since images exist for most usecases, such applications and databases, Docker can be used to quickly use some prerequisites without installing them on your machine. 

> [Click here to install Docker on your machine 🐳](https://docs.docker.com/get-docker/)