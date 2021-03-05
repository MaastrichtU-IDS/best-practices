---
title: Distributed RDF in the browser
author: Vincent Emonet
author_title: Data Science engineer at IDS
author_url: https://github.com/vemonet
tags: [web, rdf, development]
description: Create a web application with React and TypeScript
hide_table_of_contents: false
# draft: False
# author_image_url: https://graph.facebook.com/611217057/picture/?height=200&width=200
# image: https://i.imgur.com/mErPwqL.png
---

Which solutions are available to store and access relatively large scale RDF in the browser? 

I am looking for a fully distributed RDF access, that does not require NodeJS or any server backend for preprocessing the data.

Serving the data and the software should rely on pure static hosting, and processing the data should rely on standard built in the browsers: a static server to host the RDF files, and the JavaScript scripts. 

This would enable distributed processing, edition and querying of RDF data in the browser without requiring any installation, or any backend server to perform the processing or pre-processing.

This would allow to work with RDF data a bit like we work with code with `git`: in a distributed and scalable manner

Git is today a reference in software engineering, it has been built to overcome subversions main problem: centralization. 

* Centralized system scalability fully depends on the resources of the person/entity deploying the system (and requires a good connection)
* Distributed system scalability relies on the implementation of standards in each actor wanting to implement the system

What if browsers could store large scale of RDF data? Large RDF data would be loaded from any file in a few seconds, or minutes for larger datasets, in your browser without the need to install anything.

<!--truncate-->

I recently discovered the IndexedDB W3C recommendation for large scale in-browser structured database, it seems like an ideal candidate to store and access RDF data in the browser at relatively large scale (this might depend on the user browser though)

Here is IndexedDB description [according to Google](https://developers.google.com/web/ilt/pwa/working-with-indexeddb):

> IndexedDB is a large-scale, NoSQL storage system. It lets you store just about anything in the user's browser. In addition to the usual search, get, and put actions, IndexedDB also supports transactions.

Here is the IndexedDB description [according to Mozilla](https://developer.mozilla.org/en/docs/Web/API/IndexedDB_API):

> IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high performance searches of this data. While DOM Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data. IndexedDB provides a solution.

Here is the IndexedDB W3C recommendation: https://www.w3.org/TR/IndexedDB-2

So let's try to look into this list to see if there are some interesting implementation for manipulating relatively large RDF datasets directly in the browser!

## RDF JS

Let's look into the reference website for RDF JavaScript implementations: https://rdf.js.org 

33 libraries are listed. With a cryptic category assigned for each: DataFactory, DataFactory Sink, or Dataset

A lot of those libraries seems to be parsers or streamers implementing a RDF specification for JavaScript: http://rdf.js.org/data-model-spec. The specification provides an interface for JavaScript Object (basically subject, predicate, object, graph, like the usual RDF specification).

## node-quadstore

https://github.com/beautifulinteractions/node-quadstore uses LevelDB. They make a vague statement about supporting RDF in the browser, which is inaccurate: "graph database for Node.js and the browser"

Unfortunately, LevelDB (hence their quadstore) is is not browser based, it requires a NodeJS server to run, it is not even built for structured data, and do not even have support for indexes

> * This is not a SQL database. It does not have a relational data model, it does not support SQL queries, and it has no support for indexes.
>
> * Only a single process (possibly multi-threaded) can access a particular database at a time.
> * There is no client-server support builtin to the library. An application that needs such support will have to wrap their own server around the library.

## Graphy.js

https://github.com/blake-regalia/graphy.js

The graph is stored in memory, and they nicely warn that the main strength of Graphy is performing fast operations on small datasets

> This data structure is best suited for storing quads in memory when the  objective is to perform set operations quickly (e.g., union, difference, intersection, etc.) on relatively small datasets (still much better  storage density than the alternatives – see [memory usage comparison](https://github.com/blake-regalia/graphy.js/blob/master/perf/README.md#distinct-task) in the performance document).

See the documentation to try it out: https://graphy.link/memory.dataset.fast

## What about IndexedDB then?

7 years ago a guy asked to RDF community if there was any interest about implementing something like "IndexedGraph" that would enable storing and querying RDF data similarly to IndexedDB: https://lists.w3.org/Archives/Public/public-rdfjs/2013Oct/0040.html. Since then, there was no answer, and I could not find of any mention of using IndexedDB for RDF. 

Note, there are a few wrappers to use IndexedDB with NoSQL db like CouchDB, or query it as SQL: 

Implementing full SPARQL support would be a relatively large project. But it seems like a wrapper could be written to have better support to work with JSON-LD RDF data in IndexedDB. 

Here are some ideas of what it could do:

* automated creation of prefix table, and resolution of the context
* reuse existing RDF JS parsers and streamers to get the data from the source to IndexedDB
* provide methods to retrieve complete URI of a property/object (instead of just the key)