function addTodo(todo) {
  const todos = document.getElementsByClassName("todos")[0];

  const todoNode = document.createElement("div");
  todoNode.classList.add("todo");
  todoNode.innerHTML = `
  <label class="todoBody">
    <input type="checkbox" />
    <p>${todo}</p>
  </label>
  <button onclick="handleDelete(event)"><img src="assets/trash.svg" alt="delete"/></button>`;

  todos.appendChild(todoNode);
}

function handleSubmit(event) {
  event.preventDefault();

  const todoNode = document.getElementsByClassName("todoInput")[0];
  addTodo(todoNode.value);
  todoNode.value = "";
}

document.getElementsByClassName("form")[0].addEventListener("submit", handleSubmit);

function handleDelete(e) {
  e.target.parentElement.parentElement.remove();
}
