const counter = document.querySelector('#counter');
let i=0;

const increment = (e) => {
    i++;
    counter.querySelector('span').textContent = i.toString();
}
counter.addEventListener('click', increment);