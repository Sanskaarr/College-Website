<?php
if(isset($_POST['name'])){
    $database = "localhost";
    $username = "root";
    $password = "";
    $server= "web";
    $con = mysqli_connect($database, $username, $password,$server);

    if(!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }
    //echo "Connected successfully";

   $name = $_POST['name'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmpassword = $_POST['cpassword'];
    $gender = $_POST['gender'];

   $sql =  "INSERT INTO `connect` (`Name`, `Username`, `Email`, `Password`, `Confirm Password`, `Gender`) VALUES ('$name', '$username', '$email', '$password', '$confirmpassword', '$gender');";
    
  $user_check = "SELECT * FROM `connect` WHERE username = '$username';";
  $email_check = "SELECT * FROM `connect` WHERE email = '$email';";
  
    $check_u = mysqli_query($con, $user_check);
    $check_e = mysqli_query($con, $email_check);

    if(mysqli_num_rows($check_u)>0){
        echo"<script>
        window.location.href='registration.html';
        alert('Username already exists !!! Please Choose a new username');
        </script>";
    }
  
    else if(mysqli_num_rows($check_e)>0){
        echo "<script>
        window.location.href='registration.html';
        alert('Sorry .. Email already exists');
        </script>";
    }

   else if (mysqli_query($con, $sql)) {
    echo "<script>
        window.location.href='login.html';
        alert('Please Log In');
        </script>";
        //header("Location:loginpage.html");
        //echo "New record created successfully";
    } 
    else {
        echo "ERROR: Hush ! Sorry" . $sql . "<br>" . mysqli_error($con);
    }

    mysqli_close($con);
}
?>