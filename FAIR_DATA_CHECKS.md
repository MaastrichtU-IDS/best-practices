The FAIR (Findable, Accessible, Interoperable, Reusable) Guiding Principles are intended to facilitate the discovery and reuse of data, not only for people, but for machines. Read the full paper [here](https://www.nature.com/articles/sdata201618).

You can find a list of various websites to assess if a resource is FAIR at https://fairassist.org

## Findable 🔎

The first step in (re)using data is to find them. Metadata and data should be easy to find for both humans and computers. Machine-readable metadata are essential for automatic discovery of datasets and services, so this is an essential component of the [FAIRification process](https://www.go-fair.org/fair-principles/fairification-process/).

- [ ] [**F1**. (Meta)data are assigned a globally unique and persistent identifier](https://www.go-fair.org/fair-principles/fair-data-principles-explained/f1-meta-data-assigned-globally-unique-persistent-identifiers/)

> URL to access your dataset metadata, ideally use a persistent identifier system, such as w3id.org

- [ ] [**F2**. Data are described with rich metadata (defined by R1 below)](https://www.go-fair.org/fair-principles/fair-data-principles-explained/f2-data-described-rich-metadata/)

> See **Reusable**

- [ ] [**F3**. Metadata clearly and explicitly include the identifier of the data they describe](https://www.go-fair.org/fair-principles/f3-metadata-clearly-explicitly-include-identifier-data-describe/)

> Is your dataset metadata properly refering to your data identifier? Paste an example of metadata property which point to a data identifier

- [ ] [**F4**. (Meta)data are registered or indexed in a searchable resource](https://www.go-fair.org/fair-principles/f4-metadata-registered-indexed-searchable-resource/)

> Link to the resource/portal where the metadata about your dataset can be found

## Accessible 📂

Once the user finds the required data, the user  needs to know how can  they be accessed, possibly including authentication and authorisation.

- [ ] [**A1**. (Meta)data are retrievable by their identifier using a standardised communications protocol](https://www.go-fair.org/fair-principles/542-2/)
  - [**A1.1** The protocol is open, free, and universally implementable](https://www.go-fair.org/fair-principles/a1-1-protocol-open-free-universally-implementable/)
  - [**A1.2** The protocol allows for an authentication and authorisation procedure, where necessary](https://www.go-fair.org/fair-principles/a1-2-protocol-allows-authentication-authorisation-required/)


> Which protocol is used to access the data? HTTPS, HTTP, FTP, SSH?
>
> Do you need a specific authorization to access this data? Login/password?
>
> How can you get this authorization? If applicable

- [ ] [**A2**. Metadata are accessible, even when the data are no longer available](https://www.go-fair.org/fair-principles/a2-metadata-accessible-even-data-no-longer-available/)

> Link to the metadata long term storage (e.g. a metadata portal), independent to where the data is accessible

## Interoperable ⚙️

The data usually need to be integrated with other data. In addition, the data need to interoperate with applications or workflows for  analysis, storage, and processing.

- [ ] [**I1**. (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.](https://www.go-fair.org/fair-principles/i1-metadata-use-formal-accessible-shared-broadly-applicable-language-knowledge-representation/)

> In which format are your data and metadata available? RDF, JSON, CSV, SPSS, XLXS?

- [ ] [**I2**. (Meta)data use vocabularies that follow FAIR principles](https://www.go-fair.org/fair-principles/i2-metadata-use-vocabularies-follow-fair-principles/)

> Link to the data model you use ? e.g. OWL ontologies, SHACL/ShEx shapes, schemas files
>
> Feel free to provide human-readable details here to explain which schema you use and why

- [ ] [**I3**. (Meta)data include qualified references to other (meta)data](https://www.go-fair.org/fair-principles/i3-metadata-include-qualified-references-metadata/)

> Specify if  your dataset builds on another data set, if additional datasets are needed to complete the data, or if complementary information is stored in a different dataset

## Reusable ♻️

The ultimate goal of FAIR is to optimize the reuse of data. To achieve  this, metadata and data should be well-described so that they can be  replicated and/or combined in different settings.

- [ ] [**R1**. (Meta)data are richly described with a plurality of accurate and relevant attributes](https://www.go-fair.org/fair-principles/r1-metadata-richly-described-plurality-accurate-relevant-attributes/)
  
  - [ ] [**R1.1**. (Meta)data are released with a clear and accessible data usage license](https://www.go-fair.org/fair-principles/r1-1-metadata-released-clear-accessible-data-usage-license/)
  
  > Link to the data license file
  
  - [ ] [**R1.2**. (Meta)data are associated with detailed provenance](https://www.go-fair.org/fair-principles/r1-2-metadata-associated-detailed-provenance/)
  
  > Link to an example of provenance metadata for the data
  
  - [ ] [**R1.3**. (Meta)data meet domain-relevant community standards](https://www.go-fair.org/fair-principles/r1-3-metadata-meet-domain-relevant-community-standards/)
  
  > Short explanation why your data model choice meet the domain community standards. With link to relevant websites about the standard.
  
    - [ ] **R1.4**. **Complementary**: a graph summary is available to browse your data
  
  > Create and publish a descriptive graph summary for your data: number of class, instance, relations. We recommend to use the [HCLS dataset description](https://www.w3.org/TR/hcls-dataset/). Provide the URL to access and browse those statistics if applicable.

<!-- Note: the HCLS and Source code part is not present in the original GO-FAIR docs -->

- [ ] **R2**. Source code to produce and publish the data is reusable

  - [ ] **R2.1**. Code to produce and publish the data is versioned and accessible

  > Git repository URL (GitHub, GitLab, BitBucket...)

  - [ ] **R2.1**. The code is published with a license

  > Link to the license file

  - [ ] **R2.2**. Code can be executed in containers or using a common packaging system easily

  > Link to the documentation to install requirements, and run the code (Docker image, Pip packages, Java jar file...)

  - [ ] **R2.3**. Architecture and concept behind the data transformation is briefly explained

  > Link to the documentation with those explanations

From the [GO-FAIR website](https://www.go-fair.org/fair-principles/).

