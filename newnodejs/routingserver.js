const http = require('http');
const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if (req.url == '/') {
        res.end("this is a home page");
    }
    else if (req.url == '/about') {
        res.end('this is a about page');
    }
    else if (req.url == '/contact') {
           res.end('this is a contact page');
    }
    else{
        res.writeHead(404,{"content-type" : "text/html"})
        res.end('<h1> 404 page is a not found</h1>');
    }
    res.end('hello from the thapa technical');
})
const port = 3000;
server.listen(port,'127.0.0.1',()=>{
    console.log('connected');
})