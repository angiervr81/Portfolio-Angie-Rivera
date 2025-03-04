
// Get the canvas element and its context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//Loading the background image
const background = new Image();
background.src = '../images/sea-water-ocean-wave-inside-view-generative-ai-free-photo.jpg';

/*
//Loading foreground images
const foreground = new Image();
const foreground2 = new Image();
foreground.src = '../images/foreground.png';
foreground2.src = '../images/foreground.png';
**/


// Draw everything once images are loaded
background.onload =() =>{
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
};
/*
foreground.onload =() =>{
    ctx.drawImage(foreground, 0, 0, canvas.width, canvas.height);
};
foreground2.onload =() =>{
    ctx.drawImage(foreground2, 0, 0, canvas.width, canvas.height);
};
**/

window.onload = function() {
ctx.fillStyle = 'blue';
ctx.font = '60px cursive', 'bold'; // Set font size and style
ctx.fillText('Angie Rivera', 100, 50); // Draw text
ctx.fillText('Scence Assignment', 100, 100);
}
