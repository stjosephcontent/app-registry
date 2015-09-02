var http = require('http');

var ip = '0.0.0.0';
var port = 8080;

http.createServer(function (req, res) {
    console.log('hello');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(port, ip);

console.log( 'Server running at http://' + ip + ':' + port );