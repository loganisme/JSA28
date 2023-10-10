// document.body.style.position ="relative"
let bigdiv = document.createElement("div")
bigdiv.style.border ="5px solid"
bigdiv.style.position ="relative"
bigdiv.style.height = "1000px";
bigdiv.style.width = "1000px";

let div = document.createElement("div");
div.style.backgroundColor = "black";
div.style.height = "50px";
div.style.width = "50px";
div.style.position = "absolute";
bigdiv.appendChild(div)

// let goUp = document.getElementById("up");
let goDown = document.getElementById("down");
// let goLeft = document.getElementById("left");
let goRight = document.getElementById("right");

function submit() {
  if (goDown.value ==""  || goRight.value == "" ) {
    alert("khong duoc bo trong")
  } 
  else if (Number(goDown.value >950 || Number(goRight.value)>950)){
    alert("khong duoc vuot 1000px")
  }
  else {
    div.style.top = `${goDown.value}px`;
    div.style.left = `${goRight.value}px`;
    // div.style.right = `${goLeft.value}px`;
    // div.style.bottom = `${goUp.value}px`;
  }

}

document.body.appendChild(bigdiv);