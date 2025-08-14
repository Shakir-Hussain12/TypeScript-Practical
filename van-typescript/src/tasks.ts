type Task = {
    description: string,
    isCompleted: boolean

}
const list = document.querySelector<HTMLUListElement>('.list')!; 
const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');

const updateLocalStorage = (): void => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const renderTask = (task: Task): void => {
    //Adding checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.isCompleted;

    //Event listener
    checkbox.addEventListener('change', () => {
        task.isCompleted = !task.isCompleted;
        updateLocalStorage();
    });

    //Append to parent Node
    const taskElement = document.createElement('li');
    taskElement.textContent = task.description;
    list.appendChild(taskElement);
    taskElement.appendChild(checkbox);
};

const renderTasks = (): void => {
    list.innerHTML = '';
    tasks?.forEach((task) => {
        renderTask(task);            
    });
}
renderTasks();


const addTask = (task: Task): void => {
    //Add task to existing array
    tasks.push(task);

    //Update local Storage
    updateLocalStorage();

    //render
    renderTask(task);
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
 