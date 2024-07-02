//Creates initial 16x16 grid of squares 
function createSquares(number) {
    number = 255;
    let i = 0;
    
    let initialGrid = document.getElementById("container");
    while (i <= number) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("squares");
        newDiv.textContent = '';
        let initialGrid = document.getElementById("container");
        initialGrid.appendChild(newDiv);
        i++;
        newDiv.addEventListener("mouseenter", () => {
            newDiv.style.backgroundColor = 'black';
        });
    }
    initBtn.removeEventListener("click", createSquares);
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
initBtn.addEventListener("click", createSquares);
initBtn.addEventListener("click", createDials);




