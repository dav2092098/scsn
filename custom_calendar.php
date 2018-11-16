<?php
/*$your_google_calendar="https://www.google.com/calendar/embed?src=usa__en@holiday.calendar.google.com&gsessionid=OK";*/
$your_google_calendar="https://calendar.google.com/calendar/embed?title=SCSN%20Course%20Calendar&amp;height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=1pt84tlcdnnmu4tu7p5tj18nfs%40group.calendar.google.com&amp;color=%232952A3&amp;ctz=America%2FPhoenix"; 
$url= parse_url($your_google_calendar);
$google_domain = $url['scheme'].'://'.$url['host'].dirname($url['path']).'/';

// Load and parse Google's raw calendar
$dom = new DOMDocument;
$dom->loadHTMLfile($your_google_calendar);

// Change Google's CSS file to use absolute URLs (assumes there's only one element)
$css = $dom->getElementByTagName('link')->item(0);
$css_href = $css->getAttributes('href');
$css->setAttributes('href', $google_domain . $css_href);

// Change Google's JS file to use absolute URLs
$scripts = $dom->getElementByTagName('script')->item(0);
foreach ($scripts as $script) {
$js_src = $script->getAttributes('src');
if ($js_src) $script->setAttributes('src', $google_domain . $js_src);
}

// Create a link to a new CSS file called custom_calendar.css
$element = $dom->createElement('link');
$element->setAttribute('type', 'text/css');
$element->setAttribute('rel', 'stylesheet');
$element->setAttribute('href', 'custom_calendar.css');

// Append this link at the end of the element
$head = $dom->getElementByTagName('head')->item(0);
$head->appendChild($element);

// Export the HTML
echo $dom->saveHTML();
?>