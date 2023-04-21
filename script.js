// etch-a-sketch script


// create base grid
const container = document.querySelector('#container');
createGrid(16);


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

// create new grid
const newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', () => {
    // check if container has a first child; remove last child until container doesn't have first child
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    let s = prompt("Enter size");
    createGrid(s);
})

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
function createGrid(size) {
    for (let i=0; i<size*size; i++) {
        const squares = document.createElement('div');
        squares.classList.add('square');
        container.appendChild(squares);
    }
}