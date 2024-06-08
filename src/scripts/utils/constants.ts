import carsImage from '../../images/cases/cars.png'
import apertureImage from '../../images/cases/aperture.png'
import cakesImage from '../../images/cases/cakes.png'
import chessImage from '../../images/cases/chess.png'
import dinamoImage from '../../images/cases/dinamo.png'
import kudaGoImage from '../../images/cases/kuda-ya-poedu.png'
import mestoImage from '../../images/cases/mesto.png'
import moviesImage from '../../images/cases/movies-explorer.png'
import psyhologistsImage from '../../images/cases/psyhologists.png'
import travelImage from '../../images/cases/travel.png'
import cssImage from '../../images/stack/css3-original.svg'
import expressImage from '../../images/stack/express-original.svg'
import gitImage from '../../images/stack/git-original.svg'
import htmlImage from '../../images/stack/html5-original.svg'
import javaScriptImage from '../../images/stack/javascript-original.svg'
import mongoImage from '../../images/stack/mongodb-original-wordmark.svg'
import nodeImage from '../../images/stack/nodejs-original.svg'
import reactImage from '../../images/stack/react-original.svg'
import sassImage from '../../images/stack/sass-original.svg'
import typeScriptImage from '../../images/stack/typescript.svg'
import webpackImage from '../../images/stack/webpack-original.svg'
import storyBookImage from '../../images/stack/storybook-original.svg'
import reduxImage from '../../images/stack/redux-original.svg'
import reactHookFormImage from '../../images/stack/react-hook-form-logo-only.svg'

import {
    type DataNews,
    type DataPortfolio,
    type NewsSelectors,
    type PortfolioSelectors
} from 'scripts/utils/types'

export const selectorAddButton = '#add-button'
export const addButtonDisableClass = 'button_disabled'
export const burgerSelector = '.header__burger'
export const closeButtonSelector = '.menu__close-button'
export const menuSelector = '.header__menu'
export const menuActiveClass = 'menu_active'

export const newsSelector = '.news'
export const blogButtonsSelector = '.blog__slider-buttons'
export const newsActiveSelector = 'news_active'
export const buttonActiveSelector = 'slider-button_active'
export const reviewSelector = '.review'
export const reviewsButtonsSelector = '.testimonial__slider-buttons'
export const reviewActiveSelector = 'review_active'

export const portfolioSelectors: PortfolioSelectors = {
    container: '.cards',
    template: '#card',
    card: '.card',
    image: '.card__image',
    title: '.card__title',
    subtitle: '.card__subtitle',
    text: '.card__text',
    link: '.button_type_link'
}

export const newsSelectors: NewsSelectors = {
    container: '.timeline',
    template: '#news',
    card: '.news',
    image: '.news__image',
    title: '.news__title',
    date: '.news__subtitle-date',
    comments: '.news__subtitle-comments'
}

export const dataCards: DataPortfolio[] = [
    {
        image: carsImage,
        title: 'Космические автомобили',
        subtitle: 'TypeScript / React / SCSS / Redux',
        text: 'Сайт регистрации автомобилей',
        link: 'https://github.com/ilkor4/stellar-cars'
    },
    {
        image: dinamoImage,
        title: 'БК Динамо',
        subtitle: 'TypeScript / React / SCSS',
        text: 'Сайт баскетбольного клуба Динамо',
        link: 'https://github.com/ilkor4/dinamo'
    },
    {
        image: chessImage,
        title: 'Клуб четырёх лошадей',
        subtitle: 'JS / CSS / HTML',
        text: 'Тестовое задание от Яндекс Крауд',
        link: 'https://github.com/ilkor4/chess'
    },
    {
        image: psyhologistsImage,
        title: 'Teta Psyhologists',
        subtitle: 'JS / CSS / Tilda',
        text: 'Сайт онлайн-консультации психологов',
        link: 'https://github.com/ilkor4/psyhologists'
    },
    {
        image: cakesImage,
        title: 'Cakes by Julia',
        subtitle: 'React',
        text: 'Сайт кондитерских курсов',
        link: 'https://github.com/ilkor4/courses'
    },
    {
        image: apertureImage,
        title: 'Aperture studio',
        subtitle: 'JS / CSS / HTML / MySQL',
        text: 'Сайт студии пошива одежды',
        link: 'https://github.com/ilkor4/aperture'
    },
    {
        image: kudaGoImage,
        title: 'Куда я поеду?',
        subtitle: 'JS / CSS / HTML',
        text: 'Сайт про путешествия',
        link: 'https://github.com/ilkor4/kuda-ya-poedy'
    },
    {
        image: moviesImage,
        title: 'Кинохостинг',
        subtitle: 'JS / CSS / HTML / Express / MongoDB',
        text: 'Кинохостинг с большими возможностями',
        link: 'https://github.com/ilkor4/movies-explorer-frontend'
    },
    {
        image: mestoImage,
        title: 'Место',
        subtitle: 'JS / CSS / HTML / MongoDB',
        text: 'Проект Mesto на Реакте с авторизацией и регистрацией',
        link: 'https://github.com/ilkor4/react-mesto-api-full-gha'
    },
    {
        image: travelImage,
        title: 'Путешествия по России',
        subtitle: 'JS / CSS / HTML',
        text: 'Проект: Путешествие по России',
        link: 'https://github.com/ilkor4/russian-travel'
    }
]

export const dataNews: DataNews[] = [
    {
        image: reactHookFormImage,
        title: 'React Hook Form',
        date: 'Март, 2024',
        comments: ''
    },
    {
        image: reduxImage,
        title: 'Redux',
        date: 'Февраль, 2024',
        comments: ''
    },
    {
        image: storyBookImage,
        title: 'StoryBook',
        date: 'Декабрь, 2023',
        comments: ''
    },
    {
        image: typeScriptImage,
        title: 'TypeScript',
        date: 'Октябрь, 2023',
        comments: ''
    },
    {
        image: sassImage,
        title: 'Sass',
        date: 'Август, 2023',
        comments: ''
    },
    {
        image: expressImage,
        title: 'Express',
        date: 'Июнь, 2023',
        comments: ''
    },
    {
        image: mongoImage,
        title: 'MongoDB',
        date: 'Апрель, 2023',
        comments: ''
    },
    {
        image: nodeImage,
        title: 'Node.JS',
        date: 'Март, 2023',
        comments: ''
    },
    {
        image: reactImage,
        title: 'React',
        date: 'Январь, 2023',
        comments: ''
    },
    {
        image: webpackImage,
        title: 'Webpack',
        date: 'Декабрь, 2022',
        comments: ''
    },
    {
        image: gitImage,
        title: 'Git',
        date: 'Ноябрь, 2022',
        comments: ''
    },
    {
        image: javaScriptImage,
        title: 'JavaScript',
        date: 'Сентябрь, 2022',
        comments: ''
    },
    {
        image: cssImage,
        title: 'CSS3',
        date: 'Май, 2022',
        comments: ''
    },
    {
        image: htmlImage,
        title: 'HTML5',
        date: 'Январь, 2022',
        comments: ''
    }
]
