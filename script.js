import f from "./func/11.js"
const board = document.querySelector(".board");
const n = 3;
const chars= ["X", "0"]
let stepCnt = n**3
let step = 0
f.setField(n, board)

const cells = board.querySelectorAll('.board__cell')

cells.forEach(cell =>{
    cell.addEventListener("click", function(e)
    {
        cell.innerHTML = chars[step]
        step = +!step
    })
})