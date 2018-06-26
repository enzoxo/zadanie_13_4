var os = require('os');

function formatTime() {
	var time = os.uptime();
	var hours = Math.floor(time / 3600);
	time = time - hours * 3600;
	var minutes = Math.floor(time / 60);
	var seconds = Math.floor(time - minutes * 60);
	
	
	console.log("Uptime is: " + hours + 'h ' + minutes + " min " + seconds + ' sec');
}  

exports.print = formatTime;