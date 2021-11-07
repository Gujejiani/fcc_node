var express = require('express');
var app = express();
require('dotenv').config()
app.use('/public',express.static(`${__dirname}/public`))

app.use((req, res, next)=>{
    console.log(req.method,req.path, '- '+ req.ip, )
    next()
})

app.get('/', (req, res)=>{
    console.log(__dirname)
     res.sendFile(`${__dirname}/views/index.html`)
    //  res.send('Hello Expresss')
})

app.get('/now', (req, res, next)=>{
    req.time = new Date().toString()
    next()
}, (req, res)=>{
    res.json({time: req.time})
})

app.get('/json', (req, res)=>{
    let JsonResponse = {"message": "Hello json"}
    if (process.env.MESSAGE_STYLE === "uppercase") {
        JsonResponse.message =   JsonResponse.message.toUpperCase();
      
      } 
      

    res.json(JsonResponse)
})


app.get('/:word/echo', (req, res)=>{
    const word = req.params.word
    res.json({'echo': word})
})

const getNameHandler = (req, res)=>{
    console.log('its not my fa')
    const {firstname, lastname} = req.query

    res.json({name: req.query.firstname + " " + req.query.lastname})
}
// app.get('/name', getNameHandler)
app.route('/name').get(getNameHandler)





console.log(process.env.MESSAGE_STYLE ==='uppercase' )
console.log("Hello World ", __dirname)































 module.exports = app;
