export default class Card {
    static selectors = {
        cardsContainer: '.cards',
        cardTemplate: '#card',
        card: '.card',
        cardImage: '.card__image',
        cardTitle: '.card__title',
        cardSubtitle: '.card__subtitle',
        cardText: '.card__text',
        cardLink: '.button_type_link'
    }

    constructor (card) {
        this._image = card.image
        this._title = card.title
        this._subtitle = card.subtitle
        this._text = card.text
        this._link = card.link
    }

    _getTemplate = () => {
        return document.querySelector(Card.selectors.cardTemplate)
            .content
            .querySelector(Card.selectors.card)
            .cloneNode(true)
    }

    _fillImage = (card) => {
        card
            .querySelector(Card.selectors.cardImage)
            .style
            .backgroundImage = `url('${this._image}')`
    }

    _fillTitle = (card) => {
        card.querySelector(Card.selectors.cardTitle)
            .textContent = this._title
    }

    _fillTSubtitle = (card) => {
        card.querySelector(Card.selectors.cardSubtitle)
            .textContent = this._subtitle
    }

    _fillText = (card) => {
        card.querySelector(Card.selectors.cardText)
            .textContent = this._text
    }

    _fillLink = (card) => {
        card.querySelector(Card.selectors.cardLink)
            .setAttribute('href', this._link)
    }

    _fillContent = (card) => {
        this._fillTitle(card)
        this._fillTSubtitle(card)
        this._fillText(card)
        this._fillImage(card)
        this._fillLink(card)
    }

    renderCard = () => {
        const cardContainer = document.querySelector(Card.selectors.cardsContainer)
        const card = this._getTemplate()

        this._fillContent(card)

        cardContainer.appendChild(card)
    }
}
