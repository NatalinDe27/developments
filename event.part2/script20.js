// Создать страницу со следующим функционалом:
// квадрат который можно перемещать по странице с помощью Drag'n'Drop
// при двойному нажатию на квадрат он будет центрироваться по середине экрана

let square = document.querySelector('.square')

function getCenter() {
    square.style.position = ('absolute')
    square.style.top = ('50%')
    square.style.left = ('50%')
    square.style.margin = ('-50px 0 0 -50px')
}

square.onmousedown = function (event) {

    function move(pageX, pageY) {
        square.style.left = pageX - square.offsetWidth / 2 + 'px';
        square.style.top = pageY - square.offsetHeight / 2 + 'px';
    }

    move(event.pageX, event.pageY);

    function onMouseMove(event) {
        move(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    square.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        square.ondragstart = null;
    };
};
square.ondragstart = function () {
    return false;
};

square.addEventListener('dblclick', getCenter)



