var c = document.getElementById("c");
var ctx = c.getContext("2d");
var img = document.getElementById("image");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
//converting the string into an array of single characters
chinese = chinese.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
var dropstwo = [];
var dropsthree = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1;

for(var x = 0; x < columns; x++)
  dropstwo[x] = 1;

for(var x = 0; x < columns; x++)
  dropsthree[x] = 1;

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
  ctx.globalAlpha = 0.3;
	ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
	ctx.fillRect(0, 0, c.width, c.height);

  ctx.drawImage(img, 0, 0);

  ctx.globalAlpha = 1;

	ctx.fillStyle = "#0F0"; //green text
	ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random chinese character to print
		var text = chinese[Math.floor(Math.random()*chinese.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
    ctx.fillText(text, i*font_size, dropstwo[i]*font_size);
    ctx.fillText(text, i*font_size, dropsthree[i]*font_size);

		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;

    if(dropstwo[i]*font_size > c.height && Math.random() > 0.975)
			dropstwo[i] = 0;

    if(dropsthree[i]*font_size > c.height && Math.random() > 0.975)
			dropsthree[i] = 0;

		//incrementing Y coordinate
		drops[i]++;
    dropstwo[i] = dropstwo[i] + 1.2;
    dropsthree[i] = dropsthree[i] + 1.4;
	}
}

setInterval(draw, 33);
