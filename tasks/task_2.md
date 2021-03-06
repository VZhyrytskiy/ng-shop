# Angular 5+ Components

## Changelog
- сделано все, что просят в задании
- Страница about -> /about
- Страница продуктов -> /product-list
- Страница корзины -> /cart

[i]Чекбоксами отмечено сделанное[/i]

## Сделано:
1. [x] Разбить приложение на несколько модулей:
    - AppModule, 
    - CartModule, 
    - ProductsModule, 
    - OrdersModule, 
    - CoreModule    (то, что в единичном варианте, восновном для регистрации сервисов, optional)
    - SharedModule (то, что много раз используется: компоненты, директивы, пайпы)
   
2. [x] Создайте или модифицируйте ProductListComponent, который делегирует отображение списка товаров
   компоненту ProductComponent. Товары компоненту предоставить с помощью метода getProducts() сервиса ProductService.

3. [x] Реализовать возможность добавления товара в корзину (click), если товар есть в наличии (доступен). 
   Товар в корзину должен добавлять ProductListComponent. 
   ProductComponent реализовать как презентационный компонент с инпутами и аутпутами без зависимостей.
   Если товара нет, кнопку делать недоступной. 

4. [x] Создайте или модифицируйте CartListComponent, который отображает список купленных товаров. 
   Кроме списка купленных товаров, отображать количество купленных товаров и общую сумму.

5. [x] Создайте компонент СartItemComponent, который отображает одну сущность из списка выше. 
   Используйте этот компонент в CartListComponent. 
   Реализовать возможность изменить количество товара, удалить товар из корзины.

6. [x] По возможности использовать декораторы: @Input(), @Output().

7. По возможности использовать OnPстратегию для компонентов.

8. По возможности использовать два или более метода-хука жизненого цикла компонента.

9. Использовать DOM событие (click, wheel, blur...).

10. [x] Создать или модифицировать сервис (CartService) для предоставления данных компоненту CartListComponent, 
   подсчета количества и суммы.

11. [x] Добавить в разметку AppComponent элемент <h1 #appTitle></h1> с шаблонной переменной.
    Использовать @ViewChild, получить доступ к DOM элементу темплейта, 
    установить заголовок для приложения из класса.

12. [x] При наведении мышки на товар в корзине (CartItemComponent) стилизировать его изменением фона. 
    Для этого создать директиву и зарегистрировать ее в SharedModule.
    Использовать @HostBinding, @HostListener декораторы.

13. [x] По возможности применить директиву ngClass или ngStyle. 

14. Реализуйте свою небольшую функциональность.

15. [x] Опишите изменения в проекте. 

16. [x] Если вы вели разработку в отдельной ветке, то добавьте все в мастер.
