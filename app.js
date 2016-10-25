'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Blipp = require('blipp');

const Pack = require('./package');
let Routes = require('./lib/routes.js');


const goodOptions = {
    ops: {
        interval: 1000
    },
    reporters: {
        console: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{
                log: '*',
                response: '*'
            }]
        }, {
            module: 'good-console'
        }, 'stdout']
    }
};

let server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3020
});


server.register([
    Inert,
    Vision,
    Blipp,
    {
        register: require('good'),
        options: goodOptions
    }],
    (err) => {

        if (err) {
            console.log(err);
        }

        server.route(Routes);

        server.start((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Server running at:', server.info.uri);
            }
        });
    });


// add templates only for testing custom.html
server.views({
    path: 'public',
    engines: { html: require('handlebars') },
    isCached: false
});
