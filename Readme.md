# sw-toolbox example

A simple Google [sw-toolbox](https://github.com/GoogleChrome/sw-toolbox) example site with HAPI backend.
Has five pages and a very basic sw-toolbox setup. It meant as a boilerplate on which I can build experiments.

``` bash
$ git clone https://github.com/glennjones/sw-toolbox-example
$ cd sw-toolbox-example
$ npm install
$ node app.js
```
Needs Node.js v4+ installed to run HAPI

View site at http://localhost:3020/

The main file to look at

* `/public/javascript/site.js` this has the service worker registration
* `/public/javascript/serviceworker.js` this has the config for sw-toolbox setup


