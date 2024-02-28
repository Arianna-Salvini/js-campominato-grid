console.log('Campominato');

const totalCells = 100;


/**
 * Create a grid dinamically in DOM
 * @param {Number} 
 */
function creatGameGrid (totalCells){
    // Creo le celle
const gameGrid = document.querySelector('.game_container');
// console.log(gameGrid);
const markUpCell = '<div class="cell"></div>'

for (let i = 1; i <= totalCells; i++) {
    const cell = markUpCell
    console.log(cell);
    gameGrid.insertAdjacentHTML("afterbegin", cell)
}
}

creatGameGrid(totalCells)

const cellNumber = []

for (let i = 1; i < 101; i++) {
    cellNumber.push(i)
}

// console.log(cellNumber);