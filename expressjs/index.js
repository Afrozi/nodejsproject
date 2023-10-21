const express = require('express');
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.write("<h1> hello from the thapa technical. </h1>");
    res.write("<h2> hello from the thapa technical. </h2>");
    res.send();
})
 app.get("/about",(req,res)=>{
    res.send("hello from the thapa technical");
})
app.get("/contact",(req,res)=>{
    res.json([
        {
        id:1,
        name:'afroz',
        course:"mca",
    },
        {
        id:1,
        name:'afroz',
        course:"mca",
    },
        {
        id:1,
        name:'afroz',
        course:"mca",
    }
]);
})
app.get("*",(req,res)=>{
    res.send("hello from the thapa technical");
})

app.listen(port,()=>{
    console.log("connected");
})