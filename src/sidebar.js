import inboxImage from './images/inbox.svg';
import todayImage from './images/calendar-today.svg';
import upcomingImage from './images/calendar-month.svg';
import plus from './images/plus.svg';

export default function sidebar() {
    const sidebar = document.querySelector('#sidebar');
    const inbox = document.createElement('div');
    inbox.setAttribute('id', 'inbox');
    const inboxImg = new Image();
    inboxImg.src = inboxImage;
    inbox.appendChild(inboxImg);
    const a = document.createElement('div');
    a.textContent = 'Inbox';
    inbox.appendChild(a);
    sidebar.appendChild(inbox);

    const today = document.createElement('div');
    today.setAttribute('id', 'today');
    const todayImg = new Image();
    todayImg.src = todayImage;
    today.appendChild(todayImg);
    const b = document.createElement('div');
    b.textContent = 'Today';
    today.appendChild(b);
    sidebar.appendChild(today);
    
    const upcoming = document.createElement('div');
    upcoming.setAttribute('id', 'upcoming');
    const upcomingImg = new Image();
    upcomingImg.src = upcomingImage;
    upcoming.appendChild(upcomingImg);
    const c = document.createElement('div');
    c.textContent = 'Upcoming';
    upcoming.appendChild(c);
    sidebar.appendChild(upcoming);

    const projects = document.createElement('div');
    projects.setAttribute('id', 'projects')
    const title = document.createElement('div');
    title.textContent = 'Projects';
    title.setAttribute('id', 'title');
    const plusImg = new Image();
    plusImg.src = plus;
    plusImg.setAttribute('id', 'plus-img');
    const container = document.createElement('div');
    container.setAttribute('id', 'project-container');
    title.appendChild(plusImg);
    projects.appendChild(title);
    projects.appendChild(container);
    sidebar.appendChild(projects);
}

export function addProjectsToSidebar() {
    let get = JSON.parse(localStorage.getItem('Projects'));
    if(get === null) return;
    const container = document.querySelector('#project-container');
    container.textContent = "";
    if(!(get instanceof Object)) {
        const div = document.createElement('div');
        div.classList.add('projects');
        div.textContent = get;
        container.appendChild(div);
    } else {
        for(let i = 0; i < get.length; i++) {
            const div = document.createElement('div');
            div.classList.add('projects');
            div.textContent = get[i];
            container.appendChild(div);
        }
    }
}