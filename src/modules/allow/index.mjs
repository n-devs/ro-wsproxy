// Logs
import mes from './../message'

// Allowed IP:HOST to proxy to.
import allowed_ip from '../../../allowed.mjs'

// This method will check if this websocket can proxy to this server
// next(boolean) will expect a true or false
//
// @param {Object}
// @param {Function} next module to execute from stack
function checkAllowed(info, next) {
	var target = info.req.url.substr(1);
	var from   = info.req.connection.remoteAddress;

	// Reject
	if (allowed_ip.length && allowed_ip.indexOf(target) < 0) {
		mes.info("Reject requested connection from '%s' to '%s'.", from, target);
		next(false);
	}

	next(true);
}


// Exports methods
export default {
	verify: checkAllowed //module.verify method
}
