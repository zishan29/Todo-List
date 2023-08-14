import { format } from 'date-fns';
import calendar from './images/calendar-blank-outline.svg';
import edit from './images/pencil-outline.svg';

export function displayInbox() {
    const keys = Object.keys(localStorage);
    for(let i = 0; i < keys.length; i++) {
        if(keys[i] === 'Projects') {
            continue;
        }
        let get = `${localStorage.getItem(keys[i])}`;
        get = JSON.parse(get);
        if(get.length === undefined) {
            const taskList = document.querySelector('#task-list');
            const card = document.createElement('div');
            card.classList.add('card');
            const editImg = new Image();
            editImg.src = edit;
            editImg.setAttribute('class', 'edit');
            card.appendChild(editImg);
            const input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            input.classList.add('checkbox');
            const title = document.createElement('div');
            title.textContent = `${get.title}`;
            const priority = document.createElement('div');
            priority.classList.add('priority')
            priority.textContent = `${get.priority}`;
            card.appendChild(input);
            card.appendChild(title);
            if(get.description.length > 0) {
                const description = document.createElement('div');
                description.classList.add('description');
                description.textContent = `${get.description}`;
                card.appendChild(description);
            }
            if(get.dueDate.length > 0) {
                const dueDate = document.createElement('div');
                dueDate.classList.add('due-date');
                const img = new Image();
                img.src = calendar;
                dueDate.appendChild(img);
                const div = document.createElement('div');
                div.textContent = `${format(Date.parse(get.dueDate), 'dd MMM')}`;
                dueDate.appendChild(div);
                card.appendChild(dueDate);
            }
            taskList.appendChild(card);
        } else {
            for (let i = get.length - 1; i >= 0; i--) {
                const taskList = document.querySelector('#task-list');
                const card = document.createElement('div');
                card.classList.add('card');
                const editImg = new Image();
                editImg.src = edit;
                editImg.setAttribute('class', 'edit');
                card.appendChild(editImg);
                const input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                input.classList.add('checkbox');
                const title = document.createElement('div');
                title.textContent = `${get[i].title}`;
                const priority = document.createElement('div');
                priority.classList.add('priority')
                priority.textContent = `${get[i].priority}`;
                card.appendChild(input);
                card.appendChild(title);
                if(get[i].description.length > 0) {
                    const description = document.createElement('div');
                    description.classList.add('description');
                    description.textContent = `${get[i].description}`;
                    card.appendChild(description);
                }
                if(get[i].dueDate.length > 0) {
                    const dueDate = document.createElement('div');
                    dueDate.classList.add('due-date');
                    const img = new Image();
                    img.src = calendar;
                    dueDate.appendChild(img);
                    const div = document.createElement('div');
                    div.textContent = `${format(Date.parse(get[i].dueDate), 'dd MMM')}`;
                    dueDate.appendChild(div);
                    card.appendChild(dueDate);
                }
                taskList.appendChild(card);
            }
        }
    }
}

