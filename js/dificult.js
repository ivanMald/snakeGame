let normal;
let dificil;
let ultraDificil;

normal = document.getElementById("normal")
dificil = document.getElementById("dificil")
ultraDificil = document.getElementById("ultraDificil")


const seleccionaDificultad = () =>{
    switch (gameSpeed){
        case 'normal':
        gameSpeed = 110
        break
        case 'dificil':
            gameSpeed = 95
            break
        case 'ultraDificil': 
            gameSpeed = 50
            break
        default:
            gameSpeed = 100
            break
    }
    startGame()
}

normal.addEventListener("click", seleccionaDificultad)
dificil.addEventListener("click", seleccionaDificultad)
ultraDificil.addEventListener("click", seleccionaDificultad)