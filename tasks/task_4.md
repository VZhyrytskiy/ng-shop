# Задание 4

## Changelog
- Сделал observable-подгрузку. Чтобы просмотреть, нужно перейти localhost:4200/product-list
- Добавил свой пайп, который добавляет строку ' points' к числу. Чтобы просмотреть, нужно перейти localhost:4200/product-list

[i]Чекбоксами отмечено сделанное[/i]

## Сделано:
1. Применить один или более встроенных пайпов в вашем приложении, например, 
    - для форматирования цены
    - для форматирования даты обновления
    - для форматирования категории в верхний регистр

2. [x] Изменить метод getProducts() сервиса ProductService так, чтобы он возвращал promise/observable. 
   Применить async пайп для отображения данных, предоставленных сервисом ProductService на странице.

3. Создайте OrderByPipe для сортировки массива объектов. 
   Пайп принимает два параметра: 
   - поле в виде строки, по которому необходимо сортировать массив объектов
   - булевый флаг, который определяет порядок сортировки. По умолчанию сортировка по убыванию.

4. Зарегистрируйте OrderByPipe в SharedModule.
   Применить OrderByPipe в вашем приложении для сортировки товаров корзины, 
   реализовать возмомность сортировать массив товаров по цене, количеству, названию 
   c помощью выпадающего списка


