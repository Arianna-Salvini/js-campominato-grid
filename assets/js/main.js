console.log('Campominato');

const totalCells = 100;

const gameGrid = document.querySelector('.game_container');
gameGrid.classList.add('hidden');

const btnStart = document.getElementById("start_game");
// bottone start
btnStart.addEventListener('click', function () {
    gameGrid.classList.add('hidden');
    gameGrid.innerHTML = ''
    createGameGrid(totalCells)


    // Creo la griglia di gioco
    /**
     * Create a grid dinamically with sequential number in it in DOM
     * @param {Number} 
     */
    function createGameGrid(totalCells) {
        // Creo le celle
        // console.log(gameGrid);
        for (let i = 1; i <= totalCells; i++) {
            let cellNumber = i
            // const markUpCell = `<div class="cell"> ${cellNumber}</div>`;
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = cellNumber
            gameGrid.appendChild(cell)

            cell.addEventListener('click', function () {
                cell.classList.add('clicked');
                console.log(cellNumber);
            });
        }
        return 
    }
});
