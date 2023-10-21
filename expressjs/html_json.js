const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('this is a home page');
});
app.get('/about',(req,res)=>{
    res.write('<h1>this is a about page</h1>');
    res.write('<h1>this is a about page</h1>');
    res.send();
});
app.get('/contact',(req,res)=>{
    res.json([
        {
        id:1,
        name:'afroz',
        address:"pitampura",
    },
        {
        id:1,
        name:'afroz',
        address:"pitampura",
    },
        {
        id:1,
        name:'afroz',
        address:"pitampura",
    }
]);
});
app.listen(port,()=>{
    console.log('all rignt');
})