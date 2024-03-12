<?php
//get data from form  

// $name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "info@wajodesign.com";
$subject = "Mail From website";
$txt = Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@wajodesign.com" . "\r\n" .
"CC: abenezermarkos7@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html");
?>