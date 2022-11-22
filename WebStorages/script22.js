// Создать страницу на которой будет две секции для создания записи в sessionStorage и в localStorage. Записи вывести ниже в двух разных колонках, рядом с каждой записью должна быть кнопка удалить эту запись из соответствующего хранилища

areaLocalStorage.oninput = function () {
    textLocalStorage.innerHTML = areaLocalStorage.value;
};

areaSessionStorage.oninput = function () {
    textSessionStorage.innerHTML = areaSessionStorage.value;
};

removeLocalStorage.onclick = function () {
    localStorage.removeItem('areaLocalStorage');
    areaLocalStorage.value = '';
    textLocalStorage.innerHTML = '';
};

removeSessionStorage.onclick = function () {
    sessionStorage.removeItem('areaSessionStorage');
    areaSessionStorage.value = '';
    textSessionStorage.innerHTML = '';
};



// areaLocalStorage.value = localStorage.getItem('areaLocalStorage');
// areaLocalStorage.oninput = () => {
//     localStorage.setItem('areaLocalStorage', areaLocalStorage.value)
// };
//
// areaSessionStorage.value = sessionStorage.getItem('areaSessionStorage');
// areaSessionStorage.oninput = () => {
//     sessionStorage.setItem('areaSessionStorage', areaSessionStorage.value)
// };
