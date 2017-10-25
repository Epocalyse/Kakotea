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

//take email and 'login'
//take signup and make key
//email new user
//logged in mode, aka pass cookie

//display products on homepage
//add order to basket, must be logged in to do so
//update sidebar basket

//display user prev. orders
//display user basket (live orders)
//submit orders into db
//take 