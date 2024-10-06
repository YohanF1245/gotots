"use strict";
const counter = document.querySelector('#counter');
let i = 0;
const increment = (e) => {
    i++;
    const span = counter?.querySelector('span');
    if (span) {
        span.textContent = i.toString();
    }
};
counter?.addEventListener('click', increment);
