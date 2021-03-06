# Angular: Services and DI

## Changelog
- сделано все, что просят в задании
- Страница about -> localhost:4200/about

[i]Чекбоксами отмечено сделанное[/i]

## Сделано:
1. [x] Создайте/модифицируйте сервис CartService (cart/services/cart.service.ts), который должен содержать данные корзины интернет магазина и управлять содержимым.
    Сервис должен хранить информацию: 
        о добавленных товарах в корзину
        общее количество товаров в корзине
        общую сумму товаров в корзине
    Сервис должен предоставлять следующий функционал:
        добавить в корзину товар с количеством
        удалить указанный товар из корзины
        увеличить/уменьшить количество для указаного товара
        очистить корзину
        пересчитать общее количество товара и сумму после каждой операции, которая влияет на корзину

2. [x] Создайте сервис LocalStorageService (core/services/local-storage.service.ts), который позволит работать 
   с window.localStorage (как класс, useClass). 
   Он должен предоставлять методы для:
    - установки значения (setItem)
    - получения значения (getItem)
    - удаления значения (removeItem)

3. [x] Создайте сервис ConfigOptionsService (core/services/config-options.service.ts), который должен хранить объект настроек (id, login, email, ...).
   Сервис должен предоставлять методы для установки и извлечения данных. Метод установки на вход принимает объект,
   а метод извлечения данных возвращает объект. Предусмотреть возможность установки подмножества свойств.
   Например, { id, login } 

4. [x] Создайте сервис ConstantsService (core/services/constant.service.ts), в виде готового литерала объекта,
   например { App: "TaskManager", Ver: "1.0" }. Зарегистрируйте его, используя useValue.

5. [x] Создайте сервис GeneratorService (core/services/generator.ts), который должен генерировать случайную последовательность символов длины n 
   из набора a-z, A-Z, 0-9. Создайте GeneratorFactoryService(n: number), оторый будет предоставлять сгенереную строку.
   Зарегистрируйте его используя useFactory.  

6. [x] Создайте или используйте ранее созданный CoreModule и зарегистриуйте в нем LocalStorageService, ConfigOptionsService, 
   ConstantsService, GeneratorService, GeneratorFactoryService
   Подключите модуль к приложению. 
   Начиная с 6 версии можно испольовать для регистрации сервисов @Injectable({ providedIn: ...})
   без добавления сервисов в providers: [] CoreModule.

7. [x] Создайте демо-компонент AboutComponent (layout/components/about.component.ts) и внедрите перечисленные выше сервисы.  
   Используйте декоратор @Optional().

8. [x] Напишите директиву shared/directives/<directive-name>, которая добавляет обработчик события click к хост элементу. 
   Клик изменяет размер шрифта элемента, рамку или что-то другое на Ваше усмотрение. 
   Добавьте @Input() для директивы. Используйте ElementRef/Renderer2

