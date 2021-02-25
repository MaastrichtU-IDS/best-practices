(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(a),l=n,u=d["".concat(o,".").concat(l)]||d[l]||m[l]||i;return a?r.a.createElement(u,s(s({ref:t},p),{},{components:a})):r.a.createElement(u,s({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}l.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(128)),o={id:"project-administration",title:"Project administration"},s={unversionedId:"project-administration",id:"project-administration",isDocsHomePage:!1,title:"Project administration",description:"Create a code repository",source:"@site/docs/project-administration.md",slug:"/project-administration",permalink:"/best-practices/docs/project-administration",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/main/website/docs/project-administration.md",version:"current",lastUpdatedBy:"thendriks",lastUpdatedAt:1614250004,sidebar:"docs",previous:{title:"Introduction",permalink:"/best-practices/docs/"},next:{title:"FAIR data",permalink:"/best-practices/docs/fair-data"}},c=[{value:"Create a code repository",id:"create-a-code-repository",children:[{value:"Issues and boards",id:"issues-and-boards",children:[]},{value:"User management",id:"user-management",children:[]}]},{value:"Create a chat",id:"create-a-chat",children:[]}],p={toc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"create-a-code-repository"},"Create a code repository"),Object(i.b)("p",null,"When starting a Data Science project you need to create a repository on a platform to host your project's code. "),Object(i.b)("p",null,"Today a lot of solutions exist, most of them are based on ",Object(i.b)("a",{parentName:"p",href:"https://guides.github.com/introduction/git-handbook/"},"git"),", and they provide various features beside code hosting, such as reporting issues, running automated workflows, publishing documentation, and websites."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"GitHub for open source")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The Institute of Data Science mainly uses its ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS"},"MaastrichtU-IDS GitHub organization"),", hence we recommend to use GitHub for projects related to IDS."))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"GitLab for private")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Some projects in collaboration with other organizations can be hosted on GitLab depending on the project requirements. You can use the ",Object(i.b)("a",{parentName:"p",href:"https://gitlab.maastrichtuniversity.nl/"},"UM-hosted GitLab")," for private projects."))),Object(i.b)("h3",{id:"issues-and-boards"},"Issues and boards"),Object(i.b)("p",null,"Using issues is a great way to keep track of feedbacks, bugs and improvements to do to your project. We encourage you to use them as much as possible."),Object(i.b)("p",null,"You can order issues in issues boards, either for a single repository or across multiple repositories."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"See the GitHub issue board for the MaastrichtU-IDS organization: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/orgs/MaastrichtU-IDS/projects/4"},"https://github.com/orgs/MaastrichtU-IDS/projects/4"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Issue boards are available on GitLab too for projects and organizations (multiple projects)."))),Object(i.b)("h3",{id:"user-management"},"User management"),Object(i.b)("p",null,"Code-hosting platforms enable to define different user access to your code repository."),Object(i.b)("p",null,"On GitHub, go to your repository ",Object(i.b)("strong",{parentName:"p"},"Settings"),", then ",Object(i.b)("strong",{parentName:"p"},"User management"),". You can then add the users with the access you want (",Object(i.b)("inlineCode",{parentName:"p"},"read"),", ",Object(i.b)("inlineCode",{parentName:"p"},"edit"),", ",Object(i.b)("inlineCode",{parentName:"p"},"admin"),")"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Manage IDS GitHub users")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"For repositories in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS"},"MaastrichtU-IDS organization")," you can give access to groups of users in the organization, such as ",Object(i.b)("inlineCode",{parentName:"p"},"ids")," for all members of IDS, or ",Object(i.b)("inlineCode",{parentName:"p"},"developers")," for the IDS developer team. "),Object(i.b)("p",{parentName:"div"},"You can also create new group of users for specific projects."))),Object(i.b)("h2",{id:"create-a-chat"},"Create a chat"),Object(i.b)("p",null,"Additionally, for some projects you might need a public chat channel."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://gitter.im/"},"Gitter")," is a service from GitLab which allows to easily create and use public and private chat rooms linked to GitHub repositories. "),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Connect with GitHub")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Users can easily connect using their ",Object(i.b)("a",{parentName:"p",href:"https://github.com/"},"GitHub")," or ",Object(i.b)("a",{parentName:"p",href:"https://gitlab.com"},"GitLab")," account."))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"GitHub Discussions in beta")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"GitHub just released the new ",Object(i.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/discussions/quickstart"},Object(i.b)("strong",{parentName:"a"},"Discussions")," feature")," to create small forums in GitHub repositories to discuss about the project."),Object(i.b)("p",{parentName:"div"},"Check the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/translator-openpredict/discussions"},"OpenPredict project discussion")," as an example."))))}b.isMDXComponent=!0}}]);