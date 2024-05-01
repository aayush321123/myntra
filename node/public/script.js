const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
    
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', function(e) {
        e.stopPropagation();
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
}
