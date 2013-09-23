var bg_rnd_last = 0;
function rnd_background(){
	var bg_start = 1;
	var bg_end = 10;
	var bg_rnd = Math.floor(Math.random() * (bg_end - bg_start + 1)) + bg_start;
	if (bg_rnd == bg_rnd_last){
		rnd_background();
	}
	else{
		bg_rnd_last = bg_rnd;
		$('#bg').fadeOut('slow', function() {
			$('#bg').css({'background-image': 'url(data/textures/backgrounds/bg'+bg_rnd+'.jpg)'})
			$('#bg').fadeIn('slow');
		});
	}
}