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

function removeGrid() {
    const grid = document.querySelector(".container");
    grid.replaceChildren();
}

const MIN_GRID_SIZE = 1;
const MAX_GRID_SIZE = 100;
const DEFAULT_GRID_SIZE = 16;

createGrid(DEFAULT_GRID_SIZE);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let newGridSize = Number(prompt(`Select new grid size (from ${MIN_GRID_SIZE} to ${MAX_GRID_SIZE}):`));

    if (!(Number.isInteger(newGridSize) && newGridSize >= MIN_GRID_SIZE && newGridSize <= MAX_GRID_SIZE)) {
        alert("Invalid grid size, reverting to default.");
        newGridSize = DEFAULT_GRID_SIZE;
    }

    removeGrid();
    createGrid(newGridSize);
});