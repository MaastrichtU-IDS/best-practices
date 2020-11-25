---
id: publish-rdf-data
title: Publish RDF data
---

# Publish to our public GraphDB triplestore

Create a new repository on our GraphDB triplestore at https://graphdb.dumontierlab.com/

> Ask us to get the permissions to create new repositories after creating an account.

### Create the GraphDB repository

👩‍💻 Go to **Setup** > **Repositories** > **Create Repository**

* Or click here: https://graphdb.dumontierlab.com/repository/create

👩‍💻 Choose the settings of your repository (leave the default if not mentioned here):

* `Ruleset`: use **RDFS-Plus (Optimized)** by default, or a OWL ruleset if you are performing reasoning using OWL ontologies
* `Supports SHACL validation`: enable if you plan on using SHACL shapes to validate the RDF loaded in the repository. 
  * Visit https://maastrichtu-ids.github.io/shapes-of-you to find SHACL Shapes
  * Add new shapes to IDS Shapes repository: https://github.com/MaastrichtU-IDS/shacl-shapes
* `Use context index`: **enable** this to index the contexts (aka. graphs)
* For large dataset:
  * `Entity index size`: increase this to **999999999**
  * `Entity ID bit-size`: increase this to **40**

To access your repository:

* SPARQL endpoint at https://graphdb.dumontierlab.com/repositories/my-repository
* SPARQL endpoint to run update queries (e.g. `INSERT`): https://graphdb.dumontierlab.com/repositories/my-repository/statements
* GraphDB admin web UI: https://graphdb.dumontierlab.com and change the repository using the button at the top right of the screen.

### Edit your repository access

By default your repository will not be available publicly.

👩‍💻 Go to **[Users and Access](https://graphdb.dumontierlab.com/users)**

* Change the **Free Access Settings** (top right of the page) to enable public access to read the SPARQL endpoint of your repository
  * Find your repository and enable **Read** access (checkbox on the left)
* You can also give **Write** access to other users
  * We usually give **Write** access to the `import_user` to be used in automated workflow (to automatically upload new data to the repository)

### Optional: enable GraphDB search index

You can easily enable GraphDB [Lucene search index](https://lucene.apache.org/) to quickly search string in your triplestore

Here is an example to create a search index for the `rdfs:label` and `dct:description` properties.

👩‍💻 Running this in your GraphDB repository SPARQL editor will insert the triples and the search index will be created (just wait a bit)

```SPARQL
PREFIX luc: <http://www.ontotext.com/owlim/lucene#>
INSERT DATA { 
    # luc:moleculeSize luc:setParam "1" .
    luc:includePredicates luc:setParam "http://www.w3.org/2000/01/rdf-schema#label http://purl.org/dc/terms/description" .
    luc:useRDFRank luc:setParam "yes" .
    luc:searchIndex luc:createIndex "true" .
}
```

Query the GraphDB search index:

```SPARQL
PREFIX luc: <http://www.ontotext.com/owlim/lucene#>
SELECT ?foundUri ?foundLabel {
    ?foundLabel luc:searchIndex 'TEXT_TO_SEARCH*' ;
    luc:score ?score .
    ?foundUri ?p ?foundLabel .
} ORDER BY ?score LIMIT 200
```

> Note we are using a `*` wildcard at the end to match all strings starting with the `TEXT_TO_SEARCH`

# Deploy a serverless API

The quickest way to deploy an API to access and explore your SPARQL endpoint is to use [grlc.io](http://grlc.io/). It will give over people a convenient way to quickly explore and understand the structure of your knowledge, and enables you to store important SPARQL queries in a findable place (and you can use the API calls instead of copy/pasting this query everytime you want to check it)

You just need to host the files with your SPARQL queries on GitHub and it will handle everything else. 

To make this example easier to reproduce for you we will use an existing grlc.io API deployment defined at https://github.com/MaastrichtU-IDS/food-claims-kg

1. 👩‍💻 Provide the URL of SPARQL endpoint to query in the [`endpoint.txt` file](https://github.com/MaastrichtU-IDS/food-claims-kg/blob/master/endpoint.txt)

2. 👩‍💻 Define the SPARQL queries in `.rq` files at the base of the git repo.

   > See [this example of a `.rq` file](https://github.com/MaastrichtU-IDS/food-claims-kg/blob/master/get-claims-for-food.rq) to define a SPARQL query with a parameter (used to filter using `regex()`).

3. That's it 🤯 you can go to your API Swagger UI automatically generated and hosted by [grlc.io](http://grlc.io/) based on the GitHub repository URL: http://grlc.io/api-git/MaastrichtU-IDS/food-claims-kg

Bonus: combine them with the GraphDB search index query and you have a Search API for your knowledge graph.

> The project is still active and reactive, feel free to [post an issue](https://github.com/CLARIAH/grlc/issues) if you face any problem.