let rows = 10;
let cells = 10;
let totalCells = rows * cells;

//Elementi UI
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
  //Aggiunge event listener
  cell.addEventListener("click", (e) => {
    //Aggiunge classe "clicked"
    e.target.classList.toggle("clicked");
    //Log numero cella
    console.log(`Hai cliccato sulla cella numero ${e.target.innerText}`);
  });

  grid.appendChild(cell);
};

//Crea "totalCells" celle
startBtn.addEventListener("click", () => {
  for (let i = 1; i <= totalCells; i++) {
    createCell(i);
  }
});
