const http = require('http');

// THE RIGHT WAY TO CREATE A WEB SERVER WITH HTTP
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write('working');
        res.end();
    }
});

server.listen(8080);

console.log('App initiated');