//Declares constant for grid size in order to distribute the squares accordingly
const gridSide = 800;
//These will be necessary to divide the gridSide variable to distribute the squares
let rows = 16;
let cols = 16;

//sets the height and width of the gridArea
const gridArea = document.querySelector("#container");
gridArea.style.width = `${gridSide}px`;
gridArea.style.height = `${gridSide}px`;

/*Creates the square divs by iterating through the loop based on the number 
of rows times the columns and sets the square div height and width accordingly.*/
function sixteenBySixteen() {
    for (let i = 0; i < (rows * cols); i++) {
        let cells = document.createElement("div");
        cells.style.width = `${gridSide / cols}px`;
        cells.style.height = `${gridSide / rows}px`;
        cells.classList.add("squares");
        cells.textContent = '';
        gridArea.appendChild(cells);
        
        cells.addEventListener("mouseenter", () => {
            cells.style.backgroundColor = 'black';
        })
    }
    initBtn.removeEventListener("click", sixteenBySixteen);
}


//Creates Grid of custom size based on user input
function customGrid(input) {
    input = prompt('Enter a number between 1 and 100 for the number of pixels per side of the grid!');

    //converts input type from string to number to be used later in comparisons
    input = Number(input); 

    //Squares the input number to make the correct amount of square divs for a grid
    rows = input;
    cols = input;

    //Checks if user input is between 1 and 100
    if (input >= 1 && input <= (100 * 100)){
        let i = 255;
        while (i >= 0) {
            let removeSquares = document.getElementsByClassName("squares");
            removeSquares[0].remove();
            i--;
        }
        for (let num = 0; num < (rows * cols); num++) {
            let cells = document.createElement("div");
            cells.style.width = `${gridSide / cols}px`;
            cells.style.height = `${gridSide / rows}px`;
            cells.classList.add("squares");
            cells.textContent = '';
            gridArea.appendChild(cells);

            cells.addEventListener("mouseenter", () => {
                cells.style.backgroundColor = 'black';
            });
        }
    }
    else {
        alert('Number outside of allowed range, please try again.');
    }
    inputBtn.removeEventListener("click", customGrid);
}

//Creates two circlular divs to represent the dials on an etch-a-sketch
function createDials() {
    let i = 0;
    while(i<2){
        let dials = document.createElement("div");
        dials.classList.add("circles");
        let alignDials = document.getElementById("circleContainer")
        alignDials.appendChild(dials);
        i++;
    }
    initBtn.removeEventListener("click", createDials);
}


let initBtn = document.getElementById("sixteen");
initBtn.addEventListener("click", sixteenBySixteen);
initBtn.addEventListener("click", createDials);

let inputBtn = document.getElementById("gridSize");
inputBtn.addEventListener("click", customGrid);




