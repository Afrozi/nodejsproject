const express = require('express');
const app = express();
const port = 3000;
const path = require("path");

const staticpath = path.join(__dirname,'../public');
 app.use(express.static(staticpath));

app.set('view engine','hbs');
app.get("/",(req,res)=>{
    res.render('index');
});

app.get("*",(req,res)=>{
    res.render('error')
});

app.listen(port,()=>{
    console.log('all right');
});


//  const template_path = path.join(__dirname,'../template');
//  app.set('views',template_path);