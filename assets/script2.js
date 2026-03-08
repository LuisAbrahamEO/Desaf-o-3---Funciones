


function colorear(elemento){
    elemento.style.backgroundColor = 'black'
}

const color1 = document.getElementById("color1")
const color2 = document.getElementById("color2")
const color3 = document.getElementById("color3")
const color4 = document.getElementById("color4")

color1.addEventListener("click", function(){
    colorear(color1)
})

color2.addEventListener("click", function(){
    colorear(color2)
})

color3.addEventListener("click", function(){
    colorear(color3)
})

color4.addEventListener("click", function(){
    colorear(color4)
})
