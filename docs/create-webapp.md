---
id: create-webapp
title: Create a Web application
---

This web page will help you quickly create a [ReactJS](https://reactjs.org) web application using TypeScript in a few minute.

Duration: 5min 🕐

## Create your website

Requirements: npm and Yarn installed

Install command line packages globally:

```bash
yarn global install expo-cli create-react-native-app
```

Create your project from the default TypeScript template:

```bash
expo init -t expo-template-blank-typescript
```

Or create your project in the current directory using one of the available template:

```bash
create-react-native-app my-project
```

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

* Material UI for web applications: https://material-ui.com
* React Native Paper for native applications: https://callstack.github.io/react-native-paper

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

## Deploy your website

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

### On Firebase

> TBD