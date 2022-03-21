const newTasks = document.querySelector('.new-tasks')
const addTasks = document.querySelector('.add-tasks')
const tasks = document.querySelector('.tasks')



function createLine() {
    const line = document.createElement('li');
    return line;
}
function clearInput() {
    newTasks.value = '';
    newTasks.focus();
}

function createButton(li) {
    li.innerHTML += ' ';
    const btnDelete = document.createElement('button');
    btnDelete.innerHTML = 'Delete';
    btnDelete.setAttribute('class', 'delete');
    li.appendChild(btnDelete);
}

newTasks.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        if (!newTasks.value) return;
        createTasks(newTasks.value);
    }
});

function createTasks(text) {
    const line = createLine();
    line.innerText = text;
    tasks.appendChild(line);
    clearInput();
    createButton(line);
    saveTasks();
}

addTasks.addEventListener('click', function(event) {
    if (!newTasks.value) return;
    createTasks(newTasks.value);
});


document.addEventListener('click', function(e) {
    const element = e.target;

    if(element.classList.contains('delete')) {
        element.parentElement.remove();
        saveTasks();
    }

});
function saveTasks() {
    const lineTasks = tasks.querySelectorAll('li');
    const taskList = []

    for(let task of lineTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('Delete', '').trim();
        taskList.push(taskText);
    }
    const tasksJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', tasksJSON);

    
}

function addTasksSaved () {
    const tasks = localStorage.getItem('tasks');
    const listTask = JSON.parse(tasks);
    
    for(let task of listTask) {
        createTasks(task);
    };
}

addTasksSaved();