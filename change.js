function change(){
    const user = document.getElementById('user').value;
if(user==null || user==""){
    alert("Enter a Username !!");
    return false;
}

const newpassword = document.getElementById('newp').value;
var check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*+=_-]).{5,15}$/;

if(newpassword==null || newpassword==""){
    alert("Please enter a new password");
    return false;
}
else if (!newpassword.match(check)) {
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
        "And must lie between 5-15 characters!!!"
    );
    return false;
}

const confirm = document.getElementById('newcp').value;
if (confirm==null || confirm==""){ 
    alert("Confirm Password Cannot be blank!");
    return false;  
}
}