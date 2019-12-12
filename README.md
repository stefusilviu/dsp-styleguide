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

# Build CSS Stylesheet and JS package
$ npm run build-package

# generate static website and build package
$ npm run generate-all
```

## How to release

### QA build
Netlify will take the `develop` branch, will run the build task and deploy to [dsp-styleguide-qa.netlify.com](https://dsp-styleguide-qa.netlify.com/)

#### Deploy DSP Styleguide
In order to deploy the latest changes to DSP Styleguide app, all changes have to be merged in `master` branch. Netlify will take the branch, will run the build task and deploy to [dsp-styleguide.netlify.com](https://dsp-styleguide.netlify.com/)

#### Deploy DSP Stylesheet package
``` bash
$ git chekout master

$ npm run build-package # to generate only the Saratoga Design stylesheet
or
$ npm run generate-all # to generate the Saratoga Design stylesheet and the DSP Styleguide app

$ git checkout releases # checkout the releases branch

$ git checkout master dist # checkout only the Saratoga Design package

$ git commit -m "Commit message"

$ git push

# Then create the release
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Dependencies

* Cleave.js - input formatter (included in build)
* Bootstrap - css library (included in build)
* FontAwesome - icons library (not included in build)
