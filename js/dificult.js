let normal;
let dificil;
let ultraDificil;


normal = document.getElementById("normal")
dificil = document.getElementById("dificil")
ultraDificil = document.getElementById("ultraDificil")


function seleccionaDificultadNormal (normal){
    if (normal){
        gameSpeed = 110
        startGame()
    }else{
        gameSpeed = 100
        startGame()
    }
}
function seleccionaDificultadDificl (dificil){
    if (dificil){
        gameSpeed = 90
        startGame()
    }else{
        gameSpeed = 100
        startGame()
    }
}
function seleccionaDificultadUdificl(ultraDificil){
    if (ultraDificil){
        gameSpeed = 50
        startGame()
    }else{
        gameSpeed = 100
        startGame()
    }
}



normal.addEventListener("click", seleccionaDificultadNormal)
dificil.addEventListener("click",seleccionaDificultadDificl )
ultraDificil.addEventListener("click",seleccionaDificultadUdificl )