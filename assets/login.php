<?php
$host         = "localhost";
$username     = "root";
$password     = "";
$dbname       = "patientdata";
$result_array = array();
$conn = new mysqli($host, $username, $password, $dbname);

$uname = $_GET['uname'];
$upsw = $_GET['upsw'];
$sql = "SELECT doctor_id FROM doctor_details WHERE doctor_name='$uname' AND doctor_psw='$upsw'";
$results = mysqli_query($conn, $sql);
$ftdata = mysqli_fetch_array($results);
$did = $ftdata['doctor_id'];

if (mysqli_num_rows($results) == 1) { 
	/* while($row = $results->fetch_assoc()) {
        array_push($result_array, $row);
    } */
	
	$data = mysqli_query($conn, "SELECT * FROM patientdetails WHERE doctor_id = '$did'");
	while($row = $data->fetch_assoc()) {
        array_push($result_array, $row);
    }
	/* header("Location: ../user.html"); */
}
header('Content-type: application/json');
echo json_encode($result_array);
/* echo $stringval; */
$conn->close();

?>