function Confirm(){
    if((document.getElementById("Username:").value == "Enter Username" && document.getElementById("Password:").value == "Enter Password")||(document.getElementById("Username:").value == "" && document.getElementById("Password:").value == "")){
        document.getElementById("Alert").innerHTML = "Please enter your Username and Password";
        document.getElementById("Alert").style = "color: red";
        console.log("Login Error");
    }
    else if((document.getElementById("Username:").value == "Enter Username" && document.getElementById("Password:").value == "")||(document.getElementById("Username:").value == "" && document.getElementById("Password:").value == "Enter Password")){
        document.getElementById("Alert").innerHTML = "Please enter your username and password";
        document.getElementById("Alert").style = "color: red";
        console.log("Login Error");
    }
    else if(document.getElementById("Username:").value == "Enter Username"|document.getElementById("Username:").value == ""){
        document.getElementById("Alert").innerHTML = "Please enter your Username";
        document.getElementById("Alert").style = "color: red";
        console.log("Login Error");
     }  
    else if(document.getElementById("Password:").value == "Enter Password"|document.getElementById("Password:").value == ""){
        document.getElementById("Alert").innerHTML = "Please enter your Password";
        document.getElementById("Alert").style = "color: red";
        console.log("Login Error");
     } 
    else{
        document.getElementById("Alert").innerHTML = "Logged In";
        document.getElementById("Alert").style = "color: green";
        console.log("Login Error");
    }

}