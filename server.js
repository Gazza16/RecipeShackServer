// This imports express in so it can be used
var express = require('express');

// This is the server object
var server = express();

var staticAssets = express.static('public');
server.use(staticAssets);

// Server is listening out for port 3000.
server.listen(3000, function() {
  console.log('Server had started listening on port 3000.');
});
