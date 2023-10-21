const data = {
    name:'afroz',
    age:20,
    course:'ADCE',
}
// console.log(data.course);
const fs = require('fs');
const objdata = JSON.stringify(data);
// console.log(objdata);
// const jsondata = JSON.parse(objdata);
// console.log(jsondata);
// fs.writeFile('json.json',objdata,(error) =>{
//           console.log(error);
// })
fs.readFile('json.json',"utf-8",(error,data)=>{
    //    console.log(error,data);
    const jsdata = JSON.parse(data);
    console.log(jsdata.name);
})