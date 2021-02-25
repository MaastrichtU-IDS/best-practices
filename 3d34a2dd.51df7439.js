(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=b(a),m=n,u=d["".concat(o,".").concat(m)]||d[m]||l[m]||r;return a?i.a.createElement(u,c(c({ref:t},p),{},{components:a})):i.a.createElement(u,c({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<r;p++)o[p]=a[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),r=(a(0),a(128)),o={id:"repository-administration",title:"Repository Administration"},c={unversionedId:"repository-administration",id:"repository-administration",isDocsHomePage:!1,title:"Repository Administration",description:"Once your code repository is available publicly, a number of steps can be taken to allow others to more easily reuse your code in their own work.",source:"@site/docs/repository-administration.md",slug:"/repository-administration",permalink:"/best-practices/docs/repository-administration",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/main/website/docs/repository-administration.md",version:"current",lastUpdatedBy:"thendriks",lastUpdatedAt:1614250004,sidebar:"docs",previous:{title:"Publishing Code",permalink:"/best-practices/docs/publishing-code"},next:{title:"Continuous integration",permalink:"/best-practices/docs/continuous-integration"}},s=[{value:"Define user access",id:"define-user-access",children:[]},{value:"Add a license",id:"add-a-license",children:[]},{value:"Optional",id:"optional",children:[{value:"Add a DOAP project description",id:"add-a-doap-project-description",children:[]},{value:"Create releases",id:"create-releases",children:[]},{value:"Add a code of conduct",id:"add-a-code-of-conduct",children:[]}]}],p={toc:s};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Once your code repository is available publicly, a number of steps can be taken to allow others to more easily reuse your code in their own work. "),Object(r.b)("h2",{id:"define-user-access"},"Define user access"),Object(r.b)("p",null,"Take some time to See ",Object(r.b)("a",{parentName:"p",href:"/docs/project-administration"},"how to define user access")," to your repository when created in the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS"},"MaastrichtU-IDS GitHub organization"),"."),Object(r.b)("h2",{id:"add-a-license"},"Add a license"),Object(r.b)("p",null,"Adding a license file is mandatory as no one is allowed to legally use your code if no license is included. The default choice for software should be ",Object(r.b)("a",{parentName:"p",href:"https://choosealicense.com/licenses/mit/"},"the MIT license")),Object(r.b)("h2",{id:"optional"},"Optional"),Object(r.b)("p",null,"Depending on your project you may want to perform the actions below."),Object(r.b)("h3",{id:"add-a-doap-project-description"},"Add a DOAP project description"),Object(r.b)("p",null,"If you want your ",Object(r.b)("strong",{parentName:"p"},"project listed on the ",Object(r.b)("a",{parentName:"strong",href:"https://maastrichtu-ids.github.io/projects"},"IDS projects website")),", add a  DOAP file to the root of the git repository."),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/projects/create-doap"},"https://maastrichtu-ids.github.io/projects/create-doap")," to create a RDF DOAP file."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"What is DOAP?")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://github.com/ewilderj/doap/wiki"},"DOAP"))," (Description of a Project) is an RDF Schema and XML vocabulary that describe software projects, in particular free and open source software."))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"What is an IDS project?")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"A project is considered IDS if:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"It is registered in ",Object(r.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS?utf8=%E2%9C%93&q=&type=&language="},"Maastricht University IDS organization")),Object(r.b)("li",{parentName:"ul"},"It is on your personal ",Object(r.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS?utf8=%E2%9C%93&q=&type=&language="},"GitHub"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"How to create your DOAP?")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go this ",Object(r.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/projects/create-doap"},"website"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Fill in the form")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Download the file ",Object(r.b)("inlineCode",{parentName:"p"},"doap-project.ttl"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add the file into your GitHub repository")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Push to origin ",Object(r.b)("inlineCode",{parentName:"p"},"master")," or ",Object(r.b)("inlineCode",{parentName:"p"},"main")," branch on GitHub"))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Learn more about DOAP")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Semantic_web"},"Semantic Web")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/edumbill/doap/wiki"},"DOAP Home Page")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://projects.apache.org/"},"The Apache Software Foundation Projects")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Resource_Description_Framework"},"Resource Description Framework (RDF)"))))),Object(r.b)("h3",{id:"create-releases"},"Create releases"),Object(r.b)("p",null,"For projects with active or expected users it is recommended to create releases on GitHub when your project reach milestones, this insure better stability for the users."),Object(r.b)("p",null,"The standard for releases id is:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"From ",Object(r.b)("inlineCode",{parentName:"li"},"v0.0.1")," to ",Object(r.b)("inlineCode",{parentName:"li"},"v0.1.0")," : alpha releases, your project is in a early development stage"),Object(r.b)("li",{parentName:"ul"},"From ",Object(r.b)("inlineCode",{parentName:"li"},"v0.1.0")," to ",Object(r.b)("inlineCode",{parentName:"li"},"v1.0.0")," : beta releases, your project is in a stable stage, already serve most of its core functions and can be accessed."),Object(r.b)("li",{parentName:"ul"},"From ",Object(r.b)("inlineCode",{parentName:"li"},"v1.0.0")," onwards: production releases, your project is published in production, your service is expected")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Semantic Versioning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Use the ",Object(r.b)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning")," logic to increment the version number."))),Object(r.b)("h3",{id:"add-a-code-of-conduct"},"Add a code of conduct"),Object(r.b)("p",null,"If you are trying to build a community you might want to define a code of conduct. The ",Object(r.b)("a",{parentName:"p",href:"https://www.contributor-covenant.org/version/1/4/code-of-conduct/code_of_conduct.md"},"Contributor Covenant code of conduct")," is popular among open source communities."))}b.isMDXComponent=!0}}]);