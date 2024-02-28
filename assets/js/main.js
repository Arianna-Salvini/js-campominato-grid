console.log('Campominato');

const totalCells = 100;


/**
 * Create a grid dinamically in DOM
 * @param {Number} 
 */
function creatGameGrid(totalCells) {
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

// Creo una sequenza di numeri da 1 a 100


const totalCellNumber = 100


function cellNumberSEquence(totalCellNumber) {
    const cellNumber = []
    for (let i = 1; i < totalCellNumber + 1; i++) {
        cellNumber.push(i)
    }
    return cellNumber
}
console.log(cellNumberSEquence(totalCellNumber));