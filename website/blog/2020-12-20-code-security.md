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

But some actions can be easily taken to improve your code security.

:::note Estimated time

5min 🕐

:::

<!--truncate-->

:::warning

Work in progress :building_construction:

:::

1. Example of GitHub dependabot warning triggered when doing `git push`:

```
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
remote: 
remote: GitHub found 2 vulnerabilities on MaastrichtU-IDS/dsri-documentation's default branch (1 moderate, 1 low). To find out more, visit:
remote:      https://github.com/MaastrichtU-IDS/dsri-documentation/security/dependabot
remote: 
To github.com:MaastrichtU-IDS/dsri-documentation.git
```

:::caution Dependabot example

Check the DSRI documentation [GitHub Dependabot alerts](https://github.com/MaastrichtU-IDS/dsri-documentation/security/dependabot).

:::

:::tip Update dependencies automatically

You can enable Dependabot to **automatically update problematic dependencies**

See this [DSRI documentation automatic pull request](https://github.com/MaastrichtU-IDS/dsri-documentation/pull/24).

:::

2. CodeQL analysis via GitHub Actions.

:::info CodeQL analysis example

Check the OpenPredict API [CodeQL Analysis workflow](https://github.com/MaastrichtU-IDS/translator-openpredict/blob/master/.github/workflows/codeql-analysis.yml)

:::

3. SonarCloud is quite nice for Test coverage + relevant reports on dangerous code ("code smells")

:::note SonarCloud report example

Check the OpenPredict API [SonarCloud report](https://sonarcloud.io/dashboard?id=MaastrichtU-IDS_translator-openpredict)

:::

4. Too many irrelevant issues with some Docker container analysis tools like [Anchore Container scan](https://github.com/marketplace/actions/anchore-container-scan).

:::info Anchore container scan example

Check the OpenPredict API [Anchore docker scan workflow](https://github.com/MaastrichtU-IDS/translator-openpredict/blob/master/.github/workflows/security-scan-docker.yml). 

:::

5. Better quality Docker image analysis with [Snyk](https://snyk.io/), but require to pay for extensive automated usage.

:::note

Docker enable to do a limited number of Snyk vulnerability scan. 

See the [Docker and Snyk documentation](https://www.docker.com/partners/snyk) for more details

:::