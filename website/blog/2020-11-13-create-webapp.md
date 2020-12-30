---
title: Create a web app
author: Vincent Emonet
author_title: Data Science engineer at IDS
author_url: https://github.com/vemonet
tags: [security, development]
description: Create a web application with React and TypeScript
hide_table_of_contents: false
# author_image_url: https://graph.facebook.com/611217057/picture/?height=200&width=200
# image: https://i.imgur.com/mErPwqL.png
---

This web page will help you quickly create a [ReactJS](https://reactjs.org) web application using TypeScript in a few minute.

:::note Estimated time

10min 🕐

:::

<!--truncate-->

## Create your website

Requirements: `npm` and `Yarn` installed

Checkout the [Expo documentation](https://docs.expo.io/guides/typescript/) for the complete up-to-date documentation.

Install command line packages globally:

```bash
yarn global add expo-cli create-react-native-app
```

Create your project from the default TypeScript template:

```bash
expo init -t expo-template-blank-typescript
```

> You can also create your project using one of the available [create-react-native-app](https://github.com/expo/create-react-native-app) template:
>
> ```bash
> create-react-native-app my-project
> ```

Once your projects has been generated, go in its folder:

```bash
cd my-project
```

Start the application on http://localhost:19006

```bash
yarn web
```

> If it worked, you can now make changes to `App.tsx` to start your application!

## Improve your website

### Recommended UI libraries

Various libraries are available to design your UI, if you don't know which one to pick we recommend the following:

* UI Kitten for native applications: https://akveo.github.io/react-native-ui-kitten
* Material UI for web applications: https://material-ui.com

### Add a CSS file

It can be useful to define global CSS styles:

1. Create a `App.css` file. Here to import a font and define default body text alignment to the center:

   ```css
   @import url("https://fonts.googleapis.com/css?family=Open+Sans");
   body {
     text-align: center; 
   } 
   ```

2. Import the CSS file in `App.tsx`:

   ```typescript
   import './App.css';
   ```

### Add multiple page

Add a router to be able to have more than one page.

## Build a SOLID app

Build a SOLID app with React using [SOLID React Components](https://solid.github.io/react-components).

> You can also [query SOLID data with Tripledoc](https://medium.com/javascript-in-plain-english/building-a-solid-app-in-react-with-tripledoc-27fd47d8bdda).

### Add SOLID login

1. Add SOLID for React npm package to your project:

```bash
yarn add @solid/react
```

2. Add the login/logout button to your navigation bar:

```typescript
import { AuthButton } from '@solid/react';

<AuthButton popup="https://inrupt.net/common/popup.html"/>
```

### Use SOLID user data

Show the user name if logged in with SOLID:

```typescript
import { LoggedIn, LoggedOut, Value } from '@solid/react';

<LoggedIn>
  <p>
    Welcome <Value src="user.name"/>!
  </p>
</LoggedIn>
<LoggedOut>
  <p>
    Please login with SOLID
  </p>
</LoggedOut>
```

## Deploy your website

We recommend to deploy for free on GitHub Pages. If your application need to run NodeJS on the server then contact us to deploy on IDS servers.

### On GitHub Pages

We recommend you to deploy your React applications as a static websites for free on GitHub Pages. 

> You can also use a custom URL with GitHub Pages if you don't want to use the default github.io URL. This can be easily defined in your GitHub repository settings.

Install `gh-pages`:

```bash
yarn add gh-pages --dev
```

Add GitHub Pages scripts to deploy to GitHub Pages in `package.json` and provide the URL of the website on GitHub Page in `homepage`:

```javascript
"scripts": {
    "build": "expo build:web",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d web-build"
},
"homepage": "https://maastrichtu-ids.github.io/my-github-repository",
```

Make sure the base path is properly set in your application if the GitHub Page is deployed on a specific path (e.g. https://maastrichtu-ids.github.io/my-github-repository/):

```typescript
<Router basename="/my-github-repository/">
```

> Then use `<Link to="/">` to link within the app (instead of `<a href>`).

Deploy to GitHub Pages from your terminal:

```bash
yarn deploy
```

You can automate this process at each push to the `main` branch by creating the file `.github/workflows/deploy-github.yml` with this content:

```yaml
name: Deploy to GitHub Pages
on:
  workflow_dispatch:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v1
      with:
        node-version: 12
    - name: Install dependencies and build
      run: |
        git config --global user.email "MY.EMAIL@maastrichtuniversity.nl"
        git config --global user.name "FirstName LastName"
        yarn install
        yarn build
    - name: Deploy on GitHub
      uses: JamesIves/github-pages-deploy-action@3.7.1
      with:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        BRANCH: gh-pages
        FOLDER: web-build
        CLEAN: true
```

### On IDS servers with Docker

Define the scripts to build and serve for production in `package.json`

```javascript
"scripts": {
    "build": "expo build:web",
    "serve": "serve -s web-build"
}
```

Define a simple `Dockerfile` to install your application, and serve it in production mode:

```dockerfile
FROM node:12-alpine
WORKDIR /webapp

# Only install NPM packages if package.json or yarn.lock change
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY . .
# Build in /web-build folder
RUN yarn build

EXPOSE 5000
ENTRYPOINT [ "yarn", "serve" ]
```

Copy your `.gitignore` and rename the copy to `.dockerignore` to avoid conflict with Docker and your local environment:

```bash
cp .gitignore .dockerignore
```

Once the Docker configuration has be done, you can build it:

```bash
docker build -t my-project .
```

And try starting the application on http://localhost:5000

```bash
docker run -it --rm -p 5000:5000 my-project
```

> When this has be done, contact us to run your Docker image on IDS servers.

### On AWS Amplify

[AWS Amplify](https://aws.amazon.com/amplify/)  is a set of products and tools that enables mobile and front-end web  developers to build and deploy secure, scalable full stack applications, powered by Amazon. With Amplify, you can configure app backends in  minutes, connect them to your app in just a few lines of code, and  deploy static web apps in three steps

[Always free](https://aws.amazon.com/free/):

* Amazon DynamoDB 25 GB of storage
* AWS Lambda 1 Million free requests per month


Free for the 12 first months:

* Hosting: 5 GB stored and 15 GB served per month
* 1000 build minutes per month 
* AWS AppSync 250 k query or data modifications per month (Develop, secure and run GraphQL APIs at any scale)


> See the [pricing page](https://aws.amazon.com/amplify/pricing) for more details on prices outside of the free tier.