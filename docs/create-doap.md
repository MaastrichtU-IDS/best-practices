---
id: create-doap
title: DOAP Files
---



## DOAP Files

This section of the website contains advice and guidelines for projects when creating or maintaining their DOAP files. While much of the information contained is general to all DOAP files, some is specific to the files maintained by IDS projects.

### What to know before you create DOAP

**[DOAP](https://github.com/ewilderj/doap/wiki)** (Description of a Project) is an RDF Schema and XML vocabulary that describe software projects, in particular free and open source software.

### Why DOAP is important?

Back in 2005 a wide ranging discussion was held on the site-dev mailing list aimed at arriving at an architecture and tools that would allow us to create a project directory web site. A key part of the plans, and one of the biggest stumbling blocks, was the selection of a suitable format of information file that would be the key part.

The result of the discussion was a consensus to use [DOAP](https://github.com/edumbill/doap/wiki) - "Description Of A Project" which is an RDF based format. The decision was taken for the following reasons:

- use of an existing format was felt to be important
- it is becoming more commonly used and therefore has a growing base of support
- being designed to be extensible it can be easily adjusted to our needs

###  What is IDS project? [TODO]

A project is considered IDS if:

* It is registered in [Maastricht University IDS organization](https://github.com/MaastrichtU-IDS?utf8=%E2%9C%93&q=&type=&language=)
* It is on your personal [GitHub](https://github.com/MaastrichtU-IDS?utf8=%E2%9C%93&q=&type=&language=)

### General DOAP Guidelines

#### Formatting

- rdf:resource should be used when listing URLs.

  ```turtle
  i.e. <doap:homepage rdf:resource="https://foo.MaastrichtU-IDS.org/" />
  ```

  

- Dates should be formatted as 'YYYY-MM-DD'. Numbers should be padded with '0' to match the formatting.

  ```turtle
  e.g. Jan 1st 2001 should be written as '2001-01-01'
  ```

- all URLs should be fully qualified, including the protocol.

  ```turtle
  i.e. https://foo.bar.com/file.html
  ```

### Naming

- projects should include the 'IDS' prefix when listing their project name.

  ```turtle
  i.e. 'IDS HTTPD' instead of 'HTTPD'.
  ```

### Categorization

- Project type is used for classifying type of project within IDS.

  ```
  e.g. Research, Development, Education
  ```

  A full list of programming languages we accept is available in the [form](https://ids-projects.137.120.31.102.nip.io/create-doap).

- programming languages should be given as capitals unless their well known name is mixed case.

  ```
  e.g. Java, R, Python, Ruby etc
  ```

  A full list of programming languages we accept is available in the [form](https://ids-projects.137.120.31.102.nip.io/create-doap).

- all releases should have a "product" name (added using a doap:name element) included in the doap:Version element.

  ```
    i.e.
      "<doap:Version>
        <doap:name>Blah</doap:name>..."
  ```

- The project links should include index pages of resources

### PMC descriptors [TODO]

- PMC descriptor files must always have the extension '.rdf', and must be listed in the file
  `https://svn.apache.org/repos/asf/comdev/projects.apache.org/trunk/data/committees.xml`
- PMCs can be referenced as an rdf:resource that points at https://<pmc>.apache.org/. e.g.
  `<asfext:pmc rdf:resource="https://httpd.apache.org/" />`.
  In this case, the PMC descriptor file must be called `<pmc>.rdf` and must be stored in the directory:
  `https://svn.apache.org/repos/asf/comdev/projects.apache.org/trunk/data/committees/`
- PMCs descriptors can also be stored anywhere else (e.g. on the TLP website or in SVN), in which case they must be referenced using the full URL, for example
  `<asfext:pmc rdf:resource="https://tlp.apache.org/pmc/tlp.rdf" />`

### Create an IDS DOAP

To be listed on this [site](https://ids-projects.137.120.31.102.nip.io/), your IDS project must create a DOAP file. The DOAP format is RDF based, so while it is human readable, it's primarily meant to be machine read. Creating the file from scratch can be a little intimidating, so this page will allow you to generate an initial file that can then be edited to suit. Alternatively, you can browse the existing projects for one with similar resources and use its DOAP file as a starting point.

#### Step 1: Complete the form

Complete and download this [form](https://ids-projects.137.120.31.102.nip.io/create-doap)

**Note**: Please remember that the data contained in the DOAP file is used directly on the website, so please take care when adding content.

#### Step 2: Customize your file (Optional)

The file that is created when you submit your data is only a starting point. You'll likely need to modify some aspects of it, especially adding data that the form doesn't allow you to enter. You should be able to simply copy/paste/edit the sections you need to duplicate.

You may have more than one of the following sections:

- bug database
- category
- download page
- programming language
- release
- repository
- standard

For example, if there are multiple release versions, each must be in its own "release" section. Each "Version" entry needs to be in its own "release" section.

#### Step 3: Validate your file

It is a good idea to check if your DOAP file is at least valid RDF. This can be accomplished using the [W3C RDF Validator service](https://www.w3.org/RDF/Validator/). While this won't tell you if your file meets DOAP or IDS guidelines, it is at least a good basic sanity check.

#### Step 4: Submitting your file

Your DOAP file should be stored somewhere that is publicly accessible. For most projects this will be in their source code repository, but there is no requirement for it to be stored there. It is suggested that the DOAP file is stored somewhere in GitHub such that it is copied to the top level of the website.

Once you have decided where the file will be stored, you can directly view your project listed in the [website](https://ids-projects.137.120.31.102.nip.io/).



### IDS DOAP File FAQ [TODO]

- I want to list my project is more than one category but the form to create the DOAP file only lets me select one. Can I add the others? How?
- Where should the DOAP file be stored?
- How do I know my project is considered IDS?
- Where should the repository link point to?
- I need to add more than 'XXX'. How do I do that?
- What does the release information mean?
- How do we get an RSS feed?
- What happens if we commit an error to the DOAP file?
- What date should I use in the 'created' field of a version?