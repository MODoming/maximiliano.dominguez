<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $email = $_POST["e-mail"];
    $telefono = $_POST["telefono"];
    $comentario = $_POST["comentario"];

    $destinatario = "maximiliano.dominguez@bue.edu.ar";
    $asunto = "Consulta de Contacto";
    $mensaje = "Nombre: $nombre $apellido\n";
    $mensaje .= "Correo electrónico: $email\n";
    $mensaje .= "Teléfono: $telefono\n";
    $mensaje .= "Comentario:\n$comentario";

    $cabeceras = "From: $email";

    if (mail($destinatario, $asunto, $mensaje, $cabeceras)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>