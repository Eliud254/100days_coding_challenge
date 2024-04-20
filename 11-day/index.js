document.addEventListener("DOMContentLoaded", function() {
  var taskList = document.getElementById("taskList");
  var newTaskInput = document.getElementById("newTaskInput");
  var addTaskButton = document.getElementById("addTaskButton");

  addTaskButton.addEventListener("click", function() {
      var taskName = newTaskInput.value.trim();
      if (taskName !== "") {
          addTask(taskName);
          newTaskInput.value = "";
      }
  });

  function addTask(taskName) {
      var li = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "taskCheckbox";
      var span = document.createElement("span");
      span.textContent = taskName;
      span.className = "taskName";
      var editInput = document.createElement("input");
      editInput.type = "text";
      editInput.className = "editInput";
      var editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className = "editButton";
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "deleteButton";

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(editInput);
      li.appendChild(editButton);
      li.appendChild(deleteButton);
      taskList.appendChild(li);

      checkbox.addEventListener("change", function() {
          if (checkbox.checked) {
              span.style.textDecoration = "line-through";
          } else {
              span.style.textDecoration = "none";
          }
      });

      editButton.addEventListener("click", function() {
          span.style.display = "none";
          editInput.style.display = "inline";
          editInput.value = span.textContent;
      });

      editInput.addEventListener("keypress", function(e) {
          if (e.key === "Enter") {
              span.textContent = editInput.value;
              span.style.display = "inline";
              editInput.style.display = "none";
          }
      });

      deleteButton.addEventListener("click", function() {
          li.remove();
      });
  }
});
