function validate() {
    const name = document.getElementById('name').value;
    if (name == null || name == "") {
        alert("Please enter a name");
        return false;
    } else if (name.length < 2) {
        alert("Length of name must be greater than 2!");
        return false;
    }
    if (name.length > 10) {
        alert("Length of name must be Lesser than 10!");
    }

    const username = document.getElementById('username').value;
    var ucheck = /^[a-zA-Z0-9]{5,10}$/;
    if (username == null || username == "") {
        alert("Please enter a username");
        return false;
    } else if (username.length < 5) {
        alert("Username must be at least 5 characters long");
        return false;

    } else if (!username.match(ucheck)) {
        alert(
            "Username Should only contain:- " +
            "\n" +
            "A LowerCase Alphabet" +
            "\n" +
            "An UpperCase Alphabet" +
            "\n" +
            "A numeric Digit" +
            "\n" +
            "Username Should be between 5-10 characters!!"
        );
        return false;
    }

    const email = document.getElementById('email').value;
    if(email.length<8){
        alert("Email Length is too Short !!");
    }

    const phone = document.getElementById('phone').value;
    var pcheck = /^[0-9]{0,10}$/
    if(phone.length<10){
        alert("Please enter a valid phone Number");
    }
    if(phone.length>10){
        alert("Phone must not be more than 10 Digits");
    }

    const password = document.getElementById('password').value;
    var check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*+=_-]).{5,20}$/;
    if (password == null || password === "") {
        alert("Please enter a password");
        return false;
    }
    else if (password.length < 5) {
        alert("Please enter a password that is more than 5 characters");
        return false;
    }
    else if (!password.match(check)) {
        alert(
            "Password Must contain: -" +
            "\n" +
            "Atleast one LowerCase Character " +
            "\n" +
            "One UpperCase Character" +
            "\n" +
            "A Numerical Value " +
            "\n" +
            "A special characters" +
            "\n" +
            "And must lie between 8-20 characters!!!"
        );
        return false;
    }

    const cpassword = document.getElementById('cpassword').value;
    if (cpassword == null || cpassword == "") {
        alert("Please Re-Enter Password");
        return false;
    }
    else if (!cpassword.match(password)) {
        alert("Password Doesn't Match" + "\n"+ "Please Re-Enter Password!!!");
        return false;
    }
}

