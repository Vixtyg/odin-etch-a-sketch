//if doesnt work use deref, or move script block to bottom

const canvas = document.querySelector("#canvas");
document.draggable = false;
canvas.setAttribute("draggable", false)
const inputBar = document.querySelector("input");
const leftButton = document.querySelector("#left-row-button");
const middleButton = document.querySelector("#middle-row-button");
const rightButton = document.querySelector("#right-row-button");

let isMouseDown = false;
document.addEventListener("dragstart", (e) => {
    e.preventDefault()
})
const goButton = document.querySelector("#go-button");
const CANVASSIZE = 512;

let textInBar = "";
/*  Freehand
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
document.addEventListener("mousedown", (e) => {
    isMouseDown = true;
})

document.addEventListener("mouseup", (e) => {
    isMouseDown = false;
})
    */
function createCanvas(xsize, ysize) {
    let amountOfPixelsX = CANVASSIZE / xsize;
    //make one row
    canvas.addEventListener("mousedown", (e) => {
        isMouseDown = true;
    });
    document.addEventListener("mouseup", (e) => {
        isMouseDown = false;
    });
    for (iter1 = 0; iter1 < amountOfPixelsX; iter1++) {
        for (iter = 0; iter < amountOfPixelsX; iter++) {
            setTimeout(function () {

                let smallPixel = document.createElement('div');
                smallPixel.style.width = `${xsize}px`;
                smallPixel.style.height = `${ysize}px`;
                smallPixel.setAttribute("class", "small-pixel");
                canvas.appendChild(smallPixel);
                console.log(canvas);
                smallPixel.draggable = false;
                smallPixel.addEventListener("mousemove", (e) => {

                    if (isMouseDown == true) {
                        smallPixel.style.backgroundColor = "black";
                    }
                })
                smallPixel.addEventListener("mousedown", (e) => {
                    smallPixel.style.backgroundColor = "black";
                })

            }, iter * 20)
        }
    }
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
    let widthOfPixel = CANVASSIZE / 16;
    let heightOfPixel = CANVASSIZE / 16;
    createCanvas(16, 16);
    //Failsafe, if the pixel doesnt fit fully into the div? 512 / 3?
});
goButton.addEventListener("click", (e) => {
    window.scroll({ top: 200, behavior: 'smooth' })
});

