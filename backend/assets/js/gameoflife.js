
function makeGrid(dimX, dimY){
    let rows = []
    for (let i = 0; i < dimY; i++) {
        let nextRow = []
        for (let j = 0; j < dimX; j++) {
            nextRow.push(Math.round(Math.random()))
        }
        rows.push(nextRow)
    }
    console.log(rows)
    return rows
}

function getNeighbors(grid, dimX, dimY, posX, posY){

}

function checkLife(gird, x, y){
    
}

function gameStart(){
    let x = 25
    let y = 25
    let grid = makeGrid(x, y)
}
gameStart()

