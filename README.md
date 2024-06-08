<h1 align="center">Сайт-портфолио Корнелюка Ильи</h1>
 
---

<img src="./src/images/screen-image.jpg" alt="Сайт Динамо"/>

## Функциональность:

---

- конфигурация `webpack` на typeScript
- рендеринг компонентов через массивы данных
- автоматический прогон тестов и деплой через `github actions`
- стилизация по `БЭМ`
- глобальные переменные стилей и миксины `global.scss, mixin.scss`
- компоненты `card.js, news.js`
- пагинация в секциях блог и отзывы `pagination.js`
- реализована функциональность меню `burger.js`
- хелпер `addCards()` для решения нестандартных задач

## Стек:

---
<div>
  <img id="stack-img" src="./src/images/stack/html5-original.svg" title="HTML5" alt="HTML5" width="50px" height="50px" >
  <img id="stack-img" src="./src/images/stack/css3-original.svg" title="CSS3" alt="CSS3" width="50px" height="50px" >
  <img id="stack-img" src="./src/images/stack/sass-original.svg" title="Sass\Scss" alt="Sass\Scss" width="50px" height="50px" />
  <img id="stack-img" src="./src/images/stack/javascript-original.svg" title="JavaScript" alt="JavaScript" width="50px" height="50px" />
  <img id="stack-img" src="./src/images/stack/typescript.svg" title="TypeScript" alt="TypeScript" width="50px" height="50px" />
  <img id="stack-img" src="./src/images/stack/webpack-original.svg" title="Webpack" alt="Webpack" width="50px" height="50px" />
  <img id="stack-img" src="./src/images/stack/git-original.svg" title="Git" alt="Git" width="50px" height="50px" />
</div>

## Директории проекта:

---

- `.github` — директория с github actions
- `config` — директория с конфигом webpack
- `dist` — директория с production сборкой
- `src` — директория с архитектурой проекта

### Архитектура проекта:
- `src/blocks` — директория со стилями проекта
- `src/blocks/entities` — директория со стилями компонентов, связанными с представлением бизнес-сущностей
- `src/blocks/sections` — директория со стилями секций
- `src/blocks/ui` — директория со стилями ui-элементов
- `src/blocks/widgets` — директория со стилями самостоятельных и полноценных блоков страниц с конкретными действиями
- `src/pages` — директория со страницами приложения
- `src/scripts` — директория со скриптами
- `src/scripts/components` — директория с компонентами
- `src/scripts/helpers` — директория с вспомогательными функциями
- `src/scripts/utils` — директория с утилитами
- `src/vendor` — директория с различным содержимым


## Команды для работы с проектом:

---

- `npm start` - запускает проект в `dev` режиме;
- `npm run build:prod` - сборка проекта в `prod` режиме;
- `npm run build:dev` - сборка проекта в `dev` режиме;
- `npm run lint:html` - запуск линтнера для HTML;
- `npm run lint:markup` - запуск линтнера для разметки`;
- `npm run lint:ts` - запуск линтнера для TypeScript`;
- `npm run lint:ts:fix` - исправление ошибок линтнера для `TypeScript`;
- `npm run lint:scss` - запуск линтнера для `SCSS`;
- `npm run lint:scss:fix` - исправление ошибок линтнера для `SCSS`;

## Ветки (git flow):

---

- `main` - главная ветка
- `develop` - ветка с историей всей разработки
- `release/1.0.0` - ветка с релизом сайта с шаблонным контентом под PixelPerfect
- `release/2.0.0` - ветка с релизом сайта с заполненным контентом
- `release/3.0.0` - ветка с релизом сайта с пагинацией секции блог
- `release/4.0.0` - ветка с релизом сайта на TypeScript

## Ссылки на проект:

---

- `Адрес репозитория:` https://github.com/ilkor4/portfolio
- `Деплой:` https://ilkor4.ru
- `Над проектом работал:` https://github.com/ilkor4

