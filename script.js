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

/*
@WebServlet("/myservlet")
public class MyServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        MyClass myClass = new MyClass();

        if (request.getParameter("button1") != null) {
            myClass.method1();
        } else if (request.getParameter("button2") != null) {
            myClass.method2();
        } else if (request.getParameter("button3") != null) {
            myClass.method3();
        } else {
            // ???
        }

        request.getRequestDispatcher("/WEB-INF/some-result.jsp").forward(request, response);
    }

}
*/

function addUser(){
	
}

function loginUser(){
	
}

function displayUser(){
	
}

function diplayProducts(int x){
	
}

function basketadd(){
	
}

function viewBasket(){
	
}

function submitBasket(){
	
}


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