
dbusername = "Prakash"
dbpassword = "1234"


function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(dbusername == username && dbpassword == password){
        window.open("/dashboard.html","_blank");
        console.log("correct credential")
    }
    else{
        alert("Incorrect credentials")
        prompt("Incorrect credential")
    }
}