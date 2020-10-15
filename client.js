// THIS REQUIRE A SERVER TO BE CREATED BEFORE CALLED 
// MAKES USE OF THE SERVER CONNECTION TO CREATE CONNECTION AT PORT

const net = require('net');

// LISTEN TO A SERVER CONNECTION AT PORT 8080 
const client = net.createConnection({
    port: 8080,
});

client.on('data', (data) => {
    console.log(`Received message: ${data}`);
}); 