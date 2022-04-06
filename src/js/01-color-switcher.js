function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]'),
}

const isDisabled = true;
let timeIntervalId = 0;


refs.buttonStop.disabled = isDisabled;



refs.buttonStart.addEventListener('click', onStartClick);
refs.buttonStop.addEventListener('click', onStopClick);



function changeBodyBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function onStartClick() {
    refs.buttonStart.disabled = isDisabled;
    refs.buttonStop.disabled = !isDisabled;
    timeIntervalId = setInterval(changeBodyBackgroundColor, 1000);
}

function onStopClick() {
    refs.buttonStart.disabled = !isDisabled;
    refs.buttonStop.disabled = isDisabled;
    clearInterval(timeIntervalId);
}

