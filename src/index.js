import './style.css';
import check from './images/to-do-list.png'
import sidebar from './sidebar';
import { displayInbox } from './display';
import { displayToday } from './display';
import { displayUpcoming } from './display';
import { displayProjects } from './display';

const addTask = document.querySelector('#add-task');
const cancel = document.querySelector('#cancel');
const form = document.querySelector('form');
const projectForm = document.querySelector('#project-form');
const mainContainer = document.querySelector('#main-container');
const projAdd = document.querySelector('#project-add');
const addTaskButton = document. querySelector('#addTaskButton');

addFavicon();
sidebar();

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

function createTask(task, project) {
    addToStorage(task, project);
    resetScreen();
    if(project === 'Inbox') {
        displayInbox();
    } else {
        displayProjects(project);
    }
}

function resetScreen() {
    const taskList = document.querySelector('#task-list');
    taskList.textContent = '';
}

function addToStorage(task, project) {
    let arr = [];
    if(localStorage.getItem(project) === null) {
        localStorage.setItem(project, JSON.stringify(task));
        arr = arr.concat(JSON.parse(localStorage.getItem(project)));
    } else {
        arr = arr.concat(JSON.parse(localStorage.getItem(project)));
        arr.push(task);
        localStorage.setItem(project, JSON.stringify(arr));
    }
}

function addProject(title) {
    let arr = [];
    if(localStorage.getItem('Projects') === null) {
        localStorage.setItem('Projects', JSON.stringify(title));
        arr = arr.concat(JSON.parse(localStorage.getItem('Projects')));
    } else {
        arr = arr.concat(JSON.parse(localStorage.getItem('Projects')));
        arr.push(title);
        localStorage.setItem('Projects', JSON.stringify(arr));
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
    const header = document.querySelector('#header').textContent;
    createTask(task1, header);
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
    const projInput = document.querySelector('#project-input');
    addProject(`${projInput.value}`);
    projectForm.style.visibility = 'hidden';
    mainContainer.style.opacity = 1;
    sideB.style.opacity = 1;
    projectForm.reset();
});

const projects = document.querySelector('#projects');
projects.addEventListener('mouseover', () => {
    const $projects = document.querySelectorAll('.projects');
    $projects.forEach(project => {
        project.addEventListener('click', (e) => {
            const header = document.querySelector('#header');
            header.textContent = e.target.textContent;
            resetScreen();
            displayProjects(e.target.textContent);
        });
    });
});

const inbox = document.querySelector('#inbox');
inbox.addEventListener('click', (e) => {
    const header = document.querySelector('#header');
    header.textContent = e.target.textContent;
    resetScreen();
    displayInbox();
});

const today = document.querySelector('#today');
today.addEventListener('click', (e) => {
    const header = document.querySelector('#header');
    header.textContent = e.target.textContent;
    resetScreen();
    displayToday();
});

const upcoming = document.querySelector('#upcoming');
upcoming.addEventListener('click', (e) => {
    const header = document.querySelector('#header');
    header.textContent = e.target.textContent;
    resetScreen();
    displayUpcoming();
})

document.addEventListener('mouseover', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', (e) => {
            const edit = card.firstChild;
            edit.style.visibility = 'visible';
            
        });
        card.addEventListener('mouseout', () => {
            const edit = card.firstChild;
            edit.style.visibility = 'hidden';
        });
    });
});

// localStorage.clear();

