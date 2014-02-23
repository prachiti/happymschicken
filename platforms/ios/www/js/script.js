
$( document ).on( "pageinit l", function( event ) {
	$('#container').on("tap",tapEvent);
});

function tapEvent(e) {
	var chicken = $("#chicken");
	var egg = $("#egg");
	var self = this;
	var xPosition = e.pageX - (chicken.width() / 2) + 20;
	var yPosition = e.pageY - (chicken.height() / 2);
	chicken.css('left', xPosition);
	chicken.css('top', yPosition);
	//chicken.css('webkitTransition','left .3s cubic-bezier(.42,-0.3,.78,1.25),top .5s cubic-bezier(.42,-0.3,.78,1.25)');

	window.setTimeout(function() {
		var audio = $("#audio");
		var newegg = $("#egg").clone().appendTo('#container');
		var eggY = yPosition + 100;
		var eggX = xPosition + 20;
		newegg.css('left',eggX);
		newegg.css('top',eggY);
		newegg.css('display','block');
		//newegg.css('webkitTransition','bottom .5s');
		audio[0].play();
		var count = $('#eggcount').html();
		$('#eggcount').html(parseInt(count) + 1);
	}, 300);
}


