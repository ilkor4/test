// Функция активации элементов
import {
    blogButtonsSelector,
    buttonActiveSelector,
    newsActiveSelector,
    newsSelector,
    reviewActiveSelector,
    reviewsButtonsSelector,
    reviewSelector
} from 'scripts/utils/constants'

const hideItems = (arr, activeSelector) => {
    arr
        .forEach((item) => {
            if (item.classList.contains(activeSelector)) {
                item.classList.remove(activeSelector)
            }
        })
}

// Функция показа элементов
const activateItems = (arr, activeSelector) => {
    arr
        .forEach((item) => {
            item.classList.add(activeSelector)
        })
}

// Функция показа активных элементов
const showActiveItems = (args) => {
    const {
        arr,
        buttonIndex,
        quantity,
        activeSelector
    } = args

    const startPoint = buttonIndex * quantity
    const endPoint = quantity + buttonIndex * quantity
    const renderArray = arr.slice(startPoint, endPoint)

    hideItems(arr, activeSelector)
    activateItems(renderArray, activeSelector)
}

// Функция добавления обработчиков клика кнопкам
const addButtonClickListeners = (args) => {
    const {
        arr,
        buttonActiveSelector,
        showActiveItems
    } = args

    arr
        .forEach((item, index) => {
            item.addEventListener('click', () => {
                hideItems(arr, buttonActiveSelector)
                item.classList.add(buttonActiveSelector)

                showActiveItems(index)
            })
        })
}

// Отрисовка новостей
const renderNews = () => {
    // Константы
    const newsArray = Array
        .from(document.querySelectorAll(newsSelector))
    const sliderButtonsArray = Array
        .from(document.querySelector(blogButtonsSelector)
            .children)
    const showActiveItemsFunction = (buttonIndex) => {
        showActiveItems({
            arr: newsArray,
            buttonIndex,
            quantity: 4,
            activeSelector: newsActiveSelector
        })
    }

    // Показать начальные элементы
    showActiveItemsFunction(0)

    // Повесить слушатели всем кнопкам
    addButtonClickListeners({
        arr: sliderButtonsArray,
        buttonActiveSelector,
        showActiveItems: showActiveItemsFunction
    })
}

const renderReviews = () => {
    // Константы
    const reviewsArray = Array
        .from(document.querySelectorAll(reviewSelector))
    const reviewsButtonsArray = Array
        .from(document.querySelector(reviewsButtonsSelector)
            .children)

    const showActiveItemsFunction = (buttonIndex) => {
        hideItems(reviewsArray, reviewActiveSelector)
        reviewsArray[buttonIndex]
            .classList
            .add(reviewActiveSelector)
    }

    // Повесить слушатели всем кнопкам
    addButtonClickListeners({
        arr: reviewsButtonsArray,
        buttonActiveSelector,
        showActiveItems: showActiveItemsFunction
    })
}

export {
    showActiveItems,
    renderNews,
    renderReviews
}
