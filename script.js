// etch-a-sketch script


// create base grid
let size = 16;
const container = document.querySelector('#container');
createGrid();




// hover over
const test = document.getElementsByClassName("square")

for (let i=0; i<test.length; i++) {
    test[i].addEventListener(
    "mouseover",
    (event) => {
        event.target.style.backgroundColor = "purple";
    },
    false
    );
}

// clear grid
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    let child = container.children;
    for (let i=0; i < child.length; i++) {
        let contChild = child[i];
        contChild.style.backgroundColor = "";
    }
})

// create grid function
function createGrid() {
    for (let i=0; i<size*size; i++) {
        const squares = document.createElement('div');
        squares.classList.add('square');
        container.appendChild(squares);
    }
}