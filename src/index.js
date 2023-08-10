import './style.css';
import check from './images/to-do-list.png'
import sidebar from './sidebar';

let count = 0;

function task(title, description, dueDate, priority) {
    return {title, description, dueDate, priority};
}

function addFavicon() {
    const head = document.querySelector('head');
    const link = document.createElement('link');
    link.setAttribute('rel', 'icon');
    link.setAttribute('type', 'image/png');
    link.setAttribute('href', `${check}`);
    head.appendChild(link);
}

function createTask(task) {
    addToStorage(task);
    displayTask();
}

function addToStorage(task) {
    localStorage.setItem(`${task.title}`, JSON.stringify(task));
}

function displayTask() {
    let arr = [];
    const keys = Object.keys(localStorage);
    console.log(keys);
    for (let key of keys) {
        let value = `${localStorage.getItem(key)}`;
        value = JSON.parse(value);
        arr.push(value);
    }
    for(let i = 0; i < arr.length; i--) {
        const taskList = document.querySelector('#task-list');
        const card = document.createElement('div');
        card.classList.add('card');
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.classList.add('checkbox');
        const title = document.createElement('div');
        title.textContent = `${arr[i].title}`;
        const description = document.createElement('div');
        description.classList.add('description');
        description.textContent = `${arr[i].description}`;
        const dueDate = document.createElement('div');
        dueDate.classList.add('due-date');
        dueDate.textContent = `${arr[i].dueDate}`;
        const priority = document.createElement('div');
        priority.classList.add('priority')
        priority.textContent = `${arr[i].priority}`;
        card.appendChild(input);
        card.appendChild(title);
        card.appendChild(description);    
        card.appendChild(dueDate);
        card.appendChild(priority);
        taskList.appendChild(card);
    }
    count++;
}

localStorage.clear();
addFavicon();
sidebar();

const addTask = document.querySelector('#add-task');
const cancel = document.querySelector('#cancel');
const form = document.querySelector('form');

cancel.addEventListener('click', () => {
    form.style.visibility = 'hidden';
    addTask.style.visibility = 'visible';
    form.reset();
});

addTask.addEventListener('mouseover', () => {
    const plus = document.querySelector('#plus');
    plus.style.backgroundColor = '#eb4d4d';
    plus.style.color = 'white';
    const task = document.querySelector('#task');
    task.style.color = '#eb4d4d';
});
 
addTask.addEventListener('mouseout', () => {
    const plus = document.querySelector('#plus');
    plus.style.backgroundColor = 'transparent';
    plus.style.color = '#eb4d4d';
    const task = document.querySelector('#task');
    task.style.color = '#808080';
});

addTask.addEventListener('click', () => {
    form.style.visibility = 'visible';
    addTask.style.visibility = 'hidden';
});

const addTaskButton = document. querySelector('#addTaskButton');
addTaskButton.addEventListener('click', () => {
    const task1 = task(document.querySelector('#task-name').value, document.querySelector('#description').value, document.querySelector('#datePicker').value, document.querySelector('#priority').value);
    createTask(task1);
    form.style.visibility = 'hidden';
    addTask.style.visibility = 'visible';
    form.reset();
});