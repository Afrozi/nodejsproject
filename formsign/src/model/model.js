const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const empSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
             type : String,
             unique : true,
             required : true,
    },
    phone : {
        type : Number,
        required : true,

    },
    password : {
          type : String,
          required : true,
    },
    cpassword : {
          type : String,
          required : true,
    }
});

empSchema.methods.createToken = async function () {
    //console.log(this._id);
    try {
        const token = await jwt.sign({_id: this._id},
            "dfd efbefeiuf bifhefb efgbf wgfebdw egfg gred ewegd wqegu wgreb rfbhew guih");
            //console.log(token);
            this.tokens = this.tokens
    } catch (error) {
        console.log(error);
    }
}

empSchema.pre('save',async function(next) {
    //console.log(this.password);
    this.password = await bcrypt.hash(this.password,10);
    next();
    this.cpassword = undefined
})


const empCollection = new mongoose.model('empcollection',empSchema);
module.exports = empCollection;