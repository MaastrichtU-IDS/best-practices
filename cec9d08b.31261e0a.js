(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),o=(a(0),a(130)),i={title:"A triplestore in your browser?",author:"Vincent Emonet",author_title:"Data Science engineer at IDS",author_url:"https://github.com/vemonet",tags:["web","rdf","development"],description:"Doing some exploration to handle large scale RDF knowledge graphs directly in the browser",hide_table_of_contents:!1},s={permalink:"/best-practices/blog/2021/03/02/rdf-in-the-browser",source:"@site/blog/2021-03-02-rdf-in-the-browser.md",description:"Doing some exploration to handle large scale RDF knowledge graphs directly in the browser",date:"2021-03-02T00:00:00.000Z",tags:[{label:"web",permalink:"/best-practices/blog/tags/web"},{label:"rdf",permalink:"/best-practices/blog/tags/rdf"},{label:"development",permalink:"/best-practices/blog/tags/development"}],title:"A triplestore in your browser?",readingTime:4.23,truncated:!0,nextItem:{title:"Publish Nanopublications",permalink:"/best-practices/blog/2021/01/19/usecase-nanopublication"}},l=[{value:"Git",id:"git",children:[]},{value:"IndexedDB",id:"indexeddb",children:[]},{value:"RDF JS",id:"rdf-js",children:[]},{value:"node-quadstore",id:"node-quadstore",children:[]},{value:"Graphy.js",id:"graphyjs",children:[]},{value:"What about IndexedDB then?",id:"what-about-indexeddb-then",children:[]}],c={toc:l};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Which solutions are available to store and access relatively large RDF file directly in a browser? Without the need for NodeJS, or anything else than a static server to publish files (using GitHub or GitLab Pages for example)"),Object(o.b)("p",null,"This would enable distributed processing, edition and querying of RDF data in the browser without requiring any installation, or any backend server to perform the processing or pre-processing. We would just need to host the JavaScript and RDF files on a static hosting service. When a user access the website it will download the JavaScript, which will download and handle the RDF. Additionally JS workers will be able to efficiently cache the data to avoid needing to reload everything at each new connection."),Object(o.b)("h2",{id:"git"},Object(o.b)("a",{parentName:"h2",href:"https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain"},"Git")),Object(o.b)("p",null,"This would allow to work with RDF data a bit like we work with code in ",Object(o.b)("inlineCode",{parentName:"p"},"git"),": in a distributed and scalable manner"),Object(o.b)("p",null,"Nowadays, Git has become a reference in software engineering, one of it's most important concept is distribution (done right). Which was aiming to overcome Subversion main problem: centralization. "),Object(o.b)("p",null,"In our case:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The scalability of centralized systems fully depends on the resources of the person/entity deploying the system (and requires a good connection). It will require the maintainer to increase allocated resources when the users and data size will grow."),Object(o.b)("li",{parentName:"ul"},"The scalability of distributed systems mainly relies on the implementation of standards by each actor using the system. It will require the maintainer to only make sure the files are stored on a scalable static serving server (cheap, stable, and efficient solution)")),Object(o.b)("p",null,"Pull the data, play with it locally, edit it, push it back, authenticate with ",Object(o.b)("a",{parentName:"p",href:"https://solidproject.org/"},"SOLID")),Object(o.b)("h2",{id:"indexeddb"},Object(o.b)("a",{parentName:"h2",href:"https://www.w3.org/TR/IndexedDB-2"},"IndexedDB")),Object(o.b)("p",null,"I recently discovered the ",Object(o.b)("a",{parentName:"p",href:"https://www.w3.org/TR/IndexedDB-2"},"IndexedDB W3C recommendation")," for large scale in-browser structured database, it seems like an ideal candidate to store and access RDF data in the browser at relatively large scale (this might depend on the user browser though)"),Object(o.b)("p",null,"Here is IndexedDB description ",Object(o.b)("a",{parentName:"p",href:"https://developers.google.com/web/ilt/pwa/working-with-indexeddb"},"according to Google"),":"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"IndexedDB is a large-scale, NoSQL storage system. It lets you store just about anything in the user's browser. In addition to the usual search, get, and put actions, IndexedDB also supports transactions.")),Object(o.b)("p",null,"Here is the IndexedDB description ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/API/IndexedDB_API"},"according to Mozilla"),":"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high performance searches of this data. While DOM Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data. IndexedDB provides a solution.")),Object(o.b)("p",null,"So let's try to look into this list to see if there are some interesting implementation for manipulating relatively large RDF datasets directly in the browser!"),Object(o.b)("h2",{id:"rdf-js"},Object(o.b)("a",{parentName:"h2",href:"https://rdf.js.org"},"RDF JS")),Object(o.b)("p",null,"Let's look into the reference website for RDF JavaScript implementations: ",Object(o.b)("a",{parentName:"p",href:"https://rdf.js.org"},"https://rdf.js.org")," "),Object(o.b)("p",null,"33 libraries are listed. With a cryptic category assigned for each: DataFactory, DataFactory Sink, or Dataset"),Object(o.b)("p",null,"A lot of those libraries seems to be parsers or streamers implementing a RDF specification for JavaScript: ",Object(o.b)("a",{parentName:"p",href:"http://rdf.js.org/data-model-spec"},"http://rdf.js.org/data-model-spec"),". The specification provides an interface for JavaScript Object (basically subject, predicate, object, graph, like the existing RDF specification)."),Object(o.b)("h2",{id:"node-quadstore"},Object(o.b)("a",{parentName:"h2",href:"https://github.com/beautifulinteractions/node-quadstore"},"node-quadstore")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/beautifulinteractions/node-quadstore"},"https://github.com/beautifulinteractions/node-quadstore")," uses LevelDB"),Object(o.b)("p",null,"Unfortunately, node-quad-store uses ",Object(o.b)("a",{parentName:"p",href:"https://github.com/google/leveldb#limitations"},"LevelDB")," under the hood, so it is not browser based, it requires a NodeJS server to run."),Object(o.b)("blockquote",null,Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"This is not a SQL database. It does not have a relational data model, it does not support SQL queries, and it has no support for indexes.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Only a single process (possibly multi-threaded) can access a particular database at a time.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"There is no client-server support builtin to the library. An application that needs such support will have to wrap their own server around the library.")))),Object(o.b)("h2",{id:"graphyjs"},Object(o.b)("a",{parentName:"h2",href:"https://github.com/blake-regalia/graphy.js"},"Graphy.js")),Object(o.b)("p",null,"The graph is stored in memory, and they nicely warn that the main strength of Graphy is performing fast operations on small datasets"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This data structure is best suited for storing quads in memory when the  objective is to perform set operations quickly (e.g., union, difference, intersection, etc.) on relatively small datasets (still much better  storage density than the alternatives \u2013 see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/blake-regalia/graphy.js/blob/master/perf/README.md#distinct-task"},"memory usage comparison")," in the performance document).")),Object(o.b)("p",null,"See the documentation to try it out: ",Object(o.b)("a",{parentName:"p",href:"https://graphy.link/memory.dataset.fast"},"https://graphy.link/memory.dataset.fast")),Object(o.b)("h2",{id:"what-about-indexeddb-then"},"What about IndexedDB then?"),Object(o.b)("p",null,'7 years ago, someone asked if there was any interest in implementing something like "IndexedGraph" that would enable storing and querying RDF data similarly to IndexedDB: ',Object(o.b)("a",{parentName:"p",href:"https://lists.w3.org/Archives/Public/public-rdfjs/2013Oct/0040.html"},"https://lists.w3.org/Archives/Public/public-rdfjs/2013Oct/0040.html"),". But I could not find any other mention of using IndexedDB for RDF. "),Object(o.b)("p",null,"Note, there are a ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API#see_also"},"few wrappers to use IndexedDB")," with NoSQL databases like CouchDB, or query it as SQL."),Object(o.b)("p",null,"Implementing full SPARQL support would be a relatively large project. But it seems like a wrapper could be written to have better support to work with JSON-LD RDF data in IndexedDB. "),Object(o.b)("p",null,"Here are some ideas of a few simple features that could be helpful:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"automated creation of prefix table, and resolution of the context"),Object(o.b)("li",{parentName:"ul"},"reuse existing RDF JS parsers and streamers to synchronize data from the source to IndexedDB"),Object(o.b)("li",{parentName:"ul"},"provide functions to retrieve the complete URI of a property or an object (instead of just the JSON key)")))}d.isMDXComponent=!0},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(a),u=r,h=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return a?n.a.createElement(h,s(s({ref:t},c),{},{components:a})):n.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);