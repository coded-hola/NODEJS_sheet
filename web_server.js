// THIS IS A USED TO CREATE A WEB SERVER


const fs = require('fs');

// HTTP MODULES

const http = require('http');
// const server = http.createServer((request, result) => {
//     const name = request.url.slice(1);
//     result.writeHead(200, { 'content-type': 'text/html'});
//     result.end(`<h1>Hello World</h1> <br/> Based on ${name} is the url`);
//     console.log(request.url);
// });

// server.listen(8080, 'localhost');

// STREAMS
// THEY ARE USED TO LOAD FILES BIT BY BIT

/**
 * 
 * const server = http.createServer((req, res) => {
 * 
 * fs.readFile('./hello.html', (err, data) => {
 * 
 *  if(err) throw err;
 * return.end(data);
 * 
 * });
 * });
 * server.listen(8080, 'localhost);
 * 
 */

 const server = http.createServer((req, res) => {
     const file = fs.createReadStream('./hello.html');
     file.pipe(res);
 })

server.listen(8080, 'localhost');


