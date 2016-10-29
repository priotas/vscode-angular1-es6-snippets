var fs = require('fs'),
    readline = require('readline');

var args = process.argv.slice(2);
var targetFile = args[0];

var rd = readline.createInterface({
    input: fs.createReadStream(targetFile),
    output: process.stdout,
    terminal: false
});

var formatLine = function(line) {
    return '"' + line + '",';
};

rd.on('line', function(line) {
    console.log(formatLine(line));
});