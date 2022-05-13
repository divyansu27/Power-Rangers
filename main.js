var canvas = new fabric.canvas('myCanvas')
block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var block_image_object= "";
function new_image(get_image)
{
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
}