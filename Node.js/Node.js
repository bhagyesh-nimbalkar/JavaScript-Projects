const server = require('http');
const url = require('url');
server.createServer((req,res)=>{
     res.writeHead(200,{'Content-Type':'text/html'});
     const q = url.parse(req.url,true).query;
     res.write("<h2>Year = "+q.year+" Month = "+q.month+"</h2>");
     res.end();
}).listen(8080);