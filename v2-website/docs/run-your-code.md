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

> See the [DSRI documentation](https://maastrichtu-ids.github.io/dsri-documentation)

## On Google Collab

Run Jupyter Notebooks on [Google servers](https://colab.research.google.com) for research. 

> Requires a Google account.

## On Kaggle

To run Jupyter Notebooks when participating to a [Kaggle](https://www.kaggle.com) Data Science competition.

> Free during the competition.

## Using CI/CD solutions

[GitHub Actions](https://github.com/features/actions) or [GitLab CI](https://docs.gitlab.com/ee/ci/) to run workflows on their servers triggered by event such as `git push`, new release, new pull request... Usually used to run tests.

> Free for Open Source repositories.