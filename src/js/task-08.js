//При отправке формы страница не должна перезагружаться.
//Если в форме есть незаполненные поля, выводи alert 
//с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, 
//собери значения полей в обьект, где имя поля будет именем 
//свойства, а значение поля - значением свойства. 
//Для доступа к элементам формы используй свойство elements.
//Выведи обьект с введенными данными в консоль и очисти 
//значения полей формы методом reset.

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    // V1
    const mail = formElements.email.value.trim();
    const password = formElements.password.value.trim();
    const formData = {
        mail,
        password,
    }
    console.log(mail);
    console.log(password);

    if (mail === "" || password === "") {
        alert('error!!!')
      } else {
        console.log(formData);
        formEl.reset();
      }

      /// V2

    //   const formData = new FormData(event.currentTarget); 
       
    //   console.log(formData);

    //   formData.forEach((value, name) => {
    //     console.log('name', name);
    //     console.log('value', value);

    //     if (value === "") {
    //         alert('error!!!')
    //       } else {
    //         console.log({name, value});
    //          formEl.reset();
    //       }
          
    //   });

  
   

  
}