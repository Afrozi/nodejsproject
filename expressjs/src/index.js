const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const staticpath = path.join(__dirname,"../public");
app.use(express.static(staticpath));
app.set('view engine','hbs');
//app.set('views',staticpath);
app.get('/',(req,res)=>{
    res.render('index');
    // res.write("<h1>hello from the thapa technucal</h1>")
    // res.write("<h1>hello from the thapa technucal</h1>")
    // res.send('hello from the thapa technical');  
})
app.get('/about',(req,res)=>{
    res.send('hello from the thapa technical');
})
app.get('/contact',(req,res)=>{
    res.send('hello from the contact technical');
})
app.get('*',(req,res)=>{
    res.send('page is a not found');
})

app.listen(port,()=>{
    console.log('connected');
})