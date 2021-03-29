<?php 

require("../repositories/userRepository.php");
session_start();

if(isset($_SERVER["REQUEST_METHOD"])) {

    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $playerInfo = json_decode($_POST["playerInfo"],true);
        echo json_encode(addHighscore($playerInfo));
        exit;
    } elseif($_SERVER["REQUEST_METHOD"] == "GET") {
        echo json_encode(getHighscore());
        exit;
    }
    
} 


?>