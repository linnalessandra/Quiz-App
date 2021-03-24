<?php 

require("../handlers/databaseHandler.php");
session_start();

//hämtar USER från databas
  /*   function getUser() {
    $userID = $_SESSION["ID"];
    $db = new Database();
    return $db->fetchQuery("SELECT * FROM user WHERE ID = '$userID'");
}  */

    function addUser($userID) {
    $db = new Database();
    return $db->runQuery("INSERT INTO user (name) VALUES (:quickUser)",$userID);
}

?>