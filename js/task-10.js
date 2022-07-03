function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  inputValueEl: document.querySelector('#controls input'),
  destroyBtnEl: document.querySelector('[data-destroy]'),
  createBtnEl: document.querySelector('[data-create]'),
  resultInnerValue: document.querySelector('#boxes'),
};

ref.createBtnEl.addEventListener('click', createBoxes);
ref.destroyBtnEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let elementInList = ref.resultInnerValue.childElementCount;

  amount = ref.inputValueEl.value;
  // console.log('amount: ', amount);

  if (elementInList === 0) {
    for (let i = 0; i < +amount; i += 1) {
      ref.resultInnerValue.insertAdjacentHTML(
        'beforeend',
        `<div style="width: ${i * 10 + 30 + 'px'};
          height: ${i * 10 + 30 + 'px'};
          background-color: ${getRandomHexColor()};
          ">
          ${i + 1}
        </div >`
      );
    }
  }

  if (elementInList !== 0) {
    for (let i = elementInList; i < +amount + elementInList; i += 1) {
      ref.resultInnerValue.insertAdjacentHTML(
        'beforeend',
        `<div style="width: ${i * 10 + 30 + 'px'};
          height: ${i * 10 + 30 + 'px'};
          background-color: ${getRandomHexColor()};
          ">
          ${i + 1}
        </div >`
      );
    }
  }
  ref.inputValueEl.value = 0;
}

function destroyBoxes() {
  ref.resultInnerValue.innerHTML = '';
}
