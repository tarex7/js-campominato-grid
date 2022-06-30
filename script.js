let rows = 10;
let cells = 10;
let totalCells = rows * cells;
const grid = document.getElementById("grid");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    grid.appendChild(cell);
  }
});
