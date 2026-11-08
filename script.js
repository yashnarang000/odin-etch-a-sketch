const superContainer = document.querySelector("#super-container");

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