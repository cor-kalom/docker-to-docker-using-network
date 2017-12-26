const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request!');
    res.end('test 2');
});

server.listen(3000, (err) => {
    if(err) {
        console.error(`! err`);
    }

    console.log('server app_2 (node2) is ready');
});
