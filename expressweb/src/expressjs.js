const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const staticpath = path.join(__dirname,'../public');
app.use(express.static(staticpath));
app.set('view engine','hbs');
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/',(req,res)=>{
    res.send('hello from the thapa technical');
})
app.get('/',(req,res)=>{
    res.send('hello from the thapa technical');
})
app.listen(port,'127.0.0.1',(error)=>{
    console.log('connected');
})