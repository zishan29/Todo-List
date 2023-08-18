import { format } from 'date-fns';
import calendar from './images/calendar-blank-outline.svg';
import edit from './images/pencil-outline.svg';

export function displayInbox() {
    let count = 1;
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
            card.setAttribute('id', `${count}`);
            count++;
            const editImg = new Image();
            editImg.src = edit;
            editImg.setAttribute('class', 'edit');
            card.appendChild(editImg);
            const input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            input.classList.add('checkbox');
            if(get.priority === 'priority1') {
                input.classList.add('priority1');
            } else if(get.priority === 'priority2') {
                input.classList.add('priority2')
            } else if(get.priority === 'priority3') {
                input.classList.add('priority3');
            } else {
                input.classList.add('priority4');
            }
            const title = document.createElement('div');
            title.textContent = `${get.title}`;
            title.setAttribute('id', 'title');
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
                card.setAttribute('id', `${count}`);
                count++;
                const editImg = new Image();
                editImg.src = edit;
                editImg.setAttribute('class', 'edit');
                card.appendChild(editImg);
                const input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                input.classList.add('checkbox');
                if(get[i].priority === 'priority1') {
                    input.classList.add('priority1');
                } else if(get[i].priority === 'priority2') {
                    input.classList.add('priority2')
                } else if(get[i].priority === 'priority3') {
                    input.classList.add('priority3');
                } else {
                    input.classList.add('priority4');
                }
                const title = document.createElement('div');
                title.textContent = `${get[i].title}`;
                title.setAttribute('id', 'title');
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
    let count = 1;
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
                card.setAttribute('id', `${count}`);
                count++;
                const editImg = new Image();
                editImg.src = edit;
                editImg.setAttribute('class', 'edit');
                card.appendChild(editImg);
                const input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                input.classList.add('checkbox');
                if(get.priority === 'priority1') {
                    input.classList.add('priority1');
                } else if(get.priority === 'priority2') {
                    input.classList.add('priority2')
                } else if(get.priority === 'priority3') {
                    input.classList.add('priority3');
                } else {
                    input.classList.add('priority4');
                }
                const title = document.createElement('div');
                title.textContent = `${get.title}`;
                title.setAttribute('id', 'title');
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
                    card.setAttribute('id', `${count}`);
                    count++;
                    const editImg = new Image();
                    editImg.src = edit;
                    editImg.setAttribute('class', 'edit');
                    card.appendChild(editImg);
                    const input = document.createElement('input');
                    input.setAttribute('type', 'checkbox');
                    input.classList.add('checkbox');
                    if(get[i].priority === 'priority1') {
                        input.classList.add('priority1');
                    } else if(get[i].priority === 'priority2') {
                        input.classList.add('priority2')
                    } else if(get[i].priority === 'priority3') {
                        input.classList.add('priority3');
                    } else {
                        input.classList.add('priority4');
                    }
                    const title = document.createElement('div');
                    title.textContent = `${get[i].title}`;
                    title.setAttribute('id', 'title');
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
    let count = 1;
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
                card.setAttribute('id', `${count}`);
                count++;
                const editImg = new Image();
                editImg.src = edit;
                editImg.setAttribute('class', 'edit');
                card.appendChild(editImg);
                const input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                input.classList.add('checkbox');
                if(get.priority === 'priority1') {
                    input.classList.add('priority1');
                } else if(get.priority === 'priority2') {
                    input.classList.add('priority2')
                } else if(get.priority === 'priority3') {
                    input.classList.add('priority3');
                } else {
                    input.classList.add('priority4');
                }
                const title = document.createElement('div');
                title.textContent = `${get.title}`;
                title.setAttribute('id', 'title');
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
                    card.setAttribute('id', `${count}`);
                    count++;
                    const editImg = new Image();
                    editImg.src = edit;
                    editImg.setAttribute('class', 'edit');
                    card.appendChild(editImg);
                    const input = document.createElement('input');
                    input.setAttribute('type', 'checkbox');
                    input.classList.add('checkbox');
                    if(get[i].priority === 'priority1') {
                        input.classList.add('priority1');
                    } else if(get[i].priority === 'priority2') {
                        input.classList.add('priority2')
                    } else if(get[i].priority === 'priority3') {
                        input.classList.add('priority3');
                    } else {
                        input.classList.add('priority4');
                    }
                    const title = document.createElement('div');
                    title.textContent = `${get[i].title}`;
                    title.setAttribute('id', 'title');
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
    const header = document.querySelector('#header');
    header.textContent = `${project}`;
    let count = 1;
    const get = JSON.parse(localStorage.getItem(project));
    if(get === null) {
        return;
    }
    else if(get.length === undefined) {
        const taskList = document.querySelector('#task-list');
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('id', `${count}`);
        count++;
        const editImg = new Image();
        editImg.src = edit;
        editImg.setAttribute('class', 'edit');
        card.appendChild(editImg);
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.classList.add('checkbox');
        if(get.priority === 'priority1') {
            input.classList.add('priority1');
        } else if(get.priority === 'priority2') {
            input.classList.add('priority2')
        } else if(get.priority === 'priority3') {
            input.classList.add('priority3');
        } else {
            input.classList.add('priority4');
        }
        const title = document.createElement('div');
        title.textContent = `${get.title}`;
        title.setAttribute('id', 'title');
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
                    card.setAttribute('id', `${count}`);
                    count++;
                    const editImg = new Image();
                    editImg.src = edit;
                    editImg.setAttribute('class', 'edit');
                    card.appendChild(editImg);
                    const input = document.createElement('input');
                    input.setAttribute('type', 'checkbox');
                    input.classList.add('checkbox');
                    if(get[i].priority === 'priority1') {
                        input.classList.add('priority1');
                    } else if(get[i].priority === 'priority2') {
                        input.classList.add('priority2')
                    } else if(get[i].priority === 'priority3') {
                        input.classList.add('priority3');
                    } else {
                        input.classList.add('priority4');
                    }
                    const title = document.createElement('div');
                    title.textContent = `${get[i].title}`;
                    title.setAttribute('id', 'title');
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