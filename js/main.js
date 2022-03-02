// Bubble Objects by Michael Hong (Associative Arrays - property:value pairs)

let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
 
let bubbles = [];
for (let n = 1; n <= 15; n++) {
    bubbles.push(newRandomBubble());
}

requestAnimationFrame(draw);
function draw() {
    // Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Move and Draw All Bubbles
    for (let i = 0; i < bubbles.length; i++) {
        moveBubble(bubbles[i]);
        drawBubble(bubbles[i]);
    }

    requestAnimationFrame(draw);
}

function newBubble(initX, initY, initR, initColor) {
    return {
        x: initX,
        y: initY,
        r: initR,
        color: initColor
        };
}

function newRandomBubble() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(5, 35),
        color: randomRGB()        
    };

}

function drawBubble(aBubble) {
    stroke(aBubble.color);
    circle(aBubble.x, aBubble.y, aBubble.r, "stroke");
}

function moveBubble(aBubble) {
    aBubble.x += randomInt(-2, 3);
    aBubble.y += randomInt(-2, 3);
}
