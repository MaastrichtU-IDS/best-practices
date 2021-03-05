---
title: A triplestore in your browser?
author: Vincent Emonet
author_title: Data Science engineer at IDS
author_url: https://github.com/vemonet
tags: [web, rdf, development]
description: Doing some exploration to handle large scale RDF knowledge graphs directly in the browser
hide_table_of_contents: false
# draft: False
# author_image_url: https://graph.facebook.com/611217057/picture/?height=200&width=200
# image: https://i.imgur.com/mErPwqL.png
---

Which solutions are available to store and access relatively large RDF file directly in a browser? Without the need for NodeJS, or anything else than a static server to publish files (using GitHub or GitLab Pages for example)

This would enable distributed processing, edition and querying of RDF data in the browser without requiring any installation, or any backend server to perform the processing or pre-processing. We would just need to host the JavaScript and RDF files on a static hosting service. When a user access the website it will download the JavaScript, which will download and handle the RDF. Additionally JS workers will be able to efficiently cache the data to avoid needing to reload everything at each new connection.

<!--truncate-->

## [Git](https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain) 

This would allow to work with RDF data a bit like we work with code in `git`: in a distributed and scalable manner

Nowadays, Git has become a reference in software engineering, one of it's most important concept is distribution (done right). Which was aiming to overcome Subversion main problem: centralization. 

In our case:

* The scalability of centralized systems fully depends on the resources of the person/entity deploying the system (and requires a good connection). It will require the maintainer to increase allocated resources when the users and data size will grow.
* The scalability of distributed systems mainly relies on the implementation of standards by each actor using the system. It will require the maintainer to only make sure the files are stored on a scalable static serving server (cheap, stable, and efficient solution)

Pull the data, play with it locally, edit it, push it back, authenticate with [SOLID](https://solidproject.org/)

## [IndexedDB](https://www.w3.org/TR/IndexedDB-2)

I recently discovered the [IndexedDB W3C recommendation](https://www.w3.org/TR/IndexedDB-2) for large scale in-browser structured database, it seems like an ideal candidate to store and access RDF data in the browser at relatively large scale (this might depend on the user browser though)

Here is IndexedDB description [according to Google](https://developers.google.com/web/ilt/pwa/working-with-indexeddb):

> IndexedDB is a large-scale, NoSQL storage system. It lets you store just about anything in the user's browser. In addition to the usual search, get, and put actions, IndexedDB also supports transactions.

Here is the IndexedDB description [according to Mozilla](https://developer.mozilla.org/en/docs/Web/API/IndexedDB_API):

> IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high performance searches of this data. While DOM Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data. IndexedDB provides a solution.

So let's try to look into this list to see if there are some interesting implementation for manipulating relatively large RDF datasets directly in the browser!

## [RDF JS](https://rdf.js.org )

Let's look into the reference website for RDF JavaScript implementations: https://rdf.js.org 

33 libraries are listed. With a cryptic category assigned for each: DataFactory, DataFactory Sink, or Dataset

A lot of those libraries seems to be parsers or streamers implementing a RDF specification for JavaScript: http://rdf.js.org/data-model-spec. The specification provides an interface for JavaScript Object (basically subject, predicate, object, graph, like the existing RDF specification).

## [node-quadstore](https://github.com/beautifulinteractions/node-quadstore)

https://github.com/beautifulinteractions/node-quadstore uses LevelDB

Unfortunately, node-quad-store uses [LevelDB](https://github.com/google/leveldb#limitations) under the hood, so it is not browser based, it requires a NodeJS server to run.

> * This is not a SQL database. It does not have a relational data model, it does not support SQL queries, and it has no support for indexes.
>
> * Only a single process (possibly multi-threaded) can access a particular database at a time.
> * There is no client-server support builtin to the library. An application that needs such support will have to wrap their own server around the library.

## [Graphy.js](https://github.com/blake-regalia/graphy.js)

The graph is stored in memory, and they nicely warn that the main strength of Graphy is performing fast operations on small datasets

> This data structure is best suited for storing quads in memory when the  objective is to perform set operations quickly (e.g., union, difference, intersection, etc.) on relatively small datasets (still much better  storage density than the alternatives – see [memory usage comparison](https://github.com/blake-regalia/graphy.js/blob/master/perf/README.md#distinct-task) in the performance document).

See the documentation to try it out: https://graphy.link/memory.dataset.fast

## What about IndexedDB then?

7 years ago, someone asked if there was any interest in implementing something like "IndexedGraph" that would enable storing and querying RDF data similarly to IndexedDB: https://lists.w3.org/Archives/Public/public-rdfjs/2013Oct/0040.html. But I could not find any other mention of using IndexedDB for RDF. 

Note, there are a [few wrappers to use IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API#see_also) with NoSQL databases like CouchDB, or query it as SQL.

Implementing full SPARQL support would be a relatively large project. But it seems like a wrapper could be written to have better support to work with JSON-LD RDF data in IndexedDB. 

Here are some ideas of a few simple features that could be helpful:

* automated creation of prefix table, and resolution of the context
* reuse existing RDF JS parsers and streamers to synchronize data from the source to IndexedDB
* provide functions to retrieve the complete URI of a property or an object (instead of just the JSON key)