<?php
$database = "localhost";
 $username = "root";
 $password = "";
 $server= "web";
 $con = mysqli_connect($database, $username, $password,$server);

 $new = $_POST['newp'];
 $newcp = $_POST['newcp'];
 $username = $_POST['user'];
 $result = "SELECT password FROM `connect` WHERE username = '$username';";

 if($new==$newcp){
    $sql = "UPDATE `connect` SET `password` = '$new', `confirm password`='$new' where username = '$username';";
 }
 else{
    echo"<script>
    window.location.href='change.html';
    alert('Password Does not Match');
    </script>"; 
 }

 if(mysqli_query($con,$sql)){
    echo"<script>
    window.location.href='login.html';
    alert('Password Successfully Changed');
    </script>";
 }

 else{
    echo"<script>
    window.location.href='change.html';
    alert('Password Dont Match !! Please try again');
    </script>";
 }

 ?>