// Functions that deal with bubbles




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
        x: randomInt(0, 800),
        y: randomInt(0, 600),
        r: randomInt(5, 35),
        color: randomRGB()        
    };

}
// Creat and return an array with "total" bubble objects
function createRandomBubbleArray(total) {
    let temp = [];
    for (let n = 1; n <= total; n++) {
     temp.push(newRandomBubble());
    }
    return temp;

}

function drawBubble(aBubble) {
    stroke(aBubble.color);
    circle(aBubble.x, aBubble.y, aBubble.r, "stroke");
}

function moveBubble(aBubble) {
    aBubble.x += randomInt(-2, 3);
    aBubble.y += randomInt(-2, 3);
}
