import './style.css';
import check from './images/to-do-list.png'
import sidebar from './sidebar';

function object(title, description, dueDate, priority) {
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

addFavicon();
sidebar();