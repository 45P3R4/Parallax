const root = document.documentElement;

document.addEventListener('mousemove', evt => {
    let x = evt.clientX / innerWidth;
    let y = evt.clientY / innerHeight;

    root.style.setProperty('--mouse-x', x - 0.5);
    root.style.setProperty('--mouse-y', y - 0.5);
});