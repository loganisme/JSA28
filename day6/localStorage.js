let btn = document.getElementById("btn");
let div = document.createElement("div")
let removeKey = document.getElementById("keyxoa");
let key = document.getElementById("key");
let addDataBtn = document.getElementById("addData");

addDataBtn.addEventListener("click", function () {
  if (key.value == "") {
    alert("chưa nhập");
    window.location.reload();
  } else {
    localStorage.setItem(`${key.value}`, "");
    window.location.reload();
  }
});

let t = Object.keys(localStorage);
t.sort()
console.log(t);
if(t.length == 0){
  let text = document.createElement("h2")
  text.innerHTML ="YEAH ! Nothing To Do"
  text.style.margin="10px"
  document.body.appendChild(div);

  div.appendChild(text)
  
}
else{for (let index = 0; index < t.length; index++) {
    let li = document.createElement("li");
    li.innerHTML = t[index];
    document.body.appendChild(div);
    div.appendChild(li)
    console.log(2);
}}



btn.addEventListener("click", function () {
  console.log("cmcc ");
  var deleteItem = t.find(function (keys) {
    return keys == removeKey.value
  })
  if(deleteItem == undefined){
    alert("ko ton tai")
    window.location.reload()
  }
  else{ 
    // alert("are you sure?")
  localStorage.removeItem(deleteItem)
  console.log(deleteItem);}
  window.location.reload()

});

document.body.style.display = "flex"
document.body.style.justifyContent = "center"

