var mysql = require('mysql');


function verifyemail() {
        var email = document.getElementById('Email').value;
        if (+email != ) {
            alert(+email);
            return true;
        }
        else {
            alert("Please enter an email not in use.");
            document.getElementById('error').innerHTML = "Please enter an email not in use.";
        }
    }

function checkData() {
   var fname = document.getElementById("FirstName").value;
   if ( fname.length < 2 || (/[^A-Za-z\s\-]/).test(fname) ) {
     alert("Name should have 2 or more letters, hyphens, spaces");
     return false;
   }
   var lname = document.getElementById("LastName").value;
   if ( lname.length < 2 || (/[^A-Za-z\s\-]/).test(lname) ) {
     alert("Name should have 2 or more letters, hyphens, spaces");
     return false;
   }
   return true;
}

function addUser(){
	
}

function loginUser(){
	
}

function displayUser(){
	
}

function viewSortofProducts(){
	
}

function basketadd(){
	
}

function viewBasket(){
	
}

function submitBasket(){
	
}
/*
function vertifiedorder(){
	if (){
		alert("Thank you for ordering!");
		document.getElementById('error').innerHTML = "Thank you for ordering!";
	}
	var link = "mailto:"+(document.getElementById('email').value)+"@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("Kakotea Order Confirmation")
             + "&body=" + "Dear " + () + + "Thank you for ordering from " + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}

function sendMailKey() {
    var link = "mailto:"+(document.getElementById('email').value)+"@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("Kakotea Key")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}
*/


function scream(){
	var scream = "AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!!";
}



//take email and 'login'
//make new user with their email/password
//logged in mode, aka pass cookie, display name at top

//display products on homepage
//add order to basket, must be logged in to do so
//update sidebar basket

//display user prev. orders

//display user basket (live orders)
//submit orders into db