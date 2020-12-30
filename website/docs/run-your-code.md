---
id: run-your-code
title: Where to run your code?
---

## On your machine

### Installed locally

Better **for development**, to use development and debug environments. We recommend to use [Conda environments](https://docs.conda.io/en/latest/)

### Using Docker

Better **when running an application** without doing development, or when running in production on a server.

## On the Data Science Research Infrastructure

The Data Science Research Infrastructure (DSRI) at Maastricht University provides CPU and GPUs nodes for Data Science computing, requires a [VPN connection to the UM network](https://vpn.maastrichtuniversity.nl/). Services can be easily deployed as Docker containers.

:::info

See the [DSRI documentation](https://maastrichtu-ids.github.io/dsri-documentation)

:::

## On Google Collab

Run Jupyter Notebooks on [Google servers](https://colab.research.google.com) for research. 

:::note

Requires a Google account.

:::

## On Kaggle

To run Jupyter Notebooks when participating to a [Kaggle](https://www.kaggle.com) Data Science competition.

:::tip Free power

Free during the competition.

:::

## Using CI/CD solutions

[GitHub Actions](https://github.com/features/actions) or [GitLab CI](https://docs.gitlab.com/ee/ci/) to run workflows on their servers triggered by event such as `git push`, new release, new pull request... Usually used to run tests.

:::tip Free power

Free for Open Source repositories.

:::

## Store data

### Sensible research data

If you have sensible research data: use **[DataHub](https://portal.datahubmaastricht.nl/)**

### Research data

If you have data to publish related to a research project: use [**SURF**](https://www.surf.nl/en/research-ict)