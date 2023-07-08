const express = require('express')
const serverless = require('serverless-http')

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    console.log('get /');
    console.log(req);
    res.send('<h1>hello there</h1>');
})

router.get('/users', (req, res) => {
    console.log('get /users')
    res.json([
        {
            uname: 'callmecposu',
            pword: '1234'
        },
        {
            uname: 'jmanalo',
            pword: '12345678'
        }
    ]);
})

app.use('/.netlify/functions/api', router)

module.exports = app;
module.exports.handler = serverless(app);