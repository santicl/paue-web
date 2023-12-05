<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;


require 'config.php';

require '../libs/PHPMailer/src/PHPMailer.php';
require '../libs/PHPMailer/src/Exception.php';
require '../libs/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);


try {

    // Configuración de PHPMailer
    $mail->isSMTP();
    $mail->Host       = 'paue.com.co';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'reserve@paue.com.co';
    $mail->Password   = 'MX5E)EzR~wM=';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    $to = "caballerosuarezsantiago@gmail.com";
    $subject = "Nuevo mensaje desde PAUE.COM.CO";

    // Obtener datos del formulario
    $phone = $_POST['phone'] ?? '';
    $email = $_POST['email'] ?? '';
    $inputDate = $_POST['inputDate'] ?? '';
    $inputPersons = isset($_POST['inputPersons']) ? $_POST['inputPersons'] : '';
    $typeBoat = isset($_POST['boat']) ? $_POST['boat'] : '';

    // Validación de datos

    // Contenido del correo
    $content = "Teléfono: $phone\n";
    $content .= "Correo electrónico: $email\n";
    $content .= "Fecha: $inputDate\n";
    $content .= "Número de personas: $inputPersons\n";
    $content .= "Tipo de barco: $typeBoat\n";
    $title = "Cotizar PAUE - $inputPersons\n";

    
    // Enviar el correo
    $mail->setFrom('reserve@paue.com.co', $title);
    $mail->addAddress($to, 'PAUE');
    $mail->Subject = $subject;
    $mail->Body = $content;
    $mail->send();
    echo 'El correo se ha enviado correctamente';
} catch (Exception $e) {
    echo 'Hubo un error al enviar el correo: ', $e->getMessage();
}
