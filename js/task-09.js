function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  colorHexEl: document.querySelector('.color'),
  colorBtnEl: document.querySelector('.change-color'),
  bodyEl: document.querySelector('body'),
};

ref.colorBtnEl.addEventListener('click', onClickBtnColor);

function onClickBtnColor() {
  ref.bodyEl.style.backgroundColor = getRandomHexColor();
  ref.colorHexEl.textContent = getRandomHexColor();
}
