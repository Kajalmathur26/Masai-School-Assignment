let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", function() {
        li.style.textDecoration = "line-through";
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});
