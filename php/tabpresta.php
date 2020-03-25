<?php
include('connection.php');

session_start();

$id = $_SESSION['usu'];
header("Content-Type:application/json;charset=utf-8");
$sql="SELECT a.hrasali, a.fech,a.idimple ,b.nomimple FROM prestamo a , implemento b
WHERE a.idimple=b.idimple and idperson= '$id'";
$result= mysqli_query($conex, $sql);


$respuesta = mysqli_fetch_all($result, MYSQLI_ASSOC);
exit(json_encode($respuesta));

 ?>
