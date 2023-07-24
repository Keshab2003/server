const http = require('http');
const port = 8081;

http
    .createServer((request, response) => {
        // response.writeHead(200, { "Content-Type": "text/html" });
        // response.write("<h1>Hello,this is being generated from the server itself ,by keshab!</h1>");
        var toDoList = ["hi this is done by ", "Keshab chaudhary!", "yes"];
        const { method, url } = request;
        if (url === "/todos") {
            if (method === "GET") {
                response.writeHead(200, { "Content-Type": "html/text" });
                response.write(toDoList.toString());
            }
            else if (method === "POST") {
                let body = '';
                request.on('error', (err) => {
                    console.error(err);
                }).on("data", (chunk) => {
                    body += chunk;
                }).on('end', () => {
                    body = JSON.parse(body);
                    console.log("data:", body);
                });
            }
            else if (method === "DELETE") {
                let body = '';
                request.on('error', (err) => {
                    console.error(err);
                }).on('data', (chunk) => {
                    body += chunk;
                }).on('end', () => {
                    body = JSON.parse(body);
                    let deleteThis = body.item;
                    for (let i = 0; i < toDoList.length; i++) {
                        if (toDoList[i] === deleteThis) {
                            toDoList.splice(i, 1);
                            break;
                        }
                    }
                    // toDoList.push(i);
                    response.writeHead(202);
                    console.log(toDoList);
                });

            }
            else {
                response.writeHead(501);
            }
        }
        response.end();
    })
    .listen(port, () => {
        console.log(`Nodejs server started on port ${port}`);
    });

//http://localhost:8081

//type this in a browser to know wheatger it is running or not