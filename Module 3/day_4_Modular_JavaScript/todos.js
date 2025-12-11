import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";
import { displayTodos } from "./displayTodos.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

// protect route
if (localStorage.getItem("loggedIn") !== "true") {
    alert("Please login first!");
    window.location.href = "login.html";
}

async function loadTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();

    displayTodos(data, "todoContainer");
}

loadTodos();
