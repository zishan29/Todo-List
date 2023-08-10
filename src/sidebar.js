import inboxImage from './images/inbox.svg';
import todayImage from './images/calendar-today.svg';
import upcomingImage from './images/calendar-month.svg';

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
    projects.appendChild(title);
    sidebar.appendChild(projects);
}