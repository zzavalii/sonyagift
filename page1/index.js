const success = document.getElementById('success');
const successmore = document.getElementById('successmore');
const decline = document.getElementById('decline');

window.addEventListener('DOMContentLoaded', ()=>{
    const rect = decline.getBoundingClientRect();

    decline.style.position = 'absolute';
    decline.style.left = `${rect.left}px`;
    decline.style.top = `${rect.top}px`;

    decline.addEventListener('mousemove', ()=>{
    const padding = 20; 
    const maxX = window.innerWidth - decline.offsetWidth - padding;
    const maxY = window.innerHeight - decline.offsetHeight - padding;

    const randomX = Math.floor(Math.random() * (maxX - padding)) + padding;
    const randomY = Math.floor(Math.random() * (maxY - padding)) + padding;

    decline.style.left = `${randomX}px`;
    decline.style.top = `${randomY}px`;

    // увеличение success при наведении на decline
    const currentWidth = parseInt(getComputedStyle(success).width);
    const currentHeight = parseInt(getComputedStyle(success).height);
    const newWidth = currentWidth + 50;
    const newHeight = currentHeight + 50;
    success.style.width = `${newWidth}px`;
    success.style.height = `${newHeight}px`;
    })
})

successmore.onclick = function(){
    window.location.href = "/page2/windowLetter.html" 
}


