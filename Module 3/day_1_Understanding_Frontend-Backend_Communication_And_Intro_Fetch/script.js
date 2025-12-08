/* code by Kajal*/
const API_URL = "https://jsonplaceholder.typicode.com/todos";

async function fetchTodos() {
  try {
    const res = await fetch(API_URL);
    const todos = await res.json();
    const first20 = todos.slice(0, 20);
    saveTodos(first20);
    renderTodos();
  } catch (error) {
    console.error(error);
  }
}

function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

function deleteTodo(id) {
  const todos = getTodos().filter(todo => todo.id !== id);
  saveTodos(todos);
  renderTodos();
}

function toggleTodo(id) {
  const todos = getTodos().map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  saveTodos(todos);
  renderTodos();
}

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

if (!localStorage.getItem("todos")) {
  fetchTodos();
} else {
  renderTodos();
}
