const btn = document.querySelector<HTMLButtonElement>('.btn')!;

const addTask = (txt: string): void => {
    if (txt.length < 1) {
        return;
    }
    
    const list = document.querySelector<HTMLUListElement>('.list')!;
    list.appendChild(document.createElement('li')).textContent = txt;
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const inp = document.querySelector<HTMLInputElement>('.form-input')!;
    addTask(inp.value);
});