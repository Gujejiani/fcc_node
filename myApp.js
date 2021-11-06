var express = require('express');
var app = express();
app.use('/public',express.static(`${__dirname}/public`))

app.get('/', (req, res)=>{
    console.log(__dirname)
     res.sendFile(`${__dirname}/views/index.html`)
    //  res.send('Hello Expresss')
})

app.get('/json', (req, res)=>{
    const message = {message: "Hello Json"}
    res.json(JSON.stringify(message))
})


console.log("Hello World ", __dirname)































 module.exports = app;
