console.log('Campominato');
// Creo le celle
const gameGrid = document.querySelector('.game_container');
// console.log(gameGrid);
const markUpCell = '<div class="cell"></div>'
const totalCells = 100;

for (let i = 1; i <= totalCells; i++) {
    const cell = markUpCell
    console.log(cell);
    gameGrid.insertAdjacentHTML("afterbegin", cell)
}