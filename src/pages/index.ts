import './index.scss'
import { addCards } from 'scripts/helpers/addCards'
import News from 'scripts/components/news'
import Portfolio from 'scripts/components/portfolio'
import {
    renderNews,
    renderReviews
} from 'scripts/helpers/pagination'

import {
    burgerButton,
    closeBurger,
    closeButton,
    openBurger
} from 'scripts/components/burger'

import {
    dataCards,
    dataNews,
    newsSelectors,
    portfolioSelectors,
    selectorAddButton
} from 'scripts/utils/constants'

// Объявил константы
const addButton = document
    .querySelector<HTMLButtonElement>(selectorAddButton)

// Рендеринг 6 карточек в секцию портфолио
dataCards
    .splice(0, 6)
    .forEach((item) => {
        const portfolio = new Portfolio(item, portfolioSelectors)

        portfolio
            .renderCard()
    })

// Рендеринг 8 технологий в секцию блог
dataNews
    .forEach((item) => {
        const news = new News(item, newsSelectors)

        news
            .renderCard()
    })

// Повесил обработчик события на добавление карточек в секции портфолио
addButton
    ?.addEventListener('click', () => {
        addCards({
            cardsArray: dataCards,
            quantity: 3
        })
    })

// Повесил обработчики событий на открытие/закрытия меню
burgerButton
    ?.addEventListener('click', openBurger)
closeButton
    ?.addEventListener('click', closeBurger)

// Повесил обработчики событий на полную загрузку страницы
window.onload = () => {
    renderNews()
    renderReviews()
}
