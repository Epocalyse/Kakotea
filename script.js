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