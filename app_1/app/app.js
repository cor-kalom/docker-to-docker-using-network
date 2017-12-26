const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request!');
    res.end('test 1');
});

server.listen(3000, (err) => {
    if(err) {
        console.error(`! err`);
    }

    console.log('server app_1 (node1) is ready');
});
