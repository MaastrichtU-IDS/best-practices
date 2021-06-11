(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{123:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),o=(r(0),r(136)),a=["components"],c={title:"Hosting docker images for DSRI",author:"Tim Hendriks",author_title:"Software engineer at IDS",author_url:"https://github.com/thendriks",tags:["security","deployment","dsri","openshift","github","docker"],description:"On deploying (private) images on OpenShift using GitHub actions",hide_table_of_contents:!1},s={permalink:"/best-practices/blog/2021/01/19/private-image-openshift-deploy",source:"@site/blog/2021-1-19-private-image-openshift-deploy.md",description:"On deploying (private) images on OpenShift using GitHub actions",date:"2021-01-19T00:00:00.000Z",tags:[{label:"security",permalink:"/best-practices/blog/tags/security"},{label:"deployment",permalink:"/best-practices/blog/tags/deployment"},{label:"dsri",permalink:"/best-practices/blog/tags/dsri"},{label:"openshift",permalink:"/best-practices/blog/tags/openshift"},{label:"github",permalink:"/best-practices/blog/tags/github"},{label:"docker",permalink:"/best-practices/blog/tags/docker"}],title:"Hosting docker images for DSRI",readingTime:3.445,truncated:!0,prevItem:{title:"Publish Nanopublications",permalink:"/best-practices/blog/2021/01/19/usecase-nanopublication"},nextItem:{title:"Improve code security",permalink:"/best-practices/blog/2020/12/20/code-security"}},l=[],p={toc:l};function u(e){var t=e.components,r=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When utilizing DockerHub on orchestration systems such as Kubernetes we run into download rate limits. We can circumvent these issues using a CI/CD workflow that leverages GitHub Container Registry."))}u.isMDXComponent=!0},136:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(a,".").concat(f)]||u[f]||b[f]||o;return r?i.a.createElement(m,c(c({ref:t},l),{},{components:r})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);