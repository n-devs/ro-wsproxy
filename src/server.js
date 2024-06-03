/**
 * Dependencies
 */
const http = require('http');
const https = require('https');
const fs = require('fs');
const ws = require('ws');
const modules = require('./modules');
const mes = require('./message');
const express = require('express')
const cors = require('cors')

/**
 * Proxy constructor
*/
const Proxy = require('./proxy');

const app = express()
app.use(cors({
    origin: '*'
}))

app.use(function (req, res) {
	res.writeHead(200);
	res.end("Secure wsProxy running...\n");
})

/**
 * Initiate a server
 */
var Server = function Init(config) {
	var opts = {
		clientTracking: false,
		verifyClient: onRequestConnect
	}

	if (config.ssl) {
		opts.server = https.createServer({
			key: fs.readFileSync(config.key),
			cert: fs.readFileSync(config.cert),
		},app );

		opts.server.listen(config.port)

		mes.status("Starting a secure wsProxy on port %s...", config.port)
	}
	else {
		opts.server = http.createServer(app);

		opts.server.listen(config.port)

		mes.status("Starting wsProxy on port %s...", config.port)
	}

	var WebSocketServer = new ws.Server(opts)

	WebSocketServer.on('connection', onConnection);

	return this;
}


/**
 * Before estabilishing a connection
 */
function onRequestConnect(info, callback) {

	// Once we get a response from our modules, pass it through
	modules.method.verify(info, function (res) {
		callback(res);
	})

}


/**
 * Connection passed through verify, lets initiate a proxy
 */
function onConnection(ws) {

	modules.method.connect(ws, function (res) {
		//All modules have processed the connection, lets start the proxy
		new Proxy(ws);
	})

}


/**
 * Exports
 */
module.exports = Server;
