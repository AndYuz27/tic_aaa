const setField = (n, board, field) => {
    board.innerHTML = "";
    board.style.gridTemplateColumns = `repeat(${n}, 70px)`;
    board.style.gridTemplateRows = `repeat(${n}, 70px)`;


    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {

            field.push("");
        }
    }
    console.log(field);



    for (let cell of field) {
        board.innerHTML += `<div class="board__cell">${cell}</div>`;
    }
}


const isWin= function(field, step, n){
    // field = [1,2,3,4,5,6,7,8]
let flag = true;
    for(let i = 0; i < n; i++) {
        flag = true
        for (let j = 0; j < n; j++){
            console.log(field[i][j])
            if(field[i *n +j] !== ""){
                
            if(field[i *n+j] !==field[i* n +(j -1)]) {
                flag = false;
                break;
            }
        } else{
            flag = false;
            break;
            }
        }
    }
    if (flag) {
        return `${step} выиграл`
    }
}

export default {setField, isWin};