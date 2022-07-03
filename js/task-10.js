function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

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
  console.log('amount: ', amount);

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
      ref.resultInnerVelue.insertAdjacentHTML(
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
  ref.resultInnerVelue.innerHTML = '';
}
