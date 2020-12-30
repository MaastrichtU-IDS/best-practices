---
id: fair-data
title: FAIR data
---

# Publishing FAIR data

* **Data persistence**: Data repositories, such as [Figshare](https://figshare.com/), [Zenodo](https://zenodo.org/), [DataDryad](https://datadryad.org/), [Kaggle Datasets](https://www.kaggle.com/datasets) and many others, are a good way to ensure dataset persistence. Many of these repositories have [agreements with libraries](https://knowledge.figshare.com/articles/item/preservation-and-continuity-of-access-policy) to preserve data in perpetuity.
* **Provenance**: with datasets often published in multiple repositories, it would be useful for repositories to describe the provenance information more explicitly in the metadata. 
  * The provenance information helps users  understand who collected the data, where the primary source of the  dataset is, or how it might have changed. 
  * The prov ontology can be used. 
* **Licensing**: datasets should include licensing information, ideally in a  machine-readable format. 

* **Assigning persistent identifiers**, such as DOIs ([Digital Object Identifier](https://www.doi.org/)), is critical for long-term tracking and useability.
  * Easier citation of datasets and version tracking
  * Dereferenceable: if a dataset moves, the  identifier can point to a different location.

:::note Source

Recommendations adapted from [this article](https://ai.googleblog.com/2020/08/an-analysis-of-online-datasets-using.html).

:::

# Tools and frameworks

Pointer to tools and framework to build FAIR data systems (depend on the use-case)

* Use the [Smart API](https://smart-api.info) specifications to document your API (extension of OpenAPI).
  * Take advantage of the [Swagger UI](https://swagger.io/tools/swagger-ui/) to try your API.
* Use the [JSON-LD](https://json-ld.org/) format to add a `@context` to your JSON objects, and obtain Linked Data.
* Use the [Health Care and Life Science (HCLS) descriptive metadata profile](https://www.w3.org/TR/hcls-dataset/) to generate and store relevant metadata for Biomedical datasets (in RDF).
* Use the [FAIR evaluator](https://fairsharing.github.io/FAIR-Evaluator-FrontEnd/) to assess the FAIRness of your services.

