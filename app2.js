var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('certs/dummy-key.pem'),
  cert: fs.readFileSync('certs/dummy-cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(3000);
