const http = require('http');
const port = 8081;

http
    .createServer((require, response) => {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Hello,this is being generated from the server itself!</h1>");
        response.end();
    })
    .listen(port, () => {
        console.log(`Nodejs server started on port ${port}`);
    });

//http://localhost:8081

//type this in a browser to know wheather it is running or not
