(window.webpackJsonp=window.webpackJsonp||[]).push([[52,12,14],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(141),c=a(161),i=a(137);var o=function(e){var t=e.nextItem,a=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},s=a(151),m=a(155),u=a(160);t.default=function(e){var t=e.content,a=e.sidebar,n=t.frontMatter,i=t.metadata,d=i.title,f=i.description,v=i.nextItem,p=i.prevItem,E=i.editUrl,g=n.hide_table_of_contents;return r.a.createElement(l.a,{title:d,description:f,wrapperClassName:"blog-wrapper"},t&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:a})),r.a.createElement("main",{className:"col col--8"},r.a.createElement(c.a,{frontMatter:n,metadata:i,isBlogPostPage:!0},r.a.createElement(t,null)),r.a.createElement("div",null,E&&r.a.createElement("a",{href:E,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(u.a,null),"Edit this page")),(v||p)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(o,{nextItem:v,prevItem:p}))),!g&&t.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(m.a,{toc:t.toc})))))}},140:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return c})),a.d(t,"f",(function(){return i})),a.d(t,"e",(function(){return o}));a(139);var n=["en"],r=!1,l=null,c="5613cf0a",i=8,o=50},142:function(e,t,a){"use strict";var n=a(3),r=a(7),l=a(0),c=a.n(l),i=a(135),o=a(137),s=a(136),m=a(138),u=a(2);a(55);function d(e){var t=e.to,a=e.href,l=e.label,i=e.prependBaseUrlToHref,s=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(m.a)(t),d=Object(m.a)(a,{forcePrependBaseUrl:!0});return c.a.createElement(o.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:i?d:a}:{to:u},s),l)}t.a=function(){var e=Object(s.useThemeConfig)().footer,t=Object(u.l)(),a=e||{},n=a.copyright,r=a.links,l=void 0===r?[]:r,o=a.logo,f=void 0===o?{}:o;if(Object(m.a)(f.src),!e)return null;t.pathname;var v="https://docs.google.com/forms/d/e/1FAIpQLSdvfnNT5Yi7XLoVjDcwTuEM45npNCcjwMrGD8oKSXJfSalVZQ/viewform?usp=pp_url&entry.1130493462="+t.pathname+"&embedded=true",p="none";return t.pathname.startsWith("/best-practices/docs/")&&(p="block"),c.a.createElement(c.a.Fragment,null,c.a.createElement("iframe",{style:{display:p},class:"form",src:v,width:"640",height:"500",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading..."),c.a.createElement("footer",{className:Object(i.a)("footer",{"footer--dark":"dark"===e.style})},c.a.createElement("div",{className:"container"},l&&l.length>0&&c.a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?c.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(d,e))}))):null)}))),(f||n)&&c.a.createElement("div",{className:"text--center"},c.a.createElement("div",null,c.a.createElement("a",{rel:"license",href:"https://creativecommons.org/licenses/by/4.0/",title:"Creative Commons Attribution 4.0 International license",target:"_blank"},c.a.createElement("img",{src:"/best-practices/img/cc-by.svg",alt:"cc by license"}))),c.a.createElement("div",{style:{marginBottom:"10px"},dangerouslySetInnerHTML:{__html:n}})))))}},155:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(135);var c=function(e,t,a){var r=Object(n.useState)(void 0),l=r[0],c=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,i=!1,o=document.getElementsByClassName(e);r<o.length&&!i;){var s=o[r],m=s.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(t),s.classList.add(t),c(s),i=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i=a(57),o=a.n(i),s="table-of-contents__link";function m(e){var t=e.toc,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(m,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return c(s,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(l.a)(o.a.tableOfContents,"thin-scrollbar")},r.a.createElement(m,{toc:t}))}},160:function(e,t,a){"use strict";var n=a(3),r=a(7),l=a(0),c=a.n(l),i=a(135),o=a(63),s=a.n(o);t.a=function(e){var t=e.className,a=Object(r.a)(e,["className"]);return c.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(i.a)(s.a.iconEdit,t)},a),c.a.createElement("g",null,c.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}}}]);