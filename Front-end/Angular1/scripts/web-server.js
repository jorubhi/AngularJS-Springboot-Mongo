var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
app.use(express.static(rootPath + '/app/'));
app.listen(8100);
console.log("Listening to port 8100");
