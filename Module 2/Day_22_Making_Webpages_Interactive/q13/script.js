let colorInput = document.getElementById("colorInput");
let textInput = document.getElementById("textInput");
let changeBgButton = document.getElementById("changeBg");
let updateTextButton = document.getElementById("updateText");
let displayDiv = document.getElementById("displayDiv");

changeBgButton.addEventListener("click", function() {
    let color = colorInput.value.trim();
    let testDiv = document.createElement("div");
    testDiv.style.backgroundColor = color;
    if (testDiv.style.backgroundColor === "") {
        alert("Invalid color name!");
    } else {
        displayDiv.style.backgroundColor = color;
    }
});

updateTextButton.addEventListener("click", function() {
    let text = textInput.value.trim();
    if (text === "") {
        alert("Please enter some text!");
    } else {
        displayDiv.textContent = text;
    }
});
