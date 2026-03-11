const gridContainer = document.getElementById("container");
const buttonGrid = document.getElementById("grid-size");

buttonGrid.addEventListener("click", handleGridSize);

createGrid(4);

function handleMouseEnter(event) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function handleGridSize(event) {
    let input = prompt("Input grid size:", 4);
    let gridSize = Number(input);
    if (Number.isInteger(gridSize) && gridSize < 100 && gridSize > 0) {
        gridContainer.replaceChildren();
        createGrid(gridSize);
    }
    else {
        alert("Invalid number, choose a number between 1-100");
    }
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let rowContainer = document.createElement("div");
        rowContainer.className = "row";
        gridContainer.appendChild(rowContainer);
        for (let j = 0; j < gridSize; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.className = "grid";
            gridSquare.style.backgroundColor = "lightblue";
            gridSquare.style.padding = "5px";
            gridSquare.style.width = `calc(960px / ${gridSize})`;
            gridSquare.style.height = `calc(960px / ${gridSize})`;
            gridSquare.addEventListener("mouseenter", handleMouseEnter);
            rowContainer.appendChild(gridSquare);
        }
    }
}