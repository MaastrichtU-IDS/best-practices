---
id: create-doap
title: DOAP Files
---



###  What is an IDS project?

A project is considered IDS if:

* A IDS project is a publicly available code concerning IDS grants(portfolio?) in varying state of usability, development and support.

* It is registered in [Maastricht University IDS organization](https://github.com/MaastrichtU-IDS?utf8=%E2%9C%93&q=&type=&language=)
* It is on your personal [GitHub](https://github.com/MaastrichtU-IDS?utf8=%E2%9C%93&q=&type=&language=)

### Why DOAP is important?

Back in 2005 a wide ranging discussion was held on the site-dev mailing list aimed at arriving at an architecture and tools that would allow us to create a project directory web site. A key part of the plans, and one of the biggest stumbling blocks, was the selection of a suitable format of information file that would be the key part.

The result of the discussion was a consensus to use [DOAP](https://github.com/edumbill/doap/wiki) - "Description Of A Project" which is an RDF based format. The decision was taken for the following reasons:

- use of an existing format was felt to be important
- it is becoming more commonly used and therefore has a growing base of support
- being designed to be extensible it can be easily adjusted to our needs

### General DOAP Guidelines

## DOAP Files

This section of the website contains advice and guidelines for projects when creating or maintaining their DOAP files. While much of the information contained is general to all DOAP files, some is specific to the files maintained by IDS projects.

### What to know before you create DOAP

**[DOAP](https://github.com/ewilderj/doap/wiki)** (Description of a Project) is an RDF Schema and XML vocabulary that describe software projects, in particular free and open source software.

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

### Categorization

- Project type is used for classifying type of project within IDS.

  ```
  e.g. Research, Development, Education
  ```

### Project Statuses

- Active: The project is being actively developed since the first commit. <img src="https://www.repostatus.org/badges/latest/active.svg" alt="Project Status: Active - A IDS project is a publicly available code concerning IDS grants in varying state of usability, development and support..">
- Inactive: The project is no longer being actively developed, support/maintenance. <img src="https://www.repostatus.org/badges/latest/inactive.svg" alt="Project Status: Inactive- A IDS project is a publicly available code concerning IDS grants in varying state of usability, development and support..">
- WIP: Initial development is in progress, but there has not yet been a stable, usable release suitable for the public. <img src="https://www.repostatus.org/badges/latest/wip.svg" alt="Project Status: WIP- Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.">


### Programming languages
  A full list of programming languages we accept is available in the [form](https://maastrichtu-ids.github.io/projects/create-doap).

- programming languages should be given as capitals unless their well known name is mixed case.

  ```
  e.g. Java, R, Python, Ruby etc
  ```

  A full list of programming languages we accept is available in the [form](https://maastrichtu-ids.github.io/projects/create-doap).

- all releases should have a "product" name (added using a doap:name element) included in the doap:Version element.

  ```
    i.e.
      "<doap:Version>
        <doap:name>Blah</doap:name>..."
  ```

- The project links should include index pages of resources

### Create a DOAP description for your project
Cli


### IDS DOAP File FAQ

- I want to list my project is more than one category but the form to create the DOAP file only lets me select one. Can I add the others? How?
- Where should the DOAP file be stored?
- How do I know my project is considered IDS?
- Where should the repository link point to?
- I need to add more than 'XXX'. How do I do that?
- What does the release information mean?
- How do we get an RSS feed?
- What happens if we commit an error to the DOAP file?
- What date should I use in the 'created' field of a version?