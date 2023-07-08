const express = require('express')
const app = express();

app.get('/', (req, res) => {
    console.log('get /');
    console.log(req);
    res.send('<h1>hello there</h1>');
})

app.get('/users', (req, res) => {
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

app.listen(3001, () => {
    console.log('now listening at port 3001');
})