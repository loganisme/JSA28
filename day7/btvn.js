let userName = document.querySelector("#name")
let userPass = document.querySelector("#password")
let userEmail = document.querySelector("#email")

let btn = document.querySelector("button")
console.log(btn);

// let user = []

// localStorage.setItem("userData", )

btn.addEventListener("click", () => {
  if(localStorage.getItem("userData")== null){
    
  localStorage.setItem("userData", JSON.stringify([{name : userName.value, password : userPass.value, email : userEmail.value}]))
  }
  else{
    let user = JSON.parse(localStorage.getItem("userData"))
  user.push({name : userName.value, password : userPass.value, email : userEmail.value})
  localStorage.setItem("userData", JSON.stringify(user))
  
   }

})
