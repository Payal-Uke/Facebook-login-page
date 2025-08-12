function auth(event){
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "payal@gmail.com" && password === "payal"){
        window.location.replace("/index2.html");

    }else{
        alert("Invalid information");
        return;
    }
}