import {
    burgerSelector,
    closeButtonSelector,
    menuActiveClass,
    menuSelector
} from 'scripts/utils/constants'

// Константы
const burgerButton = document
    .querySelector<HTMLButtonElement>(burgerSelector)
const closeButton = document
    .querySelector<HTMLButtonElement>(closeButtonSelector)
const menuItem = document
    .querySelector<HTMLElement>(menuSelector)

// Функция открытия меню
const openBurger = () => {
    menuItem
        ?.classList.add(menuActiveClass)
}

// Функция закрытия меню
const closeBurger = () => {
    if (menuItem?.classList.contains(menuActiveClass)) {
        menuItem
            ?.classList.remove(menuActiveClass)
    }
}

export {
    burgerButton,
    closeButton,
    openBurger,
    closeBurger
}
