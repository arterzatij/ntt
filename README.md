tt-nst
====

Time Tracking - Nearshore Technology

### Setup your dev environment

* After clone the code, install [NodeJS].
* We are workign with fourth modules for node [stylus], [nib], [browserify] and [gulp].
* We install them using [npm] on global scope.

```sh
  npm install -g gulp
  npm install -g stylus
  npm install -g nib
```

* Now we need to install frontend dependencies and development dependecies

```sh
  npm install
```

* Runinng develompent build

```sh
  gulp
```

* If we are working on editing css and javascript we can let gulp continuously building css and javascript

```sh
  gulp watch
```

* For production installation, all assets will compress (js and css) and html too.

```sh
  gulp dist
```

[NodeJS]:http://nodejs.org/
[npm]:https://www.npmjs.org/
[stylus]:http://learnboost.github.io/stylus/docs/executable.html
[bower]:http://bower.io/
[browserify]:http://browserify.org/
[gulp]:http://gulpjs.com/
[nib]:http://visionmedia.github.io/nib/
