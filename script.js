const superContainer = document.querySelector("#super-container");

// const hContainer1 = document.createElement("div");
// hContainer1.classList.add("bordered-container-red");
// hContainer1.textContent = "Hi";
// superContainer.append(hContainer1); 

for (let i = 0; i < 16; i++) {
    let hContainer = document.createElement("div");
    hContainer.classList.add("bordered-container-red");
    hContainer.textContent = `Horizontal Container No. ${i+1}`;
    superContainer.append(hContainer);

    for (let j = 0; j <16; j++) {
        let vContainer = document.createElement("div");
        vContainer.classList.add("bordered-container-blue");
        vContainer.textContent = `Vertical Container No. ${j+1}`;
        hContainer.append(vContainer);
    }
}


// const vContainer1 = document.createElement("div");
// vContainer1.classList.add("bordered-container-blue");
// vContainer1.textContent = "Hello";
// hContainer1.append(vContainer1);