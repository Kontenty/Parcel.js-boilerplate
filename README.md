# Parcel.js boilerplate

A simple template for static website using bootstrap and Parcel.js

#### Why _Parcel.js_

It is absolutely zero configuration bundler.<br>

Let's assume yo uhave `index.html` file. Inside reference your js and css or sass, just like that

> `<link rel="stylesheet" href="sass/main.scss">`

Now you only have to run,

> `npx parcel index.html`

... and voila. Parcel fetches all suitable npm libraries (in this example `sass`), compiles all files into dist folder, and runs dev server on `localhost:1234`

## My boilerplate

Shows how to use Parcel.js with

- jQuery
- Bootstrap
- Sass

Additionally it adds some conveniences<br>
Parcel.js hashes all output filenames so dist filder gets cluttered. That's why there is used rimraf - to clean dist folder.<br>
Parcel loads all files referenced by index.html into one output folder. However some images loaded by js - i.e. defered or lazyloaded, will not. Those place in static folder, and will be copied by parcel-plugin-static-files-copy.

### How to use

Run `git clone https://github.com/Kontenty/Parcel.js-boilerplate.git` <br>
Run `yarn install` or `npm install` <br>
Run `yarn start` or `npm start` to have all bundled in the `dist` folder. <br>
Run `yarn build` or `npm build` to have all bundled and minified in the `build` folder. <br>
