if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((registration) => {
        console.log("ServiceWorker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.log("ServiceWorker registration failed:", error);
      });
  });
}

document.getElementById("add-todo").addEventListener("click", () => {
  const newTodo = document.getElementById("new-todo").value;
  if (newTodo) {
    addTodoToList(newTodo);
    document.getElementById("new-todo").value = "";
  }
});

function addTodoToList(todo) {
  const todoList = document.getElementById("todo-list");
  const li = document.createElement("li");
  li.textContent = todo;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");
  deleteButton.addEventListener("click", () => {
    todoList.removeChild(li);
  });
  li.appendChild(deleteButton);
  todoList.appendChild(li);
}
