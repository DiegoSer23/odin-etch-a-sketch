const gridContainer = document.getElementById("container");
const buttonGrid = document.getElementById("grid-size");

buttonGrid.addEventListener("click", handleGridSize);

for (let i = 0; i < 16; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.className = "grid";
    gridSquare.style.backgroundColor = "lightblue";
    gridSquare.style.padding = "5px";
    gridSquare.addEventListener("mouseenter", handleMouseEnter);
    gridContainer.appendChild(gridSquare);
}

function handleMouseEnter(event) {
    this.style.backgroundColor = "lightcoral";
}

function handleGridSize(event) {
    let gridSize = prompt("Input grid size:", 16);
    
}