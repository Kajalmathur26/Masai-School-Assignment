document.getElementById("title").textContent = "Welcome to the DOM World!";

let paras = document.getElementsByTagName("p");
for (let i = 0; i < paras.length; i++) {
    paras[i].style.color = "blue";
}

document.querySelector(".container").style.backgroundColor = "yellow";
