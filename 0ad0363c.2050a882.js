(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{134:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(f,l(l({ref:t},s),{},{components:r})):o.a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(134)),i={title:"A triplestore in your browser?",author:"Vincent Emonet",author_title:"Data Science engineer at IDS",author_url:"https://github.com/vemonet",tags:["web","rdf","development"],description:"Doing some exploration to handle large scale RDF knowledge graphs directly in the browser",hide_table_of_contents:!1},l={permalink:"/best-practices/blog/2021/03/12/rdf-in-the-browser",source:"@site/blog/2021-03-12-rdf-in-the-browser.md",description:"Doing some exploration to handle large scale RDF knowledge graphs directly in the browser",date:"2021-03-12T00:00:00.000Z",tags:[{label:"web",permalink:"/best-practices/blog/tags/web"},{label:"rdf",permalink:"/best-practices/blog/tags/rdf"},{label:"development",permalink:"/best-practices/blog/tags/development"}],title:"A triplestore in your browser?",readingTime:3.45,truncated:!0,prevItem:{title:"Simply build a Knowledge Graph",permalink:"/best-practices/blog/2021/03/18/build-a-kg"},nextItem:{title:"Publish Nanopublications",permalink:"/best-practices/blog/2021/01/19/usecase-nanopublication"}},c=[],s={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Which solutions are available to store and access relatively large RDF file directly in a browser? "),Object(a.b)("p",null,"Without the need for NodeJS, or anything else than a static server to publish files (using GitHub or GitLab Pages for example)"),Object(a.b)("p",null,"This would enable distributed processing, edition and querying of RDF data in the browser without requiring any installation, or any backend server to perform the processing or pre-processing. "),Object(a.b)("p",null,"Just host the JavaScript and RDF files on a static hosting service! When a user access the website it will download the JavaScript, which will load and handle the RDF. Additionally JS workers will be able to efficiently cache the data to avoid needing to reload everything at each new connection."))}p.isMDXComponent=!0}}]);