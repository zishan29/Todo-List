import check from './images/to-do-list.png'
import sidebar from './sidebar';
import { displayInbox } from './display';
import { displayToday } from './display';
import { displayUpcoming } from './display';
import { displayProjects } from './display';
import { addTaskToStorage, addProjectToStorage, editStorage, getProjectName, checkDuplicate, deleteTask, deleteProject } from './storage';
import { addProjectsToSidebar } from './sidebar';
import { format } from 'date-fns';

const addTask = document.querySelector('#add-task');
const cancel = document.querySelector('#cancel');
const form = document.querySelector('form');
const projectForm = document.querySelector('#project-form');
const mainContainer = document.querySelector('#main-container');
const projAdd = document.querySelector('#project-add');
const addTaskButton = document. querySelector('#addTaskButton');
let $taskName = '';
let $project = '';

addFavicon();
sidebar();
addProjectsToSidebar();
displayInbox();
addToOptions();

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

function createTask(task, project) {
    addTaskToStorage(task, project);
    resetScreen();
    if(project === 'Inbox') {
        displayInbox();
    } else {
        displayProjects(project);
    }
}

export function resetScreen() {
    const taskList = document.querySelector('#task-list');
    taskList.textContent = '';
}

function addToOptions() {
    let get = JSON.parse(localStorage.getItem('Projects'));
    const selectProjects = document.querySelector('#select-projects');
    selectProjects.textContent = '';
    const option = document.createElement('option');
    option.setAttribute('value', 'Inbox');
    option.textContent = 'Inbox';
    selectProjects.appendChild(option);
    if(get === null) return;
    if(!(get instanceof Object)) {
        const option = document.createElement('option');
        option.setAttribute('value', `${get}`);
        option.textContent = get;
        selectProjects.appendChild(option);
    } else {
        for(let i = 0; i < get.length; i++) {
            const option = document.createElement('option');
            option.setAttribute('value', `${get[i]}`);
            option.textContent = get[i];
            selectProjects.appendChild(option);
        }
    }
}

function addToEditOptions() {
    let get = JSON.parse(localStorage.getItem('Projects'));
    const selectProjects = document.querySelector('#edit-select-projects');
    selectProjects.textContent = '';
    const option = document.createElement('option');
    option.setAttribute('value', 'Inbox');
    option.textContent = 'Inbox';
    selectProjects.appendChild(option);
    if(get === null) return;
    if(!(get instanceof Object)) {
        const option = document.createElement('option');
        option.setAttribute('value', `${get}`);
        option.textContent = get;
        selectProjects.appendChild(option);
    } else {
        for(let i = 0; i < get.length; i++) {
            const option = document.createElement('option');
            option.setAttribute('value', `${get[i]}`);
            option.textContent = get[i];
            selectProjects.appendChild(option);
        }
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
    const selectProjects = document.querySelector('#select-projects');
    selectProjects.value = document.querySelector('#header').textContent;
});

addTaskButton.addEventListener('click', () => {
    let title = document.querySelector('#task-name').value;
    let desc = document.querySelector('#description').value;
    let dueDate = document.querySelector('#datePicker').value;
    let priority = document.querySelector('#priority').value;
    let project = document.querySelector('#select-projects').value;
    if(checkDuplicate(title)) {
        alert('Task already exists');
        return;
    }
    if(title === '') {
        alert('Task name can not be empty');
        return;
    }
    createTask(task(title, desc, dueDate, priority, project) , project);
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
    mainContainer.style.opacity = 0.3;
    sideB.style.opacity = 0.3;
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
    const projInput = document.querySelector('#project-input');
    addProjectToStorage(`${projInput.value}`);
    addProjectsToSidebar();
    addToOptions();
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
            if(!(e.target.classList.contains('delete-project'))) {
                resetScreen();
                displayProjects(e.target.textContent);
            }
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
});

document.addEventListener('mouseover', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            const edit = card.firstChild;
            const del = card.children[1];
            edit.style.visibility = 'visible';
            del.style.visibility = 'visible';
        });
        card.addEventListener('mouseout', () => {
            const edit = card.firstChild;
            const del = card.children[1];
            edit.style.visibility = 'hidden';
            del.style.visibility = 'hidden';
        });
    });
    const edits = document.querySelectorAll('.edit');
    edits.forEach(edit => {
        edit.addEventListener('click', (e) => {
            addToEditOptions();
            const card = e.target.parentElement.childNodes;
            const form = document.querySelector('#edit-form');
            const name = document.querySelector('#edit-task-name');
            const description  = document.querySelector('#edit-description');
            const date = document.querySelector('#edit-datePicker');
            const priority = document.querySelector('#edit-priority');
            const projects = document.querySelector('#edit-select-projects');
            name.value = card[3].textContent;
            $taskName = card[3].textContent;

            if(e.target.parentElement.querySelector('.description') !== null) {
                    description.value = card[4].textContent;
            } else {
                description.value = '';
            }
            if(e.target.parentElement.querySelector('.due-date') !== null) {
                if(e.target.parentElement.querySelector('.description') !== null) {
                    date.value = format(Date.parse(card[5].textContent), 'MM/dd/yyyy');
                    console.log(card[5].textContent)
                }
                else {
                    date.value = format(Date.parse(card[4].textContent), 'MM/dd/yyyy');
                }
                console.log(date.value);
            } else {
                date.value = '';
            }
            if(card[2].classList.contains('priority1')) {
                priority.value = 'priority1';
            } else if(card[2].classList.contains('priority2')) {
                priority.value = 'priority2';
            } else if(card[2].classList.contains('priority3')) {
                priority.value = 'priority3';
            } else {
                priority.value = 'priority4';
            }
            projects.value = getProjectName(name.value);
            $project = projects.value;
            form.style.visibility = 'visible';
            mainContainer.style.opacity = 0.3;
            sideB.style.opacity = 0.3;
        });
    });
    const deleteTasks = document.querySelectorAll('.delete-img');
    deleteTasks.forEach(del => {
        del.addEventListener('click', (e) => {
            const card = e.target.parentElement.childNodes;
            const title = card[3].textContent;
            deleteTask(title);
        })
    });
    const deleteProjects = document.querySelectorAll('.delete-project');
    deleteProjects.forEach(btn => {
        btn.addEventListener('click', (e) => {
            deleteProject(e.target.parentElement.textContent);
            addProjectsToSidebar();
            addToOptions();
            const header = document.querySelector('#header');
            header.textContent = 'Inbox';
            resetScreen();
            displayInbox();
        });
    })
});

const editCancel = document.querySelector('#edit-cancel');
editCancel.addEventListener('click', () => {
    const form = document.querySelector('#edit-form');
    form.style.visibility = 'hidden';
    mainContainer.style.opacity = 1;
    sideB.style.opacity = 1;
});

const editAdd = document.querySelector('#edit-add');
editAdd.addEventListener('click', () => {
    const form = document.querySelector('#edit-form');
    const name = document.querySelector('#edit-task-name');
    const description  = document.querySelector('#edit-description');
    const date = document.querySelector('#edit-datePicker');
    const priority = document.querySelector('#edit-priority');
    const projects = document.querySelector('#edit-select-projects');
    editStorage($taskName, $project, name.value, description.value, date.value, priority.value, projects.value);
    form.reset();
    form.style.visibility = 'hidden';
    mainContainer.style.opacity = 1;
    sideB.style.opacity = 1;

});