export function displayToday() {
    const date = format(new Date(), 'MM/dd/yyyy');
    const keys = Object.keys(localStorage);
    for(let i = 0; i < keys.length; i++) {
        if(keys[i] === 'Projects') {
            continue;
        }
        let get = `${localStorage.getItem(keys[i])}`;
        get = JSON.parse(get);
        if(get.length === undefined) {
            if(get.dueDate === date) {
                const taskList = document.querySelector('#task-list');
                const card = document.createElement('div');
                card.classList.add('card');
                const editImg = new Image();
                editImg.src = edit;
                editImg.setAttribute('class', 'edit');
                card.appendChild(editImg);
                const input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                input.classList.add('checkbox');
                const title = document.createElement('div');
                title.textContent = `${get.title}`;
                const priority = document.createElement('div');
                priority.classList.add('priority')
                priority.textContent = `${get.priority}`;
                card.appendChild(input);
                card.appendChild(title);
                if(get.description.length > 0) {
                    const description = document.createElement('div');
                    description.classList.add('description');
                    description.textContent = `${get.description}`;
                    card.appendChild(description);
                }
                if(get.dueDate.length > 0) {
                    const dueDate = document.createElement('div');
                    dueDate.classList.add('due-date');
                    const img = new Image();
                    img.src = calendar;
                    dueDate.appendChild(img);
                    const div = document.createElement('div');
                    div.textContent = `${format(Date.parse(get.dueDate), 'dd MMM')}`;
                    dueDate.appendChild(div);
                    card.appendChild(dueDate);
                }
                taskList.appendChild(card);
            }
        } else {
            for (let i = get.length - 1; i >= 0; i--) {
                if(get[i].dueDate === date) {
                    const taskList = document.querySelector('#task-list');
                    const card = document.createElement('div');
                    card.classList.add('card');
                    const editImg = new Image();
                    editImg.src = edit;
                    editImg.setAttribute('class', 'edit');
                    card.appendChild(editImg);
                    const input = document.createElement('input');
                    input.setAttribute('type', 'checkbox');
                    input.classList.add('checkbox');
                    const title = document.createElement('div');
                    title.textContent = `${get[i].title}`;
                    const priority = document.createElement('div');
                    priority.classList.add('priority')
                    priority.textContent = `${get[i].priority}`;
                    card.appendChild(input);
                    card.appendChild(title);
                    if(get[i].description.length > 0) {
                        const description = document.createElement('div');
                        description.classList.add('description');
                        description.textContent = `${get[i].description}`;
                        card.appendChild(description);
                    }
                    if(get[i].dueDate.length > 0) {
                        const dueDate = document.createElement('div');
                        dueDate.classList.add('due-date');
                        const img = new Image();
                        img.src = calendar;
                        dueDate.appendChild(img);
                        const div = document.createElement('div');
                        div.textContent = `${format(Date.parse(get[i].dueDate), 'dd MMM')}`;
                        dueDate.appendChild(div);
                        card.appendChild(dueDate);
                    }
                    taskList.appendChild(card);
                }
            }
        }
    }
}

export function displayUpcoming() {
    const date = format(new Date(), 'MM/dd/yyyy');
    const d1 = Date.parse(date);
    const keys = Object.keys(localStorage);
    for(let i = 0; i < keys.length; i++) {
        if(keys[i] === 'Projects') {
            continue;
        }
        let get = `${localStorage.getItem(keys[i])}`;
        get = JSON.parse(get);
        if(get.length === undefined) {
            const d2 = Date.parse(get.dueDate);
            if(d2 > d1) {
                const taskList = document.querySelector('#task-list');
                const card = document.createElement('div');
                card.classList.add('card');
                const editImg = new Image();
                editImg.src = edit;
                editImg.setAttribute('class', 'edit');
                card.appendChild(editImg);
                const input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                input.classList.add('checkbox');
                const title = document.createElement('div');
                title.textContent = `${get.title}`;
                const priority = document.createElement('div');
                priority.classList.add('priority')
                priority.textContent = `${get.priority}`;
                card.appendChild(input);
                card.appendChild(title);
                if(get.description.length > 0) {
                    const description = document.createElement('div');
                    description.classList.add('description');
                    description.textContent = `${get.description}`;
                    card.appendChild(description);
                }
                if(get.dueDate.length > 0) {
                    const dueDate = document.createElement('div');
                    dueDate.classList.add('due-date');
                    const img = new Image();
                    img.src = calendar;
                    dueDate.appendChild(img);
                    const div = document.createElement('div');
                    div.textContent = `${format(Date.parse(get.dueDate), 'dd MMM')}`;
                    dueDate.appendChild(div);
                    card.appendChild(dueDate);
                }
                taskList.appendChild(card);
            }
        } else {
            for (let i = get.length - 1; i >= 0; i--) {
                const d2 = Date.parse(get[i].dueDate);
                if(d2 > d1) {
                    const taskList = document.querySelector('#task-list');
                    const card = document.createElement('div');
                    card.classList.add('card');
                    const editImg = new Image();
                    editImg.src = edit;
                    editImg.setAttribute('class', 'edit');
                    card.appendChild(editImg);
                    const input = document.createElement('input');
                    input.setAttribute('type', 'checkbox');
                    input.classList.add('checkbox');
                    const title = document.createElement('div');
                    title.textContent = `${get[i].title}`;
                    const priority = document.createElement('div');
                    priority.classList.add('priority')
                    priority.textContent = `${get[i].priority}`;
                    card.appendChild(input);
                    card.appendChild(title);
                    if(get[i].description.length > 0) {
                        const description = document.createElement('div');
                        description.classList.add('description');
                        description.textContent = `${get[i].description}`;
                        card.appendChild(description);
                    }
                    if(get[i].dueDate.length > 0) {
                        const dueDate = document.createElement('div');
                        dueDate.classList.add('due-date');
                        const img = new Image();
                        img.src = calendar;
                        dueDate.appendChild(img);
                        const div = document.createElement('div');
                        div.textContent = `${format(Date.parse(get[i].dueDate), 'dd MMM')}`;
                        dueDate.appendChild(div);
                        card.appendChild(dueDate);
                    }
                    taskList.appendChild(card);
                }
            }
        }
    }
}

