
<?php
include('connection.php');


// header("Content-Type:application/json;charset=utf-8");
// $input = json_decode(file_get_contents("php://input"),true);
//
// $identi =$input['id'];
// $nombre=$input['nom'];
// $apellido=$input['ape'];

 //header("Content-Type:application/json;charset=utf-8");
//$identi = $_SESSION['USUARIO'];
session_start();


$_SESSION['usu'] = $_POST['id'];
$id = $_SESSION['usu'];
//Esta consulta trae el tipo de usuario y la contraseña del usuario digitado
$consul = "SELECT tipo, contra FROM usuario WHERE id = '$id'";

$result= mysqli_query($conex, $consul);

$respuesta = mysqli_fetch_all($result, MYSQLI_ASSOC);

  //echo  json_encode($respuesta);


exit(json_encode($respuesta));
