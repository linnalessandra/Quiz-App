<?php

/* require_once("../api/dbhandler.php"); */

class dbRepo {
    function __construct() {
        $this->db = new Database();
        error_log("DB was connected");
    }

function getFromDb(){
    $result = $this->db->fetchQuery("SELECT * FROM USER ORDER BY HIGHSCORE");
    $userArray = $this->makeListOfUsers($result);
    return $userArray;
}

function makeListOfUsers($myArray){
    
    }
   
}










}
?>