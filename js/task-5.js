function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const spanColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

function onButtonClick(e) {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}

changeColorBtn.addEventListener('click', onButtonClick);