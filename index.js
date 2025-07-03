const successmore = document.getElementById('successmore');
const decline = document.getElementById('decline');

window.addEventListener('DOMContentLoaded', () => {
    const successRect = successmore.getBoundingClientRect();

    successmore.style.position = 'absolute';
    successmore.style.left = `${successRect.left}px`;
    successmore.style.top = `${successRect.top}px`;

    decline.style.position = 'absolute';

    const spacing = 20;

    decline.style.left = `${successRect.left + successmore.offsetWidth + spacing}px`;
    decline.style.top = `${successRect.top}px`;

    let scale = 1;

    decline.addEventListener('mouseenter', () => {
        const padding = 20;
        const maxX = window.innerWidth - decline.offsetWidth - padding;
        const maxY = window.innerHeight - decline.offsetHeight - padding;

        const randomX = Math.floor(Math.random() * (maxX - padding)) + padding;
        const randomY = Math.floor(Math.random() * (maxY - padding)) + padding;

        decline.style.left = `${randomX}px`;
        decline.style.top = `${randomY}px`;

        // Увеличение "Да" через масштаб
        scale += 0.2;
        successmore.style.transform = `scale(${scale})`;
    });
});

successmore.onclick = function() {
    window.location.href = "/page2/windowLetter.html";
};


