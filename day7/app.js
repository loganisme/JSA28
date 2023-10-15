let input_key = document.querySelector("#input_key");
let input_value = document.querySelector("#input_value");
let button = document.querySelector("button");
button.addEventListener("click", function () {
    let key = document.getElementById("input_key")
    let value = document.getElementById("input_value")
    let div = document.createElement("div")
    let b = document.createElement("b")
    let span = document.createElement("span")
    if(key.value == "" || value.value == "" ){
        alert("sai")
    }else{
        b.innerHTML = key.value + " :  "
        span.innerHTML = value.value
        document.body.appendChild(div)
        div.appendChild(b)
        div.appendChild(span)

    }
    key.value = ""
    value.value = ""
});


