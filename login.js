function generate() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'
        , 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');

    for (var i = 0; i <= 4; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + b + c + d + e + f + g;
    document.getElementById("captcha").value = code;
}

function validate(e) {
    const username = document.getElementById("username").value;
    var ucheck = /^[A-Za-z0-9]{5,10}$/;
    if (username == null || username == "") {
        alert("Please enter a username");
        return false;
    } else if (username.length < 5) {
        alert("Username must be at least 5 characters long");
        return false;
    } else if (!username.match(ucheck)) {
        alert(
            "Username Should contain: -" +
            "\n" +
            "An Uppercase letter" +
            "\n" +
            "A Lowercase letter" +
            "\n" +
            "A Numeric Digit"+
            "\n"+
            "Username Should not exceed more than 10 Characters"
        );
        return false;
    }

    const password = document.getElementById("password").value;
    var pcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*+=_-]).{5,20}$/;
    if (password == null || password == "") {
        alert("Please enter a password");
        return false;
    } else if (password.length < 5) {
        alert("Please enter a password which is longer than 5 characters");
        return false;
    } else if (!password.match(pcheck)) {
        alert(
            "Password Should contain: -" +
            "\n" +
            "An Uppercase letter" +
            "\n" +
            "A Lowercase letter" +
            "\n" +
            "A Numric Value" +
            "\n" +
            "A Special Character" +
            "\n" +
            "Pasword Should not exceed more than 20 characters!!"
        );
        return false;
    }
    var one = removeSpaces(document.getElementById('captcha').value);
    var two = removeSpaces(document.getElementById('text').value);
    if (two == null || two == "") {
        alert("Please Enter Captcha");
        return false;
    }
    if (one == two) {
        return true;

    } else {
        alert("Invalid captcha" + "\n" + "Re-Enter captcha!!");
        return false;
    }

    function removeSpaces(string) {
        return string.split("").join("");
    }
    e.preventDefault();
}
