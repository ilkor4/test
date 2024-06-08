import './index.scss'
import Card from 'scripts/components/card'
import { dataCards, dataNews, selectorAddButton } from 'scripts/utils/constants'
import { addCards } from 'scripts/helpers/addCards'
import News from 'scripts/components/news'
import { burgerButton, closeBurger, closeButton, openBurger } from 'scripts/components/burger'
import { renderNews, renderReviews } from 'scripts/helpers/pagination'

// Объявил константы
const addButton = document.querySelector(selectorAddButton)

// Рендеринг 6 карточек в секцию портфолио
dataCards
    .splice(0, 6)
    .forEach((item) => {
        const card = new Card(item)

        card.renderCard()
    })

// Рендеринг 8 технологий в секцию блог
dataNews
    .forEach((item) => {
        const news = new News(item)

        news.renderNews()
    })

// Повесил обработчик события на добавление карточек в секции портфолио
addButton.addEventListener('click', () => {
    addCards({
        cardsArray: dataCards,
        quantity: 3
    })
})

// Повесил обработчики событий на открытие/закрытия меню
burgerButton.addEventListener('click', openBurger)
closeButton.addEventListener('click', closeBurger)

// Повесил обработчики событий на полную загрузку страницы
window.onload = () => {
    renderNews()
    renderReviews()
}
