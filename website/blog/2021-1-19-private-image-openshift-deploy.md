---
title: Hosting docker images for DSRI
author: Tim Hendriks
author_title: Software engineer at IDS
author_url: https://github.com/thendriks
tags: [security, deployment, dsri, openshift, github, docker]
description: On deploying (private) images on OpenShift using GitHub actions
hide_table_of_contents: false
---

When utilizing DockerHub on orchestration systems such as Kubernetes we run into download rate limits. We can circumvent these issues using a CI/CD workflow that leverages GitHub Container Registry.

<!--truncate-->

#  Hosting Docker Images for DSRI

The initial choice for most Docker users will be to use DockerHub. However, when utilizing orchestration systems such as Kubernetes (in our case mostly DSRI and thus OpenShift) we quickly run into [download rate limits](https://docs.docker.com/docker-hub/download-rate-limit/). Below a workflow is suggested to circumvent these issues using the [GitHub Container Registry](https://docs.github.com/en/packages/guides/about-github-container-registry).
As with all documentation on this page, everything stated below can be used as a 'default' in lack of a better alternative. You can ofcourse deviate from any of the solutions mentioned but lacking good argumentation to do so using similar methodology is preferred. This will help create a common base of knowledge and for cooperation.

The suggested workflow is as follows:
* Store the code and Dockerfile on a GitHub Repository.
* Add a GitHub Action workflow to publish the image to GitHub Packages.
* Link an OpenShift service user to a GitHub Personal Access Token.
* Leveraging the service user, apply an OpenShift configuration that pulls the image.


## GitHub Container Registry advantages

Some of the reasons to opt for the [GitHub Container Registry](https://docs.github.com/en/packages/guides/about-github-container-registry) are:

* No download rate limit (Unlimited number of Docker pulls). Since platforms such as DSRI will perform a large number of pulls this is paramount.
* Integration with existing GitHub functionality:
    * Linking to the relevant GitHub repository.
    * Providing documentation in markdown for the package.
    * Utilizing Github users and groups for authorization on the image.
* Storing code, CI/CD, packages and images on the same platform.
* Faster communication between the GitHub Actions server and GHCR servers.
  
## Using GitHub Personal Access Tokens

In order to allow automated calls to GitHub securely with specified permissions such as commands from CI/CD or OpenShift, a [Personal Access Token](https://docs.github.com/en/packages/guides/pushing-and-pulling-docker-images) can be set. In this case, setting the permissions suggested on the page allows downloading and uploading of containers. This token can then be used in calls during CI/CD and when pulling from openshift to give access to the image. Using PATs allows us to specify specific tokens for each usecase and set the permission the tokens have. This will minimize security risks as well as the potential for costly mistakes. 

## GHCR

[GitHub Container Registry](https://docs.github.com/en/packages/guides/about-github-container-registry) can be used to manage and host Docker images. In order to automatically publish our images we can use [GitHub Actions](https://github.com/features/actions).

### Publishing to GHCR with GitHub Actions

[GitHub Actions](https://github.com/features/actions) allows for flexible CI/CD close to the repository. Publishing an image is a routine workflow, more information can be found [here](https://docs.github.com/en/actions/guides/publishing-docker-images). An IDS specific example can be found [here](https://github.com/MaastrichtU-IDS/translator-openpredict/blob/master/.github/workflows/publish-docker.yml).

Workflows such as these usually involve setting a [secret](https://docs.github.com/en/actions/reference/encrypted-secrets). These secrets can be set in the settings of the repository. In this case, a secret should be created that contains our PAT. This allows the defined GitHub action to use the PAT to publish the image.

### Setting permissions for the published image

Packages are published to the MaastrichtU-IDS organization [here](https://github.com/orgs/MaastrichtU-IDS/packages). These packages are created automatically during the publishing process and do not have to be setup beforehand. After publishing, [permissions](https://docs.github.com/en/packages/learn-github-packages/about-github-packages#about-scopes-and-permissions-for-package-registries) should be set to give users and groups access to the image. By default, add the IDS admin and IDS developer groups with admin and write privileges respectively.

## Deploying the image on DSRI

Images can be deployed to DSRI in multiple ways. One option is to [manually add the image stream](https://www.openshift.com/blog/deploying-applications-from-images-in-openshift-part-one-web-console) in the DSRI interface. A better way is to store the configuration in yaml and deploy the entire configuration. An example configuration can be found [here](https://github.com/fairscape/deployment/blob/dev-ids/stardog.yaml). The image url can be set to the url obtained on the page for your specific package (ghcr.io/yourpackageurl).

In order to allow DSRI access to the (private) image we can leverage [image pull secrets](https://docs.openshift.com/container-platform/4.1/openshift_images/managing_images/using-image-pull-secrets.html).
Creating a secret:
```
oc -n <project> create secret docker-registry <secret-name> --docker-server=ghcr.io --docker-username=<github-username> --docker-password=<github-personal-access-token> --docker-email=<email-address>
```
Linking a secret:
```
oc secrets link default <pull-secret-name> --for=pull
```

Where *default* is the name of the service account used to pull the image.