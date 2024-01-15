const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    return;
  }

  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    element.style.width = `${30 + i * 10}px`;
    element.style.height = `${30 + i * 10}px`;
    element.style.backgroundColor = getRandomHexColor();
    elements.push(element);
  }

  boxes.append(...elements);
  input.value = '';
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
