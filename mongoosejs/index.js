const express = require('express')
const app = express()
const port = 3000;
const hello = require('./app');
app.get('/',(req,res)=>{
    res.send('connected');
})

app.listen(port,(error)=>{
    console.log('connected');
})