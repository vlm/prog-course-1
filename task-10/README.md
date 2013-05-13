
Изучим Flight. Это такой JavaScript фреймворк нового стиля. В нём нет
прямых связей между моделями, а обмен информацией происходит с помощью
посылки сообщений.

Установите bower с гитхаба для управления зависимостями (легче всего установить `bower` с помощью `npm`, который часть экосистемы Node.JS).
Bower — это новомодный package manager для JS-проектов.
Создайте файл `bower.json`, в котором запишите:

```javascript
{
  "name": "myApp",
  "version": "1.2.1",
  "dependencies": {
    "flight": "~1.0.0"
  }
}
```

Теперь сделайте `bower install`. Это создаст в текущем каталоге
проект с этими зависимостями.

А, да. Ещё добавьте в зависимости `require.js` вот таким образом:

```sh
bower install --save requirejs
```

Посмотрите, что получится в итоге в `bower.json`.

Теперь создайте HTML и главный модуль вашего приложения:

`index.html`:
```html
<script src="components/jquery/jquery.js"></script>
<script src="components/es5-shim/es5-shim.js"></script>
<script src="components/es5-shim/es5-sham.js"></script>
<script data-main="main.js" src="components/requirejs/require.js"></script>
```

`main.js`:
```javascript
define(
  [
    'components/flight/lib/component'
  ],

  function(defineComponent) {
        console.log("Dummy flight component is being loaded");
  }
);
```

Если у вас будут проблемы с кэшированием main.js, [здесь](http://stackoverflow.com/questions/11088909/expire-cache-on-require-js-data-main) ответ.

## Задание

Сделайте два Flight-компонента: один, отвечающий за кнопку (т.е. связанный с input-элементом в DOM'е), а другой — отвечающий за textarea. При нажатии на кнопку содержимое textarea должно меняться. Например, туда должна записываться текущая дата.

