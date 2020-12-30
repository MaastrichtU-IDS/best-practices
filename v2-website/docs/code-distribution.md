---
id: code-distribution
title: Code distribution
---

## Use git

Versioning your code using [git](https://git-scm.com/) is mandatory. Use `git` to commit even the smallest changes with a comment. Learn how to use branches and pull requests for bug fixes and the development of new features.

If you are developing code related to the Institute of Data Science, we recommend you to create the repository in the MaastrichtU-IDS organization on GitHub: [https://github.com/MaastrichtU-IDS](https://github.com/MaastrichtU-IDS)

> See [how to define user access](/docs/project-management) to your repository when created in the [MaastrichtU-IDS GitHub organization](https://github.com/MaastrichtU-IDS).

Some projects in collaboration with other entities can be hosted on GitLab depending on the requirements and project stack. You can use the [UM-hosted GitLab](https://gitlab.maastrichtuniversity.nl/) for private projects.

## Add a license

Adding a license file is mandatory as no one is allowed to legally use your code if no license is included. The default choice for software should be [the MIT license](https://choosealicense.com/licenses/mit/)

## Optional

Depending on your project you might want to perform the actions below.

### Add a DOAP project description

If you want your **project listed on the [IDS projects website](https://maastrichtu-ids.github.io/projects)**, add a  DOAP file to the root of the git repository.

See https://maastrichtu-ids.github.io/projects/create-doap to create a RDF DOAP file.



### What to know before you create DOAP

**[DOAP](https://github.com/ewilderj/doap/wiki)** (Description of a Project) is an RDF Schema and XML vocabulary that describe software projects, in particular free and open source software.

### Why DOAP is important?



### What is IDS project?

A project is considered IDS if:

* It is registered in [Maastricht University IDS organization](https://github.com/MaastrichtU-IDS?utf8=%E2%9C%93&q=&type=&language=)
* It is on your personal [GitHub](https://github.com/MaastrichtU-IDS?utf8=%E2%9C%93&q=&type=&language=)



### How to create your DOAP?

#### Step 1

Go this [website](https://maastrichtu-ids.github.io/projects/create-doap)

#### Step 2

Fill in the form

#### Step 3

Download the file `.doap-project.ttl`

#### Step 4

Add the file into your GitHub repository

#### Step 5

Push-origin master



### Learn more about DOAP

- [Semantic Web](http://en.wikipedia.org/wiki/Semantic_web)

- [DOAP Home Page](https://github.com/edumbill/doap/wiki)

- [The Apache Software Foundation Projects](http://projects.apache.org/)

- [Resource Description Framework (RDF)](http://en.wikipedia.org/wiki/Resource_Description_Framework)

  

### Create releases

When your project reach milestones feel free to create releases on GitHub.

The standard for version number is:

* From `v0.0.1` to `v0.1.0` : alpha releases, your project is in a early development stage
* From `v0.1.0` to `v1.0.0` : beta releases, your project is in a stable stage, already serve most of its core functions and can be accessed.
* From `v1.0.0` onwards: production releases, your project is published in production, your service is expected

> Use the [semantic versioning](https://semver.org/) logic to increment the version number.

### Add a code of conduct

If you are trying to build a community you might want to define a code of conduct. The [Contributor Covenant code of conduct](https://www.contributor-covenant.org/version/1/4/code-of-conduct/code_of_conduct.md) is popular among open source communities.