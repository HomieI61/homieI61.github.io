

const openModalButton = document.getElementById("openModal");
// const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");


openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
    overlay.style.display = "block";
    let i = 0;
    console.log = (i += 1);
})



overlay.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
})





// document.getElementById('login_form').addEventListener('submit', function (event) {
//     event.preventDefault();  // Отменяем стандартную отправку формы

//     const login = document.getElementById('login').value; // для input только 
//     const pass = document.getElementById('pass').value;
//     let rememberMe = document.getElementById('remember').checked;

//     if (rememberMe) {
//         saveToCookie('login', login);
//         saveToCookie('pass', pass);
//     }

// })

// function saveToCookie(name, value, days = 7) {
//     let expires = "";
//     if (days) {
//         let date = new Date();
//         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }



window.addEventListener("DOMContentLoaded", () => {             //window.addEventListener – это метод, который добавляет слушатель событий к объекту window. В данном случае мы ждем события DOMContentLoaded, которое происходит после полной загрузки всего HTML-документа, включая стили, но до загрузки изображений и других внешних ресурсов.
    const logoText = "FromSoftware";
    const logoElement = document.getElementById("logo");

    let currentChar = 0;    // Объявляем переменную currentChar, которая будет отслеживать текущую позицию в строке logoText. Изначально она равна нулю, что означает начало строки.

    const interval = setInterval(() => {
        if (currentChar >= logoText.length) {
            clearInterval(interval);
        } else {
            logoElement.textContent += logoText[currentChar]; //Добавляет текущий символ из строки logoText к содержимому элемента logoElement.
            currentChar++;
        }
    }, 200); // Время задержки между добавлением символов
});