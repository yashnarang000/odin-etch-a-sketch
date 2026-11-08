function toggleMouse(event) {

    if (event.target.dataset.status == "True") {

        superContainer.style.cursor = "none";
        event.target.dataset.status = "False";

    }

    else {

        superContainer.style.cursor = "auto";
        event.target.dataset.status = "True";

    }
}

function modulatePixels(event) {
    event.target.dataset.nSquare = parseInt(prompt("How many pixels do you want for the sketchpad? (Max: 100)"))
    console.log(event.target.dataset.nSquare);
    if (isNaN(event.target.dataset.nSquare) || event.target.dataset.nSquare > 100) {
        alert("Invalid!");
        event.target.dataset.nSquare = 16;
    }
    createGrid();
}

function toggleColorIncrease(event) {
    if (event.target.dataset.status == "True") {
        event.target.dataset.status = "False";
    }

    else {
        event.target.dataset.status = "True";
    }

    createGrid();
}

function increaseColor(vContainer, isFirstTime) {
    if (isFirstTime) {
        vContainer.style.opacity = 0.1;
        isFirstTime = false;
    }

    else {
        if (parseFloat(vContainer.style.opacity) == 1.0) {}
        else {vContainer.style.opacity = parseFloat(vContainer.style.opacity) + 0.1;}
    }

    console.log(vContainer.style.opacity);

    return isFirstTime;
}

function getRandomRGB() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    let rgbValue = `rgb(${r}, ${g}, ${b})`; 
    // console.log(rgbValue);
    return rgbValue;
}

function createGrid() {
    superContainer.innerHTML = "";
    for (let i = 0; i < pixelsModulator.dataset.nSquare; i++) {
        let hContainer = document.createElement("div");
        hContainer.classList.add("row-container");
        superContainer.append(hContainer);

        for (let j = 0; j < pixelsModulator.dataset.nSquare; j++) {
            let isFirstTime = true;
            let vContainer = document.createElement("div");
            vContainer.classList.add("square");

            vContainer.addEventListener("mouseenter", () => {
                vContainer.style.backgroundColor = getRandomRGB();
                
                if (colorStepper.dataset.status == "True") {
                    isFirstTime = increaseColor(vContainer, isFirstTime);
                }

            });

            hContainer.append(vContainer);
        }
    }
}

const menuContainer = document.querySelector("#menu-container");
const superContainer = document.querySelector("#super-container");

const mouseToggler = document.createElement("button");
mouseToggler.textContent = "Toggle Mouse Cursor";
mouseToggler.dataset.status = "True";
mouseToggler.addEventListener("click", toggleMouse);
menuContainer.appendChild(mouseToggler);

const pixelsModulator = document.createElement("button");
pixelsModulator.textContent = "Change Pixels Quantity";
pixelsModulator.dataset.nSquare = 16;
pixelsModulator.addEventListener("click", modulatePixels);
menuContainer.appendChild(pixelsModulator);

const colorStepper = document.createElement("button");
colorStepper.textContent = "Toggle Increasing Color Feature";
colorStepper.dataset.status = "False";
colorStepper.addEventListener("click", toggleColorIncrease);
menuContainer.appendChild(colorStepper);

createGrid();