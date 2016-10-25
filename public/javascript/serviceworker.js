

importScripts('/sw-toolbox.js');


toolbox.precache(['/css/site.css','/images/photo-small-128.png']);
toolbox.router.get('/css*', toolbox.cacheFirst);
toolbox.router.get('/images*', toolbox.cacheFirst);


toolbox.router.get('/', toolbox.cacheFirst, {
    cache: {
        name: 'pages',
    }
});


toolbox.router.get('/notes/:name', toolbox.cacheFirst,{
    cache: {
        name: 'pages',
    }
});


toolbox.router.get('/articles/:name', toolbox.cacheFirst,{
    cache: {
        name: 'pages',
    }
});