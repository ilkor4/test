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

import {
    type AddButtonClickListenersProps,
    type ShowActiveProps,
    type TCommonArray,
    type TNewsEl,
    type TReview
} from 'scripts/utils/types'

const hideItems = (arr: TCommonArray, activeSelector: string) => {
    arr
        .forEach((item) => {
            if (item.classList.contains(activeSelector)) {
                item.classList.remove(activeSelector)
            }
        })
}

// Функция показа элементов
const activateItems = (arr: TCommonArray, activeSelector: string) => {
    arr
        .forEach((item) => {
            item.classList.add(activeSelector)
        })
}

// Функция показа активных элементов
const showActiveItems = (args: ShowActiveProps) => {
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
const addButtonClickListeners = (args: AddButtonClickListenersProps) => {
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
    const newsArray: TNewsEl[] = Array
        .from(document.querySelectorAll<HTMLLIElement>(newsSelector))
    const sliderButtonsArray = Array
        .from(document.querySelector<HTMLDivElement>(blogButtonsSelector)!
            .children)
    const showActiveItemsFunction = (buttonIndex: number) => {
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
    const reviewsArray: TReview[] = Array
        .from(document.querySelectorAll<HTMLLIElement>(reviewSelector))
    const reviewsButtonsArray = Array
        .from(document.querySelector<HTMLDivElement>(reviewsButtonsSelector)!
            .children)

    const showActiveItemsFunction = (buttonIndex: number) => {
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
