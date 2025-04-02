
// Get the canvas element and its context
const canvas = document.getElementById('sceneCanvas');
const ctx = canvas.getContext('2d');

// Load the background image
const background = new Image();
background.src = 'images/seaWaterOcean.jpg'; // Ensure correct path to your image

// Load foreground images
const foreground1 = new Image();
foreground1.src ='images/dogsurfer.jpg'; // Path to your first foreground image

const foreground2 = new Image();
foreground2.src = 'images/dolphin.jpg'; // Path to your second foreground image

// Draw the background and images once they're loaded
background.onload = function() {
    // Draw the background
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Once background is drawn, load and draw foreground images
    foreground1.onload = function() {
        // Draw the first foreground image
        ctx.globalCompositeOperation = 'multiply'; // Set composite operation for blending
        ctx.drawImage(foreground1, 300, 275, 200, 200); // Modify positioning and size as needed
    };

    foreground2.onload = function() {
        // Draw the second foreground image
        ctx.globalCompositeOperation = 'multiply'; // Set composite operation for blending
        ctx.drawImage(foreground2, 500, 200, 150, 150); // Modify positioning and size as needed
    };

    ctx.globalCompositeOperation = 'source-over';
    // Draw text after all images are loaded
    ctx.font = '30px Arial'; // Set the font size and style
    ctx.fillStyle = 'Forest Green'; // Set the text color
    ctx.fillText('Angie Rivera', 50, 50); // Display your name at position (50, 50)
    ctx.fillText('Scene Assignment: CATCHING WAVES', 50, 100); // Display scene title at position (50, 100)
};
