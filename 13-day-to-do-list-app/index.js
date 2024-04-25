document.addEventListener("DOMContentLoaded", function() {
  const addTaskBtn = document.getElementById("addTaskBtn");
  const clearCompletedBtn = document.getElementById("clearCompletedBtn");

  // Retrieve tasks from local storage
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    addTaskToList(task.text, task.completed);
  });

  addTaskBtn.addEventListener("click", addTask);
  clearCompletedBtn.addEventListener("click", clearCompleted);
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  addTaskToList(taskText);
  taskInput.value = "";
  saveTasks();
}

function addTaskToList(text, completed = false) {
  const taskList = document.getElementById("taskList");
  const taskItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;
  checkbox.addEventListener("change", function() {
    taskItem.classList.toggle("completed", checkbox.checked);
    saveTasks();
  });
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    taskList.removeChild(taskItem);
    saveTasks();
  });
  taskItem.textContent = text;
  taskItem.appendChild(checkbox);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
  if (completed) taskItem.classList.add("completed");
}

function clearCompleted() {
  const taskList = document.getElementById("taskList");
  const completedTasks = taskList.querySelectorAll(".completed");
  completedTasks.forEach(task => taskList.removeChild(task));
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  const taskList = document.getElementById("taskList");
  taskList.querySelectorAll("li").forEach(taskItem => {
    tasks.push({
      text: taskItem.textContent,
      completed: taskItem.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
