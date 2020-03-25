<?php
include('connection.php');
header("Content-Type:application/json;charset=utf-8");
$input = json_decode(file_get_contents("php://input"),true);
$impl =  $input['dato'];

$sql="SELECT idimple, nomimple, tipo, estado FROM implemento  WHERE condicion = 1 AND nomimple = '$impl'";
$result= mysqli_query($conex, $sql);


$respuesta = mysqli_fetch_all($result, MYSQLI_ASSOC);
exit(json_encode($respuesta));

 ?>
