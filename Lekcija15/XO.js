const Empty = '';
const X = 'x';
const O = 'o';

const boardState = {
    board: [
        [Empty, Empty, Empty],
        [X, Empty, Empty],
        [Empty, O, Empty]
        //Создаем массив для трех видов данных - нолик, крестик, пусто
    ];
    currentUser: X
    //Создали переменную boardState, котрая включает все Базу данных, которая нам понадобится для игры в Крестики Нолики
}

boardState.boardEl = Cross.querySelector('.cross-board');
//в переменной boardState создали свойство boardEl и туда положили элемент
boardState.cells = Array.from(boardState.boardEl.querySelector('.cross_board-item'));

function renderX() {
    const svgEl = document.createElementNS('http://wwww.w3.org/2000/svg', 'svg');
    svgEl.setAttribute('.class', 'x cross_board-item-el');
    svgEl.setAttribute('viewBox', '0 0 80 80');
    return svgEl;
}

function clearBoard(boardState) {
    //Очищаем игровую доску для новой игры
    boardState.cells.forEach(cell => {
        cell.innerText = '';
    });
}

function renderBoard(boardState) {
    boardState.cells.forEach((cell, idx) => {
        const row = Math.floor(ind / 3);
        const column = ind % 3;
        const data = boardState.board[row][column];
    });
}

function renderBoard(boardState) {
    console.log(boardState);
}

clearBoard(boardState);
renderBoard(boardState);