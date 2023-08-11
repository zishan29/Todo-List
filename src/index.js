import './style.css';
import check from './images/to-do-list.png'
import sidebar from './sidebar';


const addTask = document.querySelector('#add-task');
const cancel = document.querySelector('#cancel');
const form = document.querySelector('form');
const projectForm = document.querySelector('#project-form');
const mainContainer = document.querySelector('#main-container');
const projAdd = document.querySelector('#project-add');
const addTaskButton = document. querySelector('#addTaskButton');

addFavicon();
sidebar();

function task(title, description, dueDate, priority, project) {
    return {title, description, dueDate, priority, project};
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
    resetScreen();
    displayTask();
}

function resetScreen() {
    const taskList = document.querySelector('#task-list');
    taskList.textContent = '';
}

function addToStorage(task) {
    localStorage.setItem(`${task.title}`, JSON.stringify(task));
}

function displayTask() {
    const keys = Object.keys(localStorage);
    keys.sort();
    for (let key of keys) {
        let value = `${localStorage.getItem(key)}`;
        value = JSON.parse(value);
        const taskList = document.querySelector('#task-list');
        const card = document.createElement('div');
        card.classList.add('card');
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.classList.add('checkbox');
        const title = document.createElement('div');
        title.textContent = `${value.title}`;
        const description = document.createElement('div');
        description.classList.add('description');
        description.textContent = `${value.description}`;
        const dueDate = document.createElement('div');
        dueDate.classList.add('due-date');
        dueDate.textContent = `${value.dueDate}`;
        const priority = document.createElement('div');
        priority.classList.add('priority')
        priority.textContent = `${value.priority}`;
        card.appendChild(input);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(dueDate);
        card.appendChild(priority);
        taskList.appendChild(card);
    }
}

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

addTaskButton.addEventListener('click', () => {
    const task1 = task(document.querySelector('#task-name').value, document.querySelector('#description').value, document.querySelector('#datePicker').value, document.querySelector('#priority').value);
    createTask(task1);
    form.style.visibility = 'hidden';
    addTask.style.visibility = 'visible';
    form.reset();
});

const sideB = document.querySelector('#sidebar');
const plusImg = document.querySelector('#plus-img');
sideB.addEventListener('mouseover', () => {
    plusImg.style.visibility = 'visible';
});

sideB.addEventListener('mouseout', () => {
    plusImg.style.visibility = 'hidden';
});

plusImg.addEventListener('click', () => {
    mainContainer.style.opacity = 0.5;
    sideB.style.opacity = 0.5;
    projectForm.style.visibility = 'visible';
});

const projCancel = document.querySelector('#project-cancel');
projCancel.addEventListener('click', () => {
    mainContainer.style.opacity = 1;
    sideB.style.opacity = 1;
    projectForm.style.visibility = 'hidden';
    projectForm.reset();
});

projAdd.addEventListener('click', () => {
    const div = document.createElement('div');
    const projects = document.querySelector('#projects');
    div.classList.add('projects');
    div.textContent = document.querySelector('#project-input').value;
    projects.appendChild(div);
    projectForm.style.visibility = 'hidden';
    mainContainer.style.opacity = 1;
    sideB.style.opacity = 1;
});

localStorage.clear();