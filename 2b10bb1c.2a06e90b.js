(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{136:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,h=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return a?r.a.createElement(h,s(s({ref:t},l),{},{components:a})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(136)),i=["components"],s={id:"publish-data",title:"Publish data"},c={unversionedId:"publish-data",id:"publish-data",isDocsHomePage:!1,title:"Publish data",description:"Publish to our public GraphDB triplestore",source:"@site/docs/publish-data.md",slug:"/publish-data",permalink:"/best-practices/docs/publish-data",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/main/website/docs/publish-data.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1623454596,sidebar:"docs",previous:{title:"IDS development workshops",permalink:"/best-practices/docs/workshops"}},l=[{value:"Publish to our public GraphDB triplestore",id:"publish-to-our-public-graphdb-triplestore",children:[{value:"Create the GraphDB repository",id:"create-the-graphdb-repository",children:[]},{value:"Edit your repository access",id:"edit-your-repository-access",children:[]},{value:"Optional: enable GraphDB search index",id:"optional-enable-graphdb-search-index",children:[]},{value:"Automate data processing and loading",id:"automate-data-processing-and-loading",children:[]}]},{value:"Deploy a serverless API for triplestore",id:"deploy-a-serverless-api-for-triplestore",children:[]}],p={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"publish-to-our-public-graphdb-triplestore"},"Publish to our public GraphDB triplestore"),Object(o.b)("p",null,"Create a new repository on our GraphDB triplestore at ",Object(o.b)("a",{parentName:"p",href:"https://graphdb.dumontierlab.com/"},"https://graphdb.dumontierlab.com/")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Ask for permissions")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Ask us to get the permissions to create new repositories after creating an account."))),Object(o.b)("h3",{id:"create-the-graphdb-repository"},"Create the GraphDB repository"),Object(o.b)("p",null,"\ud83d\udc69\u200d\ud83d\udcbb Go to ",Object(o.b)("strong",{parentName:"p"},"Setup")," > ",Object(o.b)("strong",{parentName:"p"},"Repositories")," > ",Object(o.b)("strong",{parentName:"p"},"Create Repository")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Or click here: ",Object(o.b)("a",{parentName:"li",href:"https://graphdb.dumontierlab.com/repository/create"},"https://graphdb.dumontierlab.com/repository/create"))),Object(o.b)("p",null,"\ud83d\udc68\u200d\ud83d\udcbb Choose the settings of your repository (leave the default if not mentioned here):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Ruleset"),": use ",Object(o.b)("strong",{parentName:"li"},"RDFS-Plus (Optimized)")," by default, or a OWL ruleset if you are performing reasoning using OWL ontologies"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Supports SHACL validation"),": enable if you plan on using SHACL shapes to validate the RDF loaded in the repository. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Visit ",Object(o.b)("a",{parentName:"li",href:"https://maastrichtu-ids.github.io/shapes-of-you"},"https://maastrichtu-ids.github.io/shapes-of-you")," to find SHACL Shapes"),Object(o.b)("li",{parentName:"ul"},"Add new shapes to IDS Shapes repository: ",Object(o.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/shacl-shapes"},"https://github.com/MaastrichtU-IDS/shacl-shapes")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Use context index"),": ",Object(o.b)("strong",{parentName:"li"},"enable")," this to index the contexts (aka. graphs)"),Object(o.b)("li",{parentName:"ul"},"For large dataset:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Entity index size"),": increase this to ",Object(o.b)("strong",{parentName:"li"},"999999999")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Entity ID bit-size"),": increase this to ",Object(o.b)("strong",{parentName:"li"},"40"))))),Object(o.b)("p",null,"To access your repository:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"SPARQL endpoint at ",Object(o.b)("a",{parentName:"li",href:"https://graphdb.dumontierlab.com/repositories/my-repository"},"https://graphdb.dumontierlab.com/repositories/my-repository")),Object(o.b)("li",{parentName:"ul"},"SPARQL endpoint to run update queries (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"INSERT"),"): ",Object(o.b)("a",{parentName:"li",href:"https://graphdb.dumontierlab.com/repositories/my-repository/statements"},"https://graphdb.dumontierlab.com/repositories/my-repository/statements")),Object(o.b)("li",{parentName:"ul"},"GraphDB admin web UI: ",Object(o.b)("a",{parentName:"li",href:"https://graphdb.dumontierlab.com"},"https://graphdb.dumontierlab.com")," and change the repository using the button at the top right of the screen.")),Object(o.b)("h3",{id:"edit-your-repository-access"},"Edit your repository access"),Object(o.b)("p",null,"By default your repository will not be available publicly."),Object(o.b)("p",null,"\ud83d\udc69\u200d\ud83d\udcbb Go to ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://graphdb.dumontierlab.com/users"},"Users and Access"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Change the ",Object(o.b)("strong",{parentName:"li"},"Free Access Settings")," (top right of the page) to enable public access to read the SPARQL endpoint of your repository",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Find your repository and enable ",Object(o.b)("strong",{parentName:"li"},"Read")," access (checkbox on the left)"))),Object(o.b)("li",{parentName:"ul"},"You can also give ",Object(o.b)("strong",{parentName:"li"},"Write")," access to other users",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"We usually give ",Object(o.b)("strong",{parentName:"li"},"Write")," access to the ",Object(o.b)("inlineCode",{parentName:"li"},"import_user")," to be used in automated workflow (to automatically upload new data to the repository)")))),Object(o.b)("h3",{id:"optional-enable-graphdb-search-index"},"Optional: enable GraphDB search index"),Object(o.b)("p",null,"You can easily enable GraphDB ",Object(o.b)("a",{parentName:"p",href:"https://lucene.apache.org/"},"Lucene search index")," to quickly search string in your triplestore"),Object(o.b)("p",null,"Here is an example to create a search index for the ",Object(o.b)("inlineCode",{parentName:"p"},"rdfs:label")," and ",Object(o.b)("inlineCode",{parentName:"p"},"dct:description")," properties."),Object(o.b)("p",null,"\ud83d\udc68\u200d\ud83d\udcbb Running this in your GraphDB repository SPARQL editor will insert the triples and the search index will be created (just wait a bit)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-SPARQL"},'PREFIX luc: <http://www.ontotext.com/owlim/lucene#>\nINSERT DATA { \n    # luc:moleculeSize luc:setParam "1" .\n    luc:includePredicates luc:setParam "http://www.w3.org/2000/01/rdf-schema#label http://purl.org/dc/terms/description" .\n    luc:useRDFRank luc:setParam "yes" .\n    luc:searchIndex luc:createIndex "true" .\n}\n')),Object(o.b)("p",null,"Query the GraphDB search index:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-SPARQL"},"PREFIX luc: <http://www.ontotext.com/owlim/lucene#>\nSELECT ?foundUri ?foundLabel {\n    ?foundLabel luc:searchIndex 'TEXT_TO_SEARCH*' ;\n    luc:score ?score .\n    ?foundUri ?p ?foundLabel .\n} ORDER BY ?score LIMIT 200\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Wildcard")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"We are using a ",Object(o.b)("inlineCode",{parentName:"p"},"*")," wildcard at the end to match all strings starting with the string ",Object(o.b)("inlineCode",{parentName:"p"},"TEXT_TO_SEARCH")))),Object(o.b)("h3",{id:"automate-data-processing-and-loading"},"Automate data processing and loading"),Object(o.b)("p",null,"RDF data can be automatically generated and loaded using GitHub Actions workflows."),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/food-claims-kg/blob/master/.github/workflows/generate-rdf.yml"},"this workflow")," to generate data using a simple ",Object(o.b)("inlineCode",{parentName:"p"},"convert_to_rdf.py")," file and load it in the triplestore"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Download input file from Google Docs and run python script to generate RDF")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'    - name: Install Python dependencies\n      run: |\n        python -m pip install -r requirements.txt\n    - name: Download CSV files from Google docs\n      run: |\n        mkdir -p data/output\n        wget -O data/food-claims-kg.xlsx "https://docs.google.com/spreadsheets/d/1RWZ6AlGB8m7PO5kjsbbbeI4ETLwvKLOvkrzOpl8zAM8/export?format=xlsx&id=1RWZ6AlGB8m7PO5kjsbbbeI4ETLwvKLOvkrzOpl8zAM8"\n    - name: Run Python script to generate RDF\n      run: |\n        python src/convert_to_rdf.py\n')),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Optional: clear existing graph")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'    - name: Clear existing graph\n      uses: vemonet/sparql-operations-action@v1\n      with:\n        query: "CLEAR GRAPH <https://w3id.org/foodkg/graph>"\n        endpoint: https://graphdb.dumontierlab.com/repositories/FoodHealthClaimsKG/statements\n        user: ${{ secrets.GRAPHDB_USER }}\n        password: ${{ secrets.GRAPHDB_PASSWORD }}\n')),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Load RDF file previously generated by the workflow in ",Object(o.b)("inlineCode",{parentName:"li"},"data/output/food_health_kg.ttl")," for the example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'    - name: Import RDF files in the triplestore\n      uses: MaastrichtU-IDS/RdfUpload@master\n      with:\n        file: data/output/food_health_kg.ttl\n        endpoint: https://graphdb.dumontierlab.com/repositories/FoodHealthClaimsKG/statements\n        user: ${{ secrets.GRAPHDB_USER }}\n        password: ${{ secrets.GRAPHDB_PASSWORD }}\n        graph: "https://w3id.org/foodkg/graph"\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Secrets")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You will need to define those 2 secrets in your GitHub repository workflows secrets: ",Object(o.b)("inlineCode",{parentName:"p"},"GRAPHDB_USER")," and ",Object(o.b)("inlineCode",{parentName:"p"},"GRAPHDB_PASSWORD")))),Object(o.b)("h2",{id:"deploy-a-serverless-api-for-triplestore"},"Deploy a serverless API for triplestore"),Object(o.b)("p",null,"Deploying an API to access and explore your SPARQL endpoint is really easy to do with ",Object(o.b)("a",{parentName:"p",href:"http://grlc.io/"},"grlc.io"),". You just need to define a few SPARQL queries in a GitHub repository, and grlc.io will handle everything else to expose a Swagger API (aka. Open API) to access your knowledge graph. "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Enable easy data exploration")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\ud83e\udded This API will be the entrypoint for people who want to discover your data: they can quickly explore and understand the structure of your knowledge graph through the query you exposed."))),Object(o.b)("p",null,"To make this example easier to reproduce, we will use the existing ",Object(o.b)("a",{parentName:"p",href:"http://grlc.io/"},"grlc.io")," API deployment defined for the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/food-claims-kg"},"food-claims-kg")," as example"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\ud83d\udc69\u200d\ud83d\udcbb Provide the URL of SPARQL endpoint to query in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/food-claims-kg/blob/master/endpoint.txt"},Object(o.b)("inlineCode",{parentName:"a"},"endpoint.txt")," file"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\ud83d\udc68\u200d\ud83d\udcbb Define the SPARQL queries in ",Object(o.b)("inlineCode",{parentName:"p"},".rq")," files at the base of the git repo."),Object(o.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"See ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/food-claims-kg/blob/master/get-claims-for-food.rq"},"this example of a ",Object(o.b)("inlineCode",{parentName:"a"},".rq")," file")," to define a SPARQL query with a parameter (used to filter using ",Object(o.b)("inlineCode",{parentName:"p"},"regex()"),").")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"That's it \ud83e\udd2f you can go to your API Swagger UI automatically generated and hosted by ",Object(o.b)("a",{parentName:"p",href:"http://grlc.io/"},"grlc.io")," based on the GitHub repository URL: ",Object(o.b)("a",{parentName:"p",href:"http://grlc.io/api-git/MaastrichtU-IDS/food-claims-kg"},"http://grlc.io/api-git/MaastrichtU-IDS/food-claims-kg")))),Object(o.b)("p",null,"Bonus: combine ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/food-claims-kg"},"grlc.io")," with the GraphDB search index query, and you have a Search API for your knowledge graph! \ud83d\udd0e"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"An active project")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The project is still active and reactive, feel free to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/CLARIAH/grlc/issues"},"post an issue")," if you face any problem."))))}b.isMDXComponent=!0}}]);