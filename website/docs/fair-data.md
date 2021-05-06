---
id: fair-data
title: FAIR data
---

## Publishing FAIR data

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

## Assessing your data FAIRness

You can find a list of various websites to assess if a resource is FAIR at https://fairassist.org

From all those tools, here is our expert selection:

* [FAIR Data Self-Assessment Tool](https://www.ands.org.au/working-with-data/fairdata/fair-data-self-assessment-tool)

* [FAIR-Aware (BETA)](https://fairaware.dans.knaw.nl/)

* [FAIR-Checker](http://fair-checker.france-bioinformatique.fr/)
* [FAIR Evaluator](https://w3id.org/AmIFAIR) (to evaluate a service)

You can also find guidelines on what you need to provide to insure your data is FAIR in this [FAIR data checklist file](https://github.com/MaastrichtU-IDS/best-practices/blob/main/FAIR_DATA_CHECKS.md) developed at IDS. Feel free to propose improvements in the [best-practices repository issues](https://github.com/MaastrichtU-IDS/best-practices/issues).


## The FAIR principles

:::info 4 guiding principles

The FAIR (**Findable**, **Accessible**, **Interoperable**, **Reusable**) Guiding Principles are intended to facilitate the discovery and reuse of data, not only for people, but for machines. Read the full paper [here](https://www.nature.com/articles/sdata201618).

:::

### Findable 🔎

The first step in (re)using data is to find them. Metadata and data  should be easy to find for both humans and computers. Machine-readable metadata are essential for automatic discovery of datasets and services, so this is an essential component of the [FAIRification process](https://www.go-fair.org/fair-principles/fairification-process/).

* [**F1**. (Meta)data are assigned a globally unique and persistent identifier](https://www.go-fair.org/fair-principles/fair-data-principles-explained/f1-meta-data-assigned-globally-unique-persistent-identifiers/)

* [**F2**. Data are described with rich metadata (defined by R1 below)](https://www.go-fair.org/fair-principles/fair-data-principles-explained/f2-data-described-rich-metadata/)

* [**F3**. Metadata clearly and explicitly include the identifier of the data they describe](https://www.go-fair.org/fair-principles/f3-metadata-clearly-explicitly-include-identifier-data-describe/)

* [**F4**. (Meta)data are registered or indexed in a searchable resource](https://www.go-fair.org/fair-principles/f4-metadata-registered-indexed-searchable-resource/)

### Accessible 📂

Once the user finds the required data, she/he needs to know how can  they be accessed, possibly including authentication and authorisation.

* [**A1**. (Meta)data are retrievable by their identifier using a standardised communications protocol](https://www.go-fair.org/fair-principles/542-2/)
  * [**A1.1** The protocol is open, free, and universally implementable](https://www.go-fair.org/fair-principles/a1-1-protocol-open-free-universally-implementable/)
  * [**A1.2** The protocol allows for an authentication and authorisation procedure, where necessary](https://www.go-fair.org/fair-principles/a1-2-protocol-allows-authentication-authorisation-required/)

* [**A2**. Metadata are accessible, even when the data are no longer available](https://www.go-fair.org/fair-principles/a2-metadata-accessible-even-data-no-longer-available/)

### Interoperable ⚙️

The data usually need to be integrated with other data. In addition,  the data need to interoperate with applications or workflows for  analysis, storage, and processing.

* [**I1**. (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.](https://www.go-fair.org/fair-principles/i1-metadata-use-formal-accessible-shared-broadly-applicable-language-knowledge-representation/)

* [**I2**. (Meta)data use vocabularies that follow FAIR principles](https://www.go-fair.org/fair-principles/i2-metadata-use-vocabularies-follow-fair-principles/)

* [**I3**. (Meta)data include qualified references to other (meta)data](https://www.go-fair.org/fair-principles/i3-metadata-include-qualified-references-metadata/)

### Reusable ♻️

The ultimate goal of FAIR is to optimise the reuse of data. To achieve  this, metadata and data should be well-described so that they can be  replicated and/or combined in different settings.

* [**R1**. (Meta)data are richly described with a plurality of accurate and relevant attributes](https://www.go-fair.org/fair-principles/r1-metadata-richly-described-plurality-accurate-relevant-attributes/)
  * [**R1.1**. (Meta)data are released with a clear and accessible data usage license](https://www.go-fair.org/fair-principles/r1-1-metadata-released-clear-accessible-data-usage-license/)
  * [**R1.2**. (Meta)data are associated with detailed provenance](https://www.go-fair.org/fair-principles/r1-2-metadata-associated-detailed-provenance/)
  * [**R1.3**. (Meta)data meet domain-relevant community standards](https://www.go-fair.org/fair-principles/r1-3-metadata-meet-domain-relevant-community-standards/)

:::info 3 FAIR entities

The principles refer to three types of entities: **data** (or any digital  object), **metadata** (information about that digital object), and  **infrastructure**.

For instance, principle F4 defines that both metadata  and data are registered or indexed in a searchable resource (the  infrastructure component).

:::

:::note Source

From the [GO-FAIR website](https://www.go-fair.org/fair-principles/).

:::