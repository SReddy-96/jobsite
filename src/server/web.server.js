const express = require('express');
const axios = require('axios');

//  With the use of express, this sets the local server up and running. The try and catch is there to handle any errors.

export default class WebServer {
    constructor() {
        this.app = express()
        this.app.use(express.static('dist/public'))

    }

    start() {
        return new Promise((resolve, reject) => {
            try {
                this.server = this.app.listen(3000, function () {
                    resolve()
                });
            } catch (e) {
                console.error(e)
                reject(e)
            }
        })
    }

    stop() {
        return new Promise((resolve, reject) => {
            try {
                this.server.close(() => {
                    resolve()
                })
            } catch (e) {
                console.error(e.message)
                reject(e)
            }
        })
    }
}

