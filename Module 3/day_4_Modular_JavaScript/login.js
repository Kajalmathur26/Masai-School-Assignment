import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    if (!user) {
        alert("No user found! Please signup first.");
        return;
    }

    if (email === user.email && pass === user.password) {
        localStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        window.location.href = "todos.html";
    } else {
        alert("Incorrect email or password!");
    }
});
