---
id: software-distribution
title: Software distribution
---

## Notebooks

Data scientists like notebooks to show how they obtained their results.

Notebooks are good to publish a piece of code you want other people to see, but it is not a really good solution to publish code you want other people to reuse.


## Packages

The best to distribute a reusable software is to make it a package.

* Use [pypi.org](https://pypi.org/) for Python
* [NPM](https://www.npmjs.com/) for JavaScript


## Docker containers

Docker containers can be seen as extremely lightweight virtual environments in which you can run your code. The biggest advantage is knowing your container will work regardless of the environment it's being used in; no more 'On my laptop it works'.

Additionally, containers can be persisted and shared as *images* so that others can expand on your code. For example, when creating a container for a Python application it is possible to *pull* a Python Docker Image and start your work from there. Since images exist for most usecases, such applications and databases, Docker can be used to quickly use some prerequisites without installing them on your machine. 
