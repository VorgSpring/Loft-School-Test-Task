'use strict';

/**
 * @type {HTMLElement}
 */
var coursesWrapper = document.querySelector('.courses__wrapper');

/**
 * @type {HTMLElement}
 */
var coursesComplete = document.querySelector('.courses__complete');

/**
 * @type {HTMLElement}
 */
var coursesItems = document.querySelector('.courses__items');

/**
 * Обработчик клика
 * @param {Event} event
 */
coursesWrapper.addEventListener('click', function (event) {
    var target = event.target;
    // Если клик был по label
    if(target.tagName === 'LABEL') {
        // Находим подложку
        var overlay = target.parentNode.querySelector('.courses__overlay');
        // Показываем подложку
        overlay.style.display = 'block';
        // Всплытие до блока с курсом
        while (!target.classList.contains('courses__item')) {
            target = target.parentNode;
        }
        // Заводим таймер на одну секунду
        setTimeout(function () {
            // Удаляем блок с курсом
            target.parentNode.removeChild(target);
            // Если блоков с курсами не осталось
            if(coursesItems.children.length === 0) {
                // Скрываем wrapper
                coursesWrapper.style.display = 'none';
                // Показываем сообщение о прохождении всех курсов
                coursesComplete.style.display = 'block';
            }
        }, 1000)
    }
});
