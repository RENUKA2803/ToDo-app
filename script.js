// const addBtn = document.getElementById("addBtn");
// const taskInput = document.getElementById("taskInput");
// const taskList = document.getElementById("taskList");

// addBtn.addEventListener("click", function () {

//   const taskText = taskInput.value;

//   if (taskText === "") {
//     alert("Please enter a task");
//     return;
//   }

//   const li = document.createElement("li");

//  const span = document.createElement("span");
//  span.textContent = taskText;
//  li.appendChild(span);

//   li.addEventListener("click", function () {
//     li.style.textDecoration = "line-through";
//   });

//   const deleteBtn = document.createElement("button");

//   deleteBtn.textContent = "Delete";

//   deleteBtn.addEventListener("click", function () {
//     li.remove();
//   });

//   li.appendChild(deleteBtn);

//   taskList.appendChild(li);

//   taskInput.value = "";
// });

const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = [];

// SAVE TASKS TO LOCAL STORAGE
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// DISPLAY TASK ON SCREEN
function displayTask(taskText) {

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  li.appendChild(span);

  // MARK TASK COMPLETE
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // DELETE BUTTON
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {

    li.remove();

    // REMOVE TASK FROM ARRAY
    tasks = tasks.filter(task => task !== taskText);

    saveTasks();
  });

  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}

// ADD TASK
addBtn.addEventListener("click", function () {

  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // ADD TO ARRAY
  tasks.push(taskText);

  // SAVE TO LOCAL STORAGE
  saveTasks();

  // DISPLAY TASK
  displayTask(taskText);

  // CLEAR INPUT
  taskInput.value = "";
});
taskInput.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {
    addBtn.click();
  }
});

// LOAD SAVED TASKS WHEN PAGE REFRESHES
const storedTasks = JSON.parse(localStorage.getItem("tasks"));

if (storedTasks) {

  tasks = storedTasks;

  tasks.forEach(task => {
    displayTask(task);
  });
}