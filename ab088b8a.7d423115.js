(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return u}));var o=n(3),i=n(7),a=(n(0),n(136)),r=["components"],c={id:"continuous-integration",title:"Continuous integration"},s={unversionedId:"continuous-integration",id:"continuous-integration",isDocsHomePage:!1,title:"Continuous integration",description:"Continuous integration and continuous delivery/deployment involves automating all possible processes in your development cycle, such as testing or deploying. This should be considered when you are expecting to work on a codebase for an extended amount of time or with a group of people in order to save time in the long run. The choice of CI/CD technology depends on the platform you are using to store your code. We strongly recommend you to define Continuous Integration if you wrote tests for your application or regularly need to publish some packages.",source:"@site/docs/continuous-integration.md",slug:"/continuous-integration",permalink:"/best-practices/docs/continuous-integration",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/main/website/docs/continuous-integration.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1623454596,sidebar:"docs",previous:{title:"Repository Administration",permalink:"/best-practices/docs/repository-administration"},next:{title:"Write documentation",permalink:"/best-practices/docs/documentation"}},d=[{value:"GitHub Actions",id:"github-actions",children:[]},{value:"GitLab CI",id:"gitlab-ci",children:[]},{value:"Jenkins",id:"jenkins",children:[]}],p={toc:d};function u(e){var t=e.components,n=Object(i.a)(e,r);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Continuous integration and continuous delivery/deployment involves automating all possible processes in your development cycle, such as testing or deploying. This should be considered when you are expecting to work on a codebase for an extended amount of time or with a group of people in order to save time in the long run. The choice of CI/CD technology depends on the platform you are using to store your code. We strongly recommend you to define Continuous Integration if you wrote tests for your application or regularly need to publish some packages."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Checkout the workshop")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"See our ",Object(a.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/workshop-ci/"},"IDS CI/CD workshop")," to package and define Continuous Integration workflow for Python with GitHub Actions."))),Object(a.b)("h2",{id:"github-actions"},Object(a.b)("a",{parentName:"h2",href:"https://github.com/features/actions"},"GitHub Actions")),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"For GitHub")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Recommended if your code is hosted on ",Object(a.b)("a",{parentName:"p",href:"https://github.com"},"GitHub"),"."))),Object(a.b)("p",null,"GitHub Actions workflows are defined as YAML files in the ",Object(a.b)("inlineCode",{parentName:"p"},".github/workflows")," directory in your code repository."),Object(a.b)("p",null,"Find actions to easily perform common tasks in the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/marketplace"},"GitHub marketplace"),", and use ",Object(a.b)("inlineCode",{parentName:"p"},"Bash")," commands to run your scripts, and installation process."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/actions/hosting-your-own-runners/adding-self-hosted-runners"},"GitHub Runner")," can be deployed on any server to run privacy sensitive workloads outside of GitHub servers."),Object(a.b)("h2",{id:"gitlab-ci"},Object(a.b)("a",{parentName:"h2",href:"https://docs.gitlab.com/ee/ci/"},"GitLab CI")),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"For GitLab")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Recommended if your code is hosted on ",Object(a.b)("a",{parentName:"p",href:"https://gitlab.com/"},"GitLab.com")," or ",Object(a.b)("a",{parentName:"p",href:"https://gitlab.maastrichtuniversity.nl"},"GitLab hosted at UM"),"."))),Object(a.b)("p",null,"Workflows defined as YAML files in your code repository."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://docs.gitlab.com/runner/"},"GitLab Runner")," can be deployed on any server, and Kubernetes cluster."),Object(a.b)("h2",{id:"jenkins"},Object(a.b)("a",{parentName:"h2",href:"https://www.jenkins.io/"},"Jenkins")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"For on-premise")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Recommended if your build is privacy sensitive and need to run on-premise without any tie to code repositories."))),Object(a.b)("p",null,"Contact ",Object(a.b)("strong",{parentName:"p"},"Vincent Emonet \ud83d\udcec")," to discuss running Jenkins workflows on IDS servers."))}u.isMDXComponent=!0},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),p=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},l=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),l=o,m=u["".concat(r,".").concat(l)]||u[l]||b[l]||a;return n?i.a.createElement(m,c(c({ref:t},d),{},{components:n})):i.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var d=2;d<a;d++)r[d]=n[d];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);