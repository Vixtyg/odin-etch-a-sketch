//if doesnt work use deref, or move script block to bottom

const canvas = document.querySelector("#canvas");
document.draggable = false;
canvas.setAttribute("draggable", false)
const inputBar = document.querySelector("input");
const leftButton = document.querySelector("#left-row-button");
const middleButton = document.querySelector("#middle-row-button");
const rightButton = document.querySelector("#right-row-button");
const resetCanvas = document.querySelector("#reset-canvas");
let resettingCanvas = new Event("resetting");

let isMouseDown = false;
document.addEventListener("dragstart", (e) => {
    e.preventDefault()
})
const goButton = document.querySelector("#go-button");
const CANVASSIZE = 512;

let textInBar = "";
/*  Freehand: Feature, draw without a canvas with no pixel limitations
document.addEventListener("mousemove", (e) => {
    if (isMouseDown) {

        let btn = document.createElement("div");
        btn.style.position = "absolute";
        btn.style.top = `${e.clientY}px`
        btn.style.left = `${e.clientX}px`
        btn.style.width = "16px";
        btn.style.height = "16px";
        btn.style.backgroundColor = "black"
        document.body.appendChild(btn);
    }
})

    */

window.scroll({ top: 0, behavior: 'smooth' })

function createCanvas(xsize, ysize) {
    //This prevents a bug, where spamming go button causes 2 canvases
    //to be drawn, due to the delay of the first pixel appearing (20ms in settimeout below)
    //so we add some emptydiv below, in order to 

    let amountOfPixelsX = CANVASSIZE / xsize;
    //make one row
    canvas.addEventListener("mousedown", (e) => {
        isMouseDown = true;
    });
    document.addEventListener("mouseup", (e) => {
        isMouseDown = false;
    });
    if (true) {
        for (iter1 = 0; iter1 < amountOfPixelsX; iter1++) {
            for (iter = 0; iter < amountOfPixelsX; iter++) {
                setTimeout(function () {

                    let smallPixel = document.createElement('div');
                    smallPixel.style.width = `${xsize}px`;
                    smallPixel.style.height = `${ysize}px`;
                    smallPixel.setAttribute("class", "small-pixel");
                    canvas.appendChild(smallPixel);
                    smallPixel.draggable = false;
                    smallPixel.addEventListener("mousemove", (e) => {
                        if (isMouseDown == true) {
                            smallPixel.removeAttribute("class", "small-pixel");
                            smallPixel.setAttribute("class", "small-pixel-colored");
                        }
                    })
                    smallPixel.addEventListener("mousedown", (e) => {
                        smallPixel.removeAttribute("class", "small-pixel");
                        smallPixel.setAttribute("class", "small-pixel-colored");
                    })

                }, iter * 0)
            }
        }
    }

    goButton.disabled = false
}

//New and faster approach found after research: Use canvas (obv dom is slow af)
document.addEventListener("mousedown", (e) => {
    isMouseDown = true;
})

document.addEventListener("mouseup", (e) => {
    isMouseDown = false;
})
function parseInput(string) {
    let stringArray = string.split('');
    let width = 0;
    let height = 0;
    let arrayLenX = 0;
    let arrayLenY = 0;
    let leftSideCounting = true;
    for (element of stringArray) {
        if (element == "x") {
            leftSideCounting = false;
        }
        if (leftSideCounting) {
            width += element;
        } else if (element != "x") {
            console.log(element)
            height += element;
        }
    }
    return [parseInt(width), parseInt(height)]
}
function drawElement() {
}

function destroyOldCanvas() {

}
inputBar.addEventListener("keypress", (e) => {
    console.log("Key pressed: " + parseInt(e.key));
    console.log(e.key == "x");
    if (e.key != "x" && isNaN(e.key)) {
        e.preventDefault();
    } else {
        textInBar = e.value;
    }
});
leftButton.addEventListener("click", (e) => {
    inputBar.value = "16x16";
    //Failsafe, if the pixel doesnt fit fully into the div? 512 / 3?
});
middleButton.addEventListener("click", (e) => {
    inputBar.value = "32x32";
    //Failsafe, if the pixel doesnt fit fully into the div? 512 / 3?
});
rightButton.addEventListener("click", (e) => {
    inputBar.value = "64x64";
    //Failsafe, if the pixel doesnt fit fully into the div? 512 / 3?
});
goButton.addEventListener("click", (e) => {

    let childrenAmount = canvas.children.length;
    canvas.innerHTML = '';

    window.scroll({ top: 250, behavior: 'smooth' })
    let dimensions = parseInput(inputBar.value);
    if (canvas.children.length == 0) {
        goButton.disabled = true
        createCanvas(512 / dimensions[0], 512 / dimensions[0]);

    }
    resetCanvas.style.opacity = "1";

});
resetCanvas.addEventListener("click", (e) => {
    pixelCollection = canvas.children;
    for (element of pixelCollection) {
        element.removeAttribute("class", "small-pixel-colored");
        element.setAttribute("class", "small-pixel");
    }
})
