const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const playlist = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    phone:{
        type:Number,
        require:true,

    },
    password:{
        type:String,
        require:true,
    },
    cpassword:{
        type:String,
        require:true,
    },
});

playlist.pre('save',async function (next) {
    console.log(this.password);
    this.password = await bcrypt.hash(this.password,10);
    next();
    this.cpassword = undefined;
})
const objdata = mongoose.model('afrozdevelopers',playlist);
module.exports = objdata;