export function displayTodos(todos, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    todos.forEach(todo => {
        const div = document.createElement("div");
        div.style.border = "1px solid #ccc";
        div.style.padding = "10px";
        div.style.margin = "10px 0";

        div.innerHTML = `
            <h3>${todo.title}</h3>
            <p>Status: ${todo.completed ? "✔ Completed" : "❌ Not Completed"}</p>
        `;

        container.append(div);
    });
}
