// Animate counter (subscribers)
function animateCounter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(function () {
        current += increment;
        obj.textContent = current.toLocaleString();
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

document.addEventListener('DOMContentLoaded', () => {
    animateCounter('subscriber-count', 0, 125847, 2000);
});
