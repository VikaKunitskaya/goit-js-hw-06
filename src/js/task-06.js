
const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onInputChange)

const correctLength = inputEl.getAttribute('data-length');


function onInputChange(event) {
    if (event.currentTarget.value.trim().length < correctLength) {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
   }
}




