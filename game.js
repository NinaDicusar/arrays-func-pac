let mapDate = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,2,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,3,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,4,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]
let pr = 1
let pc = 4

function render()
{ map.innerHTML =``
   for (let row = 0 ; row<10; row++){
    for(let col = 0; col<10; col++){
        if (mapDate[row] [col] == 0) {
          map.innerHTML +=`<div></div>`
        }
         else if(mapDate[row][col] == 2){
            map.innerHTML +=`<div class="coin"></div>`
        }
        else if(mapDate[row][col] == 1){
            map.innerHTML +=`<div class="pac"></div>`
        }
        else if(mapDate[row][col] == 3){
            map.innerHTML +=`<div class="bomb"></div>`
        }
        else if(mapDate[row][col] == 4){
            map.innerHTML +=`<div class="heart"></div>`
        }
    } 
} 
}
function move(){
     switch (event.code){
        case"ArrowRight": 
        mapDate[pr][pc] = 0
        pc++
        mapDate[pr][pc] = 1
        break;
        case"ArrowLeft":break;
        case"ArrowDown":break;
        case"ArrowUp":break;

    }
    render()
}
render()