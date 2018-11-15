/**
 * Поиск по CSS селектору
 * @param {string} className селектор css 
 */
function getElement(className) {
    return document.querySelector(className);
}


/**
 * Переключатель для элементов
 * @param {} click элемент на котором обрабатываем клик
 * @param {array|object} show элемент который показывается приклике
 */
function toggleElement(click, show) {
    click.addEventListener('click', function () {
        if (show.sort()) {
            show.forEach((e, i) => {
                show[i].classList.toggle('show');
            });
        } else {
            show.classList.toggle('show');
        }
    })
}



// Мобильное меню
let mobileIcon = getElement('.mobile');
let menu = getElement('.menu');

toggleElement(mobileIcon, [mobileIcon, menu]);