<?php 

session_start();

if(isset($_SERVER["REQUEST_METHOD"])) {

    require("./repositories/userRepository.php");

    if($_SERVER["REQUEST_METHOD"] == "POST") {

    } else if ($_POST["action"] == "addUser") {
        $user = json_decode($_POST["user"]);
        echo json_encode(addUser($user));
    }
    
} 


?>