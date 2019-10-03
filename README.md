# dsp-styleguide

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate

# generate CSS Stylesheet package
$ npm run generate-stylesheet

# generate static website and stylesheet
$ npm run generate-all
```

## How to release

#### Deploy DSP Styleguide
In order to deploy the latest changes to DSP Styleguide app, all changes have to be merged in `master` branch. Netlify will take the branch, will run the build task and deploy to [dsp-styleguide.netlify.com](https://dsp-styleguide.netlify.com/)

#### Deploy DSP Stylesheet package
``` bash
$ git chekout master

$ gulp style # to generate only the Saratoga Design stylesheet
or
$ npm run generate-all # to generate the Saratoga Design stylesheet and the DSP Styleguide app

$ git checkout releases # checkout the releases branch

$ git checkout master dist/stg-design.css # checkout only the Saratoga Design stylesheet

$ git commit -m "Commit message"

$ git push

# Then create te release
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
