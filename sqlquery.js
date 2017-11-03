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

app.get('/searchOrder', function (req, res) {
  var s = req.query.search.trim();
  if ( s.indexOf(";") != -1 ) s = "*"; // stop injection attack
  if ( s != "*" ) { var q = "select * from Orders where E_mail='"
   + s + "' and LiveOrder=0";
  connection.query(q, function (err, results, fields) {
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

app.get('/checkout', function (req, res) {
	var email = req.query.email.trim();
	var q = "select ProdID from Orders where E_mail='" + email + "' and LiveOrder=1";
	connection.query(q, function (err, results, fields) {
		if (err) { res.send('error querying: ' + err); return; }
    var s = "<!DOCTYPE html>\n<html>\n<head>\n<title>Checkout</title>\n</head>\n<body>\n<table border='1'>\n<tr>";
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
});

app.get('/addOrder', function (req, res) {
   var prodID = req.query.prodID.trim();
   var email = req.query.email.trim();
   var q = "insert into Orders (ProdID, E_mail, LiveOrder) values ";
   if ( prodID.indexOf(";") == -1 && email.indexOf(";") == -1 )
        q += "('" + prodID + "', '" + email + "', 1 )";
   else q = "";
   connection.query(q, function (err, results, fields) {
     if (err) { res.end('error adding order: ' + err); return; }
     res.end("<!DOCTYPE html>\n<html>\n<head>\n<title>Orders</title>\n</head>\n<body>\n<p>" + results.affectedRows +
             " record added</p>\n</body>\n</html>\n");
   });
 });
 
 app.get('/addUser', function (req, res) {
   var email = req.query.email.trim();
   var password = req.query.password.trim();
   var address = req.query.address.trim();
   var firstName = req.query.firstName.trim();
   var lastName = req.query.lastName.trim();
   var q = "insert into Users (Email, Password, Address, FirstName, LastName) values ";
   if ( email.indexOf(";") == -1 && password.indexOf(";") == -1 && address.indexOf(";") == -1
    && firstName.indexOf(";") == -1 && lastName.indexOf(";") == -1 )
        q += "('" + email + "', '" + password + "', '" + address + "', '"
         + firstName + "', '" + lastName + "')";
   else q = "";
   connection.query(q, function (err, results, fields) {
     if (err) { res.end('error adding user: ' + err); return; }
     res.end("<!DOCTYPE html>\n<html>\n<head>\n<title>Users</title>\n</head>\n<body>\n<p>" + results.affectedRows +
             " record added</p>\n</body>\n</html>\n");
   });
 });
 
 app.get('/login', function (req, res) {
 	var email = req.query.email.trim();
 	var password = req.query.password.trim();
 	if (email.indexOf(";") == -1) 
 		var q = "select FirstName from Users where Email='" + email + "' and Password='" + password + "'";
 	else var q = "";
 	connection.query(q, function (err, results, fields) {
 		if (err) {res.end('error logging in: ' + err); return; }
 		res.end("");
 	})
 })
 
 app.get('/viewProducts', function (req, res) {
	var q = "select * from Products";
	connection.query(q, function (err, results, fields) {
	  if (err) { res.end('error retrieving products: ' + err); return;}
	  var s = "<!DOCTYPE html>\n<html>\n<head>\n<title>Products</title>\n</head>\n<body>\n<table border='1'>\n<tr>";
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
 });

var svr = http.createServer(app);
svr.on('error', function(err) {console.log('Server: ' + err);});
svr.listen(8080, function() {console.log("Server Online");});