// Bubble Objects by Michael Hong (Associative Arrays - property:value pairs)


// Intialize canvas and  graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
 
// Create an array of  random bubble objects
let bubbles = [];

// Main Draw Loop
requestAnimationFrame(draw);
function draw() {
    // Fill Canvas
   background("black");
  
    // Move and Draw All Bubbles
    for (let i = 0; i < bubbles.length; i++) {
        moveBubble(bubbles[i]);
        drawBubble(bubbles[i]);
    }
    // Loop draw function

    requestAnimationFrame(draw);
}

// Event Stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 39) { 
        // Right Arrow
        // Add a new random bubble
        addBubble();
    } else if (event.keyCode === 37) {
        // Left Arrow - Remove the Last Bubble
        bubbles.pop();
    }
}

// TIMERS
setInterval(addBubble, 1000);

function addBubble() {
    console.log("hi");
    bubbles.push(newBubble(400, 300, 30, randomRGB()));
}