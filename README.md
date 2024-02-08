# Accordion

---

## Описание плагина

Простой и доступный плагин аккордеонов с возможностью изменения некоторых параметров.

Демо: https://codepen.io/arti-set-dev/pen/YzjdoEZ

## Загрузка и инициализация

Для загрузки введите команду: `npm i r-accordions`.

после загрузки перед инициализацией напишите базовую html разметку для работы плагина. Она должна выглядеть следующим образом:

```html
<div class="accordion-list">
  <div class="accordion-item">
    <button type="button" class="accordion-btn">Кнопка</button>
    <div class="accordion-content collapse">
      <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus
        magnam necessitatibus cum asperiores dolores nostrum ipsa, cupiditate
        laborum exercitationem! Deleniti dolore itaque eligendi, molestiae iste
        provident officiis possimus nulla.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <button type="button" class="accordion-btn">Кнопка</button>
    <div class="accordion-content collapse">
      <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus
        magnam necessitatibus cum asperiores dolores nostrum ipsa, cupiditate
        laborum exercitationem! Deleniti dolore itaque eligendi, molestiae iste
        provident officiis possimus nulla.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <button type="button" class="accordion-btn">Кнопка</button>
    <div class="accordion-content collapse">
      <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus
        magnam necessitatibus cum asperiores dolores nostrum ipsa, cupiditate
        laborum exercitationem! Deleniti dolore itaque eligendi, molestiae iste
        provident officiis possimus nulla.
      </div>
    </div>
  </div>
</div>
```

Для инициализации пропишите следующий код:

```js
const accordionList = new Accordion(".accordion-list");
```

## Настройки

### speed

**По умолчанию `300`.**
Для изменения скорости измените значение параметра `speed`:

```js
const accordionList = new Accordion(".accordion-list", {
  speed: 700,
});
```

## autoClose

Данный параметр сворачивает предыдущий развёрнутый аккордеон. По умолчанию `false`. Для изменения параметра:

```js
const accordionList = new Accordion(".accordion-list", {
  autoClose: true,
});
```

## horizontalMode

Задаёт горизонтальный режим для аккордеонов при определённой ширине экрана. По умолчанию `false`. Используется Mobile First.

Чтобы включить горизонтальный режим - пропишите следующее:

```js
const accordionList = new Accordion(".accordion-list", {
  horizontalMode: 1200
});
```

## Изменение изначальных классов

Для изменения классов, с которыми работает плагин - пропишите следующее:

```js
const accordionList = new Accordion(".accordion-list", {
  classNames: {
    accordionList: "accordion-list",
    accordionItem: "accordion-item",
    accordionBtn: "accordion-btn",
    accordionContent: "accordion-content",
    showState: "show",
    activeState: "active",
    horizontalState: "horizontal",
  },
});
```

На этом всё. Приятного использования.