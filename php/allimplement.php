<?php
include('connection.php');
header("Content-Type:application/json;charset=utf-8");
$sql="SELECT idimple, nomimple, tipo, estado FROM implemento  WHERE condicion = 1";
$result= mysqli_query($conex, $sql);


$respuesta = mysqli_fetch_all($result, MYSQLI_ASSOC);
exit(json_encode($respuesta));

 ?>
