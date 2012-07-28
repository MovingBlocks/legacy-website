function thebackground() {
$('div.background img').css({opacity: 0.0});
$('div.background img:first').css({opacity: 1.0});
//setInterval('change()',4500);
}

function change() {
var current = ($('div.background img.show')? $('div.background img.show') : $('div.background img:first'));
if ( current.length == 0 ) current = $('div.background img:first');
var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('div.background img:first') :current.next()) : $('div.background img:first'));
next.css({opacity: 0.0})
.addClass('show')
.animate({opacity: 1.0}, 1000);
current.animate({opacity: 0.0}, 1000)
.removeClass('show');
};

var bgrdy = setInterval(function() {
	if (document.readyState === "complete") {
		change()
	}
}, 4500);

$(document).ready(function() {
thebackground();	
$('div.background').fadeIn(1000); // works for all the browsers other than IE
$('div.background img').fadeIn(1000); // IE tweak
});