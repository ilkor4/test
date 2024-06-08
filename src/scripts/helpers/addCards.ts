import { type AddCardsProps } from 'scripts/utils/types'
import Portfolio from 'scripts/components/portfolio'
import {
    addButtonDisableClass,
    portfolioSelectors,
    selectorAddButton
} from 'scripts/utils/constants'

// Константы
const addButton = document
    .querySelector<HTMLButtonElement>(selectorAddButton)

// Функция выключения кнопки
const disableButton = () => {
    addButton
        ?.setAttribute('disabled', '')
    addButton
        ?.classList.add(addButtonDisableClass)
}

// Функция добавления карточек в секцию
export const addCards = ({ cardsArray, quantity }: AddCardsProps) => {
    cardsArray
        .slice(-quantity)
        .forEach((item) => {
            const portfolio = new Portfolio(item, portfolioSelectors)

            portfolio.renderCard()
        })

    disableButton()
}
