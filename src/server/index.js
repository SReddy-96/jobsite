import WebServer from './web.server'

// The import of web.server.js to start and stop the server with try, catch and promises. Here is where that code is executed.

let webServer = new WebServer();

webServer.start()
    .then(() => {
        console.log('Web Sever started!')
    })
    .catch(err => {
        console.error(err)
        console.error('Failed to start web server')
    });

