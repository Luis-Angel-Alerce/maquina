const car = document.getElementById('car');

function asd() {
    const screenWidth = window.innerWidth;
    const moveDistance = screenWidth;
    car.style.transform = `translateX(${moveDistance}px)`;
}
asd();