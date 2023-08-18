import { displayInbox } from "./display";
import { displayProjects } from "./display";
import { resetScreen } from ".";

export function addTaskToStorage(task, project) {
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

export function addProjectToStorage(title) {
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

export function editStorage($title, $project, title, description, dueDate, priority, project) {
    let get = localStorage.getItem($project);
    let get2 = localStorage.getItem(project);
    get = JSON.parse(get);
    get2 = JSON.parse(get2);
    if(get.length === undefined) {
        if($project !== project) {
            if(get2 === null) {
                const updatedObj = {...get, title: `${title}`, description: `${description}`,
                                dueDate: `${dueDate}`, priority: `${priority}`, project: `${project}`};
                const updatedGet2 = [updatedObj];
                localStorage.removeItem($project);
                localStorage.setItem(project, JSON.stringify(updatedGet2));
            } else {
                const updatedObj = { ...get, title: `${title}`, description: `${description}`,
                                    dueDate: `${dueDate}`, priority: `${priority}`, project: `${project}`};
                get2 = [get2];
                const updatedGet2 = [...get2.slice(0), updatedObj];
                localStorage.removeItem($project);
                localStorage.setItem(project, JSON.stringify(updatedGet2));
            }
        } else {
            const updatedGet = { ...get, title: `${title}`, description: `${description}`,
                                dueDate: `${dueDate}`, priority: `${priority}`, project: `${project}`};
            localStorage.setItem(project, JSON.stringify(updatedGet));
        }
    } else {
        if($project !== project) {
            const index = get.findIndex(obj => obj.title === `${$title}`);
            if (index === -1) {
                return;
            }
            if(get2 === null) {
                const updatedObj = {...get[index], title: `${title}`, description: `${description}`,
                                dueDate: `${dueDate}`, priority: `${priority}`, project: `${project}`};
                const updatedGet2 = [updatedObj];
                const updatedGet = [...get.slice(0, index), ...get.slice(index + 1)];
                localStorage.setItem(project, JSON.stringify(updatedGet2));
                localStorage.setItem($project, JSON.stringify(updatedGet));
            } else {
                const updatedObj = { ...get[index], title: `${title}`, description: `${description}`,
                                    dueDate: `${dueDate}`, priority: `${priority}`, project: `${project}`};
                const updatedGet2 = [...get2.slice(0), updatedObj];
                const updatedGet = [...get.slice(0, index), ...get.slice(index + 1)];
                localStorage.setItem(project, JSON.stringify(updatedGet2));
                localStorage.setItem($project, JSON.stringify(updatedGet));
            }
        } else {
            const index = get.findIndex(obj => obj.title === `${$title}`);
            if (index === -1) {
                return;
            }
            const updatedObj = {...get[index], title: `${title}`, description: `${description}`,
                                dueDate: `${dueDate}`, priority: `${priority}`, project: `${project}`};
            const updatedGet = [...get.slice(0, index), updatedObj, ...get.slice(index + 1),];
            localStorage.setItem(project, JSON.stringify(updatedGet));
        }
    }
    resetScreen();
    if($project === 'Inbox') {
        displayInbox();
    } else {
        displayProjects($project);
    }

}

export function getProjectName(title) {
    const keys = Object.keys(localStorage);
    for(let i = 0; i < keys.length; i++) {
        if(keys[i] === 'Projects') {
            continue;
        }
        let get = `${localStorage.getItem(keys[i])}`;
        get = JSON.parse(get);
        if(get.length === undefined) {
            if(get.title === title) {
                return get.project;
            }
        } else {
            for (let i = get.length - 1; i >= 0; i--) {
                if(get[i].title === title) {
                return get[i].project;
                }
            }
        }
    }
}

export function checkDuplicate(title, project) {
    let get = localStorage.getItem(project);
    get = JSON.parse(get);
    if(get === null) {
        return false;
    }
    if(get.length === undefined) {
        return get.title === title;
    } else {
        const index = get.findIndex(obj => obj.title === `${title}`);
        if (index === -1) {
            return false;
        } else {
            return true;
        }
    }
}