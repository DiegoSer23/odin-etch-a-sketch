const gridContainer = document.getElementById("container");

for (let i = 0; i < 16; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.className = "grid";
    gridSquare.style.backgroundColor = "lightblue";
    gridSquare.style.padding = "5px";
    gridContainer.appendChild(gridSquare);
}