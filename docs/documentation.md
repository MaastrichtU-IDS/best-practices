---
id: documentation
title: Documentation
---

## Fill the README

Minimal requirements for the documentation is to fill the README.md at the root of the git repository with the informations required to run the software:

* Short description of the tool (2 to 3 lines will not kill anyone)
* How to install locally
  * e.g. `pip install my_package`
* Provide a few working examples to run the program
  * Users should copy paste the provided example (almost)
  * If necessary, store sample files in the git repository (so everything is accessible with a `git clone`)
  * Try to cover a few features and mechanisms of your program
  * Try to keep those examples up-to-date
* How to build/run/stop/update with Docker
  * Should be only a `docker-compose up -d`
  * Add details about Docker deployment if necessary (shared volume, initialization...)

## Additional documentation

Add **Wiki pages** on GitHub or GitLab for additional documentation.

* How to contribute (pull request etiquette, how to run tests)
* Diagrams to explain your code
* Additional deployments (for production, Docker, Kubernetes)
* Initialization and ETL tasks
