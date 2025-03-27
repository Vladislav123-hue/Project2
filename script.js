const buttons = document.querySelectorAll(".btn");
const operationButtons = document.querySelectorAll(".op-btn")
const actionButtons = document.querySelectorAll(".ac-btn")
buttons.forEach(button => {
    button.addEventListener("click", function () {
        let value = button.innerText; // Получаем текст кнопки
        handleInput(value); // Передаём значение в метод
    });
});

operationButtons.forEach(button => {
    button.addEventListener("click", function () {
        let value = button.innerText; // Получаем текст кнопки
        handleInput(value); // Передаём значение в метод
    });
});

actionButtons.forEach(button => {
    button.addEventListener("click", function () {
        let value = button.innerText; // Получаем текст кнопки
        handleInput(value); // Передаём значение в метод
    });
});

function handleInput(value) {
    console.log(value, "кнопка нажата");
}