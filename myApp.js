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
    let JsonResponse = {"message": "Hello JSon"}
    if (process.env.MESSAGE_STYLE === "uppercase") {
        JsonResponse.message =   JsonResponse.message.toUpperCase();
      
      } 
      

    res.json(JsonResponse)
})


console.log(process.env.MESSAGE_STYLE ==='uppercase' )
console.log("Hello World ", __dirname)































 module.exports = app;
