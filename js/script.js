$(document).ready(function() {
    $('#navbar ul li').mouseenter(function() {
	$(this).css('background-color','teal');
	$(this).css('color','white');
    });
    $('#navbar ul li').mouseleave(function() {
	$(this).css('background-color','#F0F0F0');
	$(this).css('color','black');
    });
});
