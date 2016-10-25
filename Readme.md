# sw-toolbox example

A simple sw-toolbox example site with HAPI backend. Has five pages and a basic sw-toolbox setup

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


