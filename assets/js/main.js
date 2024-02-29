console.log('Start the game');

const totalCells = 100;

const gameGrid = document.querySelector('.game_container');
gameGrid.classList.add('hidden');

const btnStart = document.getElementById("start_game");
// add const for maximum number of asteroid and an array for the number cell where asteroids is
const asteroidList = []
const maxAsteroidNumb = 16

// bottone start
btnStart.addEventListener('click', function () {
    gameGrid.classList.add('hidden');
    gameGrid.innerHTML = ''
    createGameGrid(totalCells)
    genrateRandomASteroid()
    console.log(genrateRandomASteroid()); 
});

// Creo la griglia di gioco
/**
 * Create a grid dinamically with sequential number in it in DOM
 * @param {Number} 
 */
function createGameGrid(totalCells) {
    // Creo le celle
    // console.log(gameGrid);
    let cell
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

        // confonto i numeri delle celle coi numeri degli asteroidi

            if (asteroidList.includes(i)) {
                cell.classList.add('asteroid')
                cell.textContent = '☄️'
            }
        });


       

    }
    return gameGrid
}


function genrateRandomASteroid (){
     // Genero 16 numeri randomici per gli asteroi e li push nel suo array
     while (asteroidList.length < maxAsteroidNumb) {
        const asteroids = Math.floor(Math.random() * totalCells) + 1;
        if (!asteroidList.includes(asteroids)) {
            asteroidList.push(asteroids);
        }
    }
    return asteroidList;
}


