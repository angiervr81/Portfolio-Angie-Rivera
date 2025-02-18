# SceneDrawing
Object

Create a visually appealing scene using the HTML &lt;canvas> element. 

The scene should include:  
* A background image
* At least two foreground images
*  Text displaying your name and the scene title
  
Steps
- These are the Steps this project has to follow

    1. Set Up Your HTML File
        * Create an HTML file and set up the basic structure:
            - Include a <canvas> element with an ID.
            - Link a JavaScript file.

    2. Prepare Your JavaScript File
          * Create a JavaScript file to initialize your canvas and context:
              - Use getElementById to get the canvas element.
              - Use getContext('2d') to get the canvas context.

    3. Load and Draw the Background Image
         * Load a background image and draw it on the canvas:
             - Create an Image object.
             - Set the src attribute to the path of your background image within the images subfolder.
             - Use the onload event to draw the image on the canvas.

    4. Load and Draw Foreground Images
          * Find at least two images you want to use in front of your background.
          * Create Image objects for each of your chosen images.
          * Set the src attribute to the path where you’ve saved these images in the images subfolder.
          * Once the images load, use onload to place and draw them on your canvas.
          * Play around with their positions and sizes to fit them nicely in your scene.

    5. Add Text to the Canvas

        * Draw text displaying your name and the picture title on the canvas:
          - Use the font property to set the font style and size.
          - Use the fillStyle property to set the text color.
          - Use the fillText method to draw the text on the canvas.
