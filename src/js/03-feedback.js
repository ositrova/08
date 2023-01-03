// Завдання 3 - форма зворотного зв'язку​

// HTML містить розмітку форми. Напиши скрипт, який буде зберігати 
// значення полів у локальне сховище, коли користувач щось друкує.


// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js.
//  Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище
//  об'єкт з полями email і message, у яких зберігай поточні значення 
//  полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є 
// збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні 
// бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль
//  об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
//  Для цього додай до проекту і використовуй бібліотеку lodash.throttle.



import throttle from 'lodash.throttle';


const formData = {};
const KEY = "feedback-form-state";


const form = document.querySelector('.feedback-form');


form.addEventListener('input', throttle(formInput, 500))
form.addEventListener('submit', formSubmit)

function formInput(event) {
    const email = form.elements.email.value;
    const message = form.elements.message.value;
  
    const allValue = { email, message };
  
    const dataStorageSave = localStorage.setItem(
      KEY,
      JSON.stringify(allValue)
    );
  }

  function formSubmit(event) {
    event.preventDefault();
    const email = form.elements.email.value;
    const message = form.elements.message.value;
  
    const formData = { email, message };
  
    if (email === '' || message === '') {
      alert('Введіть всі поля форми!');
    }
  
    console.log(formData);
    form.reset();
    localStorage.clear();
  }


function updateForm() {
    let data = localStorage.getItem(KEY);
   
    if (data) {
        data = JSON.parse(data);

        Object.entries(data).forEach(([name, value]) => {
            formData[name] = value;
            form.elements[name].value = value;
    });
    }
}

updateForm();