let tasks = [];

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        
        listItem.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = '';
        removeButton.addEventListener('click', function() {
            tasks.splice(index, 1);
            renderTasks();
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    });
}

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        tasks.push(taskText);
        renderTasks();
        taskInput.value = '';
    }
}

document.getElementById('add-task-btn').addEventListener('click', addTask);

renderTasks();
