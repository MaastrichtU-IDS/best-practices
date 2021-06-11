(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{122:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(136)),i=["components"],c={title:"Build a FAIR Knowledge Graph",author:"Vincent Emonet",author_title:"Data Science engineer at IDS",author_url:"https://github.com/vemonet",tags:["knowledge graph","rdf","mapping","ontologies"],description:"Build a RDF Knowledge Graph from CSV files",hide_table_of_contents:!1},l={permalink:"/best-practices/blog/2021/03/18/build-a-kg",source:"@site/blog/2021-03-18-build-a-kg.md",description:"Build a RDF Knowledge Graph from CSV files",date:"2021-03-18T00:00:00.000Z",tags:[{label:"knowledge graph",permalink:"/best-practices/blog/tags/knowledge-graph"},{label:"rdf",permalink:"/best-practices/blog/tags/rdf"},{label:"mapping",permalink:"/best-practices/blog/tags/mapping"},{label:"ontologies",permalink:"/best-practices/blog/tags/ontologies"}],title:"Build a FAIR Knowledge Graph",readingTime:11.46,truncated:!0,nextItem:{title:"A triplestore in your browser?",permalink:"/best-practices/blog/2021/03/12/rdf-in-the-browser"}},p=[],u={toc:p};function s(e){var t=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This tutorial will help you generate a knowledge graph from some structured datasets such as CSV, JSON and XML. We will use Semantic Web technologies to build our knowledge graph. If you are not familiar with Semantic Web technologies, we provide you with some basic concepts and technologies about Semantic Web based Knowledge Graphs."))}s.isMDXComponent=!0},136:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return g}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=n,g=s["".concat(i,".").concat(f)]||s[f]||b[f]||a;return r?o.a.createElement(g,c(c({ref:t},p),{},{components:r})):o.a.createElement(g,c({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);