'use strict';
const Joi = require('joi');


module.exports = [{
    method: 'GET',
    path: '/',
    config: {
        handler: (request, reply) => {
            reply.view('index.html', {});
        },
    }
},{
    method: 'GET',
    path: '/manifest.json',
    handler: {
        file: './public/manifest.json'
    }
},{
    method: 'GET',
    path: '/serviceworker.js',
    handler: {
        file: './public/javascript/serviceworker.js'
    }
},{
    method: 'GET',
    path: '/sw-toolbox.js',
    handler: {
        file: './node_modules/sw-toolbox/sw-toolbox.js'
    }
},{
    method: 'GET',
    path: '/notes/{name}',
    config: {
        handler: (request, reply) => {
            reply.view('note.html', {name: request.params.name});
        },
        validate: {
            params: {
                name: Joi.string().required()
            }
        }
    }
},{
    method: 'GET',
    path: '/articles/{name}',
    config: {
        handler: (request, reply) => {
            reply.view('article.html', {name: request.params.name});
        },
        validate: {
            params: {
                name: Joi.string().required()
            }
        }
    }
},{
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: {
            path: './public',
            listing: false,
            index: true
        }
    }
}];
