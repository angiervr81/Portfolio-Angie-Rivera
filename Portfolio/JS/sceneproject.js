
// Get the canvas element and its context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//Loading the background image
const background = new Image();
background.src = 'images/sea-water-ocean-wave-inside-view-generative-ai-free-photo.jpg';

/*
//Loading foreground images
const foreground = new Image();
const foreground2 = new Image();
foreground.src = '../images/foreground.png';
foreground2.src = '../images/foreground.png';
**/
// Resize canvas to fit the window


//Draw everything once images are loaded
background.onload =() =>{
    ctx.drawImage(background, 0, 150, canvas.width, canvas.height - 150);
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
    
    ctx.fillStyle = 'black'; // Set color 
    ctx.font = '60px cursive'; // Set font size and style
    
    var text1 ='Angie Rivera'; // Draw text
    var text2 = 'Scence Assignment';

    var textWidth1 = ctx.measureText(text1).width;
    var textWidth2 = ctx.measureText(text2).width;

    var x1 = (canvas.width - textWidth1) / 2;
    var x2 = (canvas.width - textWidth2) / 2;

    var y1 = canvas.height / 2 - 385;
    var y2 = canvas.height / 2 - 325;

    ctx.fillText(text1, x1, y1);
    ctx.fillText(text2, x2, y2);
    }

// Resize canvas to fit the window
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Redraw the background image and text after resizing
    background.onload();  // Re-trigger image loading and redraw process
});

// Initially set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



