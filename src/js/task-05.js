
const imputEl = document.querySelector("#name-input");

const nameEl = document.querySelector('#name-output');

imputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    if (event.currentTarget.value.trim() === "") {
        nameEl.textContent = "Anonymous"

    } else 
    nameEl.textContent = event.currentTarget.value;
}

