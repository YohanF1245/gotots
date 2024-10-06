const counter = document.querySelector('#counter');
let i: number =0;

const increment = (e: Event) => {
    i++;
    const span = counter?.querySelector('span');

    if (span) {
        span.textContent = i.toString();
    }
}
counter?.addEventListener('click', increment);

