<?php
include('connection.php');
header("Content-Type:application/json;charset=utf-8");
$sql="SELECT nomimple FROM implemento group by nomimple";
$result= mysqli_query($conex, $sql);


$respuesta = mysqli_fetch_all($result, MYSQLI_ASSOC);
exit(json_encode($respuesta));

?>
