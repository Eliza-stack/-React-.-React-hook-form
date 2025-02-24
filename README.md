# Описание
Небольшой React-приложение, которое помогает рассчитать итоговую сумму покупки с учетом скидки. Пользователь вводит данные о товаре, и приложение автоматически вычисляет итог. Также реализована проверка на корректность введенных значений.

<img src="https://github.com/user-attachments/assets/4588713e-7862-4835-9c0b-0b4f2f0cf63a" height=500 width=400>


## Технологии
-  **React:** Используется для создания компонентов и управления состоянием приложения.
Ant Design: Библиотека компонентов, которая придает интерфейсу стильный и современный вид.
- **Framer Motion:** Используется для добавления плавных анимаций при обновлении итоговой суммы. Хотя анимации делают интерфейс более привлекательным, у меня возникли некоторые сложности с их настройкой 😅.
- **SCSS:** Препроцессор для удобной стилизации приложения.

## Функционал
Ввод данных о товаре: название, количество, цена и скидка.
Автоматический расчет итоговой суммы.
Проверка на корректность введенных данных.
Кнопка "Очистить" для сброса формы.
Плавная анимация итоговой суммы.


### Структура проекта
```
...
│
├── /src
│   ├── /component
│   │   ├── /DiscountForm
│   │   │   └── DiscountForm.jsx
│   │   ├── /TotalAmount
│   │   │   └── TotalAmount.jsx
│   ├── App.jsx
│   └── App.scss
│   
│
├── package.json
└── README.md

```
## Доработки
**Стилизация:** Улучшить внешний вид компонентов для лучшего пользовательского опыта.