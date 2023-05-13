function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');


btnStop.setAttribute('disabled', true);
let colorTimer = null;


btnStart.addEventListener("click", colorStart)
btnStop.addEventListener('click', colorStop);


function colorStart() {
    btnStop.removeAttribute('disabled', true);
    btnStart.setAttribute('disabled', true);
    getRandomHexColor();
    colorTimer = setInterval(() => {
        body.style.backgroundColor = `${getRandomHexColor()}`;

    }, 1000)
}

function colorStop() {
    btnStop.setAttribute('disabled', true);
    btnStart.removeAttribute('disabled', true);
    clearInterval(colorTimer);
}