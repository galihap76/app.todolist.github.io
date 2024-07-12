let addTodo = document.querySelector("#addTodo");
let count = 0;

addTodo.addEventListener("click", () => {
  const newTodo = document.getElementById("task");

  if (newTodo.value === "") {
    newTodo.classList.add("is-invalid");
  } else {
    newTodo.classList.remove("is-invalid");
    addTodoToList(newTodo.value);
    newTodo.value = "";
    count++;
  }
});

function addTodoToList(todo) {
  const todoList = document.getElementById("todo-list");
  const hr = document.querySelector(".hr");
  const li = document.createElement("li");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "count-li"
  );

  hr.innerHTML = "<hr/>";

  const taskText = document.createElement("span");
  taskText.textContent = todo;

  const buttonGroup = document.createElement("div");

  const deleteButton = document.createElement("button");
  const updateButton = document.createElement("button");
  const trashIcon = document.createElement("i");
  const pencilIcon = document.createElement("i");

  deleteButton.textContent = " Delete ";
  deleteButton.classList.add("btn", "btn-danger", "ms-2");
  trashIcon.classList.add("bi", "bi-trash-fill");
  deleteButton.appendChild(trashIcon);

  updateButton.textContent = " Update ";
  updateButton.classList.add("btn", "btn-warning", "text-white");
  pencilIcon.classList.add("bi", "bi-pencil-fill");
  updateButton.appendChild(pencilIcon);

  buttonGroup.appendChild(updateButton);
  buttonGroup.appendChild(deleteButton);

  li.appendChild(taskText);
  li.appendChild(buttonGroup);
  todoList.appendChild(li);

  deleteButton.addEventListener("click", () => {
    todoList.removeChild(li);
    count--;

    if (count == 0) {
      hr.innerHTML = "";
    }
  });

  updateButton.addEventListener("click", () => {
    const newTask = prompt("Update task: ", taskText.textContent);
    if (newTask !== null && newTask !== "") {
      taskText.textContent = newTask;
    }
  });
}
