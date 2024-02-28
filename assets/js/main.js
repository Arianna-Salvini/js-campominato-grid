console.log('Campominato');

const totalCells = 100;
// Creo la griglia di gioco
/**
 * Create a grid dinamically with sequential number in it in DOM
 * @param {Number} 
 */
function creatGameGrid(totalCells) {
    // Creo le celle
    const gameGrid = document.querySelector('.game_container');
    // console.log(gameGrid);
    
    for (let i = 1; i <= totalCells; i++) {
        let cellNumber = i
        const markUpCell = `<div class="cell">${cellNumber}</div>`
        const cell = markUpCell
        console.log(cell);
        gameGrid.insertAdjacentHTML("beforeend", cell)

    }
}
creatGameGrid(totalCells)
