var express = require('express');
var app = express();

app.get('/', (req, res)=>{
    console.log(__dirname)
     res.sendFile(`${__dirname}/views/index.html`)
    //  res.send('Hello Expresss')
})



console.log("Hello World ", __dirname)































 module.exports = app;