export function displayProjects(project) {
    const get = JSON.parse(localStorage.getItem(project));
    if(get === null) {
        return;
    }
    else if(get.length === undefined) {
        const taskList = document.querySelector('#task-list');
        const card = document.createElement('div');
        card.classList.add('card');
        const editImg = new Image();
        editImg.src = edit;
        editImg.setAttribute('class', 'edit');
        card.appendChild(editImg);
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.classList.add('checkbox');
        const title = document.createElement('div');
        title.textContent = `${get.title}`;
        const priority = document.createElement('div');
        priority.classList.add('priority')
        priority.textContent = `${get.priority}`;
        card.appendChild(input);
        card.appendChild(title);
        if(get.description.length > 0) {
            const description = document.createElement('div');
            description.classList.add('description');
            description.textContent = `${get.description}`;
            card.appendChild(description);
        }
        if(get.dueDate.length > 0) {
            const dueDate = document.createElement('div');
            dueDate.classList.add('due-date');
            const img = new Image();
            img.src = calendar;
            dueDate.appendChild(img);
            const div = document.createElement('div');
            div.textContent = `${format(Date.parse(get.dueDate), 'dd MMM')}`;
            dueDate.appendChild(div);
            card.appendChild(dueDate);
        }
        taskList.appendChild(card);
    } 
    else {
        for (let i = get.length - 1; i >= 0; i--) {
             const taskList = document.querySelector('#task-list');
                    const card = document.createElement('div');
                    card.classList.add('card');
                    const editImg = new Image();
                    editImg.src = edit;
                    editImg.setAttribute('class', 'edit');
                    card.appendChild(editImg);
                    const input = document.createElement('input');
                    input.setAttribute('type', 'checkbox');
                    input.classList.add('checkbox');
                    const title = document.createElement('div');
                    title.textContent = `${get[i].title}`;
                    const priority = document.createElement('div');
                    priority.classList.add('priority')
                    priority.textContent = `${get[i].priority}`;
                    card.appendChild(input);
                    card.appendChild(title);
                    if(get[i].description.length > 0) {
                        const description = document.createElement('div');
                        description.classList.add('description');
                        description.textContent = `${get[i].description}`;
                        card.appendChild(description);
                    }
                    if(get[i].dueDate.length > 0) {
                        const dueDate = document.createElement('div');
                        dueDate.classList.add('due-date');
                        const img = new Image();
                        img.src = calendar;
                        dueDate.appendChild(img);
                        const div = document.createElement('div');
                        div.textContent = `${format(Date.parse(get[i].dueDate), 'dd MMM')}`;
                        dueDate.appendChild(div);
                        card.appendChild(dueDate);
                    }
                    taskList.appendChild(card);
        }
    }
}