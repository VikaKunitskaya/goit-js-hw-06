//Напиши скрипт создания и очистки коллекции элементов.
//Пользователь вводит количество элементов в input и нажимает
//кнопку Создать, после чего рендерится коллекция.
//При нажатии на кнопку Очистить, коллекция элементов очищается.
//Создай функцию createBoxes(amount), которая принимает один
//параметр - число. Функция создает столько <div>, сколько
//указано в amount и добавляет их в div#boxes.
//Размеры самого первого <div> - 30px на 30px.
//Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//Все элементы должены иметь случайный цвет фона в формате HEX.
//Используй готовую функцию getRandomHexColor для получения цвета.
//Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//тем самым удаляя все созданные элементы.

const divBoxes = document.querySelector("#boxes");
const divControls = document.querySelector("#controls");
const input = divControls.children[0];
const btnCreate = divControls.children[1];
const btnDestroy = divControls.children[2];

btnCreate.addEventListener("click", () => {createBoxes(input.value)});
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const elements = [];
  const basicSize = 30;
  
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${basicSize + 10 * i}px`;
    divEl.style.height = `${basicSize + 10 * i}px`;
    divEl.style.backgroundColor = randomColor();
    divEl.style.border = "1px solid black";

    elements.push(divEl)
  }

  divBoxes.append(...elements);
}

function destroyBoxes() {
  input.value = 0;
  divBoxes.innerHTML = '';
}

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}