var browserPrefix = '';
var usrAg = navigator.userAgent;
if(usrAg.indexOf("Chrome") > -1 || usrAg.indexOf("Safari") > -1) {
    browserPrefix = "-webkit-";
} else if (usrAg.indexOf("Opera") > -1) {
    browserPrefix = "-o";
} else if (usrAg.indexOf("Firefox") > -1) {
    browserPrefix = "-moz-";
} else if (usrAg.indexOf("MSIE") > -1) {
    browserPrefix = "-ms-";
}

//TweenLite.defaultEase = Power3.easeInOut;

var $cursor = jQuery('#js-cursor');
var $cursor__big = jQuery('#js-cursor__big');
var $cursor__small = jQuery('#js-cursor__small');
var $links = jQuery('.curserhover, .call-to-action');

jQuery(window).on('mousemove', function(e){
   $cursor.css(browserPrefix+'transform', 'translate('+ e.pageX +'px, '+ e.pageY +'px)');
});

$links.on('mouseenter', function(e){
   $cursor__big.css(browserPrefix+'transform', 'scale(1)');
});

$links.on('mouseleave', function(e){
   $cursor__big.css(browserPrefix+'transform', 'scale(0)');
});

$links.on('mouseenter', function(e){
   $cursor__small.css(browserPrefix+'transform', 'scale(0)');
});

$links.on('mouseleave', function(e){
   $cursor__small.css(browserPrefix+'transform', 'scale(1)');
});