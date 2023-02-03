# Accordion
---
## Описание плагина

Простой и доступный плагин аккордеонов с возможностью изменения некоторых параметров.

Демо: https://codepen.io/arti-set-dev/pen/YzjdoEZ

## Загрузка и инициализация

Для загрузки введите команду: `npm i r-accordion`.

после загрузки перед инициализацией напишите базовую html разметку для работы плагина. Она должна выглядеть следующим образом
```html 
 <div class="accordion-list">
    <div class="accordion-item">
      <div class="accordion-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore numquam nisi dolorum impedit exercitationem, veniam tempora, officia laborum sint odio quod enim nihil non ea deleniti natus totam. Soluta?
      </div>
      <button type="button" class="accordion-btn">
        Развернуть аккордеон 1
        <span class="arrow-icon"></span>
      </button>
    </div>
    <div class="accordion-item">
      <button type="button" class="accordion-btn">Развернуть аккордеон 2</button>
      <div class="accordion-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore numquam nisi dolorum impedit exercitationem, veniam tempora, officia laborum sint odio quod enim nihil non ea deleniti natus totam. Soluta?
      </div>
    </div>
    <div class="accordion-item">
      <button type="button" class="accordion-btn">Развернуть аккордеон 3</button>
      <div class="accordion-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore numquam nisi dolorum impedit exercitationem, veniam tempora, officia laborum sint odio quod enim nihil non ea deleniti natus totam. Soluta?
      </div>
    </div>
  </div>
```

Для инициализации пропишите следующий код: 
```js
const accordionList = new Accordion('.accordion-list');
```
## Настройки

### speed

**По умолчанию `300`.** 
Для изменения скорости измените значение параметра `speed`:
```js
const accordionList = new Accordion('.accordion-list', {
  speed: 700,
});
```
## autoClose

Данный параметр сворачивает предыдущий развёрнутый аккордеон. По умолчанию `false`. Для изменения параметра: 
```js
const accordionList = new Accordion('.accordion-list', {
  autoClose: true, 
});
```

## Изменение изначальных классов

Для изменения классов, с которыми работает плагин - пропишите следующее:
```js
const accordionList = new Accordion('.accordion-list', {
  classNames: {
    accordionItem: 'accordion-item', // Ваш класс...
    accordionBtn: 'accordion-btn', // Ваш класс...
    accordionContent: 'accordion-content', // Ваш класс...
    showContent: 'show', // Ваш класс...
    arrowIcon: 'arrow-icon', // Ваш класс...
    arrrowIconActive: 'icon-active', // Ваш класс...
    btnItemActive: 'accordion-btn-active', // Ваш класс...
  }
});
```