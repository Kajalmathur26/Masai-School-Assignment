// Get elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");

// Load tasks from localStorage or start with empty list
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render tasks on page load
renderTasks(tasks);

// Add new task
addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task.");
        return;
    }

    // Create new task object
    const newTask = {
        id: Date.now(),       // unique id
        text: text,
        completed: false
    };

    tasks.push(newTask);
    updateStorage();
    renderTasks(tasks);

    taskInput.value = ""; // clear input
});

// Render list of tasks
function renderTasks(list) {
    taskList.innerHTML = "";

    list.forEach(task => {
        const li = document.createElement("li");

        // Task text element
        const span = document.createElement("span");
        span.textContent = task.text;

        // Apply completed style
        if (task.completed) {
            span.classList.add("completed");
        }

        // Toggle completion when clicking text
        span.addEventListener("click", () => {
            task.completed = !task.completed;
            updateStorage();
            renderTasks(tasks);
        });

        // Delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "X";

        delBtn.addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            updateStorage();
            renderTasks(tasks);
        });

        li.appendChild(span);
        li.appendChild(delBtn);
        taskList.appendChild(li);
    });
}

// Save tasks to localStorage
function updateStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Search tasks in real time
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = tasks.filter(task =>
        task.text.toLowerCase().includes(value)
    );

    renderTasks(filtered);
});
