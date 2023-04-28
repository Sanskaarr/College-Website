<?php
if(isset($_POST['fname'])){
 $database = "localhost";
 $username = "root";
 $password = "";
 $server= "enquire";
 $con = mysqli_connect($database, $username, $password,$server);

 session_start();

$first = $_POST['fname'];
$last= $_POST['lname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$courses = $_POST['courses'];
$message = $_POST['message'];

$sql = "INSERT INTO `enquire` (`firstname`, `lastname`, `phone`, `email`, `courses`,  `message`) VALUES ('$first', '$last', '$phone', '$email', '$courses' , '$message');";

$first_check = "SELECT * FROM `enquire` WHERE firstname = '$first';";
$email_check = "SELECT * FROM `enquire` WHERE email = '$email';";

$check_n = mysqli_query($con , $first_check);
$check_e = mysqli_query($con , $email_check);

if(mysqli_num_rows($check_n)>0){
    echo"<script>
        window.location.href='index.html';
        alert('Name already exists !!! We Will Contact you Soon');
        </script>";
}

else if(mysqli_num_rows($check_e)>0){
    echo"<script>
        window.location.href='index.html';
        alert('Email already exists !!! Please Enter A Different Email');
        </script>";
}


else if (mysqli_query($con, $sql)) {
    echo "<script>
        window.location.href='index.html';
        alert('Thank You For Submission !! We Will Contact you Soon');
        </script>";
}

else {
    echo "ERROR: Hush ! Sorry" . $sql . "<br>" . mysqli_error($con);
}

mysqli_close($con);
}
?>