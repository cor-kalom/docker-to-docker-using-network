const http = require('http');

const makeHTTPCall = (address) => {
    http.get(address, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;    
        });

        res.on('end', () => {
            console.info(`${address}: ${data}`);
        });
    }).on('error', (err) => {
        console.error(`! ${address}: ${err.message}`);
    });
};

makeHTTPCall('http://node1:3000/');
makeHTTPCall('http://node2:3000/');
