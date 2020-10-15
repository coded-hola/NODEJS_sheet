// THIS CREATE A SERVER THAT WAITS FOR A CLIENT TO CONNECT TO 
// IT REQUIRES A CLIENT TO CONNECT AND IS ASYNCHRONOUS


// THE NET MODULES
const net = require('net');
const server = net.createServer();

server.listen({
    host: 'localhost',
    port: 8080,
});

server.on('connection', (client) => {  
    console.log('connected successfully');
    client.write('welcome to NODEJS'); 
});
