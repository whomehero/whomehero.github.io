# Setup Development Environment

## Node.js install

[https://nodejs.org/ja/](https://nodejs.org/ja/)

---

## Package install

Run command as follows:

```
npm install --save-dev typescript ts-loader webpack webpack-cli webpack-dev-server jest ts-jest @types/jest
```

1. [typescript](https://github.com/microsoft/TypeScript)  
    >[TypeScript](https://www.typescriptlang.org/) is a language for application-scale JavaScript.
    TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS.
    TypeScript compiles to readable, standards-based JavaScript. 

1. [ts-loader](https://github.com/TypeStrong/ts-loader)  
    >TypeScript loader for webpack.

1. [webpack](https://webpack.js.org/concepts/)  
    >At its core, webpack is a static module bundler for modern JavaScript applications.
    When webpack processes your application, it internally builds a [dependency graph](https://webpack.js.org/concepts/dependency-graph/) from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

1. [webpack-cli](https://github.com/webpack/webpack-cli)  
    >webpack CLI provides the interface of options webpack uses in its configuration file.
    The CLI options override options passed in the configuration file.
    The CLI provides a rich set of commands that helps you develop your application faster.

1. [webpack-dev-server](https://github.com/webpack/webpack-dev-server)  
    >Use [webpack](https://webpack.js.org) with a development server that provides live reloading.
    This should be used for development only.
    It uses [webpack-dev-middleware][middleware-url] under the hood, which provides fast in-memory access to the webpack assets.

1. [jest](https://github.com/facebook/jest)  
    >Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
    It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

1. [ts-jest](https://github.com/kulshekhar/ts-jest)  
    >A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.

1. [@types/jest](https://www.npmjs.com/package/@types/jest)  
    >This package contains type definitions for Jest (https://jestjs.io/).

---

## Setting Configurations

### tsconfig.json
1. Run command as follows:
```
tsc --init
```
1. Configure as follows:
```
"baseUrl": "./src",
"paths": {"#/*": ["*"]},
"outDir": "./dist",
```
* [TSConfig Reference](https://www.typescriptlang.org/tsconfig)

### package.json
Configure as follows:
```
  "scripts": {
    "test": "jest",
    "build": "webpack --mode production",
    "start": "webpack serve --mode development"
  }
```

### jest.config.js
1. Run command as follows:
```
npx ts-jest config:init
```
1. Configure as follows: [jest.config.js](../jest.config.js)

### Make webpack.config.js
Configure as follows: [webpack.config.js](../webpack.config.js)