<?php
 $database = "localhost";
 $username = "root";
 $password = "";
 $server= "web";
 $con = mysqli_connect($database, $username, $password,$server);

 session_start();

 $username = $_POST['username'];
 $password = $_POST['password'];

//To Prevent Mysql Injection
 $username = stripcslashes($username);
 $password = stripcslashes($password);
 $username = mysqli_real_escape_string($con,$username);
 $password = mysqli_real_escape_string($con,$password);

 $sql = "SELECT * FROM `connect` WHERE  username = '$username' AND password = '$password';";
 $result = mysqli_query($con,$sql);
 //$row = mysqlic_fetch_array($result,MYSQLI_ASSOC);
 
 $count = mysqli_num_rows($result);

 //if results match,table row must be 1 row
 if($count == 1){
  echo"<script>
  window.location.href='dashboard.html';
  alert('Welcome ' + '$username');
  </script>";
    // header("location:dashboard.html");
 }
 else{
   echo"<script>
   window.location.href='login.html';
   alert('Username or Password is Incorrect !! Please Re-Enter Or Register yourself!!!');
   </script>";
   return false;
 }
?>