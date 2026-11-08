function isValidColor(colorString) {
    const image = new Option();
    image.style.color = colorString;

    return image.style.color !== '';
}

function toggleMouse(event) {

    if (event.target.dataset.status == "False") {
        superContainer.style.cursor = "none";
    }

    else {
        superContainer.style.cursor = "auto";
    }
}

function modulatePixels(event) {
    event.target.dataset.nSquare = parseInt(prompt("How many pixels do you want for the sketchpad? (Max: 100)"))
    // console.log(event.target.dataset.nSquare);
    if (isNaN(event.target.dataset.nSquare) || event.target.dataset.nSquare > 100) {
        alert("Invalid!");
        event.target.dataset.nSquare = 16;
    }
    superContainer.innerHTML = "";
    createGrid();
}

function changeColor(event) {
    let newColor = prompt("What color do you want for the brush?");
    if (isValidColor(newColor)) {
        event.target.dataset.currentColor = newColor;
    }
    else {
        alert("Invalid!");
    }
}

function toggle(event) {
    if (event.target.dataset.status == "True") {
        event.target.dataset.status = "False";
    }

    else {
        event.target.dataset.status = "True";
    }

    // createGrid();
}

function increaseColor(vContainer, isTouched) {
    if (isTouched == false) {
        vContainer.style.opacity = 0.1;
        isTouched = true;
    }

    else {
        if (parseFloat(vContainer.style.opacity) == 1.0) {}
        else {vContainer.style.opacity = parseFloat(vContainer.style.opacity) + 0.1;}
    }

    // console.log(vContainer.style.opacity);

    return isTouched;
}

function brush(event, isTouched) {
    if (event.target.dataset.isColorful == "True") {
    event.target.style.backgroundColor = getRandomRGB();
    }

    else {
        event.target.style.backgroundColor = colorSelect.dataset.currentColor;
    }
    
    // console.log(event.target.dataset.isColorful);

    if (colorStepper.dataset.status == "True") {
        isTouched = increaseColor(event.target, isTouched);
    }

    return isTouched;
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
    for (let i = 0; i < pixelsModulator.dataset.nSquare; i++) {
        let hContainer = document.createElement("div");
        hContainer.classList.add("row-container");
        superContainer.append(hContainer);

        for (let j = 0; j < pixelsModulator.dataset.nSquare; j++) {
            let isTouched = false;
            let vContainer = document.createElement("div");
            vContainer.classList.add("square");

            vContainer.addEventListener("mouseenter", (event) => {
                vContainer.dataset.isColorful = colorfulToggler.dataset.status;
                isTouched = brush(event, isTouched);
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
mouseToggler.addEventListener("click", (event) => {
    toggle(event);
    toggleMouse(event);
});
menuContainer.appendChild(mouseToggler);

const pixelsModulator = document.createElement("button");
pixelsModulator.textContent = "Change Pixels Quantity";
pixelsModulator.dataset.nSquare = 16;
pixelsModulator.addEventListener("click", modulatePixels);
menuContainer.appendChild(pixelsModulator);

const colorStepper = document.createElement("button");
colorStepper.textContent = "Toggle Increasing Color Feature";
colorStepper.dataset.status = "False";
colorStepper.addEventListener("click", toggle);
menuContainer.appendChild(colorStepper);

const colorfulToggler = document.createElement("button");
colorfulToggler.textContent = "Toggle Colorful Brush";
colorfulToggler.dataset.status = "False";
colorfulToggler.addEventListener("click", toggle);
menuContainer.appendChild(colorfulToggler);

const colorSelect = document.createElement("button");
colorSelect.textContent = "Change Color";
colorSelect.dataset.currentColor = "yellow";
colorSelect.addEventListener("click", changeColor);
menuContainer.appendChild(colorSelect);

createGrid();