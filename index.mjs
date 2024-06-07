// #!/usr/bin/env node

// Import library
import main from './src/main.mjs'
// import modules from './src/modules.mjs'
// import { publicIpv4 } from 'public-ip'
// import allowed from './allowed.mjs'
// var args = require('optimist').argv;
// var main = require('./src/main.mjs');
// var modules = require('./src/modules.mjs');
// var allowed = require('./allowed');


// Arguments
// if(args.h || args.help) {
// 	console.log('Example usage:');
// 	console.log('wsproxy -p 5999');
// 	console.log('-p, --port port to run wsProxy on. [Default: 5999]');
// 	console.log('-a, --allow list of allowed ip:port to proxy to (comma separated) [Default: none] [Example: 127.0.0.1:6900,127.0.0.1:5121,127.0.0.1:6121]');
// 	console.log('-t, --threads number of \"threads\" to spawn, set it to the number of cpu\'s you have. [Default: 1]');
// 	console.log('-s, --ssl enable ssl.');
// 	console.log('-k, --key path to ssl key file. [Default: ./default.key]');
// 	console.log('-c, --cert path to ssl cert file. [Default: ./default.crt]');
// 	process.exit(0);
// }


// Load modules
// modules.load('allow');

// async function allowUrl() {
// 	const ipv4 = await publicIpv4()
// 	return `${ipv4}:6900,${ipv4}:5121,${ipv4}:6121`
// }
// Parse allowed ip:port option into array
// Overrides the default allowed.js file
// TODO: remove this allowed.js file, and write a standard way to handle this allowed_ip option.
// if(args.a || args.allow) {
// 	allowed = allowUrl().split(',');
// }


// Init
main({
	port: 5999,
	workers: 1,
	ssl: true,
	key: "./default.key",
	cert: "./default.crt",
});
