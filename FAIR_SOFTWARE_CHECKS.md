# Checklist for FAIR software

## Usage Hints
This checklist provides recommendations for software development. It is primarily intended for software developers for the self-assessment of developed software and as a source of ideas for further development. The checklist does not provide any new, revolutionary approaches to software development. However, it helps to not forget necessary, essential steps of software development. In addition, the recommendations can serve as an argumentation aid. 

The recommendations are created with a focus on know-how maintenance and good software engineering practice. They help to maintain the sustainability of the developed software. The recommendations encourage the use of tools, the creation of documentation, the establishment of processes and adherence to principles. When assessing a recommendation, it is recommended to consider to what extent the aspect mentioned is implemented and whether there is a need for improvement. This could be implemented as follows: 

* Is there currently no need for improvement and is the recommendation addressed appropriately? Status: **ok** 
* Is there any potential for improvement that should be implemented in the near future? Status: **todo**, record the need for improvement 
* Is the recommendation not yet relevant but could be helpful in a later development phase? Status: **future** 
* Is the recommendation not meaningfully implementable within the development context? Status: **n.a.** (not applicable) explain the reason 

## Summary of Results
The software [name] implements [number of implemented recommendations] recommendations of FAIR software. 

The focus of future improvements is on: [future improvements]

## Table of Contents
[[Qualification](#qualifizierung)] [[Requirements Management](#anforderungsmanagement)] [[Software Architecture](#software-architektur)] [[Change Management](#aenderungsmanagement)] [[Design and Implementation](#design-implementierung)] [[Software Test](#software-test)] [[Release Management](#release-management)] [[Automation and Dependency Management](#automatisierung-abhaengigkeiten)] 

## Qualification
- [ ] **EQA.1** - The software responsible recognises the different application classes and knows which is to be used for his/her software. *(from application class 1)*

- [ ] **EQA.2** - The software responsible knows how to request specific support at the beginning and during development as well as to exchange ideas with other colleagues on the subject of software development. *(from application class 1)*

- [ ] **EQA.3** - The persons involved in the development determine the skills needed with regard to their role and the intended application class. They communicate these needs to the supervisor. *(from application class 1)*

- [ ] **EQA.4** - The persons involved in the development are given the tools needed for their tasks and are trained in their use. *(from application class 1)*

## Requirements Management
- [ ] **EAM.1** - The problem definition is coordinated with all parties involved and documented. It describes the objectives, the purpose of the software, the essential requirements and the desired application class in a concise, understandable way. *(from application class 1)*

- [ ] **EAM.3** - The constraints are documented. *(from application class 1)*

## Software Architecture
- [ ] **ESA.2** - Essential architectural concepts and corresponding decisions are at least documented in a lean way. *(from application class 1)*

## Change Management
- [ ] **EÄM.2** - The most important information describing how to contribute to development are stored in a central location. *(from application class 1)*

- [ ] **EÄM.5** - Known bugs, important unresolved tasks and ideas are at least noted in bullet point form and stored centrally. *(from application class 1)*

- [ ] **EÄM.7** - A repository is set up in a version control system. The repository is adequately structured and ideally contains all artefacts for building a usable software version and for testing it. *(from application class 1)*

- [ ] **EÄM.8** - Every change of the repository ideally serves a specific purpose, contains an understandable description and leaves the software in a consistent, working state. *(from application class 1)*

## Design and Implementation
- [ ] **EDI.1** - The usual patterns and solution approaches of the selected programming language are used and a set of rules regarding the programming style is consistently applied. The set of rules refers at least to the formatting and commenting. *(from application class 1)*

- [ ] **EDI.2** - The software is structured modularly as far as possible. The modules are coupled loosely. I.e., a single module depends as little as possible on other modules. *(from application class 1)*

- [ ] **EDI.9** - The source code and the comments contain as little duplicated information as possible. ("Don`t repeat yourself.") *(from application class 1)*

- [ ] **EDI.10** - Prefer simple, understandable solutions. ("Keep it simple and stupid."). *(from application class 1)*

## Software Test
- [ ] **EST.4** - The basic functions and features of the software are tested in a near-operational environment. *(from application class 1)*

- [ ] **EST.10** - The repository ideally contains all artefacts required to test the software. *(from application class 1)*

## Release Management
- [ ] **ERM.1** - Every release has a unique release number. The release number can be used to determine the underlying software version in the repository. *(from application class 1)*

- [ ] **ERM.2** - The release package contains or references the user documentation. At least, it consists of installation, usage and contact information as well as release notes. In the case of the distribution of the release package to third parties outside DLR, the licensing conditions must be enclosed. *(from application class 1)*

- [ ] **ERM.6** - All foreseen test activities are executed during release performance. *(from application class 1)*

- [ ] **ERM.9** - Prior to distribution of the release package to third parties outside DLR, it must be ensured that a licence is defined, that the licensing terms of used third-party software are met, and that all necessary licence information is included in the release package. *(from application class 1)*

- [ ] **ERM.10** - Prior to distribution of the release package to third parties outside DLR, it has to be ensured that the export control regulations are met. *(from application class 1)*

## Automation and Dependency Management
- [ ] **EAA.1** - The simple build process is basically automated and necessary manual steps are described. In addition, there is sufficient information available about the operational and development environment. *(from application class 1)*

- [ ] **EAA.2** - The dependencies to build the software are at least described by name, version number, purpose, licensing terms and reference source. *(from application class 1)*

- [ ] **EAA.10** - The repository ideally contains all artefacts to perform the build process. *(from application class 1)*

> Source: https://rse.dlr.de/01_guidelines.html