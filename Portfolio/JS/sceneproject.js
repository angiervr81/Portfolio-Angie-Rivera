
// Get the canvas element and its context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//Loading the background image
const background = new Image();
background.src = 'images/BFSCENE.jpg';


/*Loading foreground images
const foreground = new Image();
const foreground2 = new Image();
foreground.src = 'images/surfer2.jpg';
foreground2.src = 'images/dolphin.jpg';
*/

// Resize canvas to fit the window


//Draw everything once images are loaded
background.onload =() =>{
    ctx.drawImage(background, 0, 150, canvas.width, canvas.height - 150);
};
/*
foreground.onload =() =>{
    const foregroundWidth = 150;
    const foregroundHeight = (foreground.height / foreground.width) * foregroundWidth;
    const foregroundX = (canvas.width - foregroundWidth)/2;
    const foregroundY = (canvas.height - foregroundHeight)/2;

    ctx.drawImage(foreground, foregroundX, foregroundY, foregroundWidth, foregroundHeight);
};
/*
foreground2.onload =() =>{
    const foreground2Width = 300;
    const foreground2Height = (foreground2.height / foreground2.width) * foreground2Width;
    const foreground2X = (canvas.width - foreground2Width)/2;
    const foreground2Y = (canvas.height - foreground2Height)/2;

    ctx.drawImage(foreground2, foreground2X, foreground2Y, foreground2Width, foreground2Height);
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



