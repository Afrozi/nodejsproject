//console.log("hello");
const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
let port = 3000;
const path = require("path");
const empCollection = require('./model/model');
const template_path = path.join(__dirname,'../template/views')
app.set('view engine','hbs');
app.set('views',template_path)
require('./db/conn');
app.use(express.urlencoded({extended:false}));

// app.get("/",(req,res)=>{
//     res.send("hello world");
// })

app.get('/',(req,res)=>{
    res.render('signup');
})

app.post('/empdata', async (req,res)=>{

    try {
        const password = req.body.password;
       const cpassword = req.body.cpassword;

   if (password === cpassword) {
         const empData = new empCollection({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
            cpassword:req.body.cpassword,

         });

         const postData = await empData.save();
         console.log('token is'+ postData);
         res.send(postData)
   }else{
         res.send("password are not matching...");
   }
    } catch (error) {
        console.log(error);
    }
//    console.log(req.body.name);
//    res.send(req.body.name);
   
})

app.get('/login',(req,res)=>{
    res.render('login');
});

app.post('/loginpage', async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.loginpassword;
   
        const getEmail = await empCollection.findOne({email:email});
        //console.log(getEmail.password);
       // res.send(getEmail.password);
        const passwordmatch = await bcrypt.compare(password,getEmail.password);

       if (passwordmatch) {
           res.render('index');
       }else{
           res.send("password are not matching...")
       }
    } catch (error) {
        //console.log(error);
        res.send(error);
    }
});

// const bcrypt = require('bcrypt');
// const passwordData = async (pass)=>{
//     const passData = await bcrypt.hash(pass,10);
//     console.log(passData);
//     const decodepassword = await bcrypt.compare('ankit12',passData);
//     console.log(decodepassword);
// };
// passwordData('ankit123')
const jwt = require('jsonwebtoken');
const createToken = async()=>{
     const token = jwt.sign({_id:'6588775764'},"hey I is a software developer");
     console.log(token);

     const tokenverify = jwt.verify(token,"hey I is a software developer");
     console.log(tokenverify);
}
createToken();
app.listen(port,()=>{
    console.log(`listing to the port ${port}`);
})