var os = require('os');
var formatTime = require('./time');
function getOSinfo() {
	var type = os.type();
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	if(type === 'Darwin') {
		type = "OSX";
	} else if(type === 'Windows_NT') {
			type = "Windows";
			}
	console.log('System: ', type);
	console.log('release: ', release);
	console.log('CPU model: ', cpu);
	//console.log(formatTime())	//'Uptime: ~', (uptime / 60).toFixed(0), 'min');
	console.log('User name: ', userInfo.username);
	console.log('Home dir: ', userInfo.homedir);
	formatTime.print();
}

exports.print = getOSinfo;