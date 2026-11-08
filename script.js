const superContainer = document.querySelector("#super-container");

const hContainer1 = document.createElement("div");
hContainer1.classList.add("bordered-container-red");
hContainer1.textContent = "Hi";
superContainer.append(hContainer1); 

const vContainer1 = document.createElement("div");
vContainer1.classList.add("bordered-container-blue");
vContainer1.textContent = "Hello";
hContainer1.append(vContainer1);