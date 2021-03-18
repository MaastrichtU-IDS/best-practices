(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{134:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),l=p(a),m=n,u=l["".concat(o,".").concat(m)]||l[m]||d[m]||i;return a?r.a.createElement(u,s(s({ref:t},b),{},{components:a})):r.a.createElement(u,s({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(134)),o={id:"ids-services",title:"Services available at IDS"},s={unversionedId:"ids-services",id:"ids-services",isDocsHomePage:!1,title:"Services available at IDS",description:"The following services are hosted at the Institute of Data Science. Feel free to contact us if you want to make use of any of them, or are interested in deploying your own services on IDS servers.",source:"@site/docs/ids-services.md",slug:"/ids-services",permalink:"/best-practices/docs/ids-services",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/main/website/docs/ids-services.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1616083125,sidebar:"docs",previous:{title:"IDS Projects",permalink:"/best-practices/docs/ids-projects"},next:{title:"IDS development workshops",permalink:"/best-practices/docs/workshops"}},c=[{value:"Data Science Research Infrastructure",id:"data-science-research-infrastructure",children:[]},{value:"GraphDB triplestore database",id:"graphdb-triplestore-database",children:[]},{value:"Web Prot\xe9g\xe9 server",id:"web-prot\xe9g\xe9-server",children:[]},{value:"SOLID server",id:"solid-server",children:[]},{value:"Nanopublications server",id:"nanopublications-server",children:[]},{value:"FAIR Data Point server",id:"fair-data-point-server",children:[]}],b={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The following services are hosted at the Institute of Data Science. Feel free to contact us if you want to make use of any of them, or are interested in deploying your own services on IDS servers."),Object(i.b)("h2",{id:"data-science-research-infrastructure"},"Data Science Research Infrastructure"),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/dsri-documentation"},"Data Science Research Infrastructure (DSRI)")," is a distributed and scalable infrastructure to run Data Science experiments. It enables you to run any workflow and service using Docker containers, on servers with 512 GB RAM, and 128 CPU cores per server. "),Object(i.b)("p",null,"Additionally the DSRI also enables you to deploy various popular Data Science applications in a few clicks, to develop resource consuming experiments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Multiple flavors of ",Object(i.b)("a",{parentName:"li",href:"https://github.com/jupyter/docker-stacks"},"JupyterLab")," (scipy, tensorflow, all-spark, java kernel and more), and JupyterHub with GitHub authentication"),Object(i.b)("li",{parentName:"ul"},"RStudio, with a complementary Shiny server"),Object(i.b)("li",{parentName:"ul"},"VisualStudio ",Object(i.b)("a",{parentName:"li",href:"https://github.com/cdr/code-server"},"Code server")),Object(i.b)("li",{parentName:"ul"},"Tensorflow, or PyTorch on Nvidia GPU (with JupyterLab or VisualStudio Code)"),Object(i.b)("li",{parentName:"ul"},"SQL databases (MariaDB, MySQL, PostgreSQL)"),Object(i.b)("li",{parentName:"ul"},"NoSQL databases (MongoDB, Redis)"),Object(i.b)("li",{parentName:"ul"},"Graph databases (GraphDB, Blazegraph, Virtuoso)")),Object(i.b)("p",null,"Distributed computing can also be run using our Apache Spark or Apache Flink clusters."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Request an account")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You can learn more about how to request an account on the DSRI on its website: ",Object(i.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/dsri-documentation"},"https://maastrichtu-ids.github.io/dsri-documentation")))),Object(i.b)("h2",{id:"graphdb-triplestore-database"},"GraphDB triplestore database"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Access GraphDB")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("a",{parentName:"p",href:"https://graphdb.ontotext.com"},"Ontotext GraphDB")," is deployed at ",Object(i.b)("a",{parentName:"p",href:"https://graphdb.dumontierlab.com"},"https://graphdb.dumontierlab.com")))),Object(i.b)("p",null,"You can create an account, and request us to be granted permissions to create new repositories."),Object(i.b)("p",null,"Each repository acts like an isolated triplestore database coming with various features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Public or private SPARQL endpoints publicly accessible from anywhere on the web (CORS has been enabled, so you can easily query the SPARQL endpoint using JavaScript)"),Object(i.b)("li",{parentName:"ul"},"Easy login to update data using a username/password combination"),Object(i.b)("li",{parentName:"ul"},"Multiple inference rulesets available, such as RDFS and OWL. You can also upload any custom ruleset."),Object(i.b)("li",{parentName:"ul"},"Automated SHACL Shapes validation (GraphDB will validate all triples uploaded against the provided SHACL shapes)"),Object(i.b)("li",{parentName:"ul"},"User friendly web UI to manage your repository: import RDF files, delete graphs, define new prefix/namespaces"),Object(i.b)("li",{parentName:"ul"},"The repository deployed is a RDF4J repository, enabling all features from the RDF4J stack (such as the RDF4J API to manage the triplestore)."),Object(i.b)("li",{parentName:"ul"},"Search index can be easily enabled to make text search queries much faster.")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"More documentation about triplestores")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Visit the ",Object(i.b)("a",{parentName:"p",href:"https://d2s.semanticscience.org/docs/store-rdf"},"data2services documentation website")," for more details on storage options for RDF data."))),Object(i.b)("h2",{id:"web-prot\xe9g\xe9-server"},"Web Prot\xe9g\xe9 server"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Access Prot\xe9g\xe9")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"We host our own instance of web Prot\xe9g\xe9 at ",Object(i.b)("a",{parentName:"p",href:"https://protege.semanticscience.org"},"https://protege.semanticscience.org")))),Object(i.b)("p",null,"We enabled some features not enabled in ",Object(i.b)("a",{parentName:"p",href:"https://webprotege.stanford.edu/"},"Stanford's web Prot\xe9g\xe9"),", such as defining axiom using the OWL Manchester syntax."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create an account in a minute by providing a username, email and password.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a new Ontology project")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Start building OWL ontologies! You can also import existing ontologies.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Invite other users to collaborate on your ontology, or make your ontology accessible/editable by anyone with an account on IDS web Prot\xe9g\xe9 by going to the ",Object(i.b)("strong",{parentName:"p"},"Share")," tab."))),Object(i.b)("h2",{id:"solid-server"},"SOLID server"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Access SOLID server")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"We host a ",Object(i.b)("a",{parentName:"p",href:"https://github.com/solid/node-solid-server"},"node SOLID server")," on IDS servers at ",Object(i.b)("a",{parentName:"p",href:"https://solid.semanticscience.org"},"https://solid.semanticscience.org")))),Object(i.b)("p",null,"This server enables you to create SOLID pods hosted on our servers."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create your account at ",Object(i.b)("a",{parentName:"li",href:"https://solid.semanticscience.org"},"https://solid.semanticscience.org")),Object(i.b)("li",{parentName:"ol"},"Contact us to get your SOLID account enabled.")),Object(i.b)("h2",{id:"nanopublications-server"},"Nanopublications server"),Object(i.b)("p",null,"A ",Object(i.b)("a",{parentName:"p",href:"http://nanopub.org/wordpress/"},"Nanopublications")," server is deployed on IDS servers, and part of the Nanopublications network (which replicates published Nanopublications on multiple nodes). Feel free to use the Nanopublication network to publish small piece of RDF data."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Access Nanopublications server")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The Nanopublications server can be accessed at ",Object(i.b)("a",{parentName:"p",href:"http://server.np.dumontierlab.com"},"http://server.np.dumontierlab.com")))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Access Nanopublications grlc API")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The GRLC API to query the Nanopublications server can be accessed at ",Object(i.b)("a",{parentName:"p",href:"http://grlc.np.dumontierlab.com/api/local/local"},"http://grlc.np.dumontierlab.com/api/local/local")))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Access Nanopublications HDT ")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The Linked Data Fragment interface to access the Nanopublications stored as ",Object(i.b)("a",{parentName:"p",href:"https://www.rdfhdt.org/"},"HDT")," (compressed RDF) can be accessed at ",Object(i.b)("a",{parentName:"p",href:"http://ldf.np.dumontierlab.com"},"http://ldf.np.dumontierlab.com")))),Object(i.b)("p",null,"Here are some interesting resources for Nanopublications:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/vemonet/nanobench"},"Nanobench")," web UI to publish nanopublication using templated web forms."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/fair-workflows/Nanopub"},"Nanopub Python"),": Python client for searching, publishing and modifying nanopublications (require Java installed, it makes use of nanopub-java under the hood)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/Nanopublication/nanopub-java"},"Nanopub-java")," application to publish nanopublication using Java.")),Object(i.b)("h2",{id:"fair-data-point-server"},"FAIR Data Point server"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Access FAIR Data Point")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"A ",Object(i.b)("a",{parentName:"p",href:"https://www.research-software.nl/software/fairdatapoint"},"FAIR Data Point")," server is deployed at ",Object(i.b)("a",{parentName:"p",href:"http://fairdatapoint.semanticscience.org"},"http://fairdatapoint.semanticscience.org")))),Object(i.b)("p",null,"It enables enables data owners to expose their data sets using rich machine-readable metadata through a RESTful web service."))}p.isMDXComponent=!0}}]);