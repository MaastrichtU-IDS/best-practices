---
id: using-ontologies
title: Using ontologies
---


You will need to define the class and relations for the properties in your data. The easiest way is to find classes and properties in existing model (aka. ontologies). Some properties are standard like `rdf:type` and  `rdfs:label`, but for more specific concepts the best is to find an existing data model matching your model.

## Reuse existing ontologies ♻️

A number of ontologies have already been defined for different use-cases and domain. Re-using existing ontologies is faster as you don't need to build the ontology yourself, and it improves the interoperability of your data.

### Ontologies repositories

Search for relevant existing models in ontology repositories:

* [Linked Open Vocabulary (LOV)](https://lov.linkeddata.es/dataset/lov/) 
* [BioPortal](https://bioportal.bioontology.org/recommender) for biomedical concepts by the NCBI.
* [OntologyLookupService](https://www.ebi.ac.uk/ols/ontologies
  ) by the EBI
* [AgroPortal](http://agroportal.lirmm.fr/recommender) for agronomy by INRIA.
* [EcoPortal](http://ecoportal.lifewatchitaly.eu/) for ecology by Life Watch Italy.

> The [BioPortal Recommender](https://bioportal.bioontology.org/recommender) and [Search](https://bioportal.bioontology.org/search) services are efficient to look for concepts in most existing biomedical ontologies.

### Popular ontologies

* [**Semanticscience Integrated Ontology** (SIO)](https://github.com/MaastrichtU-IDS/semanticscience), a simple, integrated ontology of types and relations for rich description of objects, processes and their attributes.
* [**BioLink Model**](https://biolink.github.io/biolink-model/), A high level datamodel of biological entities ([genes](https://biolink.github.io/biolink-model/docs/Gene), [diseases](https://biolink.github.io/biolink-model/docs/Disease), [phenotypes](https://biolink.github.io/biolink-model/docs/Phenotype), [pathways](https://biolink.github.io/biolink-model/docs/Pathway), [individuals](https://biolink.github.io/biolink-model/docs/IndividualOrganism), [substances](https://biolink.github.io/biolink-model/docs/ChemicalSubstance), etc) and their [associations](https://biolink.github.io/biolink-model/docs/Association).
* [**Schema.org**](https://schema.org/docs/schemas.html), a collaborative project to define schemes for structured data on the Internet, on web pages, in email messages, and beyond.
  * Various classes described such as [schema:Person](https://schema.org/Person), [schema:MedicalGuideline](https://schema.org/MedicalGuideline), [schema:Review](https://schema.org/Review), [schema:ScholarlyArticle](https://schema.org/ScholarlyArticle), [schema:MedicalScholarlyArticle](https://schema.org/MedicalScholarlyArticle), [schema:Dataset](https://schema.org/Dataset), [etc](https://schema.org/docs/full.html).
  * Extensions available, such as [BioSchemas](https://bioschemas.org/profiles/Dataset/0.3-RELEASE-2019_06_14/) for biological data
  * Alternatively you can look into [Google Data Types](https://developers.google.com/search/docs/data-types/article), which are mainly built from schema.org and allow to describe and index your website using RDF (JSON-LD)
* [**DublinCore** (dc, dct, dctypes)](https://dublincore.org/specifications/dublin-core/dcmi-terms), one of the most generic vocabulary (includes properties such as `dc:identifier`, `dct:description`, `dct:creator`, `dct:license`, `dct:rights`...).
* [**PAV**: Provenance, Authoring and Versioning ontology](https://pav-ontology.github.io/pav/).
* [**PROV**: The Provenance Ontology](https://www.w3.org/TR/prov-o/), another ontology to describe provenance with more details.
* [**DCAT**: Data Catalog Vocabulary](https://www.w3.org/TR/vocab-dcat-2/), to describe datasets.
* [**NCIT**: National Cancer Institute Thesaurus](https://bioportal.bioontology.org/ontologies/NCIT), a vocabulary for clinical care, translational and basic research, and public information and administrative activities.

### Define the schema

In the case you are reusing existing ontologies the best is to define the schema your data will follow using [SHACL shapes](https://www.w3.org/TR/shacl/), or [ShEx expressions](https://shex.io/). This will allow you to validate the generated data, and other users will be able to quickly understand your data.

Here are a few examples of tools and methods to generate SHACL or ShEx shapes:

* SHACLGEN - Python library to generate SHACL shapes: [https://pypi.org/project/shaclgen/](https://www.google.com/url?q=https://pypi.org/project/shaclgen/&sa=D&source=editors&ust=1621615866020000&usg=AFQjCNGy0AEqxuJh6STr174DdBdAxpxkow)
* RDFShape - A Web app and library to generate SHACL/ShEx: [http://rdfshape.weso.es](https://www.google.com/url?q=http://rdfshape.weso.es&sa=D&source=editors&ust=1621615866021000&usg=AFQjCNF8SCbK9kCRv7Xkk_VN_8bIUNwibw)
* SheXer: A library to perform automatic extraction of SHACL/ShEx schemata in RDF graphs: [http://shexer.weso.es](https://www.google.com/url?q=http://shexer.weso.es&sa=D&source=editors&ust=1621615866021000&usg=AFQjCNHOqDm387itlz5uRXpv651kfG9X3g)
* "Shape Designer for ShEx and SHACL constraints" by Boneva et al presented in ISWC 2019: [https://gitlab.inria.fr/jdusart/shexjapp](https://www.google.com/url?q=https://gitlab.inria.fr/jdusart/shexjapp&sa=D&source=editors&ust=1621615866022000&usg=AFQjCNEMv2EPD-EOv8Kd7fxtdpjY1zmZRw)
* Astrea: Automatic generation of SHACL shapes from ontologies: [https://astrea.linkeddata.es](https://www.google.com/url?q=https://astrea.linkeddata.es&sa=D&source=editors&ust=1621615866022000&usg=AFQjCNGH5-JHds9woPhLlCDuCcGDd0pV_g)
* TopBraid Composer: [https://www.topquadrant.com/products/topbraid-composer/](https://www.google.com/url?q=https://www.topquadrant.com/products/topbraid-composer/&sa=D&source=editors&ust=1621615866023000&usg=AFQjCNHQk4ZmakcNAguXYeZ3oB7IN2EFAQ)  & [https://www.topquadrant.com/from-owl-to-shacl-in-an-automated-way/](https://www.google.com/url?q=https://www.topquadrant.com/from-owl-to-shacl-in-an-automated-way/&sa=D&source=editors&ust=1621615866023000&usg=AFQjCNEUeYu_5tZKMh51DPz13k6qvpNZbw)
* "RDF shape induction using knowledge base profiling" to generate Shapes by  Mihindukulasooriya et al. presented in  Annual ACM Symposium on Applied  Computing in 2018.
* "Towards improving the quality of knowledge graphs with data-driven ontology  patterns and SHACL" by Spahiu et al. presented as a Workshape Paper in  ISWC in 2018.

## Ontology design 🎨

If you don't find an ontology that fits, or if you need to edit an ontology, you can check at the following tools:

### Protégé

You can use the [Protégé ontology editor](https://protege.stanford.edu/) to build your ontology, using a tree view

* [Install Protégé](http://protegeproject.github.io/protege/installation/) on your computer for better performance than the web hosted service.
* Or use [WebProtégé](https://webprotege.stanford.edu/) for its collaborative features.

### VocBench

[VocBench](http://vocbench.uniroma2.it/) is a web-based, multilingual, collaborative development platform for managing [OWL](https://www.w3.org/TR/owl2-overview/) ontologies, [SKOS](https://www.w3.org/TR/skos-reference/)(/[XL](https://www.w3.org/TR/skos-reference/skos-xl.html)) thesauri, and generic RDF datasets.

### Gra.fo

Gra.fo is a commercial product, but use it for free to build simple RDFS/OWL ontologies with a diagram view and collaboration features.

### Chowlk

[Chowlk](https://chowlk.linkeddata.es/) is a web service that automatically generates the OWL code from your Ontology Diagram made with [diagrams.net](https://www.diagrams.net/). You will need to follow the instructions to define the diagrams block following a specific format.

### OwlReady2

[OwlReady2](https://owlready2.readthedocs.io) is a Python library to work with OWL ontologies. It helps you build OWL ontologies with Python code and Jupyter notebooks.


### TopBraid Composer

Now with free edition: https://www.topquadrant.com/products/topbraid-composer/

### StarDog

The StarDog triplestore includes an ontology editor, but it requires a license.


### Resolve prefixes

http://prefix.cc is a handy service to resolve prefixes.

> E.g. http://prefix.cc/bl

## Publish the ontology 📰

The easiest place to publish your ontology is in a GitHub repository.

### Publish documentation

2 options are available:

* [Widoco](https://github.com/dgarijo/Widoco): generate ontology documentation following the W3C style
* [Ontospy](http://lambdamusic.github.io/Ontospy/): provide multiple choices for ontology documentation (more user-friendly for larger ontologies)

See this example workflow implementing Widoco and Ontospy: https://github.com/vemonet/semanticscience/blob/master/.github/workflows/generate-docs.yml

It allows to automatically generate and publish documentation for your ontology using GitHub Actions and GitHub Pages:

1. The ontology is published in a GitHub repository, in our case in `ontology/sio.owl`

2. The GitHub Actions workflow is triggered when there is a change in the ontology file.

3. The GitHub Actions workflow runs Ontospy, or Widoco (yours to choose), given the latest committed ontology file (`ontology/sio.owl` in this example), which generates the HTML documentation in the `gh-pages` branch, in a different folder for each documentation type.

4. The `gh-pages` branch is published as a GitHub Page

In this example we have a simple `index.html` file to let the user choose the documentation types he wants to access

Feel free to adapt this GitHub Actions workflow

### Use persistent identifier

We recommend to use the [w3id.org](http://w3id.org/) system, as it allows any GitHub user to define and reserve your persistent namespace for free in a few minutes:

1. **Fork the** **[w3id.org](http://w3id.org/)** **repository**: https://github.com/perma-id/w3id.org 
2. **Create a folder** with your namespace name (e.g. my-onto)
3. **Add a `.htaccess` file** with the redirection to your ontology (and a `README.md` file shortly explaining the purpose of this namespace)
4. **Send a pull request** to the https://github.com/perma-id/w3id.org repository. It usually takes between a few hours and a few days to be accepted.

Examples:

- [See this example](https://github.com/vemonet/w3id.org/blob/master/d2s/.htaccess) for a `.htaccess` passing the original w3id URI queries
- [Or this example](https://github.com/vemonet/w3id.org/blob/master/um/.htaccess) to redirect to different websites depending on the path.

The persistent identifiers can be easily modified later if necessary, you  will just need to send a new pull request with the changes.

### Add it to an ontology repository

Depends on the ontology domain (see above).