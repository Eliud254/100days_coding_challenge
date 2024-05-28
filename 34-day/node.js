// Import core modules
const fs = require('fs');
const http = require('http');
const path = require('path');
const EventEmitter = require('events');
const { Buffer } = require('buffer');

// 1. File System (fs) - Read a file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`File content: ${data}`);
});

// 2. HTTP/HTTPS - Create a simple HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, world!\n');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found\n');
    }
});
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// 3. Path - Work with file and directory paths
const filePath = path.join(__dirname, 'example.txt');
console.log(`Full file path: ${filePath}`);

// 4. Events - Use EventEmitter to handle events
const eventEmitter = new EventEmitter();
eventEmitter.on('greet', () => {
    console.log('Hello event has been emitted!');
});
eventEmitter.emit('greet');

// 5. Buffer - Manipulate binary data
const buf = Buffer.from('Hello, Buffer!');
console.log(`Buffer content: ${buf.toString()}`);

// 6. Stream - Read a file using streams
const readStream = fs.createReadStream('example.txt', 'utf8');
readStream.on('data', (chunk) => {
    console.log(`Stream chunk: ${chunk}`);
});
readStream.on('end', () => {
    console.log('No more data to read.');
});
