import './style.css'

type Item = {
    id: number,
    email: string,
    password: string
}

document.querySelector('#app')!.innerHTML = `
<form id="form" class="rounded-xl flex flex-col gap-3.5 w-1/3 mx-auto my-8 p-8 bg-slate-800">
<input id="email" type="text" placeholder="email" class="bg-slate-600 rounded-md text-slate-200 h-10 px-1.5 outline-none">
<input id="password" type="password" placeholder="password" class="bg-slate-600 rounded-md text-slate-200 h-10 px-1.5 outline-none">
<button id="loginButton" type="submit" class="rounded-md bg-slate-600 text-slate-200 h-10 hover:bg-slate-700">Login</button>
</form>
<div id="user-info" class="w-full flex flex-col justify-center items-center gap-3"></div>
`
const form = document.querySelector<HTMLFormElement>('#form');
const email = document.querySelector<HTMLInputElement>('#email');
const password = document.querySelector<HTMLInputElement>('#password');
const userInfo = document.querySelector<HTMLDivElement>('#user-info');

form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (email?.value === undefined || password?.value === undefined) return

    const userItem: Item = {
        id: 1,
        email: email.value,
        password: password.value,
    }
    addUser(userItem);
    email.value = '';
    password.value = '';
})

function addUser(item: Item) {
    const container = document.createElement('div');
    const emailEl = document.createElement('p');
    const passEl = document.createElement('p');
    emailEl.append(item.email);
    passEl.append(item.password);
    container.append(emailEl, passEl);
    userInfo?.append(container);
    container.classList.add(
        'min-w-48',
        'text-slate-50',
        'bg-slate-800',
        'flex-col',
        'items-center',
        'justify-center',
        'gap-5',
        'rounded-sm',
        'p-4');
}