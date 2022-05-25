const hamburger = document.querySelector('.hamburger'),//обращаемся к документу, получаем элемент со страницы по селектору//
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => { //отслеживаем все клики по гамбургеру//
        menu.classList.add('active'); //при каждом клике добавлять элементу меню обращаемся к свойству класслист(список его классов) добавляем класс актив//
    });
    closeElem.addEventListener('click', () => {
        menu.classList.remove('active') //при клике на крестик убираем класс класс  актив у гамбургера//
    });