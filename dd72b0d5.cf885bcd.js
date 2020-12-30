(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(109)),i={title:"Create a web app",author:"Vincent Emonet",authorURL:"https://github.com/vemonet/"},c={permalink:"/best-practices/blog/2020/11/13/create-webapp",source:"@site/blog/2020-11-13-create-webapp.md",description:"This web page will help you quickly create a ReactJS web application using TypeScript in a few minute.",date:"2020-11-13T00:00:00.000Z",tags:[],title:"Create a web app",readingTime:4.53,truncated:!1,prevItem:{title:"Improving code security",permalink:"/best-practices/blog/2020/12/20/code-security"}},l=[{value:"Create your website",id:"create-your-website",children:[]},{value:"Improve your website",id:"improve-your-website",children:[{value:"Recommended UI libraries",id:"recommended-ui-libraries",children:[]},{value:"Add a CSS file",id:"add-a-css-file",children:[]},{value:"Add multiple page",id:"add-multiple-page",children:[]}]},{value:"Build a SOLID app",id:"build-a-solid-app",children:[{value:"Add SOLID login",id:"add-solid-login",children:[]},{value:"Use SOLID user data",id:"use-solid-user-data",children:[]}]},{value:"Deploy your website",id:"deploy-your-website",children:[{value:"On GitHub Pages",id:"on-github-pages",children:[]},{value:"On IDS servers with Docker",id:"on-ids-servers-with-docker",children:[]},{value:"On AWS Amplify",id:"on-aws-amplify",children:[]}]}],p={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This web page will help you quickly create a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org"}),"ReactJS")," web application using TypeScript in a few minute."),Object(o.b)("p",null,"Duration: 10min \ud83d\udd50"),Object(o.b)("h2",{id:"create-your-website"},"Create your website"),Object(o.b)("p",null,"Requirements: ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Yarn")," installed"),Object(o.b)("p",null,"Checkout the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.expo.io/guides/typescript/"}),"Expo documentation")," for the complete up-to-date documentation."),Object(o.b)("p",null,"Install command line packages globally:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn global add expo-cli create-react-native-app\n")),Object(o.b)("p",null,"Create your project from the default TypeScript template:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"expo init -t expo-template-blank-typescript\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also create your project using one of the available ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/expo/create-react-native-app"}),"create-react-native-app")," template:"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"create-react-native-app my-project\n"))),Object(o.b)("p",null,"Once your projects has been generated, go in its folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd my-project\n")),Object(o.b)("p",null,"Start the application on http://localhost:19006"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn web\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If it worked, you can now make changes to ",Object(o.b)("inlineCode",{parentName:"p"},"App.tsx")," to start your application!")),Object(o.b)("h2",{id:"improve-your-website"},"Improve your website"),Object(o.b)("h3",{id:"recommended-ui-libraries"},"Recommended UI libraries"),Object(o.b)("p",null,"Various libraries are available to design your UI, if you don't know which one to pick we recommend the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"UI Kitten for native applications: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://akveo.github.io/react-native-ui-kitten"}),"https://akveo.github.io/react-native-ui-kitten")),Object(o.b)("li",{parentName:"ul"},"Material UI for web applications: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://material-ui.com"}),"https://material-ui.com"))),Object(o.b)("h3",{id:"add-a-css-file"},"Add a CSS file"),Object(o.b)("p",null,"It can be useful to define global CSS styles:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"App.css")," file. Here to import a font and define default body text alignment to the center:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),'@import url("https://fonts.googleapis.com/css?family=Open+Sans");\nbody {\n  text-align: center; \n} \n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Import the CSS file in ",Object(o.b)("inlineCode",{parentName:"p"},"App.tsx"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import './App.css';\n")))),Object(o.b)("h3",{id:"add-multiple-page"},"Add multiple page"),Object(o.b)("p",null,"Add a router to be able to have more than one page."),Object(o.b)("h2",{id:"build-a-solid-app"},"Build a SOLID app"),Object(o.b)("p",null,"Build a SOLID app with React using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://solid.github.io/react-components"}),"SOLID React Components"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/javascript-in-plain-english/building-a-solid-app-in-react-with-tripledoc-27fd47d8bdda"}),"query SOLID data with Tripledoc"),".")),Object(o.b)("h3",{id:"add-solid-login"},"Add SOLID login"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add SOLID for React npm package to your project:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @solid/react\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Add the login/logout button to your navigation bar:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { AuthButton } from '@solid/react';\n\n<AuthButton popup=\"https://inrupt.net/common/popup.html\"/>\n")),Object(o.b)("h3",{id:"use-solid-user-data"},"Use SOLID user data"),Object(o.b)("p",null,"Show the user name if logged in with SOLID:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { LoggedIn, LoggedOut, Value } from '@solid/react';\n\n<LoggedIn>\n  <p>\n    Welcome <Value src=\"user.name\"/>!\n  </p>\n</LoggedIn>\n<LoggedOut>\n  <p>\n    Please login with SOLID\n  </p>\n</LoggedOut>\n")),Object(o.b)("h2",{id:"deploy-your-website"},"Deploy your website"),Object(o.b)("p",null,"We recommend to deploy for free on GitHub Pages. If your application need to run NodeJS on the server then contact us to deploy on IDS servers."),Object(o.b)("h3",{id:"on-github-pages"},"On GitHub Pages"),Object(o.b)("p",null,"We recommend you to deploy your React applications as a static websites for free on GitHub Pages. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also use a custom URL with GitHub Pages if you don't want to use the default github.io URL. This can be easily defined in your GitHub repository settings.")),Object(o.b)("p",null,"Install ",Object(o.b)("inlineCode",{parentName:"p"},"gh-pages"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add gh-pages --dev\n")),Object(o.b)("p",null,"Add GitHub Pages scripts to deploy to GitHub Pages in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," and provide the URL of the website on GitHub Page in ",Object(o.b)("inlineCode",{parentName:"p"},"homepage"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'"scripts": {\n    "build": "expo build:web",\n    "predeploy": "npm run build",\n    "deploy": "gh-pages -d web-build"\n},\n"homepage": "https://maastrichtu-ids.github.io/my-github-repository",\n')),Object(o.b)("p",null,"Make sure the base path is properly set in your application if the GitHub Page is deployed on a specific path (e.g. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://maastrichtu-ids.github.io/my-github-repository/"}),"https://maastrichtu-ids.github.io/my-github-repository/"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'<Router basename="/my-github-repository/">\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Then use ",Object(o.b)("inlineCode",{parentName:"p"},'<Link to="/">')," to link within the app (instead of ",Object(o.b)("inlineCode",{parentName:"p"},"<a href>"),").")),Object(o.b)("p",null,"Deploy to GitHub Pages from your terminal:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn deploy\n")),Object(o.b)("p",null,"You can automate this process at each push to the ",Object(o.b)("inlineCode",{parentName:"p"},"main")," branch by creating the file ",Object(o.b)("inlineCode",{parentName:"p"},".github/workflows/deploy-github.yml")," with this content:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'name: Deploy to GitHub Pages\non:\n  workflow_dispatch:\n  push:\n    branches: [ main ]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - uses: actions/setup-node@v1\n      with:\n        node-version: 12\n    - name: Install dependencies and build\n      run: |\n        git config --global user.email "MY.EMAIL@maastrichtuniversity.nl"\n        git config --global user.name "FirstName LastName"\n        yarn install\n        yarn build\n    - name: Deploy on GitHub\n      uses: JamesIves/github-pages-deploy-action@3.7.1\n      with:\n        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n        BRANCH: gh-pages\n        FOLDER: web-build\n        CLEAN: true\n')),Object(o.b)("h3",{id:"on-ids-servers-with-docker"},"On IDS servers with Docker"),Object(o.b)("p",null,"Define the scripts to build and serve for production in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'"scripts": {\n    "build": "expo build:web",\n    "serve": "serve -s web-build"\n}\n')),Object(o.b)("p",null,"Define a simple ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," to install your application, and serve it in production mode:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dockerfile"}),'FROM node:12-alpine\nWORKDIR /webapp\n\n# Only install NPM packages if package.json or yarn.lock change\nCOPY package.json package.json\nCOPY yarn.lock yarn.lock\nRUN yarn install\n\nCOPY . .\n# Build in /web-build folder\nRUN yarn build\n\nEXPOSE 5000\nENTRYPOINT [ "yarn", "serve" ]\n')),Object(o.b)("p",null,"Copy your ",Object(o.b)("inlineCode",{parentName:"p"},".gitignore")," and rename the copy to ",Object(o.b)("inlineCode",{parentName:"p"},".dockerignore")," to avoid conflict with Docker and your local environment:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cp .gitignore .dockerignore\n")),Object(o.b)("p",null,"Once the Docker configuration has be done, you can build it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker build -t my-project .\n")),Object(o.b)("p",null,"And try starting the application on http://localhost:5000"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker run -it --rm -p 5000:5000 my-project\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"When this has be done, contact us to run your Docker image on IDS servers.")),Object(o.b)("h3",{id:"on-aws-amplify"},"On AWS Amplify"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/amplify/"}),"AWS Amplify"),"  is a set of products and tools that enables mobile and front-end web  developers to build and deploy secure, scalable full stack applications, powered by Amazon. With Amplify, you can configure app backends in  minutes, connect them to your app in just a few lines of code, and  deploy static web apps in three steps"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/free/"}),"Always free"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Amazon DynamoDB 25 GB of storage"),Object(o.b)("li",{parentName:"ul"},"AWS Lambda 1 Million free requests per month")),Object(o.b)("p",null,"Free for the 12 first months:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Hosting: 5 GB stored and 15 GB served per month"),Object(o.b)("li",{parentName:"ul"},"1000 build minutes per month "),Object(o.b)("li",{parentName:"ul"},"AWS AppSync 250 k query or data modifications per month (Develop, secure and run GraphQL APIs at any scale)")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"See the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/amplify/pricing"}),"pricing page")," for more details on prices outside of the free tier.")))}b.isMDXComponent=!0},109:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(a),d=n,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return a?r.a.createElement(m,c(c({ref:t},p),{},{components:a})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);