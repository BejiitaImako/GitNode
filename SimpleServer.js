const http = require('http');
const port = 3000;
const server = http.createServer(function(req, res) {});
server.listen(port, function(err) {
	if (err) {
		console.log('Server start on port ' + port + ' fail');
	} else {
		console.log('Server listens on port ' + port);
	}
});
