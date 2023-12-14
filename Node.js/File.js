const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
     fs.readFile('/home/bhagyesh/Documents/JavaScript/Node.js/myfile.html','utf8',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
     });
     fs.appendFile('/home/bhagyesh/Documents/JavaScript/Node.js/myfile.html','<p>hi how are you?</p>',(err)=>{
          if(err) throw err;
     })
}).listen(8080);