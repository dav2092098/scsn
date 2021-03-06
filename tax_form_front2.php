<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>
		Tax Form Request
		</title>
		<link rel="stylesheet" href="payment/tax_form.css">
		<script src='https://www.google.com/recaptcha/api.js'></script>
	</head>

	<body>
		<main>
		<form id="tax_form" class="tax_form" action="tax_form.php">
		
		<!-- <input type="text" name="catcher" id="catcher_id" class="catcher_class" value="" /> -->
		<input class="tax_fname" type="text" name="tax_fname" placeholder="First Name">
		<input class="tax_lname" type="text" name="tax_lname" placeholder="Last Name">
		<input class="tax_email" type="email" name="tax_email" placeholder="Email (tax forms will be sent here)">
		<input class="tax_sdate" type="date" name="tax_sdate"  placeholder="Class Start Date">
		<input class="tax_edate" type="date" name="tax_edate" placeholder="Class End Date">
		<input class="tax_addr" type="text" name="tax_addr" placeholder="Street Address (used on tax forms)">
		<input class="tax_city" type="text" name="tax_city" placeholder="City">
		<input class="tax_zip" type="text" name="tax_zip" pattern="[0-9]{5}" placeholder="Zip">
		<center>
		<!--
		<div class="captcha_wrapper">
		<div class="g-recaptcha" data-sitekey="6Lf8sVsUAAAAAGSeEocTRqoyho51t1Tp5AInt4kh">
		</div>
		</div>
		-->
		<button class="submit_btn" id="ss-submit" type="submit" name="tax_submit">Submit</button>
		
		<!--
		<span style="font: bold normal 10px/80% Arial, Helvetica, sans-serif; line-height: 10px;">To submit, please click the captcha below (may take a few seconds)</span>
		<br>
		<div class="g-recaptcha" id="captchabox" data-sitekey="6Lf8sVsUAAAAAGSeEocTRqoyho51t1Tp5AInt4kh" data-callback="notRobot">
		</div>
		<span id="status_msg" name="msg"></span>
		-->
		</form>
		
		
		</main>
		</center>
	</body>
	

</html>