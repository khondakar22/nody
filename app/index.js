/**
 * Primary File for the API
*/

// Dependencies
const http = require('http');

// The server should respond to all requests with a string
const server = http.createServer((req, res)=> {
  res.end('Helo World\n');
})

// Start the server, and have it listen on Port 3000

server.listen(3000, ()=>{
  console.log('This server is listening on port 30000 now');
})