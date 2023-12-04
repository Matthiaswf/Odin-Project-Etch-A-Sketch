const container = document.querySelector('.container');
let canvas = document.createElement('div');
canvas.classList.add('canvas');
container.appendChild(canvas);

function makeGrid ( ) {
    let screen = document.querySelector('.canvas');
    let gridBox = document.createElement('div');
    gridBox.classList.add('gridBox');
    canvas.appendChild(gridBox);
}

makeGrid();