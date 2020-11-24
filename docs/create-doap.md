---
id: create-doap
title: IDS Dashboard

---

### Motivation: lack of semantic interoperability

The lack of well-defined indexing practices is a common problem in most institutional repositories. Researchers will typically assign keywords to their projects, however, these terms are not extracted from a controlled vocabulary or thesaurus. This leads to ambiguity and lack of standardization in terms which are used to describe the content of their projects. As solution to the problem, IDS has undertaken the effort to design a search engine that provides a single entry to our research projects. The result is the [IDS Dashboard](https://maastrichtu-ids.github.io/projects/), particularly aimed in making our software findable, accessible, interoperable and reusable ([FAIR](https://maastrichtu-ids.github.io/best-practices/docs/fair-data)), an essential component to reducing barriers for access. In addition to facilitating access to projects, IDS Dashboard reconciles and indexes projects using metadata descriptors that come directly from the Github repository using a machine-readable ontology.

---

### What is the IDS Dashboard?

A website for projects at the [Institute of Data Science](http://maastrichtuniversity.nl/ids/) at Maastricht University. It is designed to help you find specific projects that meet your interests and to gain a broader understanding of the wide variety of work currently underway in the IDS.

---

### IDS Dashboard objectives

1. Integrate and preserve the intellectual production of IDS.
2. Increment the visibility and input of our scientific output.

We hope that having IDS projects more discoverable through tools such as IDS Dashboard will encourage scientists to share their data more broadly and do it in a way that makes data truly [FAIR](https://fairsharing.org/).

---

### What is the IDS Dashboard?

A website for projects at the [Institute of Data Science](http://maastrichtuniversity.nl/ids/) at Maastricht University. It is designed to help you find specific projects that meet your interests and to gain a broader understanding of the wide variety of work currently underway in the IDS.

### IDS Dashboard Architecture

A web UI in React with TypeScript which retrieves projects information from the SPARQL endpoint and releases info from the JSON file on GitHub. You will find specific information [here]( https://github.com/MaastrichtU-IDS/projects#get-data-from-github-graphql-api).

---

### Improving the findability of IDS's Project

There is a growing research interests in making the software FAIR and many funding agencies and academic publishers requires proper citation and reproduction of the project. Users can specify access requirements.

Human and machine visitors will like our IDS Dashboard since we presents relevant information in a incisive manner. Visitors will be able to quickly find a IDS project that is interesting them while providing machines with the relevant information about the project.  Consequently, we have made use of an ontology called Description of a project (DOAP) to help describe the metadata of a project in a way that machine can understand it. This is accomplished by including a simple file inside your Github repository project. The file is easily findable to humans, and machine can determine the project's status by searching for a string matching a specific pattern in a set of possible files.

---

### What is an IDS project?

An IDS project is a  publicly available code repository concerning IDS in varying state of usability, development and support. A IDS project can typically be classified as following:

| 🗂️ Type of IDS project |                                                              |
| --------------------- | ------------------------------------------------------------ |
| 🧪 Research            | A folder that contains all your "*Research*" related project's file |
| 👨‍💻 Development        | A folder that contains all your "*Development*" related project's file |
| 🎓  Education          | A folder that contains all your "*Education*" related project's file |


### What IDS Project should be added in IDS Dashboard?

As a rule of thumb, a project should be added to the IDS Dashboard if:

1. the project is no private,
2. we can realistically claim (co-)ownership of the project AND
3. the project could be useful to somebody else.

Under this definition, the following is not recorded in the IDS Dashboard:

- A script that was just meant to wrangle some data unique to a problem we were having (violates 3).
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

Here is the list of repository of software used in organizations:

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

