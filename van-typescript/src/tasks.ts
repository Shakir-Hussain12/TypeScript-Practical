const btn = document.querySelector<HTMLButtonElement>('.btn')!;

const addTask = (): void => {
    console.log("inside function");
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const inp = document.querySelector<HTMLInputElement>('.form-input')!;
    console.log(inp.value);
    addTask();
});