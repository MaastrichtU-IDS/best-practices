(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),a=(n(0),n(116)),i={id:"software-distribution",title:"Software distribution"},c={unversionedId:"software-distribution",id:"software-distribution",isDocsHomePage:!1,title:"Software distribution",description:"Notebooks",source:"@site/docs/software-distribution.md",slug:"/software-distribution",permalink:"/best-practices/docs/software-distribution",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/main/website/docs/software-distribution.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1609754809,sidebar:"docs",previous:{title:"Code distribution",permalink:"/best-practices/docs/code-distribution"},next:{title:"Documentation",permalink:"/best-practices/docs/documentation"}},s=[{value:"Notebooks",id:"notebooks",children:[]},{value:"Packages",id:"packages",children:[]},{value:"Docker containers",id:"docker-containers",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"notebooks"},"Notebooks"),Object(a.b)("p",null,"Notebooks are popular among Data Scientists to show how they obtained their results, especially for Python or R programs."),Object(a.b)("p",null,"Notebooks are good to publish a piece of code you want other people to see, but it is not the best solution to publish code you want other people to reuse."),Object(a.b)("p",null,"Nevertheless, when you publish notebooks we ask you to also provide a ",Object(a.b)("inlineCode",{parentName:"p"},"requirements.txt")," at the root of the git repository with all the Python packages to install to use your program."),Object(a.b)("h2",{id:"packages"},"Packages"),Object(a.b)("p",null,"The best to distribute a reusable software is to make it a package."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://pypi.org/"}),"PyPI")," for Python"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.npmjs.com/"}),"NPM")," for JavaScript"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://mvnrepository.com"}),"Maven")," for Java")),Object(a.b)("h2",{id:"docker-containers"},"Docker containers"),Object(a.b)("p",null,"Docker containers can be seen as extremely lightweight virtual environments in which you can run your code. The biggest advantage is knowing your container will work regardless of the environment it's being used in; no more 'On my laptop it works'."),Object(a.b)("p",null,"Additionally, containers can be persisted and shared as ",Object(a.b)("em",{parentName:"p"},"images")," so that others can expand on your code. For example, when creating a container for a Python application it is possible to ",Object(a.b)("em",{parentName:"p"},"pull")," a Python Docker Image and start your work from there. Since images exist for most usecases, such applications and databases, Docker can be used to quickly use some prerequisites without installing them on your machine. "),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Install Docker")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/get-docker/"}),"Click here to install Docker on your machine \ud83d\udc33")))))}l.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=o,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);