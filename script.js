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
            let gridBox = document.createElement('div');
            gridBox.classList.add('gridBox');
            gridColumn.appendChild(gridBox);
        }
        screen.appendChild(gridColumn);
    }    
}

makeGrid(16);