<?php 
 $database = "localhost";
 $username = "root";
 $password = "";
 $server= "web";
 $con = mysqli_connect($database, $username, $password,$server);

 $username = $_POST['rusername'];

 $res_u =  "SELECT * FROM `connect` WHERE username = '$username';";

 $reset = mysqli_query($con , $res_u);
 if(mysqli_num_rows($reset)>0){
    header("Location:change.html");
 }
 else{
    echo "<script>
    window.location.href='reset.html';
    alert('Username Not Found !!');
    </script>"; 
 }
?>