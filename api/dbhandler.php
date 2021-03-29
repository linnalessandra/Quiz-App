<?php 

class Database {
    function __construct() {
        $dns = "mysql:host=localhost;dbname=quiz_app";
        $user = "root";
        $pass = "root";

        $this->db = new PDO($dns, $user, $pass);
        $this->db->exec("set names utf8");

    }

    public $db;

    function preperQuery($query) {
        return $this->db->prepare($query);
    }

    function runQuery($query, $entity) {
        $preparedQuery = $this->preperQuery($query);
        $status = $preparedQuery->execute((array)$entity);
        return $status;
            }

    function fetchQuery($query) {
        $preparedQuery = $this->preperQuery($query);
        $preparedQuery->execute();
        return $preparedQuery->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>