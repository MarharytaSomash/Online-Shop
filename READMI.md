ТЗ:
При нажатии на:

1. Лого: пользователя редиректит на главную страницу index.html
2. Sign in: пользователя редиректит на страницу логина/регистрации login.html.
3. Если пользователь залогинен, то вместо Sign in выводится его поле name и
   при нажатии пользователя редиректит на страницу любимых товаров
   favourites.html
4. Сердечко:
5. Если пользователь залогинен: пользователя редиректит на страницу любимых товаров favourites.html
6. Если пользователь не залогинен: пользователя редиректит на страницу логина/регистрации login.html
7. В белом кружочке рядом с иконкой сердечка отображается количество товаров, которое залогиненный пользователь добавил в Избранное.
8. Log out:
9. Кнопка отображается если пользователь залогинен.
10. Для данного пользователя в localStorage меняем значение свойства status
    на false.
11. Пользователя редиректит на главную страницу index.html.

Блоки на главной странице:

1. Шапка сайта
2. Вывод категорий продуктов
   Вывод категорий товаров (index.html)

   Блок категории имеет следующий вид:

   1. Данные берем с массива PRODUCTS в файле js/script.js и записываем в localStorage.setItem(‘products’, JSON.stringify(PRODUCTS)).
      Вывод категорий проивзодим в блок <div class="container" id=«categoriesContainer»></div>,
      который находится на странице index.html.

3. В зависимости от названия категорий, в которых находится товар, выводим на страницу необходимое количество категорий
   (Boat, Car, Aircraft, Helicopter, Bus, Bike).
   Если товар находится в нескольких категориях, например Car и Bus, то выводим этого товар сразу в двух категориях.
4. Заглавие блока Boat – название категории.

Блок c информацией по товару может иметь один из следующих видов:

1. Вывод иконки сердечка, которое показывается, товар находится в массиве favourites или нет.
1. Если товар в favourites, то картинка сердечка images/product\_\_favourite—
   true.png
1. Если товар не в favourites, то картинка сердечка images/
   product\_\_favourite.png

1. При нажатии на сердечко:

1. Если пользователь не залогинен, то редиректим его на страницу login.html
1. Если пользователь залогинен и товар ранее не был добавлен в favourites, то:
1. Меняем картинку сердечка на images/product\_\_favourite—true.png
1. Добавляем id товара в массив favourites в localStorage для данного
   юзера.

1. В шапке сайта в блоке с выводом количества избранных товаров
   меняем значение.

1. Если пользователь залогинен и товар ранее был добавлен в favourites,
   то:
1. Меняем картинку сердечка на images/product\_\_favourite.png
1. Удаляем id товара с массива favourites в localStorage для данного
   юзера.

1. В шапке сайта в блоке с выводом количества избранных товаров
   меняем значение.
1. Вывод изображения товара
1. Вывод названия товара (Aircraft Carrier)
1. Если у товара свойство sale: true, то выводим информацию о скидке.
   , где:
1. Серым цветов выводится стоимость товара price.
1. В зеленом блоке выводится процент скидки salePercent.

Вывод стоимости товара price.

1. Если у данного товара свойство sale: true, то стоимость выводится с
   учетом скидки.

Страница логина/регистрации login.html:

При заходе на страницу в localStorage ищем свойство users.
Если такого свойства там нет, то создаем его и добавляем в него массив USERS с файла js/script.js.

Форма Sign in:

1. Поле для ввода email.
2. Поле для ввода password.
3. Кнопка Sign in.

При сабмите формы:

1. В localStorage в массиве USERS проверяем, есть ли пользователь с введенным
   email и password.
2. Если:
3. Пользователь с данным email не существует в базе, то показываем блок с текстом Invalid email.
4. Пользователь с данным email существует в базе, но пароль не совпадает, то показываем блок с текстом Invalid password.
5. Пользователь с данным email существует в базе и пароль совпадает, то для данного юзера в localStorage в массиве USERS меняем свойство status: true и редиректим на страницу account.html.

Форма Registration:

1. Поле для ввода name.
2. Поле для ввода email.
3. Поле для ввода password.
4. Поле для ввода verify password.
5. Кнопка Create account.

При сабмите формы:

1. Если значения полей password и verify password не совпадают, то показываем
   блок с текстом Password not matches! 2. В localStorage в массиве USERS проверяем, есть ли пользователь с введенным email.
2. Если:
3. Пользователь с данным email существует в базе, то показываем блок с
   текстом User with email <user email> already exist! 2. Пользователь с данным email не существует в базе, то добавляем юзера в localStorage в массив USERS со значением свойства status: true и редиректим на страницу account.html.

   Страница Избранное пользователя favourites.html:

4. Блок Favourite Items с информацией любимых товарах пользователя.

Блок Favourite Items с информацией о любимых товарах пользователя:

1. С localStorage с массива USERS для данного пользователя с массива favourites выводим данные в таблицу id="orderTable".
2. При нажатии на сердечко:
3. Если товар ранее не был добавлен в корзину:
4. Удаляем с таблицы строку товара.
5. Удаляем в localStorage в массиве USERS для данного пользователя в
   массиве favourites объект данного товара.
6. В шапке сайта меняем количество избранных товаров.
