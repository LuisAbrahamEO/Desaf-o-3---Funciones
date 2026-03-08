

let color = "" 

const keyDiv = document.getElementById("key")

document.addEventListener("keydown", function(event){

    if(event.key === "a"){
        color = "pink"
        keyDiv.style.backgroundColor = color
    }

    if(event.key === "s"){
        color = "orange"
        keyDiv.style.backgroundColor = color
    }

    if(event.key === "d"){
        color = "skyblue"
        keyDiv.style.backgroundColor = color
    }

    if(event.key === "q"){
        crearDiv("purple")
    }

    if(event.key === "w"){
        crearDiv("gray")
    }

    if(event.key === "e"){
        crearDiv("brown")
    }

})

function crearDiv(color){
    const nuevoDiv = document.createElement("div")
    nuevoDiv.style.width = "200px"
    nuevoDiv.style.height = "200px"
    nuevoDiv.style.backgroundColor = color
    nuevoDiv.style.border = "2px solid black"

    document.body.appendChild(nuevoDiv)
}