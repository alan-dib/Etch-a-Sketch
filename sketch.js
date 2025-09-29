const gridContainer = document.getElementById('etch-grid');
let isDrawing = false;
const elements = [];
// generate 60 divs
for (let i = 0; i < 60; i++){
    const grid = document.createElement('div')
    grid.classList.add('gridDefault');
    gridContainer.appendChild(grid)
}; 

const cells = document.querySelectorAll('.gridDefault');
cells.forEach(cell => {
    cell.dataset.hoverCount = 0;
    cell.addEventListener('mouseenter', () => {
        if (isDrawing){
            let count = parseInt(cell.dataset.hoverCount) || 0;
            if(count < 10){
                count += 1;
                cell.dataset.hoverCount = count;
                const opacity = count * 0.1;
                cell.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            }
        }
    })
})

gridContainer.addEventListener('mousedown', () =>{
    isDrawing = true;
})
gridContainer.addEventListener('mouseup', () =>{
    isDrawing = false;
})
gridContainer.addEventListener('mouseleave', () =>{
    isDrawing = false;
})



const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        cells.forEach(cell => {
            cell.style.backgroundColor = 'lightgrey'
        })
    })   
})
