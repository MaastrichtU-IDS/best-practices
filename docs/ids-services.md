---
id: ids-services
title: Services available at IDS
---

Here are the services hosted at the Institute of Data Science. Feel free to contact us if you want to make use of any of those services.

And let us know if you are interested in deploying new services on IDS servers.

## Data Science Research Infrastructure

The [Data Science Research Infrastructure (DSRI)](https://maastrichtu-ids.github.io/dsri-documentation) is a distributed and scalable infrastructure to run Data Science experiments. It enables you to run any workflow and service using Docker containers, on servers with 512 GB RAM, and 128 CPU cores per server. 

Additionally the DSRI also enables you to deploy various popular Data Science applications in a few clicks, to develop resource consuming experiments:

* Multiple flavors of [JupyterLab](https://github.com/jupyter/docker-stacks) (scipy, tensorflow, all-spark, java kernel and more), and JupyterHub with GitHub authentication
* RStudio, with a complementary Shiny server
* VisualStudio [Code server](https://github.com/cdr/code-server)
* Tensorflow, or PyTorch on Nvidia GPU (with JupyterLab or VisualStudio Code)
* SQL databases (MariaDB, MySQL, PostgreSQL)
* NoSQL databases (MongoDB, Redis)
* Graph databases (GraphDB, Blazegraph, Virtuoso)

Distributed computing can also be run using our Apache Spark or Apache Flink clusters.

> You can learn more about how to request an account on the DSRI on its website: https://maastrichtu-ids.github.io/dsri-documentation

## GraphDB triplestore database

> [Ontotext GraphDB](https://graphdb.ontotext.com) is deployed at https://graphdb.dumontierlab.com

You can create an account, and request us to be granted permissions to create new repositories.

Each repository acts like an isolated triplestore database coming with various features:

* Public or private SPARQL endpoints publicly accessible from anywhere on the web (CORS has been enabled, so you can easily query the SPARQL endpoint using JavaScript)
* Easy login to update data using a username/password combination
* Multiple inference rulesets available, such as RDFS and OWL. You can also upload any custom ruleset.
* Automated SHACL Shapes validation (GraphDB will validate all triples uploaded against the provided SHACL shapes)
* User friendly web UI to manage your repository: import RDF files, delete graphs, define new prefix/namespaces
* The repository deployed is a RDF4J repository, enabling all features from the RDF4J stack (such as the RDF4J API to manage the triplestore).
* Search index can be easily enabled to make text search queries much faster.

## Web Protégé server

> We host our own instance of web Protégé at https://protege.semanticscience.org

We enabled some features not enabled in [Stanford's web Protégé](https://webprotege.stanford.edu/), such as defining axiom using the OWL Manchester syntax.

1. Create an account in a minute by providing a username, email and password.
2. Create a new Ontology project
3. Start building OWL ontologies! You can also import existing ontologies.

4. Invite other users to collaborate on your ontology, or make your ontology accessible/editable by anyone with an account on IDS web Protégé by going to the **Share** tab.

## SOLID server

We host a [node SOLID server](https://github.com/solid/node-solid-server) on IDS servers at https://solid.semanticscience.org

This server enables you to create SOLID pods hosted on our servers.

1. Create your account at https://solid.semanticscience.org
2. Contact us to get your SOLID account enabled.

## Nanopublications server

A [Nanopublications](http://nanopub.org/wordpress/) server is deployed on IDS servers, and part of the Nanopublications network (which replicates published Nanopublications on multiple nodes). Feel free to use the Nanopublication network to publish small piece of RDF data.

* The Nanopublications server can be accessed at http://server.np.dumontierlab.com
* The GRLC API to query the Nanopublications server can be accessed at http://grlc.np.dumontierlab.com/api/local/local
* The Linked Data Fragment interface to access the Nanopublications stored as [HDT](https://www.rdfhdt.org/) (compressed RDF) can be accessed at http://ldf.np.dumontierlab.com

Here are some interesting resources for Nanopublications:

* [Nanobench](https://github.com/vemonet/nanobench) web UI to publish nanopublication using templated web forms.
* [Nanopub Python](https://github.com/fair-workflows/Nanopub): Python client for searching, publishing and modifying nanopublications (require Java installed, it makes use of nanopub-java under the hood)
* [Nanopub-java](https://github.com/Nanopublication/nanopub-java) application to publish nanopublication using Java.

## FAIR Data Point server

A [FAIR Data Point](https://www.research-software.nl/software/fairdatapoint) server is deployed at http://fairdatapoint.semanticscience.org

It enables enables data owners to expose their data sets using rich machine-readable metadata through a RESTful web service.