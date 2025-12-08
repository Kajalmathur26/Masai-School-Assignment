const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Fetch 20 todos from API
async function fetchTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();
  const first20 = todos.slice(0, 20);
  saveTodos(first20);
  renderTodos();
}

// Save todos to localStorage
function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Get todos from localStorage
function getTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

// Delete todo by ID
function deleteTodo(id) {
  const todos = getTodos().filter(todo => todo.id !== id);
  saveTodos(todos);
  renderTodos();
}

// Toggle complete status
function toggleTodo(id) {
  const todos = getTodos().map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  saveTodos(todos);
  renderTodos();
}

// Render todos on UI
function renderTodos() {
  const container = document.getElementById("todos");
  const todos = getTodos();
  container.innerHTML = "";

  if (todos.length === 0) {
    container.innerHTML = `<p class="empty-msg">No Todos Available</p>`;
    return;
  }

  todos.forEach(todo => {
    const div = document.createElement("div");
    div.className = "todo " + (todo.completed ? "completed" : "");

    div.innerHTML = `
      <span>${todo.title}</span>
      <div>
        <button class="toggle-btn" onclick="toggleTodo(${todo.id})">
          ${todo.completed ? "Undo" : "Complete"}
        </button>
        <button class="delete-btn" onclick="deleteTodo(${todo.id})">
          Delete
        </button>
      </div>
    `;

    container.appendChild(div);
  });
}

// Initialize App
if (!localStorage.getItem("todos")) {
  fetchTodos();
} else {
  renderTodos();
}
