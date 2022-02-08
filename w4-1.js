function validateForm(){  
var valid = true;
var  username = document.getElementById("username").value;
var  email = document.getElementById("email").value;
var locate = document.getElementsByName("location")[0].value;
var  description = document.getElementById("description").value;
// trim to remove the whitespaces
const username = username.value.trim();

error1 = document.getElementById("error1").innerHTML = "";
error2 = document.getElementById("error2").innerHTML = "";
error3 = document.getElementById("error3").innerHTML= "";
error4 = document.getElementById("error4").innerHTML ="";


if ( username == ""  || email == "" || location == "" || description == "" ){  
  document.getElementById("error1").innerHTML= "Please complete all of the empty fields"; 
  valid = false;  
}

else if(username.length<5){  
  document.getElementById("error2").innerHTML= "Please enter your full name";  
  valid = false;  
} 

else if (!isEmail(email)) {
  document.getElementById("error5").innerHTML = "Please enter a valid email.";
      valid = false;
}

else if (locate == "") {
    document.getElementById("error3").innerHTML = "Please select a problem's location.";
        valid = false;
} 

else if (description.length < 50){
  document.getElementById("error4").innerHTML ="Please fill out this the description field (50 characters minumum)";
  valid = false;
} 

else {
  alert("Your report has been submitted , Thank you!");
} 
return valid;
}   

function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      }
      