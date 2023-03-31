// В HTML есть пустой список 
//ul#ingredients.
// <ul id="ingredients"></ul>


// Напиши скрипт, который для 
//каждого элемента массива 
//ingredients:
// 	1	Создаст отдельный элемент <li>. 
//Обзательно используй метод 
//document.createElement().
// 	2	Добавит название ингредиента 
//как его текстовое содержимое.
// 	3	Добавит элементу класс item.
// 	4	После чего вставит все <li> 
//за одну операцию в список
// ul#ingredients.




const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = [];

const listEl = document.querySelector('#ingredients');

for (let i = 0; i < ingredients.length; i += 1) {

const itemEl = document.createElement('li');
itemEl.classList.add('item')
itemEl.textContent = ingredients[i];
elements.push(itemEl);
}

listEl.append(...elements);

console.log(elements);
