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

Tool from GitHub to spot dangerous coding practices, e.g. hardcoded credentials, known JavaScript vulnerability.

Runs in a GitHub Actions workflow.

:::info CodeQL analysis example

Check the OpenPredict API [CodeQL Analysis workflow](https://github.com/MaastrichtU-IDS/translator-openpredict/blob/master/.github/workflows/codeql-analysis.yml)

:::

## Test coverage and additional analysis

SonarCloud is quite nice for test coverage, and various relevant reports on your code quality (spot security issues, code blocks that could be improved)

:::note SonarCloud report example

Check the OpenPredict API [SonarCloud report](https://sonarcloud.io/dashboard?id=MaastrichtU-IDS_translator-openpredict)

:::

## Container scan

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