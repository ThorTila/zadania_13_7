var fs = require('fs'),
colors = require('colors'),
EventEmitter = require("events").EventEmitter,
emitter = new EventEmitter();
fs.readdir('./', function (err, files) {
	if (err) throw err;
	var filesList = '';
	for (let i = 0; i < files.length; i++) {
		filesList += (files[i] + ' ');
	}
	emitter.emit('read', filesList);
});
function writeFile (filesList) {
	fs.writeFile('./tekst.txt', filesList, function(err) {
		if (err) throw err;
		console.log('Zapisano!'.blue);
	})
}
emitter.on('read', (filesList) => {writeFile(filesList)});