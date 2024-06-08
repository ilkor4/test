import {
    type DataPortfolio,
    type IPorfolio,
    type PortfolioSelectors,
    type TPortfolioEL
} from 'scripts/utils/types'
import Card from 'scripts/components/card'

export default class Portfolio extends Card implements IPorfolio {
    protected _subtitle: string
    protected _text: string
    protected _link: string
    protected _subtitleSelector: string
    protected _textSelector: string
    protected _linkSelector: string

    constructor (portfolio: DataPortfolio, selectors: PortfolioSelectors) {
        super(portfolio, selectors)

        this._subtitle = portfolio.subtitle
        this._text = portfolio.text
        this._link = portfolio.link
        this._subtitleSelector = selectors.subtitle
        this._textSelector = selectors.text
        this._linkSelector = selectors.link
    }

    readonly _fillSubtitle = (portfolio: TPortfolioEL) => {
        portfolio
            .querySelector<HTMLParagraphElement>(this._subtitleSelector)!
            .textContent = this._subtitle
    }

    readonly _fillText = (portfolio: TPortfolioEL) => {
        portfolio
            .querySelector<HTMLParagraphElement>(this._textSelector)!
            .textContent = this._text
    }

    readonly _fillLink = (portfolio: TPortfolioEL) => {
        portfolio
            .querySelector<HTMLLinkElement>(this._linkSelector)!
            .setAttribute('href', this._link)
    }

    readonly _fillContent = (portfolio: TPortfolioEL) => {
        super._fillContent(portfolio)

        this._fillSubtitle(portfolio)
        this._fillText(portfolio)
        this._fillLink(portfolio)
    }
}
