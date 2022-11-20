// Создать страницу с полем ввода и кнопкой отправить которое будет выводить ниже поля ввода то что "отправил" пользователь. Копирование любого из результатов должно вернуть не просто скопированный текст но и добавить слово "test". Например пользователь ввел "Hello world" и нажал на submit кнопку. Ниже поля появилась запись "Hello word" при копировании записи в буфер обмена должна попасть строка "test Hello world"

send.onclick = function () {
    result.innerHTML = textForCopy.value;
};

let test = 'test';

function setclipboard() {
    let text = document.getElementById('textForCopy').value;
    navigator.clipboard.writeText(`${test} ${text}`).then(function () {
    }, function () {
    });
}


