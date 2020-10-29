The FAIR (Findable, Accessible, Interoperable, Reusable) Guiding Principles are intended to facilitate the discovery and reuse of data, not only for people, but for machines. Read the full paper [here](https://www.nature.com/articles/sdata201618).

## Findable 🔎

The first step in (re)using data is to find them. Metadata and data should be easy to find for both humans and computers. Machine-readable metadata are essential for automatic discovery of datasets and services, so this is an essential component of the [FAIRification process](https://www.go-fair.org/fair-principles/fairification-process/).

- [x] [**F1**. (Meta)data are assigned a globally unique and persistent identifier](https://www.go-fair.org/fair-principles/fair-data-principles-explained/f1-meta-data-assigned-globally-unique-persistent-identifiers/)

> Link to persistent identifier sample

- [ ] [**F2**. Data are described with rich metadata (defined by R1 below)](https://www.go-fair.org/fair-principles/fair-data-principles-explained/f2-data-described-rich-metadata/)

> Link to metadata sample

- [ ] [**F3**. Metadata clearly and explicitly include the identifier of the data they describe](https://www.go-fair.org/fair-principles/f3-metadata-clearly-explicitly-include-identifier-data-describe/)

> Link to metadata with identifier sample

- [ ] [**F4**. (Meta)data are registered or indexed in a searchable resource](https://www.go-fair.org/fair-principles/f4-metadata-registered-indexed-searchable-resource/)

> Link to the metadata search API 

## Accessible 📂

Once the user finds the required data, the user  needs to know how can  they be accessed, possibly including authentication and authorisation.

- [ ] [**A1**. (Meta)data are retrievable by their identifier using a standardised communications protocol](https://www.go-fair.org/fair-principles/542-2/)
  - [**A1.1** The protocol is open, free, and universally implementable](https://www.go-fair.org/fair-principles/a1-1-protocol-open-free-universally-implementable/)
  - [**A1.2** The protocol allows for an authentication and authorisation procedure, where necessary](https://www.go-fair.org/fair-principles/a1-2-protocol-allows-authentication-authorisation-required/)


> Which protocol is used to access the data? HTTPS, HTTP, FTP, SSH

- [ ] [**A2**. Metadata are accessible, even when the data are no longer available](https://www.go-fair.org/fair-principles/a2-metadata-accessible-even-data-no-longer-available/)

> Link to the metadata backup/dump/long term storage

## Interoperable ⚙️

The data usually need to be integrated with other data. In addition, the data need to interoperate with applications or workflows for  analysis, storage, and processing.

- [ ] [**I1**. (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.](https://www.go-fair.org/fair-principles/i1-metadata-use-formal-accessible-shared-broadly-applicable-language-knowledge-representation/)

> In which format is your data available? RDF, JSON, CSV, SPSS, XLXS?

- [ ] [**I2**. (Meta)data use vocabularies that follow FAIR principles](https://www.go-fair.org/fair-principles/i2-metadata-use-vocabularies-follow-fair-principles/)

> Which data model do you use ? RDF/OWL ontologies, OBO Foundry, UMLS, other schemas?

- [ ] [**I3**. (Meta)data include qualified references to other (meta)data](https://www.go-fair.org/fair-principles/i3-metadata-include-qualified-references-metadata/)

> Link to metadata which reference other metadata

## Reusable ♻️

The ultimate goal of FAIR is to optimise the reuse of data. To achieve  this, metadata and data should be well-described so that they can be  replicated and/or combined in different settings.

- [ ] [**R1**. (Meta)data are richly described with a plurality of accurate and relevant attributes](https://www.go-fair.org/fair-principles/r1-metadata-richly-described-plurality-accurate-relevant-attributes/)
  
  - [ ] [**R1.1**. (Meta)data are released with a clear and accessible data usage license](https://www.go-fair.org/fair-principles/r1-1-metadata-released-clear-accessible-data-usage-license/)
  
  > Link to the data license file
  
  - [ ] [**R1.2**. (Meta)data are associated with detailed provenance](https://www.go-fair.org/fair-principles/r1-2-metadata-associated-detailed-provenance/)
  
  > Link to an example of provenance metadata for the data
  
  - [ ] [**R1.3**. (Meta)data meet domain-relevant community standards](https://www.go-fair.org/fair-principles/r1-3-metadata-meet-domain-relevant-community-standards/)
  
  > Short explanation why your data model choice meet the domain community standards. With link to relevant page about the standard.
  
    - [ ] **R1.4**. **Complementary**: (Meta)data are summed up by descriptive statistics
  
  > Create and publish descriptive statistics for your data: number of class, instance, relations. We recommend to use the [HCLS dataset description](https://www.w3.org/TR/hcls-dataset/).

- [ ] **R2**. Source code to produce and publish the data is reusable

  - [ ] **R2.1**. Code to produce and publish the data is versioned and accessible

  > Git repository URL (GitHub, GitLab, BitBucket...)

  - [ ] **R2.1**. The code is published with a license

  > Link to the license file

  - [ ] **R2.2**. Code can be executed in containers or using a common packaging system easily

  > Link to the documentation to run the code in a containerized application (Docker, Pip, Jar)

  - [ ] **R2.3**. Architecture and concept behind the data transformation is briefly explained

  > Link to the documentation with those explanations

From the [GO-FAIR website](https://www.go-fair.org/fair-principles/).

