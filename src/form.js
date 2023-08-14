export function createForm() {
    const form = document.createElement('form');
    form.setAttribute('id', 'edit-form');
    const taskName = document.createElement('input');
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('placeholder', 'Task name');
    taskName.setAttribute('id', 'task-name');
    form.appendChild(taskName);
    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('placeholder', 'Description');
    description.setAttribute('id', 'description');
    form.appendChild(description);
    const container1 = document.createElement('div');
    container1.setAttribute('id', 'container1');
    const datePicker = document.createElement('input');
    datePicker.setAttribute('type', 'text');
    datePicker.setAttribute('id', 'datePicker');
    datePicker.setAttribute('placeholder', 'due date');
    container1.appendChild(datePicker);
}