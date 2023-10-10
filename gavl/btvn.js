let outerDiv = document.createElement("div");
outerDiv.id = "outerDiv";

let innerDiv = document.createElement("div");
innerDiv.id = "innerDiv";
outerDiv.appendChild(innerDiv);

document.body.appendChild(outerDiv);

let list = document.createElement("ul");

let listChild1 = document.createElement("li");
let listChild2 = document.createElement("li");
let listChild3 = document.createElement("li");
let listChild4 = document.createElement("li");
let listChild5 = document.createElement("li");
let listChild6 = document.createElement("li");

let img2 = document.createElement("img");
let img3 = document.createElement("img");
let img4 = document.createElement("img");
let img5 = document.createElement("img");
let img6 = document.createElement("img");
let img1 = document.createElement("img");


img1.className = "image";
img6.className = "image";
img5.className = "image";
img4.className = "image";
img3.className = "image";
img2.className = "image";

let button1 = document.createElement("button");
let button2 = document.createElement("button");
let button3 = document.createElement("button");
let button4 = document.createElement("button");
let button5 = document.createElement("button");
let button6 = document.createElement("button");

button1.className = "nut";
button2.className = "nut";
button3.className = "nut";
button4.className = "nut";
button5.className = "nut";
button6.className = "nut";

listChild1.appendChild(button1);
listChild2.appendChild(button2);
listChild3.appendChild(button3);
listChild4.appendChild(button4);
listChild5.appendChild(button5);
listChild6.appendChild(button6);

let button = document.getElementsByClassName("nut");

let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
let p5 = document.createElement("p");
let p6 = document.createElement("p");

p1.className = "ptag";
p2.className = "ptag";
p3.className = "ptag";
p4.className = "ptag";
p5.className = "ptag";
p6.className = "ptag";

let p = document.getElementsByClassName("ptag");

let img = document.getElementsByClassName("image");

listChild1.appendChild(img1);
listChild2.appendChild(img2);
listChild3.appendChild(img3);
listChild4.appendChild(img4);
listChild5.appendChild(img5);
listChild6.appendChild(img6);
listChild1.appendChild(p1);
listChild2.appendChild(p2);
listChild3.appendChild(p3);
listChild4.appendChild(p4);
listChild5.appendChild(p5);
listChild6.appendChild(p6);

list.appendChild(listChild1);
list.appendChild(listChild2);
list.appendChild(listChild3);
list.appendChild(listChild4);
list.appendChild(listChild5);
list.appendChild(listChild6);
innerDiv.appendChild(list);

for (let i = 0; i < p.length; i++) {
  p[i].innerHTML = "RI DO";
  p[i].style.textAlign = "center";
}

for (let i = 0; i < img.length; i++) {
  img[i].src =
    "https://th.bing.com/th/id/OIP.G1KK64Ws3pTPMqYAbUDFEQHaNK?w=113&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
  img[i].style.height = "80px";
  img[i].style.width = "80px";
  img[i].style.display = "flex";
  img[i].style.marginLeft = "60px";
  img[i].style.borderRadius = "6px";
}

for (let i = 0; i < button.length; i++) {
  button[i].innerHTML = "...";
}

list.style.display = "flex";
list.style.listStyleType = "none";
list.style.flexWrap = "wrap";
innerDiv.style.width = "1000px";

let li = document.getElementsByTagName("li");

for (let i = 0; i < li.length; i++) {
  li[i].style.margin = "19px";
  // li[i].style.marginTop = "10px"
  li[i].style.width = "200px";
  li[i].style.border = "2px solid";
  li[i].style.borderColor = "#e3e3e3";
  li[i].style.backgroundColor = "white";
  li[i].style.borderRadius = "4px";
  li[i].style.boxShadow = "0 0 3px  black";
}

for (let i = 0; i < button.length; i++) {
  button[i].innerHTML = "...";
  button[i].style.marginLeft = "172px";
  button[i].style.backgroundColor = "white";
  button[i].style.border = "none";
  button[i].style.fontSize = "16px";
  button[i].style.paddingBottom = "16px";
}

document.body.style.backgroundColor = "#f5f5f5";

document.body.style
