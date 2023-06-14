<?php
require_once "../back-end/connect.php";

$email = $_POST["email"];

$sql = "INSERT INTO $tSubscription (`e-mail`) VALUES ('$email')";
// Execute the SQL statement
$db->query($sql);
?>