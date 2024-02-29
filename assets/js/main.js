console.log('Start the game');
/// Usefull Variables///

const totalCells = 100;

const gameGrid = document.querySelector('.game_container');
gameGrid.classList.add('hidden');

const btnStart = document.getElementById("start_game");
// add const for maximum number of asteroid and an array for the number cell where asteroids is
const asteroidList = [];
const maxAsteroidNumb = 16;

// add a constant for maximum cells clickable excluding astroid cells --- condition for win
const maxFreeCell = totalCells - maxAsteroidNumb;
const cellClicked = [];


// add const for end game pages
const endgameWinner = document.getElementById('winner_page')
const endgameLoser = document.getElementById('loser_page')


//add const for refresh button
const btnRestart = document.querySelector('.btn_restart')


// Button start the game
btnStart.addEventListener('click', function () {
    gameGrid.classList.add('hidden');
    gameGrid.innerHTML = '';
    createGameGrid(totalCells);
    genrateRandomASteroid();
    console.log(genrateRandomASteroid());
});


btnRestart.addEventListener('click', function(){
    location.reload();
});


// Creo la griglia di gioco
/**
 * Create a grid dinamically with sequential number in it in DOM
 * @param {Number} 
 */
function createGameGrid(totalCells) {
    // Creo le celle
    // console.log(gameGrid);
    let cell;
    for (let i = 1; i <= totalCells; i++) {
        let cellNumber = i;
        // const markUpCell = `<div class="cell"> ${cellNumber}</div>`;
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = cellNumber;
        gameGrid.appendChild(cell);

        cell.addEventListener('click', function () {
            cell.classList.add('clicked');
            // console.log(cellNumber);
            // add clicked cell into array
            if (!cellClicked.includes(i)) {
                cellClicked.push(i);
            }
            console.log(cellClicked);
            // confonto i numeri delle celle coi numeri degli asteroidi
            // add win condition
            if (cellClicked.length === maxFreeCell) {
                isWin(true)
            }

            if (asteroidList.includes(i)) {
                cell.classList.add('asteroid');
                cell.textContent = '☄️';
                isWin(false);
            }

        });
    }
    return gameGrid
}

function genrateRandomASteroid() {
    // Genero 16 numeri randomici per gli asteroi e li push nel suo array
    while (asteroidList.length < maxAsteroidNumb) {
        const asteroids = Math.floor(Math.random() * totalCells) + 1;
        if (!asteroidList.includes(asteroids)) {
            asteroidList.push(asteroids);
        }
    }
    return asteroidList;
}

// condition to win or loose the game and stop it

function isWin(winner) {
    if (winner === true) {
       console.log('You win');
       return endgameWinner.classList.remove('hidden')
    } else {
        console.log('You lose');
        return endgameLoser.classList.remove('hidden')
    }
}
