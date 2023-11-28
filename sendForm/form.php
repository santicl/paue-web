<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $dateValue = $_POST['dateValue'] ?? '';
    $personsValue = $_POST['personsValue'] ?? '';

    // Datos para el correo electrónico
    $to = "caballerosuarezsantiago@gmail.com"; // Reemplaza con el correo al que quieres enviar los datos
    $subject = "Renta de Botes";
    $message = "Fecha: " . $dateValue . "\n";
    $message .= "Número de personas: " . $personsValue . "\n";

    // Envío del correo usando la función mail()
    $headers = "From: tuemail@tudominio.com\r\n";
    $headers .= "Reply-To: tuemail@tudominio.com\r\n";
    $headers .= "Content-type: text/plain\r\n";

    mail($to, $subject, $message, $headers);
}
?>
