
/////  1

const categoriesEl = document.querySelector('#categories')
const childsEl = categoriesEl.children
console.log(`Number of categories: ${childsEl.length}`);

///////  2

const itemEl = document.querySelectorAll('.item')

itemEl.forEach((element) => {

   console.log(`Category: ${element.firstElementChild.textContent}`);
   console.log(`Elements: ${element.lastElementChild.children.length}`);

  });







