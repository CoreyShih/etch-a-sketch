function createGrid(size) {
    const grid = document.querySelector(".container");

    for (let i = 0; i < size; i++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");

        for (let j = 0; j < size; j++) {
            const newCell = document.createElement("div");
            newCell.classList.add("cell");
            newRow.appendChild(newCell);
        }

        grid.appendChild(newRow);
    }

    grid.addEventListener("mouseover", (event) => {
        if (event.target !== grid) {
            event.target.style.backgroundColor = "black";
        }
    });
}

const DEFAULT_GRID_SIZE = 16;

createGrid(DEFAULT_GRID_SIZE);