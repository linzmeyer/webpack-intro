# Bundlers

This lesson is based on [this video](https://www.youtube.com/watch?v=5IG4UmULyoA).

## The Problem
Native JS does not recognize how to resolve import paths. We use bundlers to fix this until this has been fixed.


## Solution
1. `npm i --save-dev webpack-cli web`
1. Add `build` script to package.json
    ```json
    ...
      "scripts": {
        ...,
        "build": "webpack"
      },
    ...
    ```
1. run `npm run build`
    * A `dist/main.js` file has been generated.
    * This is what you want your html script tag to point to now.
1. Change your html script tag file path to point to the `dist/main.js`.
    * Now your import statement should be working.
1. Dance!! You just bundled your first module!!


## Webpack Configuration
It's important to note that we are using the webpack default. For example, webpack looks for index.js by default. It will not work otherwise. In order to customize how webpack operates, you need to create and customize a `webpack.config.js` file.


