
В первой части курса мы будем погружаться в JavaScript, начиная от DOM, заканчивая библиотеками типа jQuery (http://en.wikipedia.org/wiki/Jquery) и фреймворками типа Bootstrap (http://twitter.github.com/bootstrap/) и Flight (http://gigaom.com/2013/01/31/want-to-build-a-better-twitter-heres-a-framework-for-you/).

Начнём с очень простых вещей, чтобы выровнять начальный уровень группы и дать возможность ознакомиться с инструментами разработки и коллаборации (debug menu в браузере, БейзКемп, github, etc).

### Цели первого задания

* Научиться играться с дебаггером хрома,
* покрутить вживую несколько CSS атрибутов,
* познакомиться с Git и [GitHub](http://github.com/).

### Задание

1. На своей машине создайте HTML-файл (назвав его, например, index.html), с таким содержимым:
```html
    <!DOCTYPE html>
    <html>
    <body>
    <div id="someId">Some text content</div>
    </body>
    </html> 
```

2. Откройте этот файл в Google Chrome. Посмотрите на элемент "someId" в дебаггере (см. первую картинку в аттаче). Обратите внимание, что в дебаггере отображается иерархическая структура документа — с `<html>`, включающим в себя `<body>`, и `<body>`, включающим в себя `<div>`.
![Inspect element][inspect]
3. **Редактирование стилей документа прямо в браузере**. Попробуйте из хромовского дебаггера поменять какие-то значения стилей для этого элемента, например, `font-weight:`, `color:`, `background-color:`.
![Inspect element][cssplay]
4. **Указание стилей непосредственно в HTML**. Теперь добавьте в HTML-документ между `<html>` и `<body>` раздел `<style>`, и впишите в него три-пять спецификаций различных CSS-атрибутов, чтобы текст "Some text content" выглядел более впечатляюще, чем по умолчанию. Списки различных CSS-атрибутов, которыми можно поиграть, вам контекстно подскажет сам Chrome, а также их можно добыть в одном из сайтов про CSS, приведённых ниже.
5. Создайте новый проект на [GitHub](http://github.com/) и сохраните этот документ на нём как index.html.

[inspect]: https://github.com/vlm/prog-course-1/raw/master/task-1/chrome-inspect-element.png "Chrome's Inspect Element Menu"
[cssplay]: https://github.com/vlm/prog-course-1/raw/master/task-1/chrome-change-font-weight.png "Playing with CSS in Chrome"

### Ссылки для справки и самостоятельного изучения:

HTML:
* «Книжка» про HTML http://htmlbook.ru/samhtml — всю читать не нужно, но достаточно знать, что такое `<html>`, `<div>`, `<p>`, `<em>`.
* Ещё туториал есть здесь: http://www.quackit.com/html_5/tags/html_doctype_tag.cfm

CSS:
* На том же сайте есть и про CSS: http://htmlbook.ru/samcss — аналогично, достаточно выяснить, что такое свойства `color:`, `background-color:`, `width:`, `font-weight:`.
* http://www.quackit.com/css/tutorial/css_class.cfm

JavaScript:
* Есть замечательный сайт с быстрым погружением в синтаксис JavaScript: http://www.codecademy.com/

Git:
* http://habrahabr.ru/post/125799/
* http://git-scm.com/book/ru

