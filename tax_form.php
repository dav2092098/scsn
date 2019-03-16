<?php

if  (isset($_POST['submit'])) {
	/*
	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	$subject = "SCSN Tax Form Request from ".$fname;
	$tax_email = $_POST['tax_email'];
	$start_date = $_POST['start_date'];
	$end_date = $_POST['end_date'];
	$tax_addr = $_POST['tax_addr'];
	$tax_city = $_POST['tax_city'];
	$tax_zip = $_POST['tax_zip'];

	$mail_to = "staff@starcanyonschoolofnursing.com";
	$headers = "From: ".$tax_email;
	$txt = "SCSN Tax Form Request from ".$fname." ".$lname.".\n\n"."Start Date: ".$start_date.".\n\n"."End Date: ".$end_date.".\n\n"."Address: ".$tax_addr.".\n\n"."City: ".$tax_city.".\n\n"."Zip: ".$tax_zip 

	mail($mail_to, $subject, $txt, $headers);
	header("Location: index.php?mailsent");
}
*/

	$sender_fname=stripslashes($_POST["tax_fname"]);
	$sender_lname=stripslashes($_POST["tax_lname"]);
	$sender_email=stripslashes($_POST["tax_email"]);
	$sender_sdate=stripslashes($_POST["tax_sdate"]);
	$sender_edate = $_POST['tax_edate'];
	$tax_addr = $_POST['tax_addr'];
	$tax_city = $_POST['tax_city'];
	$tax_zip = $_POST['tax_zip'];

	$mail_to = "staff@starcanyonschoolofnursing.com";
	$txt = "SCSN Tax Form Request from ".$sender_fname." ".$sender_lname.".\n\n"."Start Date: ".$sender_sdate.".\n\n"."End Date: ".$sender_edate.".\n\n"."Address: ".$tax_addr.".\n\n"."City: ".$tax_city.".\n\n"."Zip: ".$tax_zip;

	/*
	$secret="6Lf8sVsUAAAAACDtwG_kf6kBeXMX1r3e4Wds5AcR";
	$response=$_POST["g-recaptcha-response"];
	$verify=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}");

	$captcha_success=json_decode($verify);

	if ($captcha_success->success==false) {
		echo “Fail”;
	}
	else if ($captcha_success->success==true) {
		print “Success”;
	}
	*/
	
	$subject="SCSN Tax Form Request from ".$sender_fname;
	$headers= "From: ".$_POST['tax_email']."\n\n";

	$headers1="From: "."staff@starcanyonschoolofnursing.com"."\n";

	$success = mail($mail_to, $subject, $txt, $headers);
	
	if ($success) {
		echo "Yay, success!";
	} else {
		echo "Nay, failure";
	}
	
	}
	
	/*$success = mail("staff@starcanyonschoolofnursing.com", $subject,"
	
	$headers.='Content-type: text/html; charset=iso-8859-1';

	Important Message

	You’ve received a message from YOUR website.
	Message:
	“.$_POST[‘message’].”
	Please Contact: 
	“.$_POST[‘fullname’].”
	Phone:
	“.$_POST[‘phone’].”
	Email:
	“.$_POST[’email’].”

	” , $headers);@mail($_POST[’email’],’YOUR-NAME’,$body1,$headers1);


	if ($captcha_success->success==false) {
	echo “You are a bot! Go away!”;
	}
	else if ($captcha_success->success==true) {
	print “”;

	}
	*/
?>

