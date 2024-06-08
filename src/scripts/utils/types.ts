export type TCardEl = HTMLLIElement
export type TNewsEl = HTMLLIElement
export type TPortfolioEL = HTMLLIElement
export type TReview = HTMLLIElement
export type TButton = Element
export type TCommonArray = TReview[] | TNewsEl[] | TButton[]

export interface ICard<Type> {
    _getTemplate: () => Type
    _fillImage: (card: Type) => void
    _fillTitle: (card: Type) => void
    _fillContent: (card: Type) => void
    renderCard: () => void
}

export interface IPorfolio extends ICard<TPortfolioEL> {
    _fillSubtitle: (card: TPortfolioEL) => void
    _fillText: (card: TPortfolioEL) => void
    _fillLink: (card: TPortfolioEL) => void
}

export interface INews extends ICard<TNewsEl> {
    _fillDate: (card: TNewsEl) => void
    _fillComments: (card: TNewsEl) => void
}

export interface CommonSelectorsInterface {
    container: string
    template: string
    card: string
    image: string
    title: string
}

export interface PortfolioSelectors extends CommonSelectorsInterface {
    subtitle: string
    text: string
    link: string
}

export interface NewsSelectors extends CommonSelectorsInterface {
    date: string
    comments: string
}

export interface DataCard {
    image: string
    title: string
}

export interface DataPortfolio extends DataCard {
    text: string
    subtitle: string
    link: string
}

export interface DataNews extends DataCard {
    date: string
    comments: string
}

export interface AddCardsProps {
    cardsArray: DataPortfolio[]
    quantity: number
}

export interface ShowActiveProps {
    arr: TCommonArray
    buttonIndex: number
    quantity: number
    activeSelector: string
}

export interface AddButtonClickListenersProps {
    arr: TButton[]
    buttonActiveSelector: string
    showActiveItems: (buttonIndex: number) => void
}
