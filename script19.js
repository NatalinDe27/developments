// Создать страницу на которой будет кнопка которая будет делать активной или неактивной в зависимости от прошлого состояния другую кнопку(названия кнопок значения не имеют, оформление задизейбленной кнопки также на Ваше усмотрение).
//

let saveButton = document.querySelectorAll(".save");
let activatorButton = document.querySelectorAll(".activator");

for (elem of activatorButton) {
    elem.addEventListener("click", () => {
        for (elem1 of saveButton) {
            elem1.disabled = !elem1.disabled;
        }
    });
}
for (elem of saveButton) {
    elem.addEventListener("click", () => {
        alert("Документ сохранен");
    });
}


// Вывести на страницу общее кол-во кликов левой и правой клавишей мыши(оформление на Ваше усмотрение)

let countLeft = document.getElementById("buttonCountNumberLeft");
let countRight = document.getElementById("buttonCountNumberRight");

document.onclick = function () {
    let countLeftText = countLeft.innerHTML;
    if (+countLeftText <= 11111) {
        countLeft.innerHTML++;
    }
}
document.oncontextmenu = function () {
    let countRightText = countRight.innerHTML;
    if (+countRightText <= 11111) {
        countRight.innerHTML++;
    }
}


// Создать смущающийся квадрат - в обычном состоянии он будет с синим background но при наведении на него мыши будет красный(сделать JSом)

let square = document.getElementById('square');
square.setAttribute('hover', 'style= background-color: red;');

square.onmouseover = function () {
    this.setAttribute("style", "background-color:red;");
}
square.onmouseout = function () {
    this.removeAttribute("style", "background-color:red;");
}



