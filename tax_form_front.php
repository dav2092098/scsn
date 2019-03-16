<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>
		Tax Form Request
		</title>
		<link rel="stylesheet" href="payment/tax_form.css">
		<script src='https://www.google.com/recaptcha/api.js'></script>
		<!-- PHP form scripts -->
		<script type="text/javascript">
		var form=document.getElementById("contactForm");
		
		function reCaptcha() {
		    $.get("tax_form.php");
		}
		</script>
		
		<!-- Simple contact form script (updated 1/19/19) adapted from: Mario Vidov https://codepen.io/mel/pen/kHCvr?page=1&q=contact+form-->
		<script type="text/javascript">
		var submitted = false;
		var captchaPass = false;
		var name = '';
		var str = '';
		var n = -1;
		
		function _(id){ return document.getElementById(id); }
		
		var notRobot = function() {
			var formdata = new FormData();
			formdata.append( "tax_fname", _("tax_fname").value );
			formdata.append( "tax_lname", _("tax_lname").value );
			formdata.append( "tax_email", _("tax_email").value );
			formdata.append( "tax_addr", _("tax_addr").value );
			formdata.append( "tax_sdate", _("tax_sdate").value );
			
			for (var [key, value] of formdata.entries()) {
				console.log(key, value);
			}
			
			console.info("Captcha box was clicked");
			_("ss-submit").disabled = false;
			
			name = $("#tax_fname").val();
			$.ajax({
				url: 'tax_form.php',
				type: "POST",
				data: "name=" + name + "&g-recaptcha-response=" + grecaptcha.getResponse(),
				success: function(data) {
					//str = data;
					//console.log(data);
					//n = str.indexOf("[success] => 1");
					str = grecaptcha.getResponse();
					console.log(grecaptcha.getResponse());
					//document.getElementById("status_msg").innerHTML = n;
					n = str.indexOf("03A");
					if (n >= 0 && formdata.has('name1') && formdata.has('name2') && formdata.has('email') && formdata.has('phone') && formdata.has('message')) {
						$('#tax_form').attr('action', 'tax_form.php');
					    captchaPass = true;
				    } else {
				    	document.getElementById("status_msg").innerHTML = "Error: Form or reCaptcha check NOT complete!";
				    }
				}
		    })
		};
		
		function validateFormOnSubmit(tax_form) { // takes contactForm var as input  onsubmit="return validateFormOnSubmit(this)"
			if (captchaPass) {
				_("status_msg").innerHTML = "Got it! Thank you, " + name + ", for your message! Someone will get back to you shortly!"
				submitted = true;
				_("ss-submit").disabled = true;
				return true;
		    } else {
		    	_("status_msg").innerHTML = "Error: reCaptcha check failed for " + name;
		    	_("status_msg").innerHTML = "Error: Form or reCaptcha check NOT complete!";
		    }
		}
		/*
		if (submitted) {
			_("tax_form").reset();	
		}
		*/
		</script>
		<!-- End Simple contact form script -->
		
	</head>

	<body>
		<main>
		<form id="tax_form" class="tax_form" action="" onsubmit="return validateFormOnSubmit(this); event.preventDefault();">
		<?php
          /*require_once('recaptchalib.php');*/
          $publickey = "6Lf8sVsUAAAAAGSeEocTRqoyho51t1Tp5AInt4kh"; // you got this from the signup page
          /*echo recaptcha_get_html($publickey);*/
        ?>
		<!-- <input type="text" name="catcher" id="catcher_id" class="catcher_class" value="" /> -->
		<input class="tax_fname" type="text" name="name" placeholder="First Name">
		<input class="tax_lname" type="text" name="lname" placeholder="Last Name">
		<input class="tax_email" type="email" name="tax_email" placeholder="Email (tax forms will be sent here)">
		<input class="tax_sdate" type="date" name="start_date"  placeholder="Class Start Date">
		<input class="tax_edate" type="date" name="end_date" placeholder="Class End Date">
		<input class="tax_addr" type="text" name="tax_addr" placeholder="Street Address (used on tax forms)">
		<input class="tax_city" type="text" name="tax_city" placeholder="City">
		<input class="tax_zip" type="text" name="tax_zip" pattern="[0-9]{5}" placeholder="Zip">
		
		<center>
		<button class="submit_btn" id="ss-submit" type="submit" name="tax_submit">Submit</button>
		<span style="font: bold normal 10px/80% Arial, Helvetica, sans-serif; line-height: 10px;">To submit, please click the captcha below (may take a few seconds)</span>
		<br>
		<div class="g-recaptcha" id="captchabox" data-sitekey="6Lf8sVsUAAAAAGSeEocTRqoyho51t1Tp5AInt4kh" data-callback="notRobot">
		</div>
		<span id="status_msg" name="msg"></span>
		</center>
		</form>	
		</main>
	</body>
	

</html>