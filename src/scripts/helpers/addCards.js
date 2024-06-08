import { addButtonDisableClass, selectorAddButton } from 'scripts/utils/constants'
import Card from 'scripts/components/card'

// Константы
const addButton = document.querySelector(selectorAddButton)

// Функция выключения кнопки
const disableButton = () => {
    addButton.setAttribute('disabled', '')
    addButton.classList.add(addButtonDisableClass)
}

// Функция добавления карточек в секцию
export const addCards = ({
    cardsArray,
    quantity
}) => {
    cardsArray
        .slice(-quantity)
        .forEach((item) => {
            const card = new Card(item)

            card.renderCard()
        })

    disableButton()
}
