const gridContainer = document.getElementById('etch-grid');
let isDrawing = false;

function createGridSize(size){
    if (!Number.isInteger(size) || size < 1 || size > 100){
        alert(size > 100 ? 'Type a number between 1 and 100' : 'Error, type a valid integer number')
        return;
    }
    gridContainer.innerHTML = '';

    const totalCells = size * size;
    const cellSize = `calc(100% / ${size})`;

    for(let i = 0; i < totalCells; i++){
        const grid = document.createElement('div')
        grid.classList.add('gridDefault');
        grid.style.flex = `0 0 ${cellSize}`;
        grid.style.height = cellSize;

        grid.dataset.hoverCount = 0;
        
        grid.addEventListener('mouseenter', () =>{
            if(isDrawing){
                if(currentMode === 'normal'){
                    let count = parseInt(grid.dataset.hoverCount) || 0;
                    if(count < 10){
                        count += 1;
                        grid.dataset.hoverCount = count;
                        const opacity = count * 0.1;
                        grid.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`; 
                    }
                }else if(currentMode === 'rgb'){
                    const r = Math.floor(Math.random() * 256);
                    const g = Math.floor(Math.random() * 256);
                    const b = Math.floor(Math.random() * 256);
                    grid.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

                }
            }
        });
        gridContainer.appendChild(grid);
    }
}
    
gridContainer.addEventListener('mousedown', () =>{isDrawing = true; });
gridContainer.addEventListener('mouseup', () =>{isDrawing = false; });
gridContainer.addEventListener('mouseleave', () =>{isDrawing = false; });

const buttons = document.querySelectorAll('button');
const clearButton = buttons[0];
const setButton = buttons[1];
const userInput = document.getElementById('userGrid');

clearButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.gridDefault');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'lightgrey';
        cell.dataset.hoverCount = 0;
    });
});

setButton.addEventListener('click', () => {
    const value = userInput.value.trim();
    const userGrid = Number(value);
    if(!Number.isNaN(userGrid)){
        createGridSize(userGrid);
    }else{
        alert('Invalid number! Please enter a valid number')
    }
});

let currentMode = 'normal';
const modeSelect = document.getElementById('modes')

modes.addEventListener('change', (e) => {
    currentMode = e.target.value;
})
createGridSize(16);
