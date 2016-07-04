<?php
/**
 * This example shows making an SMTP connection with authentication.
 */

//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');

$data = (object)$_REQUEST;
/*
 *   'fullname': $('input[name=fullname]').val(),
            'email': $('input[name=email]').val(),
            'phone': $('input[name=telephone]').val(),
            'dob': $('input[name=dob]').val(),

            'sector': $('input[name=sector]').val(),
            'org': $('input[name=org]').val(),
            'position': $('input[name=position]').val(),
            'size': $('input[name=size]').val(),
            'url': $('input[name=url]').val(),
            'self': $('input[name=self]').val(),

            'qualify': $('textarea[name=qualify]').val(),
            'achievement': $('textarea[name=achievement]').val(),
            'capacity': $('input:radio[name=capacity]').val(),
            'specify': $('textarea[name=specify]').val(),
 */

function buildhtml($dataForm)
{
    if ($dataForm) {
        $subject = "New  Top 40 under 40 nominee ";
        $message = '<strong>Fullname:</strong>'.$dataForm->fullname .'<br/>'.
        '<strong >phone:</strong>'.$dataForm->phone.'<br/>'.
        '<strong> Email:</strong>'. $dataForm->email.'<br/>'.
         '<strong> DoB:</strong>' .$dataForm->dob .'<br/>'.
         '<strong> Has nominated Self?:</strong>'. $dataForm->self.'<br/>'.
            '<strong> sector:</strong>'.$dataForm->sector.'<br/>'.
        '<strong> Organization:</strong>'.$dataForm->org.'<br/>'.
        '<strong> position within orginazation:</strong> '.$dataForm->position.'<br/>'.
        '<strong> Organization size: </strong>'. $dataForm->size.'<br/>'.
        '<strong> Organization url: </strong>'. $dataForm->url.'<br/>'.
        '<strong> Nominee Qualification:</strong> '.$dataForm->qualify.'<br/>'.
         '<strong> nominee’s most outstanding achievement:</strong> '.$dataForm->achievement.'<br/>'.
        '<strong> nominee engaged in any significant community:</strong> '.$dataForm->capacity.'<br/>'.
        '<strong> specifics:</strong>'.$dataForm->specify.'<br/>';
        sendmail($subject, $message);
    }

}


function sendmail($subject, $message)
{

    require 'PHPMailerAutoload.php';

//Create a new PHPMailer instance
    $mail = new PHPMailer;
//Tell PHPMailer to use SMTP
    $mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
    $mail->SMTPDebug = 0;
//Ask for HTML-friendly debug output
    $mail->Debugoutput = 'html';
//Set the hostname of the mail server
    $mail->Host = "smtp.sendgrid.net";

    $mail->Port = 587;

    $mail->SMTPAuth = true;
    $mail->Username = "tinker_io";

    $mail->Password = "rosemary2468";

    $mail->setFrom('nominees@edgar.co.ke', 'New Top 40 under 40 Nomination');
    $mail->addReplyTo('nominees@edgar.co.ke','top 40 under 40');
    $mail->addAddress('edgarchris99@yahoo.com', 'Edgar chris');
    //$mail->addAddress('ngaruiya.kamau@redhouseke.com','Kamau');

    $mail->Subject = $subject;
    $mail->msgHTML($message);

    if (!$mail->send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
       // do nothing
    }
}
