
let counterValue = 0;


const btnDecremEl = document.querySelector('[data-action="decrement"]');
const btnIncremEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

btnDecremEl.addEventListener("click", function () {
  counterValue -= 1; 
  valueEl.textContent = counterValue;
});

btnIncremEl.addEventListener("click", function () {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

