const http = require('http');
const server = http.createServer();
const fs = require('fs');
server.on('request',(req,res)=>{
//    fs.readFile('three.js',"utf-8",(error,data)=>{
//     res.end(data);
//    })
    const streamdata = fs.createReadStream('three.js');
        streamdata.on('data',(dataload)=>{
            res.end(dataload)
        })
    // const streamdata = fs.createReadStream('three.js');
    // streamdata.pipe(res)
})
const port = 3000;
server.listen(port,"127.0.0.1",()=>{
    console.log('connected');
})