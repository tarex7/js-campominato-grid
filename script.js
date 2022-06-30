let rows = 10;
let cells = 10;
let totalCells = rows * cells;
let gameHasStarted = false;

//Elementi UI
const grid = document.getElementById("grid");
const startBtn = document.getElementById("startBtn");
const select = document.getElementById("level");

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
//Event button
startBtn.addEventListener("click", () => {
  if (level.value == 2) {
    document.documentElement.style.setProperty("--rows", `9`);
    document.documentElement.style.setProperty("--cells", `9`);
    totalCells = 81;
  } else if (level.value == 3) {
    document.documentElement.style.setProperty("--rows", `7`);
    document.documentElement.style.setProperty("--cells", `7`);
    totalCells = 49;
  }

  if (!gameHasStarted) {
    for (let i = 1; i <= totalCells; i++) {
      createCell(i);
    }
    gameHasStarted = true;
  } else if (gameHasStarted) {
    alert("Hai già cliccato, fai refresh pagina per rigiocare :P");
  }
});
