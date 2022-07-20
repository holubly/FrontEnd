const X_CLASS = 'x';
const O_CLASS = 'o';
const WINNING = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cellEl = document.querySelectorAll('.cell');
const board = document.getElementById('board');
const winMessage = document.getElementById('winning-message');
const restartBtn = document.getElementById('restart-button');
const winText = document.querySelector('[data-text]');
let circleTurn;

startGame();

restartBtn.addEventListener('click', startGame);

function startGame() {
    circleTurn = false;
    cellEl.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(O_CLASS);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true })
    });
    setBoardHoverClass();
    winMessage.classList.remove('show');
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? O_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass))
    {
        endGame(false);
    } else if (isDraw())
    {
        endGame(true);
    } else
    {
        swapTurn();
        setBoardHoverClass();
    }
}

function endGame(draw) {
    if (draw)
    {
        winText.innerText = 'Draw!';
    } else
    {
        winText.innerText = `${circleTurn ? "O is" : "X is"} wins!`;
    }
    winMessage.classList.add('show');
}

function isDraw() {
    return [...cellEl].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
    });
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurn() {
    circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(O_CLASS);
    if (circleTurn)
    {
        board.classList.add(O_CLASS);
    } else
    {
        board.classList.add(X_CLASS);
    }
}

function checkWin(currentClass) {
    return WINNING.some(comb => {
        return comb.every(index => {
            return cellEl[index].classList.contains(currentClass);
        });
    });
}