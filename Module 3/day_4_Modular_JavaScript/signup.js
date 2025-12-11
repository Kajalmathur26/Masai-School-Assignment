import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful!");

    window.location.href = "login.html";
});
