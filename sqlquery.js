var mysql = require('mysql');
var express = require('express');
var http = require('http');
var app = express();

var connection = mysql.createConnection({
	host: 'mysql-server-1',
	user: 'ad77',
	password: 'abcad77354',
	database: 'ad77'
});
connection.connect();

app.get('/search', function (req, res) {
  var s = req.query.search.trim();
  if ( s.indexOf(";") != -1 ) s = "*"; // stop injection attack
  if ( s != "*" ) { var q = "select * from Orders where Email='"
   + s + "'";
  conn.query(q, function (err, results, fields) {
    if (err) { res.send('error querying: ' + err); return; }
    var s = "<!DOCTYPE html>\n<html>\n<head>\n<title>Orders</title>\n</head>\n<body>\n<table border='1'>\n<tr>";
    for (var i in fields) s += "<th>" + fields[i].name + "</th>";
    s += "</tr>\n";
    for (var row in results) {
      s += "<tr>\n";
      for (var col in results[row])
        s += "<td>" + results[row][col] + "</td>\n";
      s += "</tr>\n";
    }
    s += "</table>\n</body>\n</html>\n";
    res.send(s);
  });
  }
});

var svr = http.createServer(app);
svr.on('error', function(err) {console.log('Server: ' + err);});
svr.listen(8080, function() {console.log("Server Online");});