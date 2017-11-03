//Alex Drogemuller and Hannah Cohen
var mysql = require('mysql');
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
	extented: true
}));

app.use(bodyParser.json());

var connection = mysql.createConnection({
	host: 'mysql-server-1',
	user: 'ad77',
	password: 'abcad77354',
	database: 'ad77'
});
connection.connect();

app.post('/searchOrder', function (req, res) {
  var s = req.body.Email;
  console.log(s);
  if ( s.indexOf(";") == -1 ) {
  var q = "SELECT * FROM Orders WHERE Email='"
   + s + "'";
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

app.post('/checkout', function (req, res) {
	var email = req.query.Email;
	var q = "select ProdID from Orders where Email='" + email + "' and LiveOrder=1";
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
 
 app.post('/addOrder', function (req, res) {
 	var prodID = req.query.ProdID;
 	var phoneNum = req.query.PhoneNo;
   var email = req.query.Email;
   var address = req.query.Address;
   var firstName = req.query.FirstName;
   var lastName = req.query.LastName;
   
   var q = "insert into Orders (ProdID, PhoneNum, Email, Address, FirstName, LastName) values ";
   if ( email.indexOf(";") == -1 && phoneNum.indexOf(";") == -1 && address.indexOf(";") == -1
    && firstName.indexOf(";") == -1 && lastName.indexOf(";") == -1 )
        q += "('" + prodID + "', '" + phoneNum + "', '" + email + "', '" + address + "', '"
         + firstName + "', '" + lastName + "')";
   else q = "";
   connection.query(q, function (err, results, fields) {
     if (err) { res.end('error adding user: ' + err); return; }
     res.end("<!DOCTYPE html>\n<html>\n<head>\n<title>Order</title>\n</head>\n<body>\n<p>" + results.affectedRows +
             " record added</p>\n</body>\n</html>\n");
   });
 });

var svr = http.createServer(app);
svr.on('error', function(err) {console.log('Server: ' + err);});
svr.listen(8002, function() {console.log("Server Online");});