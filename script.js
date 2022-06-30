let rows = 10;
let cells = 10;
let totalCells = rows * cells;
const grid = document.getElementById("grid");
const startBtn = document.getElementById("startBtn");

//FUNZIONI
//Crea cella
const createCell = (content) => {
  //Crea elemento
  const cell = document.createElement("div");
  //Aggiunge classe
  cell.className = "cell";
  //Inserisce numero cella
  cell.innerText = content;
  
  grid.appendChild(cell);
};

//Crea "totalCells" celle
startBtn.addEventListener("click", () => {
  for (let i = 1; i <= totalCells; i++) {
    createCell(i);
  }
});
