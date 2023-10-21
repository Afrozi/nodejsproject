const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/codewithaj')
.then(()=>{
    console.log('connected');
}).catch((error)=>{
    console.log(error);
});
const playlist = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    videos:Number,
    author:String,
    active:Boolean,
});

const objdata = new mongoose.model('coder',playlist);

// const python = new objdata({
//     name:'python',
//     videos:20,
//     author:'hey I am a developer',
//     active:true,
// });
// const java = new objdata({
//     name:'java',
//     videos:20,
//     author:'hey I am a developer',
//     active:true,
// });
// const sql = new objdata({
//     name:'rihan',
//     videos:20,
//     author:'hey I am a developer',
//     active:true,
// });

// objdata.insertMany([python,java,sql]);

// async function readDocument() {
//     const result = await objdata.find();
//     console.log(result);
// }
// readDocument();

// async function updatedata() {
//     const result = await objdata.updateOne({name:'java'},{$set:{name:'javadeveloper'}});
//     console.log(result);
// }
// updatedata();
// async function updatedata(_id) {
//     const result = await objdata.findByIdAndUpdate({_id});
//     console.log(result); 
// }
// updatedata('652f9186df0aff653144c3b0');

// async function deleteone(_id) {
//     const result = await objdata.deleteOne({_id})
//     console.log(result);
// }
// deleteone('652f9186df0aff653144c3b0');