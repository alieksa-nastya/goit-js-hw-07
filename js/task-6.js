function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// console.log(controls, input, createBtn, destroyBtn, boxesContainer);

function createBoxes(amount) {
  boxesContainer.innerHTML = ''; // очистка контейнера 
  let size = 30; // 30 на 30

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div'); 
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    boxesContainer.appendChild(box); //додали у контейнер
    size += 10;
  }
}

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

function onCreateBtnClick(e) {
  const amount = parseInt(input.value.trim()); // текст в число
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
    input.value = '';
  }
}

createBtn.addEventListener('click', onCreateBtnClick);

destroyBtn.addEventListener('click', destroyBoxes);




