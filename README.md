tt-nst
====

Time Tracking - Nearshore Technology

### Setup your dev environment

* After clone the code, install [NodeJS].
* We are workign with fourth modules for node [stylus], [nib], [browserify] and [gulp].
* We install them using [npm].

```sh
  npm install -g browserify
  npm install -g gulp
  npm install -g stylus
  npm install -g nib
```

* Now we need to install frontend dependencies

```sh
  npm install
```

* We need to be sure on create folders for css and js on dev (app folder)

```sh
  mkdir app/css
  mkdir app/js
```

We are working on gulp integration for automation on build task, for now we only have the follow commands

* Generation of index.js

```sh
  npm run bundle
```

* Generation of index.css

```sh
  stylus app/stylus/index.styl -o app/css/ -u nib
```

What's next
----

Implement gulp to automate all build task and compress assets for production grade

[NodeJS]:http://nodejs.org/
[npm]:https://www.npmjs.org/
[stylus]:http://learnboost.github.io/stylus/docs/executable.html
[bower]:http://bower.io/
[browserify]:http://browserify.org/
[gulp]:http://gulpjs.com/
[nib]:http://visionmedia.github.io/nib/
