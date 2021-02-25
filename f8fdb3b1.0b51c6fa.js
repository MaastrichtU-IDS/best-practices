(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{122:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var a=r(3),o=r(7),i=(r(0),r(128)),n={id:"ids-projects",title:"IDS Projects"},c={unversionedId:"ids-projects",id:"ids-projects",isDocsHomePage:!1,title:"IDS Projects",description:"Motivation: lack of semantic interoperability",source:"@site/docs/ids-projects.md",slug:"/ids-projects",permalink:"/best-practices/docs/ids-projects",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/main/website/docs/ids-projects.md",version:"current",lastUpdatedBy:"thendriks",lastUpdatedAt:1614250004,sidebar:"docs",previous:{title:"Write documentation",permalink:"/best-practices/docs/documentation"},next:{title:"Services available at IDS",permalink:"/best-practices/docs/ids-services"}},s=[{value:"Motivation: lack of semantic interoperability",id:"motivation-lack-of-semantic-interoperability",children:[]},{value:"What is the IDS Projects dashboard?",id:"what-is-the-ids-projects-dashboard",children:[]},{value:"Objectives",id:"objectives",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Making IDS Projects easily findable and accessible",id:"making-ids-projects-easily-findable-and-accessible",children:[]},{value:"What is an IDS project?",id:"what-is-an-ids-project",children:[]},{value:"Which projects should be added?",id:"which-projects-should-be-added",children:[]},{value:"How do I add a new IDS Project?",id:"how-do-i-add-a-new-ids-project",children:[]},{value:"Add a IDS project from your personal Github repository",id:"add-a-ids-project-from-your-personal-github-repository",children:[]},{value:"How/When do I get to see my IDS Project?",id:"howwhen-do-i-get-to-see-my-ids-project",children:[]},{value:"Other research project registries",id:"other-research-project-registries",children:[]},{value:"Future work",id:"future-work",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"motivation-lack-of-semantic-interoperability"},"Motivation: lack of semantic interoperability"),Object(i.b)("p",null,"The lack of well-defined indexing practices is a common problem in most institutional repositories. Researchers will typically assign keywords to their projects, however, these terms are not extracted from a controlled vocabulary or thesaurus. This leads to ambiguity and lack of standardization in terms which are used to describe the content of their projects. As solution to the problem, IDS has undertaken the effort to design a search engine that provides a single entry to our research projects. The result is the ",Object(i.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/projects/"},"IDS Dashboard"),", particularly aimed at making our projects findable, accessible, interoperable and reusable (",Object(i.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/best-practices/docs/fair-data"},"FAIR"),"), an essential component to reducing barriers for access. In addition to facilitating access to our projects, IDS Dashboard reconciles and indexes projects using metadata descriptors that come directly from the Github repository using a machine-readable ontology called Description of a project (",Object(i.b)("a",{parentName:"p",href:"https://github.com/ewilderj/doap/wiki"},"DOAP"),")."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"what-is-the-ids-projects-dashboard"},"What is the IDS Projects dashboard?"),Object(i.b)("p",null,"A website for projects at the ",Object(i.b)("a",{parentName:"p",href:"http://maastrichtuniversity.nl/ids/"},"Institute of Data Science")," at Maastricht University. It is designed to help you find specific projects that meet your interests and to gain a broader understanding of the wide variety of work currently underway in the IDS."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"objectives"},"Objectives"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Integrate and preserve the intellectual production of IDS."),Object(i.b)("li",{parentName:"ol"},"Increment the visibility and impact of our scientific output.")),Object(i.b)("p",null,"We hope that having IDS projects more discoverable through tools such as IDS Dashboard will encourage scientists to share their project more broadly and do it in a way that makes their project truly ",Object(i.b)("a",{parentName:"p",href:"https://fairsharing.org/"},"FAIR"),"."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"architecture"},"Architecture"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"A Python script running regularly using a GitHub Actions workflow to retrieve information about IDS projects on GitHub. Data about projects stored in a triplestore, and releases data stored in a JSON file on GitHub.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"A React web UI in TypeScript which retrieves projects information from the SPARQL endpoint, and releases info from the JSON file on GitHub. You will find specific information ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/projects#get-data-from-github-graphql-api"},"here"),"."))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"making-ids-projects-easily-findable-and-accessible"},"Making IDS Projects easily findable and accessible"),Object(i.b)("p",null,"There is a growing research interest in making the ",Object(i.b)("a",{parentName:"p",href:"https://content.iospress.com/articles/data-science/ds190026"},"project (software) FAIR")," and many funding agencies and academic publishers require proper location, citation and replication of any digital object related to your project. While the IDS Dashboard doesn't provide persistent interoperable identifiers (e.g. ",Object(i.b)("a",{parentName:"p",href:"https://www.doi.org/"},"DOI"),"), our tool presents relevant information of a project in a incisive manner. Humans will be able to quickly find an IDS project that is interesting them and similarly, machines will communicate to exchange relevant project descriptors using the ",Object(i.b)("strong",{parentName:"p"},"machine-readable")," ontology DOAP. This is accomplished by including a simple RDF file inside your Github repository project. The file is easily ",Object(i.b)("strong",{parentName:"p"},"findable")," to humans, and machine can ",Object(i.b)("strong",{parentName:"p"},"access")," and determine the project's status by searching for a string matching a specific pattern in a set of possible files."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"what-is-an-ids-project"},"What is an IDS project?"),Object(i.b)("p",null,"An IDS project is a publicly available code repository concerning IDS in varying state of usability, development and support. A IDS project can typically be classified as following:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"\ud83d\uddc2\ufe0f Type of IDS project"),Object(i.b)("th",{parentName:"tr",align:null}))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"\ud83e\uddea Research"),Object(i.b)("td",{parentName:"tr",align:null},'A folder that contains all your "',Object(i.b)("em",{parentName:"td"},"Research"),"\" related project's file")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"\ud83d\udc68\u200d\ud83d\udcbb Development"),Object(i.b)("td",{parentName:"tr",align:null},'A folder that contains all your "',Object(i.b)("em",{parentName:"td"},"Development"),"\" related project's file")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"\ud83c\udf93  Education"),Object(i.b)("td",{parentName:"tr",align:null},'A folder that contains all your "',Object(i.b)("em",{parentName:"td"},"Education"),"\" related project's file")))),Object(i.b)("h3",{id:"which-projects-should-be-added"},"Which projects should be added?"),Object(i.b)("p",null,"As a rule of thumb, a project should be added to the IDS Dashboard if all of the following apply:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"the project is not private,"),Object(i.b)("li",{parentName:"ol"},"we can realistically claim (co-)ownership of the project"),Object(i.b)("li",{parentName:"ol"},"the project could be useful to somebody else.")),Object(i.b)("p",null,"Under this definition, the following  examples are not recorded in the IDS Dashboard:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A script meant to manipulate data unique to a problem we are having (violates 3)."),Object(i.b)("li",{parentName:"ul"},"A package that is very useful but that IDS wasn't involved with (violates 2).")),Object(i.b)("p",null,"The project can be stored either at MaastrichtU-IDS organization or your personal ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS?utf8=%E2%9C%93&q=&type=&language="},"GitHub")," repository."),Object(i.b)("h3",{id:"how-do-i-add-a-new-ids-project"},"How do I add a new IDS Project?"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Go to the ",Object(i.b)("a",{parentName:"li",href:"https://maastrichtu-ids.github.io/projects/"},"IDS Project Dashboard website"),"."),Object(i.b)("li",{parentName:"ol"},"In the left pane,  click on ",Object(i.b)("a",{parentName:"li",href:"https://maastrichtu-ids.github.io/projects/create-doap"},"Create a DOAP description for your project"),"."),Object(i.b)("li",{parentName:"ol"},"You should now see a form. Each field has a brief explanation of what you should fill in."),Object(i.b)("li",{parentName:"ol"},"Complete the form. Don't worry about mistakes, you can always come back later and fix it!"),Object(i.b)("li",{parentName:"ol"},"Don't forget to click ",Object(i.b)("inlineCode",{parentName:"li"},"Download DOAP description file")," when you 're done.")),Object(i.b)("h3",{id:"add-a-ids-project-from-your-personal-github-repository"},"Add a IDS project from your personal Github repository"),Object(i.b)("p",null,"IDS projects that are stored at your personal Github can be also added to IDS Dashboard. To do so, we request the following information to add into our ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/projects/blob/main/EXTERNAL_REPOSITORIES.txt"},"External Repository database"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"user name."),Object(i.b)("li",{parentName:"ol"},"repository name.")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/projects/issues"},"Create an issue")," if it is hosted under a different name, we will add it to the list of external repositories."),Object(i.b)("h3",{id:"howwhen-do-i-get-to-see-my-ids-project"},"How/When do I get to see my IDS Project?"),Object(i.b)("p",null,"Your project to the IDS Dashboard do not show up immediately. The length of delay depends on the frequency at which data is harvested from the GitHub GraphQL API."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"other-research-project-registries"},"Other research project registries"),Object(i.b)("p",null,"The following lists software repositories used in other organizations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://projects.apache.org/"},"Apache Projects Directory")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://sourceforge.net/"},"SourceForge")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://opensource.google/projects/explore/featured"},"Google Open Source Projects")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://pypi.org/search/?q=&o="},"Python Packages")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://ropensci.org/packages/"},"R Open Science")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.research-software.nl/"},"Research-Software.nl")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://mloss.org/software/"},"Machine learning open source software")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://mloss.org/software/"},"Code Ocean")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://finos.github.io/?sort=hotness-down"},"Fintech Open Source Foundation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/NLeSC/awesome-research-software-registries"},"Others"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"future-work"},"Future work"),Object(i.b)("p",null,"In our initial efforts to create the IDS Dashboard, we reached a conclusion to use DOAP to describe a IDS project. We were surprised to see that the descriptors associated to DOAP were close to Github properties. While our early development focused on a manual configuration of DOAP, there may be future opportunities to make this process rather automatically. For instance, the descriptors needed for the metadata are already available from public sources such ",Object(i.b)("a",{parentName:"p",href:"https://www.gharchive.org/"},"GH Archive")," or ",Object(i.b)("a",{parentName:"p",href:"https://about.zenodo.org/"},"Zenodo"),". These primary sources provide access to their data via API. We will take harvesting this data via python scripting into consideration."))}p.isMDXComponent=!0},128:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var a=r(0),o=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,n=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),h=a,u=b["".concat(n,".").concat(h)]||b[h]||d[h]||i;return r?o.a.createElement(u,c(c({ref:t},l),{},{components:r})):o.a.createElement(u,c({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,n[1]=c;for(var l=2;l<i;l++)n[l]=r[l];return o.a.createElement.apply(null,n)}return o.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);