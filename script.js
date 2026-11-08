function toggleMouse(event) {

    if (event.target.className == "True") {
        event.target.className = "False";
    }

    else {
        event.target.className = "True";
    }

    if (mouseToggler.className == "True") {
    superContainer.style.cursor = "none";
}

    else {
        superContainer.style.cursor = "auto";
    }
}

let nSquare = parseInt(prompt("How many pixels do you want for the sketchpad? (Max: 100)"))
console.log(nSquare);
if (isNaN(nSquare) || nSquare > 100) {
    alert("Invalid!")
    nSquare = 16;
}

const menuContainer = document.querySelector("#menu-container");
const superContainer = document.querySelector("#super-container");

const mouseToggler = document.createElement("button");
mouseToggler.textContent = "Toggle Mouse Cursor";
mouseToggler.className = "False";
mouseToggler.addEventListener("click", toggleMouse);
menuContainer.appendChild(mouseToggler);


for (let i = 0; i < nSquare; i++) {
    let hContainer = document.createElement("div");
    hContainer.classList.add("row-container");
    superContainer.append(hContainer);

    for (let j = 0; j < nSquare; j++) {
        let vContainer = document.createElement("div");
        vContainer.classList.add("square");

        vContainer.addEventListener("mouseenter", () => {
            vContainer.classList.add("hovered-upon");
        });

        hContainer.append(vContainer);
    }
}