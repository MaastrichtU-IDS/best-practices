---
id: docker-introduction
title: Introduction to Docker
---

## Docker basics

Docker containers can be seen as extremely lightweight virtual environments in which you can run your code. The biggest advantage is knowing your container will work regardless of the environment it's being used in; no more 'On my laptop it works'.

 Additionally, containers can be persisted and shared as *images* so that others can expand on your code. For example, when creating a Docker for a Python container it is possible to *pull* a Python Docker Image and start your work from there. This image will already include a Python installation. Since images exist for most usecases, such applications and databases, Docker can be used to quickly use some prerequisites without installing them on your machine. 

## Using the Dockerfile
The Dockerfile is used to provide installation steps that will create your Docker container.
1. In the root of your repository, open *Dockerfile*.
2. Note that a Python image is being pulled
3. ...

## Dockerhub
Dockerhub allows for very easy and quick integration with github. This is best for when your goal is simple: you only want to create a Docker image from your repository and push it to the IDS docker registry for anyone to use.
1. go to *hub.docker.com*
2. Under **Organizations**, check whether you are a member of the *umids* organization. If not, ask an administrator to add your user to the organization.
3. Under **Repositories**, Create a Repository
4. Select *umids* in the dropdown and choose a name and description for your image repository.
5. Check that GitHub is connected and click the icon.
6. Select *Maastricht-IDS* in the first dropdown and look for your repository in the second.
7. Optionally, add *Build rules* by clicking the *+* icon. These rules allow customization such as only building for the master branch.