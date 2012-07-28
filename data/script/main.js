var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		fade('main');
		clearInterval(readyStateCheckInterval);
	}
}, 300);
			
var TimeToFade = 1000.0;
function fade(eid)
	{
		var element = document.getElementById(eid);
		if(element == null)
			return;
			   
		if(element.FadeState == null)
			{
				if(element.style.opacity == null || element.style.opacity == '' || element.style.opacity == '0')
				{
					element.FadeState = -2;
				}
				else
				{
					element.FadeState = 2;
				}
			}
				
		if(element.FadeState == 1 || element.FadeState == -1)
			{
				element.FadeState = element.FadeState == 2 ? -1 : 1;
				element.FadeTimeLeft = TimeToFade - element.FadeTimeLeft;
			}
			else
			{
				element.FadeState = element.FadeState == 2 ? -1 : 1;
				element.FadeTimeLeft = TimeToFade;
				setTimeout("animateFade(" + new Date().getTime() + ",'" + eid + "')", 33);
			}  
	}
			
function animateFade(lastTick, eid)
	{  
		var curTick = new Date().getTime();
		var elapsedTicks = curTick - lastTick;  
		var element = document.getElementById(eid);
			 
		if(element.FadeTimeLeft <= elapsedTicks)
			{
				element.style.opacity = element.FadeState == 1 ? '1' : '0';
				element.style.filter = 'alpha(opacity = ' + (element.FadeState == 1 ? '100' : '0') + ')';
				element.FadeState = element.FadeState == 1 ? 2 : -2;
				return;
			}
			 
		element.FadeTimeLeft -= elapsedTicks;
		var newOpVal = element.FadeTimeLeft/TimeToFade;
		if(element.FadeState == 1)
			newOpVal = 1 - newOpVal;
			element.style.opacity = newOpVal;
			element.style.filter = 'alpha(opacity = ' + (newOpVal*100) + ')';  
			setTimeout("animateFade(" + curTick + ",'" + eid + "')", 33);
	}
	
function spolier(x)
	{
		var element = document.getElementById(x);
		if(element.style.display =="none"){
			element.style.display =="block";
		}else{
			element.style.display =="none";
		}
		debug(element);
	}

/*
Old Hover Script & Debug
function bigImg(x)
			{
				x.style.height="35px";
				x.style.width="266px";
				name = x.id;
				x.src = "data/textures/button/"+ name +"-over.jpg";
				debug(x);
				
			}

function normalImg(x)
	{
		x.style.height="29px";
		x.style.width="256px";
		name = x.id;
		x.src = "data/textures/button/"+ name +".jpg";
		debug(x);
	}

	
//debug
function debug(x)
	{
		document.all['debug'].innerHTML = "Debug Mode</br>Name: " + x.id + "</br>Src: " + x.src + "</br>Scale: " + x.style.width + " x " + x.style.height;
	}
*/