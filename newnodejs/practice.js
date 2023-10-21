// const os = require('os');
// console.log('hello from the thapa technicals');
// let name = 'hello from the thapa technicals';
// console.log(name);
// const fs = require('fs');
// console.log(fs);
// fs.unlinkSync('text.txt',console.log('hello'));
// fs.writeFileSync('text.txt','hello from the thapa technical',console.log('hello'));
// fs.appendFileSync('text.txt','hey I am a fullstack developer',console.log('hello'));

//  const  name = fs.readFileSync('text.txt',"utf-8",console.log('hello'));
//  console.log(name);

// fs.renameSync('text.txt','hello.txt',console.log('hello'));
// fs.unlinkSync('hello.txt',console.log('hello'));
// fs.rmdirSync('data',(console.log('hello')));

// fs.writeFile('text.txt','Hey I am a fullstack developer in the computer fields',()=>{
//     console.log('connceted');
// });

// fs.appendFile('text.txt','Hey I am a developer',()=>{
//     console.log('hey');
// });

// fs.readFile('text.txt',"utf-8",(err,data)=>{
//    console.log(data);
// })

// fs.rename('text.txt','css.txt',(err)=>{
//     console.log(err);
// });

// fs.unlink('css.txt',(err)=>{
//     console.log('thapa');
// })

// fs.mkdir('data',(err)=>{
//     console.log('data');
// })

// fs.rmdir('data',(err)=>{
//     console.log('connected');
// })

// console.log(os.arch());
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.tmpdir());
// console.log(os.type());

// const sum = (a,b)=>{
//     return a+b
// }
// const sub = (a,b)=>{
//     return a-b
// }
// const mul = (a,b)=>{
//     return a*b
// }
// const div = (a,b)=>{
//     return a/b
// }

// module.exports = {sum,sub,mul,div};

// const events = require('events');
// const eventEmitter = new events.EventEmitter();
// eventEmitter.on('myname',()=>{
//     console.log('hello from the thapa technicals');
// });

// eventEmitter.emit('myname');

// const data = {
//     name:'afrozkhan',
//     age:34,
//     rollno:23,
//     author:'thapa',
// };
// console.log(data);
// const objdata = JSON.stringify(data);
// // console.log(objdata);
// const thapa = JSON.parse(objdata);
// // console.log(thapa);
// const fs = require('fs');
// fs.writeFile('data.json',objdata,()=>{
//     console.log('connected');
// })
// fs.readFile('data.json','utf-8',(err,data)=>{
//     //   console.log(data);
//     const afroz = JSON.stringify(data);
//     const khan = JSON.parse(afroz);
//     console.log(khan);
//     console.log(afroz);

// })

// const path = require('path');
// console.log(path.basename('D:/newnodejs/pathmodule.js'));
// console.log(path.dirname('D:/newnodejs/pathmodule.js'));
//  console.log(path.extname('D:/newnodejs/pathmodule.js'));

// function name() {
//     const name = 'ankit';
//     console.log(name);
// }

// name()

// console.log(__dirname);
// console.log(__filename);

// const http = require('http');
// const server = http.createServer((req,res)=>{
//     if (req.url == "/") {
//         res.end('hello from the thapa technicals');
//     }
//    else if (req.url == '/about') {
//         res.end('hello from the about technicals');
//     }
//    else if (req.url == '/contact') {
//         res.end('hello from the contact technicals');
//     }
//    else if (req.url == '/gallery') {
//         res.end('hello from the gallery technicals');
//     }
//     else{
//         res.end('404 is a error page');
//     }
   
// })
// const port = 3000;
// server.listen(port,()=>{
//     console.log('conncetd');
// })


const http = require('http');
const server = http.createServer();
const port = 3000;
server.on('request',(req,res)=>{
    const fs = require('fs');
    fs.readFile('routingserver.js',"utf-8",(err,data)=>{
        res.end(data);
    })
})
server.listen(port,()=>{
    console.log('connected');
})