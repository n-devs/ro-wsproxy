/**
 * Module
 */

import cluster from 'cluster'
import Server from './server.mjs'

function Init(config)
{
	/**
	 * Dependencies
	 */
	// var cluster = require('cluster');
	
	
	/**
	 * Invoke workers
	 */
	if(cluster.isMaster) {
		for(var i = 0; i < config.workers; i++) {
			forkWorker(config);
		}
		
		return;
	}


	/**
	 * Server constructor
	 */
	// var Server  = require('./server.mjs');
	
	var server = new Server(config);
	
	
	/**
	 * Fork new worker
	 */
	function forkWorker(config) {
		var worker = cluster.fork({
			isWorker: true
		});
	}
}

export default Init