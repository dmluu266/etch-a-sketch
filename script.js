// etch-a-sketch script

let color = 'black';

// slider
let slider = document.getElementById("myRange");
let output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

// create base grid
const container = document.querySelector('#container');
createGrid(slider.value);


// create new grid
const newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', () => {
    // check if container has a first child; remove last child until container doesn't have first child
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    //let s = prompt("Enter size");
    createGrid(slider.value);
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

// random color
const randomColor = document.querySelector('#randomRGB');
randomColor.addEventListener('click', () => {
    if (color == 'black') {
        color = 'red';
        randomColor.textContent = 'Black'
    }
    else {
        color = 'black';
        randomColor.textContent = 'Rainbow'
    }
})



// create grid function
function createGrid(size) {
    // grid template
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i=0; i<size*size; i++) {
        const squares = document.createElement('div');
        squares.classList.add('square');
        container.insertAdjacentElement("beforeend", squares);
    }



    // hover over
    const test = document.getElementsByClassName("square");

    for (let i=0; i<test.length; i++) {
        test[i].addEventListener(
        "mouseover",
        (event) => {
            if (color == 'black') {
                event.target.style.backgroundColor = color;
            }
            else {
                // random color
                event.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
            }
            
        },
        false
        );
    }
}

