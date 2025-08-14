type Task = {
    description: string,
    isCompleted: boolean

}
const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');

const list = document.querySelector<HTMLUListElement>('.list')!;
const renderTasks = (): void => {
    list.innerHTML = '';
    if (tasks.length > 0) {
        tasks.forEach((task) => {
            console.log('here')
            list.appendChild(document.createElement('li')).innerText = task.description;
        });
    }
}
renderTasks();

const addTask = (task: Task): void => {
    //Add task to existing array
    tasks.push(task);

    //Add to local Storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    //render
    renderTasks();
}

const form = document.querySelector<HTMLFormElement>('.form')!;
form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    const inp = document.querySelector<HTMLInputElement>('.form-input')!;
    if (inp.value) {
        addTask({
            description: inp.value,
            isCompleted: false
        });
        inp.value = '';
        return;
    }

    alert('Please enter a Description');
});
 