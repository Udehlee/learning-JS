//A simple Timed Task Reminder 

const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');

const tasks = [];


class Task {
  constructor(name, delay) {
    this.name = name;
    this.delay = delay; 
  }
}


function addTask() {
  const taskName = taskInput.value.trim();
  if (!taskName) {
    alert('Please enter a task.');
    return;
  }

  const newTask = new Task(taskName, 3000);
  tasks.push(newTask);

  displayTask(newTask);
  scheduleReminder(newTask);

  taskInput.value = '';
}

function displayTask(task) {
  const li = document.createElement('li');
  li.textContent = `Task: ${task.name} (Reminder in ${task.delay / 1000}s)`;
  taskList.appendChild(li);
}

function scheduleReminder(task) {
  setTimeout(() => {
    alert(`Reminder: ${task.name}`);
  }, task.delay);
}

addTaskBtn.addEventListener('click', addTask);
