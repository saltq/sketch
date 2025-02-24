const container = document.getElementById("enclosure");
function createCell(x,q){
    const cell = document.createElement("div");
    cell.style.backgroundColor = "black";
    cell.textContent = q;
    cell.style.alignContent ="center";
    cell.style.textAlign="center";
    cell.style.maxHeight = "calc(100%/" +(x)+")"
    cell.style.maxWidth = "calc(100%/" +(x)+")"
    cell.style.flexBasis = "calc(100%/" +(x)+")"; 
    cell.addEventListener("mouseenter", (e) =>{
        console.log(e.target.id);
        cell.style.backgroundColor = "white";
    })
    container.appendChild(cell);
    
}
function generateGrid(x){
    for (q = 0; q<x; q++){
        for (i = 0; i<x; i++){
            createCell(x,q);
        }
    
    }
}
function deleteGrid(x){
    for (q = 0; q<x; q++){
        for (i = 0; i<x; i++){
            container.removeChild(cell)
        }
    
    }
}
let curGridVal = 0;

const input = document.getElementById("item");  
const buttons = document.getElementById("buttons");
buttons.addEventListener("click", (e) => {
    console.log(e.target.id);
    switch (e.target.id){
        case "+":
            deleteGrid(curGridVal);
            generateGrid(curGridVal++);
            break;
        case "-":
            generateGrid(curGridVal--);
            break;
        case "enterBtn":
            curGridVal = input.value
            generateGrid(curGridVal);
            break;
        default:
            break;
    }
})
