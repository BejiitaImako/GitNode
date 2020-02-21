const http = require('http');
const port = 3000;
const server = http.createServer(function(req, res) {
	let dataset = { Name: 'Bejiita', Occupation: 'Coder' };
	let data = JSON.stringify(dataset);
	res.setHeader('Content-type', 'application/JSON');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.writeHead(200);
	res.end(data);
});
server.listen(port, function(err) {
	if (err) {
		console.log('Server start on port ' + port + ' fail');
	} else {
		console.log('Server listens on port ' + port);
	}
});
