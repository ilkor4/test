import Card from 'scripts/components/card'
import {
    type DataNews,
    type INews,
    type NewsSelectors,
    type TNewsEl
} from 'scripts/utils/types'

export default class News extends Card implements INews {
    protected _date: string
    protected _comments: string
    protected _dateSelector: string
    protected _commentsSelector: string

    constructor (news: DataNews, selectors: NewsSelectors) {
        super(news, selectors)

        this._date = news.date
        this._comments = news.comments
        this._dateSelector = selectors.date
        this._commentsSelector = selectors.comments
    }

    _fillDate = (news: TNewsEl) => {
        news
            .querySelector<HTMLSpanElement>(this._dateSelector)!
            .textContent = this._date
    }

    _fillComments = (news: TNewsEl) => {
        news
            .querySelector<HTMLSpanElement>(this._commentsSelector)!
            .textContent = this._comments
    }

    _fillContent = (news: TNewsEl) => {
        super._fillContent(news)

        this._fillDate(news)
        this._fillComments(news)
    }
}
