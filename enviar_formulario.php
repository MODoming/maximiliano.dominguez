<?php
$name = $_POST["Nombre"] . " " . $_POST["Apellido"];
$mail = $_POST["e-mail"];
$phone = $_POST["Telefono"];
$message = $_POST["Comentario"];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mine-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Consulta de Contacto enviado por: " . $name . " \r\n";
$message .= "Su correo es: " . $mail . " \r\n";
$message .= "Telefono de contacto: " . $phone . " \r\n";
$message .= "Mensaje: " . $_POST["Comentario"] . " \r\n";
$message .= "Enviado el: " . date('d/m/y', time());

$destinatario = "maxi.dmgz@gmail.com";
$asunto = "Consulta de Contacto";

mail($destinatario, $asunto, $message, $header);

header('Location:index.html');
?>
