var express = require('express');
var app = express();
require('dotenv').config()
app.use('/public',express.static(`${__dirname}/public`))

app.get('/', (req, res)=>{
    console.log(__dirname)
     res.sendFile(`${__dirname}/views/index.html`)
    //  res.send('Hello Expresss')
})

app.get('/json', (req, res)=>{
    let message = ''
    if (process.env.MESSAGE_STYLE === "uppercase") {
        console.log(process.env.MESSAGE_STYLE)
        message = "Hello World".toUpperCase();
      } else {
        message = "Hello World";
      }
      

    res.json({"message": message})
})


console.log(process.env.MESSAGE_STYLE ==='uppercase' )
console.log("Hello World ", __dirname)































 module.exports = app;
