var dialLines = document.getElementsByClassName('diallines');
for (var i = 1; i < 60; i++) {
   dialLines[i] = $(dialLines[i-1]).clone()
                                   .insertAfter($(dialLines[i-1]));
   $(dialLines[i]).css('transform', 'rotate(' + 6 * i + 'deg)');
}

function tick() {
   var date = new Date();
   var seconds = date.getSeconds();
   var minutes = date.getMinutes();
   var hours = date.getHours();
   var day = date.getDate();
   var month = date.getMonth();
   var year = date.getFullYear();
   
   if (hours > 9){
     var backgroundcolor = 'none';
     var backgroundcolor2 = 'none';
     var accentColor = 'black';


   //document.body.style.background = backgroundcolor;
   var x = document.getElementById('twelve');
   x.style.color = accentColor;
   x = document.getElementById('three');
   x.style.color = accentColor;
   x = document.getElementById('six');
   x.style.color = accentColor;
   x = document.getElementById('nine');
   x.style.color = accentColor;
   x = document.getElementById('dial');
   //x.style.background = backgroundcolor2;
       
   var dial = document.getElementById('dialCSS');
   dial.innerHTML = '.dial {' + 'box-shadow: 1px 14px 21px 0 rgba(0,0,0,.2); '+' }';
   x.style.border = '0px solid black';
     
   
     
   x = document.getElementById('diallines');
   for (var i = 0; document.getElementsByClassName('diallines').length > i; i++){
   document.getElementsByClassName('diallines')[i].style.background = 'white';
   }
   x = document.getElementById('date');
   x.style.color = 'orange';

   document.getElementById("twelve").innerHTML = "12";
   document.getElementById("three").innerHTML = "3";
   document.getElementById("six").innerHTML = "6";
   document.getElementById("nine").innerHTML = "9";
   $('.date').css('color', 'white');
     document.getElementsByClassName('diallines')[seconds].style.background = 'orange';
        document.getElementById("sec-hand").style.width = "14px";
   document.getElementById("sec-hand").style.height = "162px";
   }
   if (hours > 10){
     var backgroundcolor = 'none';
     var backgroundcolor2 = 'none';

     var accentColor = 'black';


   //document.body.style.background = backgroundcolor;
   var x = document.getElementById('twelve');
   x.style.color = accentColor;
   x = document.getElementById('three');
   x.style.color = accentColor;
   x = document.getElementById('six');
   x.style.color = accentColor;
   x = document.getElementById('nine');
   x.style.color = accentColor;
   x = document.getElementById('dial');
   //x.style.background = backgroundcolor2;
     var dial = document.getElementById('dialCSS');
   dial.innerHTML = '.dial {' + 'box-shadow: 1px 14px 21px 0 rgba(0,0,0,.2); '+' }';
   x.style.border = '12px solid white';
     
   
     
   x = document.getElementById('diallines');
   for (var i = 0; document.getElementsByClassName('diallines').length > i; i++){
   document.getElementsByClassName('diallines')[i].style.background = 'white';
   }
   x = document.getElementById('date');
   x.style.color = 'orange';

   document.getElementById("twelve").innerHTML = "12";
   document.getElementById("three").innerHTML = "3";
   document.getElementById("six").innerHTML = "6";
   document.getElementById("nine").innerHTML = "9";
   $('.date').css('color', 'white');
     document.getElementsByClassName('diallines')[seconds].style.background = 'orange';
        document.getElementById("sec-hand").style.width = "14px";
   document.getElementById("sec-hand").style.height = "162px";
   }
   if (hours > 11){
     var backgroundcolor = 'lightblue';
     var backgroundcolor2 = 'grey';

     var accentColor = 'white';


   document.body.style.background = backgroundcolor;
   var x = document.getElementById('twelve');
   x.style.color = accentColor;
   x = document.getElementById('three');
   x.style.color = accentColor;
   x = document.getElementById('six');
   x.style.color = accentColor;
   x = document.getElementById('nine');
   x.style.color = accentColor;
   x = document.getElementById('dial');
   //x.style.background = backgroundcolor2;
     var dial = document.getElementById('dialCSS');
   dial.innerHTML = '.dial {' + 'box-shadow: 1px 14px 21px 0 rgba(0,0,0,.2); '+' }';
   x.style.border = '12px solid none';
     
   
     
   x = document.getElementById('diallines');
   for (var i = 0; document.getElementsByClassName('diallines').length > i; i++){
   document.getElementsByClassName('diallines')[i].style.background = 'white';
   }
   x = document.getElementById('date');
   x.style.color = 'orange';

   document.getElementById("twelve").innerHTML = "12";
   document.getElementById("three").innerHTML = "3";
   document.getElementById("six").innerHTML = "6";
   document.getElementById("nine").innerHTML = "9";
   $('.date').css('color', 'white');
     document.getElementsByClassName('diallines')[seconds].style.background = 'orange';
        document.getElementById("sec-hand").style.width = "14px";
   document.getElementById("sec-hand").style.height = "162px";
   }
   if (hours > 12){
     var backgroundcolor = 'none';
     var backgroundcolor2 = 'white';
     var accentColor = 'black';

   document.body.style.background = backgroundcolor;
   var x = document.getElementById('twelve');
   x.style.color = accentColor;
   x = document.getElementById('three');
   x.style.color = accentColor;
   x = document.getElementById('six');
   x.style.color = accentColor;
   x = document.getElementById('nine');
   x.style.color = accentColor;
   x = document.getElementById('dial');
   //x.style.background = backgroundcolor2;
   
   var dial = document.getElementById('dialCSS');
   dial.innerHTML = '.dial {' + 'box-shadow: 1px 14px 21px 0 rgba(0,0,0,.2); '+' }';
   x.style.border = '0px solid black';
 
   x = document.getElementById('diallines');
   for (var i = 0; document.getElementsByClassName('diallines').length > i; i++){
   document.getElementsByClassName('diallines')[i].style.background = 'grey';
   }
   x = document.getElementById('date');
   x.style.color = 'orange';

   document.getElementById("twelve").innerHTML = "12";
   document.getElementById("three").innerHTML = "3";
   document.getElementById("six").innerHTML = "6";
   document.getElementById("nine").innerHTML = "9";
   $('.date').css('color', 'white');
   document.getElementsByClassName('diallines')[seconds].style.background = 'orange';
   document.getElementById("sec-hand").style.width = "14px";
   document.getElementById("sec-hand").style.height = "162px";
     
   $('.date').css('color', 'black');
   var z = document.getElementById("date");
   z.style.color ="black";
   z.font = "Arial";
   }
   if (hours > 13){
     var backgroundcolor = 'none';
     var backgroundcolor2 = 'none';
     var accentColor = 'white';

   //document.body.style.background = backgroundcolor;
   var x = document.getElementById('twelve');
   x.style.color = accentColor;
   x = document.getElementById('three');
   x.style.color = accentColor;
   x = document.getElementById('six');
   x.style.color = accentColor;
   x = document.getElementById('nine');
   x.style.color = accentColor;
   x = document.getElementById('dial');
   //x.style.background = backgroundcolor2;
   var dial = document.getElementById('dialCSS');
   dial.innerHTML = '.dial {' + 'box-shadow: 1px 14px 21px 0 rgba(0,0,0,.2); '+' }';
   x.style.border = '12px solid white';
 
   x = document.getElementById('diallines');
   for (var i = 0; document.getElementsByClassName('diallines').length > i; i++){
   document.getElementsByClassName('diallines')[i].style.background = 'white';
   }
   x = document.getElementById('date');
   x.style.color = 'orange';

   document.getElementById("twelve").innerHTML = "12";
   document.getElementById("three").innerHTML = "3";
   document.getElementById("six").innerHTML = "6";
   document.getElementById("nine").innerHTML = "9";
   $('.date').css('color', 'white');
   document.getElementsByClassName('diallines')[seconds].style.background = 'orange';
   document.getElementById("sec-hand").style.width = "14px";
   document.getElementById("sec-hand").style.height = "162px";
     
   $('.date').css('color', 'black');
   var z = document.getElementById("date");
   z.style.color ="white";
   z.font = "Arial";
   }
  if (hours > 14){
     var backgroundcolor = 'none';
     var backgroundcolor2 = 'darkblue';
     var accentColor = 'white';

   //document.body.style.background = backgroundcolor;
   var x = document.getElementById('twelve');
   x.style.color = accentColor;
   x = document.getElementById('three');
   x.style.color = accentColor;
   x = document.getElementById('six');
   x.style.color = accentColor;
   x = document.getElementById('nine');
   x.style.color = accentColor;
   x = document.getElementById('dial');
   //x.style.background = backgroundcolor2;
    var dial = document.getElementById('dialCSS');
   dial.innerHTML = '.dial {' + 'box-shadow: 1px 14px 21px 0 rgba(0,0,0,.2); '+' }';
   x.style.border = '12px solid white';
 
   x = document.getElementById('diallines');
   for (var i = 0; document.getElementsByClassName('diallines').length > i; i++){
   document.getElementsByClassName('diallines')[i].style.background = 'white';
   }
   x = document.getElementById('date');
   x.style.color = 'orange';

   document.getElementById("twelve").innerHTML = "12";
   document.getElementById("three").innerHTML = "3";
   document.getElementById("six").innerHTML = "6";
   document.getElementById("nine").innerHTML = "9";
   $('.date').css('color', 'white');
   document.getElementsByClassName('diallines')[seconds].style.background = 'orange';
   document.getElementById("sec-hand").style.width = "14px";
   document.getElementById("sec-hand").style.height = "162px";
     
   $('.date').css('color', 'black');
   var z = document.getElementById("date");
   z.style.color ="white";
   z.font = "Arial";
   }
   if (hours > 15){
     var backgroundcolor = 'darkblue';
     var backgroundcolor2 = 'darkblue';
     var accentColor = 'white';

   //document.body.style.background = backgroundcolor;
   var x = document.getElementById('twelve');
   x.style.color = accentColor;
   x = document.getElementById('three');
   x.style.color = accentColor;
   x = document.getElementById('six');
   x.style.color = accentColor;
   x = document.getElementById('nine');
   x.style.color = accentColor;
   x = document.getElementById('dial');
   //x.style.background = backgroundcolor2;
     var dial = document.getElementById('dialCSS');
   dial.innerHTML = '.dial {' + 'box-shadow: 1px 14px 21px 0 rgba(0,0,0,.2); '+' }';
   x.style.border = '6px solid white';
 
   x = document.getElementById('diallines');
   for (var i = 0; document.getElementsByClassName('diallines').length > i; i++){
   document.getElementsByClassName('diallines')[i].style.background = 'darkblue';
   }
   x = document.getElementById('date');
   x.style.color = 'orange';

   document.getElementById("twelve").innerHTML = "12";
   document.getElementById("three").innerHTML = "3";
   document.getElementById("six").innerHTML = "6";
   document.getElementById("nine").innerHTML = "9";
   $('.date').css('color', 'white');
   document.getElementsByClassName('diallines')[seconds].style.background = 'orange';
   document.getElementById("sec-hand").style.width = "14px";
   document.getElementById("sec-hand").style.height = "162px";
     
   $('.date').css('color', 'black');
   var z = document.getElementById("date");
   z.style.color ="white";
   z.font = "Arial";
   }
   if (hours > 16){
     var backgroundcolor = 'darkred';
     var backgroundcolor2 = 'darkred';
     var accentColor = 'white';

   //document.body.style.background = backgroundcolor;
   var x = document.getElementById('twelve');
   x.style.color = accentColor;
   x = document.getElementById('three');
   x.style.color = accentColor;
   x = document.getElementById('six');
   x.style.color = accentColor;
   x = document.getElementById('nine');
   x.style.color = accentColor;
   x = document.getElementById('dial');
   //x.style.background = backgroundcolor2;
     var dial = document.getElementById('dialCSS');
   dial.innerHTML = '.dial {' + 'box-shadow: 1px 14px 21px 0 rgba(0,0,0,.2); '+' }';
   x.style.border = '12px solid white';
 
   x = document.getElementById('diallines');
   for (var i = 0; document.getElementsByClassName('diallines').length > i; i++){
   document.getElementsByClassName('diallines')[i].style.background = 'white';
   }
   x = document.getElementById('date');
   x.style.color = 'orange';

   document.getElementById("twelve").innerHTML = "12";
   document.getElementById("three").innerHTML = "3";
   document.getElementById("six").innerHTML = "6";
   document.getElementById("nine").innerHTML = "9";
   $('.date').css('color', 'white');
   document.getElementsByClassName('diallines')[seconds].style.background = 'orange';
   document.getElementById("sec-hand").style.width = "14px";
   document.getElementById("sec-hand").style.height = "162px";
     
   $('.date').css('color', 'black');
   var z = document.getElementById("date");
   z.style.color ="white";
   z.font = "Arial";
   }
  if (hours > 15){
     var backgroundcolor = 'purple';
     var backgroundcolor2 = 'purple';
     var accentColor = 'white';

   //document.body.style.background = backgroundcolor;
   var x = document.getElementById('twelve');
   x.style.color = accentColor;
   x = document.getElementById('three');
   x.style.color = accentColor;
   x = document.getElementById('six');
   x.style.color = accentColor;
   x = document.getElementById('nine');
   x.style.color = accentColor;
   x = document.getElementById('dial');
   //x.style.background = backgroundcolor2;
   x.style.border = '0px solid white';
   var dial = document.getElementById('dialCSS');
   dial.innerHTML = '.dial {' + 'box-shadow: 1px 14px 21px 0 rgba(0,0,0,.0); '+' }';
 
   x = document.getElementById('diallines');
   for (var i = 0; document.getElementsByClassName('diallines').length > i; i++){
   document.getElementsByClassName('diallines')[i].style.background = 'purple';
   }
   x = document.getElementById('date');
   x.style.color = 'white';

   document.getElementById("twelve").innerHTML = "12";
   document.getElementById("three").innerHTML = "3";
   document.getElementById("six").innerHTML = "6";
   document.getElementById("nine").innerHTML = "9";
   $('.date').css('color', 'white');
   document.getElementsByClassName('diallines')[seconds].style.background = 'orange';
   document.getElementById("sec-hand").style.width = "14px";
   document.getElementById("sec-hand").style.height = "162px";
     
   $('.date').css('color', 'black');
   var z = document.getElementById("date");
   z.style.color ="white";
   z.font = "Arial";
   }
   if (hours < 11){
     var backgroundcolor = '#ececec';
     var accentColor = 'black';

   //document.body.style.background = backgroundcolor;
   var x = document.getElementById('twelve');
   x.style.color = accentColor;
   x = document.getElementById('three');
   x.style.color = accentColor;
   x = document.getElementById('six');
   x.style.color = accentColor;
   x = document.getElementById('nine');
   x.style.color = accentColor;
   x = document.getElementById('dial');
   x.style.background = backgroundcolor;
   x.style.border = '12px solid #5c5c5c';
   
   x = document.getElementById('diallines');
   for (var i = 0; document.getElementsByClassName('diallines').length > i; i++){
   document.getElementsByClassName('diallines')[i].style.background = accentColor;

   
   }

   document.getElementById("twelve").innerHTML = "12";
   document.getElementById("three").innerHTML = "3";
   document.getElementById("six").innerHTML = "6";
   document.getElementById("nine").innerHTML = "9";
     
/*   x = document.getElementById('hour-hand');
   x.style.background = accentColor;
     
   x = document.getElementById('min-hand');
   x.style.background = accentColor;
     
   x = document.getElementById('sec-hand');
   x.style.background = accentColor; */
   document.getElementsByClassName('diallines')[seconds].style.background = 'black';


   }
  
   var secAngle = seconds * 6;
   var minAngle = minutes * 6 + seconds * (360/3600);
   var hourAngle = hours * 30 + minutes * (360/720);
   
   $('.sec-hand').css('transform', 'rotate(' + secAngle + 'deg)');
   $('.min-hand').css('transform', 'rotate(' + minAngle + 'deg)');
   $('.hour-hand').css('transform', 'rotate(' + hourAngle + 'deg)');
   $('.date').text(day);
    $('.circleS').css('transform', 'rotate(' + secAngle + 'deg)');
   

    var SecondsA = "0";
    if(seconds < 10){
      SecondsA = "0"+seconds;
    }
    if(seconds > 9){
      SecondsA = seconds;
    }

   //document.getElementById("time").innerHTML = (hours +":"+ minutes +":"+ SecondsA+" - "+(month+1)+" / "+ day +" / "+ year);
   $('.date').text(hours +":"+ minutes +":"+ SecondsA+" - "+(month+1)+" / "+ day +" / "+ year);

   var z = document.getElementById("time");
   // z.style.color ="white";
   z.font = "Arial";

}
   
setInterval(tick, 100);
    