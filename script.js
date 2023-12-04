const container = document.querySelector('.container');
let canvas = document.createElement('div');
canvas.classList.add('canvas');
container.appendChild(canvas);

function makeGrid (size) {
    let screen = document.querySelector('.canvas');
    for (let i = 0; i < size; i++) {
        let gridColumn = document.createElement('div');
        gridColumn.classList.add( 'gridColumn');
        for (let x = 1; x <= size; x++) {
            let gridRow = document.createElement('div');
            gridRow.classList.add('gridRow');
            gridRow.style.border = '0.1px solid black';
            gridRow.innerText = (i * size) + x;
            gridColumn.appendChild(gridRow);
        }
        screen.appendChild(gridColumn);
    }    
}

makeGrid(16);