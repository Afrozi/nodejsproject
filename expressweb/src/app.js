const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const staticpath = path.join(__dirname,"../public");
app.use(express.static(staticpath));
app.set('view engine',"hbs");
app.get("/",(req,res)=>{
    res.render('index');
})
app.get("/home",(req,res)=>{
    res.send('hello from the home technicals');
})
app.get("/about",(req,res)=>{
    res.send('hello from the about technicals');
})
app.get("*",(req,res)=>{
    res.send('404 is a error pages');
})
app.listen(port,()=>{
    console.log('connected');
})