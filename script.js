const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

 const span = document.createElement("span");
 span.textContent = taskText;
 li.appendChild(span);

  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
});