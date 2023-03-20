function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bntStartEl = document.querySelector('[data-start]');
const bntStopEl = document.querySelector('[data-stop]');

bntStartEl.addEventListener('click', handleBtnStartClick);
bntStopEl.addEventListener('click', handleBtnStopClick);

let timerId = null;

function handleBtnStartClick(event) {
  timerId = setInterval(changeBodyClr, 1000);
  event.target.setAttribute('disabled', '');
  bntStopEl.removeAttribute('disabled');
}

function changeBodyClr() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
}

function handleBtnStopClick(event) {
  clearInterval(timerId);
  bntStartEl.removeAttribute('disabled');
  event.target.setAttribute('disabled', '');
}
