---
id: continuous-integration
title: Continuous integration
---

:::tip Checkout the workshop

See our [IDS CI/CD workshop](https://maastrichtu-ids.github.io/workshop-ci/) to package and define Continuous Integration workflow for Python with GitHub Actions.

:::

The choice of CI/CD technology depends on the platform you are using to store your code.

We strongly recommend you to define Continuous Integration if you wrote tests for your application or regularly need to publish some packages.

## [GitHub Actions](https://github.com/features/actions)

:::info For GitHub

Recommended if your code is hosted on [GitHub](https://github.com).

:::

GitHub Actions workflows are defined as YAML files in the `.github/workflows` directory in your code repository.

Find actions to easily perform common tasks in the [GitHub marketplace](https://github.com/marketplace), and use `Bash` commands to run your scripts, and installation process.

[GitHub Runner](https://docs.github.com/en/free-pro-team@latest/actions/hosting-your-own-runners/adding-self-hosted-runners) can be deployed on any server to run privacy sensitive workloads outside of GitHub servers.

## [GitLab CI](https://docs.gitlab.com/ee/ci/)

:::caution For GitLab

Recommended if your code is hosted on [GitLab.com](https://gitlab.com/) or [GitLab hosted at UM](https://gitlab.maastrichtuniversity.nl).

:::

Workflows defined as YAML files in your code repository.

[GitLab Runner](https://docs.gitlab.com/runner/) can be deployed on any server, and Kubernetes cluster.

## [Jenkins](https://www.jenkins.io/)

:::note For on-premise

Recommended if your build is privacy sensitive and need to run on-premise without any tie to code repositories.

:::

Contact **Vincent Emonet 📬** to discuss running Jenkins workflows on IDS servers.