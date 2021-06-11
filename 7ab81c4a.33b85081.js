(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),o=(n(0),n(136)),r=["components"],c={id:"documentation",title:"Write documentation"},l={unversionedId:"documentation",id:"documentation",isDocsHomePage:!1,title:"Write documentation",description:"For most projects a simple well-written README.md is enough documentation, and it will greatly improve the exposure and re-usability of your code.",source:"@site/docs/documentation.md",slug:"/documentation",permalink:"/best-practices/docs/documentation",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/main/website/docs/documentation.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1623454596,sidebar:"docs",previous:{title:"Continuous integration",permalink:"/best-practices/docs/continuous-integration"},next:{title:"Using ontologies",permalink:"/best-practices/docs/using-ontologies"}},s=[{value:"At least a README",id:"at-least-a-readme",children:[]},{value:"Make contributing easier",id:"make-contributing-easier",children:[]},{value:"Additional in-depth documentation",id:"additional-in-depth-documentation",children:[]},{value:"Create a website",id:"create-a-website",children:[]}],p={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For most projects a simple well-written ",Object(o.b)("inlineCode",{parentName:"p"},"README.md")," is enough documentation, and it will greatly improve the exposure and re-usability of your code."),Object(o.b)("p",null,"If you wish to make contributing to your project easier, it is standard practice to additionally put a ",Object(o.b)("inlineCode",{parentName:"p"},"CONTRIBUTING.md")," file at the root of your repository, with instructions on how to contribute."),Object(o.b)("h2",{id:"at-least-a-readme"},"At least a README"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"README.md")," at the root of the git repository should be used for all information targeted at other developers. Check ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/python-template"},"this ",Object(o.b)("inlineCode",{parentName:"a"},"README.md")," for a Python package")," for a direct example. "),Object(o.b)("p",null,"At the ",Object(o.b)("strong",{parentName:"p"},"minimum")," it should contain the following information:"),Object(o.b)("p",null,"\ud83d\udcdd Provide a ",Object(o.b)("strong",{parentName:"p"},"short description")," of the tool. So that users knows exactly what is this tool for in 2 min of reading."),Object(o.b)("p",null,"\u2714\ufe0f Provide a list of ",Object(o.b)("strong",{parentName:"p"},"prerequisites")," to run the application. Such as supported language versions, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"Python 3.6+")," "),Object(o.b)("p",null,"\ud83d\udce5 Provide instructions on how to ",Object(o.b)("strong",{parentName:"p"},"install the program locally"),". E.g. ",Object(o.b)("inlineCode",{parentName:"p"},"pip install my_package")),Object(o.b)("p",null,"\ud83d\udcd6 Provide a few ",Object(o.b)("strong",{parentName:"p"},"working examples")," that illustrate how to run the program main features."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Whenever possible users should be able to copy paste the provided examples.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If necessary, store sample files in the git repository (so everything is accessible with a ",Object(o.b)("inlineCode",{parentName:"p"},"git clone"),")."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},'E.g.: "Start the API on port 8080 by running ',Object(o.b)("inlineCode",{parentName:"p"},"python3 start_api.py -p 8080"),'"')))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Optionally")," you can add more information"),Object(o.b)("p",null,"\ud83d\udce6 Provide instructions on ",Object(o.b)("strong",{parentName:"p"},"how to build and publish")," the application if applicable (e.g. with ",Object(o.b)("inlineCode",{parentName:"p"},"pip")," or docker)."),Object(o.b)("p",null,"\ud83d\udc33 Provide build/run/stop/update ",Object(o.b)("strong",{parentName:"p"},"docker instructions")," if applicable (try to use docker as much as possible)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Should not be more than ",Object(o.b)("inlineCode",{parentName:"li"},"docker run")," or a ",Object(o.b)("inlineCode",{parentName:"li"},"docker-compose up -d")," in case of multiple containers."),Object(o.b)("li",{parentName:"ul"},"Add details about Docker deployment if necessary (shared volume, initialization and so on).")),Object(o.b)("h2",{id:"make-contributing-easier"},"Make contributing easier"),Object(o.b)("p",null,"If you wish to make contributing to your project easier, it is standard practice to add a ",Object(o.b)("inlineCode",{parentName:"p"},"CONTRIBUTING.md")," file at the root of your repository."),Object(o.b)("p",null,"This file should explain how to easily contribute to your code:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Important file locations and comments on the general code structure"),Object(o.b)("li",{parentName:"ul"},"How to run in development and test the code"),Object(o.b)("li",{parentName:"ul"},"The process to submit a change (pull request requirements)")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Avoid duplicates")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Try to not duplicate information from the ",Object(o.b)("inlineCode",{parentName:"p"},"README.md")," file."))),Object(o.b)("h2",{id:"additional-in-depth-documentation"},"Additional in-depth documentation"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"GitHub wiki")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Use GitHub wikis to easily add more documentation pages in markdown without the need to maintain a codebase."))),Object(o.b)("p",null,"Add additional ",Object(o.b)("strong",{parentName:"p"},"Wiki pages")," on GitHub or GitLab for in-depth documentation targeted at developers."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Architecture and logic of the code"),Object(o.b)("li",{parentName:"ul"},"Diagrams to explain your code"),Object(o.b)("li",{parentName:"ul"},"Additional deployments (for production, Docker, Kubernetes)"),Object(o.b)("li",{parentName:"ul"},"Initialization and ETL tasks")),Object(o.b)("h2",{id:"create-a-website"},"Create a website"),Object(o.b)("p",null,"Use ",Object(o.b)("a",{parentName:"p",href:"https://pages.github.com/"},"GitHub Pages")," for all extensive documentation website on general information, and how to use the software targeted at a general audience. "),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Markdown documentation website")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"We recommend to use the ",Object(o.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},"Docusaurus v2 framework")," to easily create and maintain high quality documentation websites based on markdown files (see this website as an example)."))))}b.isMDXComponent=!0},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||o;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);