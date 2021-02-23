---
id: repository-administration
title: Repository Administration
---

Once your code repository is available publicly, a number of steps can be taken to allow others to more easily reuse your code in their own work. 

## Define user access

Take some time to See [how to define user access](/docs/project-administration) to your repository when created in the [MaastrichtU-IDS GitHub organization](https://github.com/MaastrichtU-IDS).

## Add a license

Adding a license file is mandatory as no one is allowed to legally use your code if no license is included. The default choice for software should be [the MIT license](https://choosealicense.com/licenses/mit/)

## Optional

Depending on your project you may want to perform the actions below.

### Add a DOAP project description

If you want your **project listed on the [IDS projects website](https://maastrichtu-ids.github.io/projects)**, add a  DOAP file to the root of the git repository.

See https://maastrichtu-ids.github.io/projects/create-doap to create a RDF DOAP file.

:::info What is DOAP?

**[DOAP](https://github.com/ewilderj/doap/wiki)** (Description of a Project) is an RDF Schema and XML vocabulary that describe software projects, in particular free and open source software.

:::

:::note What is an IDS project?

A project is considered IDS if:

* It is registered in [Maastricht University IDS organization](https://github.com/MaastrichtU-IDS?utf8=%E2%9C%93&q=&type=&language=)
* It is on your personal [GitHub](https://github.com/MaastrichtU-IDS?utf8=%E2%9C%93&q=&type=&language=)

:::

**How to create your DOAP?**

1. Go this [website](https://maastrichtu-ids.github.io/projects/create-doap)

2. Fill in the form

3. Download the file `doap-project.ttl`

4. Add the file into your GitHub repository

5. Push to origin `master` branch on GitHub

:::info Learn more about DOAP

- [Semantic Web](http://en.wikipedia.org/wiki/Semantic_web)
- [DOAP Home Page](https://github.com/edumbill/doap/wiki)
- [The Apache Software Foundation Projects](http://projects.apache.org/)
- [Resource Description Framework (RDF)](http://en.wikipedia.org/wiki/Resource_Description_Framework)

:::

### Create releases

For projects with active or expected users it is recommended to create releases on GitHub when your project reach milestones, this insure better stability for the users.

The standard for releases id is:

* From `v0.0.1` to `v0.1.0` : alpha releases, your project is in a early development stage
* From `v0.1.0` to `v1.0.0` : beta releases, your project is in a stable stage, already serve most of its core functions and can be accessed.
* From `v1.0.0` onwards: production releases, your project is published in production, your service is expected

:::note Semantic Versioning

Use the [semantic versioning](https://semver.org/) logic to increment the version number.

:::

### Add a code of conduct

If you are trying to build a community you might want to define a code of conduct. The [Contributor Covenant code of conduct](https://www.contributor-covenant.org/version/1/4/code-of-conduct/code_of_conduct.md) is popular among open source communities.