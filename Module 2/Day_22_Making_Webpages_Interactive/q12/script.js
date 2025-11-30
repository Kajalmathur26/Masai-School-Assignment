let ul = document.querySelector("ul");
let button = document.querySelector("button");

button.addEventListener("click", function() {
    let li = document.createElement("li");
    li.textContent = "New Item";

    ul.appendChild(li);

    let items = ul.querySelectorAll("li");
    items.forEach((item, index) => {
        if ((index + 1) % 2 === 1) {
            item.style.fontWeight = "bold";
            item.style.color = "blue";
            item.style.fontStyle = "normal";
        } else {
            item.style.fontStyle = "italic";
            item.style.color = "red";
            item.style.fontWeight = "normal";
        }
    });
});
