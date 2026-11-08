function toggleMouse(event) {
    // let isToggled = event.target.className;

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

const menuContainer = document.querySelector("#menu-container");
const superContainer = document.querySelector("#super-container");

const mouseToggler = document.createElement("button");
mouseToggler.textContent = "Toggle Mouse Cursor";
mouseToggler.className = "False";
mouseToggler.addEventListener("click", toggleMouse);
menuContainer.appendChild(mouseToggler);


for (let i = 0; i < 16; i++) {
    let hContainer = document.createElement("div");
    hContainer.classList.add("bordered-container-red");
    superContainer.append(hContainer);

    for (let j = 0; j < 16; j++) {
        let vContainer = document.createElement("div");
        vContainer.classList.add("bordered-container-blue");
        vContainer.textContent = `(${j+1}, ${i+1})`;

        vContainer.addEventListener("mouseenter", () => {
            vContainer.classList.add("hovered-upon");
        });

        hContainer.append(vContainer);
    }
}

