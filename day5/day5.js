let btn =document.getElementById("btn")
    let div = document.createElement("div")
    // div.style.backgroundImage ="url(https://th.bing.com/th/id/OIP.QUbU6bfhdRPoVtaYXm1CHAHaLJ?w=118&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7)"
    div.style.border ="5px solid"
    div.style.height ="500px"
    div.style.width ="500px"
    document.body.appendChild(div)
    div.style.transition ="1s"
btn.addEventListener("click", function () {
    if (div.style.borderRadius == "50%") {
        div.style.borderRadius = "0%"
    }
    else{
        div.style.borderRadius = "50%"
    }
})

let input =document.getElementById("input")
let print =document.getElementById("print")
function printMe() {
    let p = document.createElement("p")
    p.innerText =input.value
    div.appendChild(p)
    location.reload()
}