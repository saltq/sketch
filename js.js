const container = document.getElementById("enclosure");
function createCell(x,q){

    const cell = document.createElement("div");

    cell.style.backgroundColor = "black";
    cell.style.alignContent ="center";
    cell.style.textAlign="center";
    cell.style.maxHeight = "calc(100%/" +(x)+")"
    cell.style.maxWidth = "calc(100%/" +(x)+")"
    cell.style.flexBasis = "calc(100%/" +(x)+")"; 
    cell.addEventListener("mouseenter", (e) =>{
        console.log(e.target.id);
        cell.style.backgroundColor = "";
    })
    container.appendChild(cell);
    
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

function generateGrid(x,b){
    container.innerHTML = "";
    for (q = 0; q<x; q++){
        for (i = 0; i<x; i++){
            createCell(x,b);
        }
        
    }
    if (b)
        container.style.boxShadow = "cyan 10px 10px 10px 10px"
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
    container.style.boxShadow = "";
    container.style.backgroundImage="";
    switch (e.target.id){
        case "+":

            generateGrid(curGridVal++,0);
            input.value = curGridVal;
            break;
        case "-":

            generateGrid(curGridVal--,0);
            input.value = curGridVal;
            break;
        case "enterBtn":
            curGridVal = input.value
            generateGrid(curGridVal,0);
            break;
        case "SEXY":
            container.style.backgroundImage = "url('banana.png')";
            container.style.backgroundSize= "contain"
            curGridVal = input.value
            generateGrid(curGridVal, 1);
        default:
            break;
    }
})
