<?php 

require("../api/dbhandler.php");

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

function addHighscore($entity) {
  $db = new Database();
  return $db->runQuery("INSERT INTO users (id, name, score) VALUES (NULL, :name, :score);", $entity);
}

function getHighscore() {
  $db= new Database;
  $response = $db->fetchQuery("SELECT score, name FROM `users` ORDER BY score ASC LIMIT 10;");
  return $response;
}

?>