
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', getRandomHexColor);


function getRandomHexColor(event) {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
  document.body.style.backgroundColor = color;

  console.log(color);
}

