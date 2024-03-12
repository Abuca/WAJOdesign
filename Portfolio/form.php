<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "info@wajodesign.com";
$subject = "New Order Recieved";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@wajodesign.com" . "\r\n" ;
$headers .= "Cc: abenezermarkos7@gmail.com" . "\r\n" ;
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:https://wajodesign.com/portfolio#order");
?>