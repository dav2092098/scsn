<?php
$newstyle='custom_calendar2.css';
$url="https://calendar.google.com/calendar/embed?title=SCSN%20Course%20Calendar&amp;height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=1pt84tlcdnnmu4tu7p5tj18nfs%40group.calendar.google.com&amp;color=%232952A3&amp;ctz=America%2FPhoenix";
$ch=curl_init();
curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_HEADER,0);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,0);
$buffer=curl_exec($ch);
curl_close($ch);
$search = '/(<link.*>)/';
$replacement = '<link rel="stylesheet" type="text/css" href="' . $newstyle . '" />';
$buffer = preg_replace($search, $replacement, $buffer);
$buffer=str_replace('/calendar/_','https://calendar.google.com/calendar/_',$buffer);
$buffer=str_replace('<script>function _onload()','<script>function _onload()',$buffer);
$buffer=str_replace('<script type="text/javascript" src="//www.google.com/calendar/','<script type="text/javascript" src="https://www.google.com/calendar/',$buffer);
$buffer=str_replace('"baseUrl":"/"','"baseUrl":"https://www.google.com/"',$buffer);
echo $buffer;
?>