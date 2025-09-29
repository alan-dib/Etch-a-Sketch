const gridContainer = document.getElementById('etch-grid');
const elements = [];
// generate 60 divs
for (let i = 0; i < 60; i++){
    const grid = document.createElement('div')
    grid.classList.add('gridDefault');
    gridContainer.appendChild(grid)
}; 

