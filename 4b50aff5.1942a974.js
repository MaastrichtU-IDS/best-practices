(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{135:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return m}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(o),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return o?n.a.createElement(m,s(s({ref:t},l),{},{components:o})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},92:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return p}));var r=o(3),n=o(7),a=(o(0),o(135)),i={id:"publishing-code",title:"Publishing Code"},s={unversionedId:"publishing-code",id:"publishing-code",isDocsHomePage:!1,title:"Publishing Code",description:"The best way to share your work is to use existing frameworks to publish your code in a manner that is easily run by other researchers. Below are some of the most common ways to publish your research code.",source:"@site/docs/publishing-code.md",slug:"/publishing-code",permalink:"/best-practices/docs/publishing-code",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/main/website/docs/publishing-code.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1620317111,sidebar:"docs",previous:{title:"Code management",permalink:"/best-practices/docs/code-management"},next:{title:"Repository Administration",permalink:"/best-practices/docs/repository-administration"}},c=[{value:"Notebooks",id:"notebooks",children:[]},{value:"Packages",id:"packages",children:[]},{value:"Docker containers",id:"docker-containers",children:[]}],l={toc:c};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The best way to share your work is to use existing frameworks to publish your code in a manner that is easily run by other researchers. Below are some of the most common ways to publish your research code."),Object(a.b)("h2",{id:"notebooks"},"Notebooks"),Object(a.b)("p",null,"Notebooks are popular among Data Scientists to show how they obtained their results, especially for Python or R programs. Notebooks are a good way to convey to others how to perform the various steps in your algorithm, but should be used sparingly when the goal is to publish for mass reuse. When publishing notebooks we ask you to also provide a ",Object(a.b)("inlineCode",{parentName:"p"},"requirements.txt")," at the root of the git repository with all the Python packages to install to use your program."),Object(a.b)("h2",{id:"packages"},"Packages"),Object(a.b)("p",null,"The best to distribute reusable software is to create a package using the go to standards for your language. For example:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://pypi.org/"},"PyPI")," for Python"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.npmjs.com/"},"NPM")," for JavaScript"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://mvnrepository.com"},"Maven")," for Java")),Object(a.b)("h2",{id:"docker-containers"},"Docker containers"),Object(a.b)("p",null,"Docker containers can be seen as extremely lightweight virtual environments in which you can run your code. The biggest advantage is knowing your container will work regardless of the environment it's being used in; no more 'On my laptop it works'.\nAdditionally, containers can be persisted and shared as ",Object(a.b)("em",{parentName:"p"},"images")," so that others can expand on your code. For example, when creating a container for a Python application it is possible to ",Object(a.b)("em",{parentName:"p"},"pull")," a Python Docker Image and start your work from there. Since images exist for most usecases, such applications and databases, Docker can be used to quickly use some prerequisites without installing them on your machine. "),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Install Docker")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Click here to install Docker on your machine \ud83d\udc33")))))}p.isMDXComponent=!0}}]);