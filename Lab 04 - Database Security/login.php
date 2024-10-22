<?php
// Database connection parameters
$servername = "localhost";
$username = "appuser";
$password = "123456";
$dbname = "sample_app";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if($_SERVER['REQUEST_METHOD'] == 'POST') {

  $username = $_POST['username'];
  $password = $_POST['password'];  

  $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
  $stmt = $conn->prepare($sql);
  $stmt->execute();
  $result = $stmt->get_result();


  if ($result->num_rows > 0) {
    echo "Login successfully";
  } else {
    echo "Invalid username or password";
  }
}

$conn->close();

?>
