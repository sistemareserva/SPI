<?php
include('connection.php');

session_start();


header("Content-Type:application/json;charset=utf-8");
$sql="SELECT b.idper , c.nombre , c.apellido  , a.nomimple  , b.hreserv
FROM  implemento a ,reserva b , persona c
WHERE b.idper = c.id and a.idimple = b.idimple and b.estado = 0";
$result= mysqli_query($conex, $sql);


$respuesta = mysqli_fetch_all($result, MYSQLI_ASSOC);
exit(json_encode($respuesta));

 ?>
