export default class News {
    static selectors = {
        newsContainer: '.timeline',
        newsTemplate: '#news',
        news: '.news',
        newsImage: '.news__image',
        newsTitle: '.news__title',
        newsDate: '.news__subtitle-date',
        newsComments: '.news__subtitle-comments'
    }

    constructor (news) {
        this._image = news.image
        this._title = news.title
        this._date = news.date
        this._comments = news.comments
    }

    _getTemplate = () => {
        return document.querySelector(News.selectors.newsTemplate)
            .content
            .querySelector(News.selectors.news)
            .cloneNode(true)
    }

    _fillImage = (news) => {
        news
            .querySelector(News.selectors.newsImage)
            .style
            .backgroundImage = `url('${this._image}')`
    }

    _fillTitle = (news) => {
        news.querySelector(News.selectors.newsTitle)
            .textContent = this._title
    }

    _fillDate = (news) => {
        news.querySelector(News.selectors.newsDate)
            .textContent = this._date
    }

    _fillComments = (news) => {
        news.querySelector(News.selectors.newsComments)
            .textContent = this._comments
    }

    _fillContent = (news) => {
        this._fillTitle(news)
        this._fillDate(news)
        this._fillComments(news)
        this._fillImage(news)
    }

    renderNews = () => {
        const newsContainer = document.querySelector(News.selectors.newsContainer)
        const news = this._getTemplate()

        this._fillContent(news)

        newsContainer.appendChild(news)
    }
}
