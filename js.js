const container = document.getElementById("enclosure");
function createCell(x,q){
    const cell = document.createElement("div");
    cell.style.backgroundColor = "cyan";
    cell.textContent = q;
    cell.style.alignContent ="center";
    cell.style.textAlign="center";
    cell.style.maxHeight = "calc(100%/" +(x)+")"
    cell.style.maxWidth = "calc(100%/" +(x)+")"
    cell.style.flexBasis = "calc(100%/" +(x)+")"; // the grid needs to be divided by x+1 parts
    //cell.style.flexBasis = "calc(100%/4 - 10px)";
    container.appendChild(cell);
}
function wrap(){
    const nl = document.createElement("pre");
    container.appendChild(nl);
}
function generateGrid(x){
    for (q = 0; q<x; q++){
        for (i = 0; i<x; i++){
            createCell(x,q);
        }
    
    }
}
generateGrid(16);