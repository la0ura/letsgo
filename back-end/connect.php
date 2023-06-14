<?php  
// Database configuration  
$dbHost     = "109.106.254.1";
$dbUsername = "u353443769_beis";
$dbPassword = "testadmin";
$dbName     = "u353443769_beis";
$tSubscription = 'go_subscriptions';
$tUsers = 'go_users';
// Create database connection  
$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
  
// Check connection  
if ($db->connect_error) {  
    die("Connection failed: " . $db->connect_error);  
}