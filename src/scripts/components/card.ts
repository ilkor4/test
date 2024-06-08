import {
    type CommonSelectorsInterface,
    type DataCard,
    type ICard,
    type TCardEl
} from 'scripts/utils/types'

export default class Card implements ICard<TCardEl> {
    protected _image: string
    protected _title: string
    protected _containerSelector: string
    protected _templateSelector: string
    protected _cardSelector: string
    protected _imageSelector: string
    protected _titleSelector: string

    constructor (card: DataCard, selectors: CommonSelectorsInterface) {
        this._image = card.image
        this._title = card.title
        this._containerSelector = selectors.container
        this._templateSelector = selectors.template
        this._cardSelector = selectors.card
        this._imageSelector = selectors.image
        this._titleSelector = selectors.title
    }

    readonly _getTemplate = () => {
        return document.querySelector<HTMLTemplateElement>(this._templateSelector)!
            .content
            .querySelector<HTMLLIElement>(this._cardSelector)!
            .cloneNode(true) as TCardEl
    }

    readonly _fillImage = (card: TCardEl) => {
        card
            .querySelector<HTMLDivElement>(this._imageSelector)!
            .style
            .backgroundImage = `url('${this._image}')`
    }

    readonly _fillTitle = (card: TCardEl) => {
        card
            .querySelector<HTMLHeadingElement>(this._titleSelector)!
            .textContent = this._title
    }

    public _fillContent (card: TCardEl) {
        this._fillTitle(card)
        this._fillImage(card)
    }

    renderCard () {
        const cardContainer = document
            .querySelector<HTMLUListElement>(this._containerSelector)!
        const card: TCardEl = this._getTemplate()

        this._fillContent(card)

        cardContainer?.appendChild(card)
    }
}
