// JavaScript for interactive quizzes

// Quiz 1 - Check answer for identify the shape
function checkAnswer() {
    const selectedOption = document.querySelector('input[name = "shape"]:checked').value;
 
    if(selectedOption === 'circle') {
        alert('Correct! Well done!');
    } else {
        alert('Wrong! Try again!');
    }
 }
 
 // Quiz 2 - Drag and drop functions for match the shape
 function allowDrop(ev) {
    ev.preventDefault();
 }
 
 function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
 }
 
 function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
 }
 
 // Quiz 2 - Check match for match the shape
 function checkMatch() {
    const circleZone = document.getElementById('circle-zone');
    const squareZone = document.getElementById('square-zone');
    const triangleZone = document.getElementById('triangle-zone');
 
    if(circleZone.contains(document.getElementById('circle-name')) &&
       squareZone.contains(document.getElementById('square-name')) &&
       triangleZone.contains(document.getElementById('triangle-name'))) {
         alert('Correct! Well done!');
    } else {
         alert('Wrong! Try again!');
    }
 }
 
 // Quiz 3 - Canvas drawing functions for draw the shape
 var canvas = document.getElementById('canvas');
 var ctx = canvas.getContext('2d');
 var drawing = false;
 var x, y;
 
 canvas.addEventListener('mousedown', function(e) {
    drawing = true;
    x = e.offsetX;
    y = e.offsetY;
 });
 
 canvas.addEventListener('mousemove', function(e) {
    if(drawing) {
       drawLine(x, y, e.offsetX, e.offsetY);
       x = e.offsetX;
       y = e.offsetY;
    }
 });
 
 canvas.addEventListener('mouseup', function(e) {
    drawing = false;
 });
 
 function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
 }
 
 // Quiz 3 - Clear canvas for draw the shape
 function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 }
 
 // Quiz 3 - Check drawing for draw the shape
// Quiz 3 - Check drawing for draw the shape
function checkDrawing() {
    // This is a very simple and naive way to check the drawing
    // A more sophisticated approach would be to use image processing techniques
    // For example, using OpenCV.js to detect contours and shapes
    // https://docs.opencv.org/3.4/d4/d73/tutorial_py_contours_begin.html
 
    // Get the image data from the canvas
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
 
    // Count the number of non-white pixels
    var pixelCount = 0;
    for(var i = 0; i < imageData.data.length; i += 4) {
       var r = imageData.data[i];
       var g = imageData.data[i+1];
       var b = imageData.data[i+2];
       if(r !== 255 || g !== 255 || b !== 255) {
          pixelCount++;
       }
    }
 
    // Compare the pixel count with a threshold
    // This is a very crude way to check if the drawing is close to a circle
    // A better way would be to compare the shape of the drawing with a circle template
    var threshold = 10000;
    if(pixelCount > threshold) {
       alert('Correct! Well done!');
    } else {
       alert('Wrong! Try again!');
    }
 }
 