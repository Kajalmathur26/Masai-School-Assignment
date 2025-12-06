// Grabbing the container div where paragraphs will be added
const container = document.getElementById("container");

// triggering adding/removing paragraphs
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

// When the user clicks "Add Paragraph", create a new <p> tag
addBtn.addEventListener("click", function () {
    // Making a new paragraph element
    const p = document.createElement("p");

    // Giving it some text so it's not empty
    p.textContent = "This is a new paragraph.";

    // Finally, adding the paragraph to the page
    container.appendChild(p);
});

// When the user clicks "Remove Last Paragraph",
// remove the most recently added paragraph .
removeBtn.addEventListener("click", function () {
    // Checking if there's anything to remove
    if (container.lastChild) {
        // Removing the last paragraph inside the container
        container.removeChild(container.lastChild);
    }
});
