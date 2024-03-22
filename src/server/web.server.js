const express = require('express');
const axios = require('axios');

//  With the use of express, this sets the local server up and running. The try and catch is there to handle any errors.

export default class WebServer {
    constructor() {
        this.app = express()
        this.app.use(express.static('dist/public'))

        // making a get request server side
        this.app.get('/api/jobs', async (req, res) => {
            try {
                // Make a request to the third-party API
                const response = await axios.get('https://remoteok.io/api');

                // Send the data back to the client
                res.json(response.data);
            } catch (error) {
                console.error('Error fetching job data:', error);
                res.status(500).send('Error fetching job data');
            }
        });

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

