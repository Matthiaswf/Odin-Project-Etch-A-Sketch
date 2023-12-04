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
        
        const gridBoxList = document.querySelectorAll('.gridBox');
        for (let i = 0 ; i < gridBoxList.length; i++) {
            gridBoxList[i].addEventListener('mouseover', () => {
                gridBoxList[i].classList.add('black');
            });
        }
      
}

const playButton = document.querySelector('.button');
playButton.addEventListener('click', () => {
    let userInput = prompt('Choose a Number from 1-100');
    
    if (userInput > 100 || userInput < 1 ) {
        alert("Invalid Number chosen");
    }

    else {
        const myNode = document.querySelector('.canvas');
        while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
        }

        makeGrid(userInput);
        playButton.textContent = 'Play Again!';
    }
});