---
id: ids-projects
title: IDS Projects
---

### Motivation: lack of semantic interoperability

The lack of well-defined indexing practices is a common problem in most institutional repositories. Researchers will typically assign keywords to their projects, however, these terms are not extracted from a controlled vocabulary or thesaurus. This leads to ambiguity and lack of standardization in terms which are used to describe the content of their projects. As solution to the problem, IDS has undertaken the effort to design a search engine that provides a single entry to our research projects. The result is the [IDS Dashboard](https://maastrichtu-ids.github.io/projects/), particularly aimed at making our projects findable, accessible, interoperable and reusable ([FAIR](https://maastrichtu-ids.github.io/best-practices/docs/fair-data)), an essential component to reducing barriers for access. In addition to facilitating access to our projects, IDS Dashboard reconciles and indexes projects using metadata descriptors that come directly from the Github repository using a machine-readable ontology called Description of a project ([DOAP](https://github.com/ewilderj/doap/wiki)).

---

### What is the IDS Dashboard?

A website for projects at the [Institute of Data Science](http://maastrichtuniversity.nl/ids/) at Maastricht University. It is designed to help you find specific projects that meet your interests and to gain a broader understanding of the wide variety of work currently underway in the IDS.

---

### Objectives

1. Integrate and preserve the intellectual production of IDS.
2. Increment the visibility and impact of our scientific output.

We hope that having IDS projects more discoverable through tools such as IDS Dashboard will encourage scientists to share their project more broadly and do it in a way that makes their project truly [FAIR](https://fairsharing.org/).

---

### Architecture

1. A Python script running regularly using a GitHub Actions workflow to retrieve information about IDS projects on GitHub. Data about projects stored in a triplestore, and releases data stored in a JSON file on GitHub.

2. A React web UI in TypeScript which retrieves projects information from the SPARQL endpoint, and releases info from the JSON file on GitHub. You will find specific information [here]( https://github.com/MaastrichtU-IDS/projects#get-data-from-github-graphql-api).

---

### Making IDS Projects easily findable and accessible

There is a growing research interest in making the [project (software) FAIR](https://content.iospress.com/articles/data-science/ds190026) and many funding agencies and academic publishers require proper location, citation and replication of any digital object related to your project. While the IDS Dashboard doesn't provide persistent interoperable identifiers (e.g. [DOI](https://www.doi.org/)), our tool presents relevant information of a project in a incisive manner. Humans will be able to quickly find an IDS project that is interesting them and similarly, machines will communicate to exchange relevant project descriptors using the **machine-readable** ontology DOAP. This is accomplished by including a simple RDF file inside your Github repository project. The file is easily **findable** to humans, and machine can **access** and determine the project's status by searching for a string matching a specific pattern in a set of possible files.

---

### What is an IDS project?

An IDS project is a publicly available code repository concerning IDS in varying state of usability, development and support. A IDS project can typically be classified as following:

| 🗂️ Type of IDS project |                                                              |
| --------------------- | ------------------------------------------------------------ |
| 🧪 Research            | A folder that contains all your "*Research*" related project's file |
| 👨‍💻 Development        | A folder that contains all your "*Development*" related project's file |
| 🎓  Education          | A folder that contains all your "*Education*" related project's file |


### Which projects should be added?

As a rule of thumb, a project should be added to the IDS Dashboard if all of the following apply:

1. the project is not private,
2. we can realistically claim (co-)ownership of the project
3. the project could be useful to somebody else.

Under this definition, the following  examples are not recorded in the IDS Dashboard:

- A script meant to manipulate data unique to a problem we are having (violates 3).
- A package that is very useful but that IDS wasn't involved with (violates 2).

The project can be stored either at MaastrichtU-IDS organization or your personal [GitHub](https://github.com/MaastrichtU-IDS?utf8=%E2%9C%93&q=&type=&language=) repository.


### How do I add a new IDS Project?

1. Go to the [IDS Project Dashboard website](https://maastrichtu-ids.github.io/projects/).
2. In the left pane,  click on [Create a DOAP description for your project](https://maastrichtu-ids.github.io/projects/create-doap).
3. You should now see a form. Each field has a brief explanation of what you should fill in.
4. Complete the form. Don't worry about mistakes, you can always come back later and fix it!
5. Don't forget to click ``Download DOAP description file`` when you 're done.

### Add a IDS project from your personal Github repository

IDS projects that are stored at your personal Github can be also added to IDS Dashboard. To do so, we request the following information to add into our [External Repository database](https://github.com/MaastrichtU-IDS/projects/blob/main/EXTERNAL_REPOSITORIES.txt):

1. user name.
2. repository name.

[Create an issue](https://github.com/MaastrichtU-IDS/projects/issues) if it is hosted under a different name, we will add it to the list of external repositories.


### How/When do I get to see my IDS Project?

Your project to the IDS Dashboard do not show up immediately. The length of delay depends on the frequency at which data is harvested from the GitHub GraphQL API.

---

### Other research project registries

The following lists software repositories used in other organizations:

* [Apache Projects Directory](https://projects.apache.org/)
* [SourceForge](https://sourceforge.net/)
* [Google Open Source Projects](https://opensource.google/projects/explore/featured)
* [Python Packages](https://pypi.org/search/?q=&o=)
* [R Open Science](https://ropensci.org/packages/)
* [Research-Software.nl](https://www.research-software.nl/)
* [Machine learning open source software](https://mloss.org/software/)
* [Code Ocean](https://mloss.org/software/)
* [Fintech Open Source Foundation](https://finos.github.io/?sort=hotness-down)
* [Others](https://github.com/NLeSC/awesome-research-software-registries)

---

### Future work

In our initial efforts to create the IDS Dashboard, we reached a conclusion to use DOAP to describe a IDS project. We were surprised to see that the descriptors associated to DOAP were close to Github properties. While our early development focused on a manual configuration of DOAP, there may be future opportunities to make this process rather automatically. For instance, the descriptors needed for the metadata are already available from public sources such [GH Archive](https://www.gharchive.org/) or [Zenodo](https://about.zenodo.org/). These primary sources provide access to their data via API. We will take harvesting this data via python scripting into consideration.