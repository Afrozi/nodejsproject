const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bcrypt = require('bcrypt');
const staticpath = path.join(__dirname,'../template/views');
app.set('view engine','hbs');
app.set('views',staticpath);
app.use(express.urlencoded({extended:false}));
const objdata = require('./model/model');
const { create } = require('hbs');
require('./db/connect')
app.get('/',(req,res)=>{
    res.render('signup');
})

 //const userdata = objdata.find({});
app.post('/empdata',(req,res)=>{
    try {
        const password = req.body.password;
    const cpassword = req.body.cpassword;
    if (password === cpassword) {
        const data = new objdata({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
            cpassword:req.body.cpassword,
        })
        const hellothapa = data.save();
    //    userdata.exec(function(error,data){
    //         if (error) {
    //             console.log(error);
    //         }
    //     })
        res.render('login');
    }
    else{
        res.send('password are not matching...');
    }
    } catch (error) {
        res.send(error);
    }
})
 app.post('/loginpage',async (req,res)=>{
    try {
        const password = req.body.loginpassword;
        const email = req.body.email;
    
        const getemail = await objdata.findOne({email:email});
        const passmatch = await bcrypt.compare(password, getemail.password);
        //console.log(getemail);
    //    if (getemail.password === password) {
       if (passmatch) {
             res.render('index');
       }else{
        res.send('password are not matching.....');
       }
    } catch (error) {
        res.send(error)
    }
})
const jwt = require('jsonwebtoken');
const createtoken = async()=>{
    const token = jwt.sign({_id:"6949659496"},"mynamefdfifgubruegirgewrgejiwwfwfgifeu");
    console.log(token);

    const tokenverify = jwt.verify(token,"mynamefdfifgubruegirgewrgejiwwfwfgifeu");
       console.log(tokenverify);
}
createtoken();
app.listen(port,()=>{
    console.log('connected');
})