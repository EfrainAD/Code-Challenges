const btn = document.querySelector('#btn')
let num = Number(btn.innerHTML)

btn.addEventListener('click', () => (btn.innerHTML = ++num))
