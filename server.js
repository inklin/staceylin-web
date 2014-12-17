var static = require('node-static');

var server = new static.Server('./public');

var port = (process.env.PORT || 9292);

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    server.serve(request, response);
  }).resume();
}).listen(port);

console.log('Server running at http://localhost:' + port);
