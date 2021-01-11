---
title: Improve code security
author: Vincent Emonet
author_title: Data Science engineer at IDS
author_url: https://github.com/vemonet
tags: [security, development]
description: Improve the security of your code, web app and containers
hide_table_of_contents: false
# author_image_url: https://graph.facebook.com/611217057/picture/?height=200&width=200
# image: https://i.imgur.com/mErPwqL.png
---

Securing softwares is a complex task, especially for research softwares.

But some easy actions can be taken to quickly improve your code security.

<!--truncate-->

## Update dependencies

:::tip Easy to enable

You can easily enable this feature in your GitHub repository **Security** tab. 

:::

GitHub proposes a tool, the **[Dependabot](https://github.com/features/security)**, to spot and warn you about deprecated dependencies that needs to be upgraded to fix known vulnerabilities.

:::caution Dependabot example

Check the DSRI documentation [GitHub Dependabot alerts](https://github.com/MaastrichtU-IDS/dsri-documentation/security/dependabot).

:::

:::tip Update dependencies automatically

You can enable Dependabot to **automatically update problematic dependencies**

See this [DSRI documentation automatic pull request](https://github.com/MaastrichtU-IDS/dsri-documentation/pull/24).

:::

:::note Integrates with git

Dependabot warning will be displayed when doing `git push`:

```
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
remote: 
remote: GitHub found 2 vulnerabilities on MaastrichtU-IDS/dsri-documentation's default branch (1 moderate, 1 low). To find out more, visit:
remote:      https://github.com/MaastrichtU-IDS/dsri-documentation/security/dependabot
remote: 
To github.com:MaastrichtU-IDS/dsri-documentation.git
```

:::

## CodeQL analysis

:::tip Easy to enable

You can easily enable this feature in your GitHub repository **Security** tab. This will create a GitHub Actions workflow that will run the CodeQL analysis.

:::

Tool from GitHub to spot dangerous coding practices, e.g. hardcoded credentials, known JavaScript vulnerability.

Runs in a GitHub Actions workflow.

:::info CodeQL analysis example

Check the OpenPredict API [CodeQL Analysis workflow](https://github.com/MaastrichtU-IDS/translator-openpredict/blob/master/.github/workflows/codeql-analysis.yml)

:::

## Test coverage and additional analysis

:::caution Enable for larger project

Setting this up requires a bit more time, it is recommended for larger projects where you define tests.

:::

SonarCloud is quite nice for test coverage, and various relevant reports on your code quality (spot security issues, code blocks that could be improved)

:::note SonarCloud report example

Check the OpenPredict API [SonarCloud report](https://sonarcloud.io/dashboard?id=MaastrichtU-IDS_translator-openpredict)

:::

## Container scan

:::warning Explore

It can be interesting to use it for project with an emphasis on security.

:::

1. Free Open Source tool

Too many irrelevant issues with some Docker container analysis tools like [Anchore Container scan](https://github.com/marketplace/actions/anchore-container-scan).

:::info Anchore container scan example

Check the OpenPredict API [Anchore docker scan workflow](https://github.com/MaastrichtU-IDS/translator-openpredict/blob/master/.github/workflows/security-scan-docker.yml). 

:::

2. Commercial tool

Better quality Docker image analysis with [Snyk](https://snyk.io/), but require to pay for extensive automated usage.

:::note

Docker enable to do a limited number of Snyk vulnerability scan. 

See the [Docker and Snyk documentation](https://www.docker.com/partners/snyk) for more details

:::

## Improve password security

A few small steps can also be taken to improve your password security:

* Use a secure password manager, such as BitWarden, to store your passwords.
* Use 2 factor authentication with a secure app, such as Authy or the Google Authenticator, when the website allows it. For example, on BitWarden and GitHub
* To login to GitHub to push code, we recommend to: 
  * [Use SSH keys](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh) if possible
  * Or [generate new API tokens](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) to be used in place of your password when pushing to git (to avoid unsecure practices when storing the password with git). Go to your settings to [create Personal Access Tokens](https://github.com/settings/tokens).