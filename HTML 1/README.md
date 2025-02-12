# Лабораторная №1

## Упражнение 1.1

```
<!DOCTYPE html>
<html>
  <head>
    <title>Моя первая веб-страница</title>
  </head>
  <body>
    <p>Это текст моей первой страницы</p>
  </body>
</html>
```

![image](https://github.com/user-attachments/assets/706d17dc-d485-47ed-bdb6-daa55588a00a)

-	html - корневой элемент HTML-документа. Сообщает браузеру, что это HTML-документ. Является контейнером для всех остальных html-элементов.
-	head - элемент-контейнер для метаданных HTML-документа, таких как title meta script link style.
-	meta - используется для хранения дополнительной информации о странице. Эту информацию используют браузеры при обработке страницы, а поисковые системы — для ее индексации. В блоке head может быть несколько элементов meta, так как в зависимости от используемых атрибутов они несут разную информацию.
-	title - заголовок HTML-документа, отображаемый в верхней части строки заголовка браузера.
-	body - представляет тело документа, т. е. содержимое, не относящееся к метаданным документа.

-	p - абзац текста.

## Упражнение 1.2

```
<!-- Таким образом создаются комментарии -->
<!-- Комментарии могут быть в любой части кода HTML -->
<!DOCTYPE html>
<html>
 <head>
 <!--Добавляем тэг meta -->
  <meta charset=”utf-8">
  <title>Моя первая веб-страница</title>
 </head>
 <body>
<!--Добавляем тэг p, который определяет текстовый абзац -->
 <p>Это текст моей первой страницы</p>
 </body>
</html>

```

#### Внешне сайт не изменился

-	meta - charset используется для выбора кодировки сайта.

## Упражнение 1.3

```
<!-- Таким образом создаются комментарии -->
<!-- Комментарии могут быть в любой части кода HTML -->
<!DOCTYPE html>
<html>
  <head>
  <!--Добавляем тэг meta -->
    <meta charset=”utf-8">
    <title>Моя первая веб-страница</title>
  </head>
  <body>
    <!--Добавляем тэг p, который определяет текстовый абзац -->
    <p title = "information">Это текст моей первой страницы</p>
    <a href = "http://www.w3.org">Это гиперссылка на сайт Консорциума Всемирной паутины</a><br />
    <img src="mountain.jpg" alt="Tulips" width="104" height="142"/> 
  </body>
</html>
```

![image](https://github.com/user-attachments/assets/d9d2375e-8eb2-497a-81e7-b5eee55d1c31)

-	meta - charset используется для выбора кодировки сайта.

## Упражнение 1.4

#### ex2.html
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset=”utf-8">
    <title>Моя первая веб-страница</title>
  </head>
  <body bgcolor="SeaGreen" text = "#800080">
    <p align = "center"><font face="Arial" size="7">Это текст моей первой страницы</font></p>
    <a href = "http://www.w3.org">Это гиперссылка на сайт Консорциума Всемирной паутины</a><br />
    <img src="mountain.jpg" alt="Tulips" width="104" height="142"/> 
  </body>
</html>
```

![image](https://github.com/user-attachments/assets/256341cf-6568-4b94-9ed4-b707002f4265)


#### ex3.html
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset=”utf-8">
    <title>Моя первая веб-страница</title>
  </head>
  <body style = "background-color:SeaGreen; color:#800080">
    <p style = "font:3em Arial; text-align:center">Это текст моей первой страницы</p>
    <a href = "http://www.w3.org">Это гиперссылка на сайт Консорциума Всемирной паутины</a><br />
    <img src="mountain.jpg" alt="Tulips" width="104" height="142"/> 
  </body>
</html>
```

![image](https://github.com/user-attachments/assets/8b180e35-fe57-4b69-8ba4-224cb5265e1f)

-	bgcolor - аргумент для изменения цвета фона элемента
-	align - аргумент для выравнивания текста
-	font - тег для изменения шрифта текста
-	style - аргумент для стилизации элемента

#### Вывод
Сайты почти не отличаются, но первый сделан с помощью аргументов, а второй с помощью css стилей в style, лучше использовать style для стилизации, так как аргументы считаются устаревшими

## Упражнение 1.5

```
<!-- Таким образом создаются комментарии -->
<!-- Комментарии могут быть в любой части кода HTML -->
<!DOCTYPE html>
<html>
 <head>
  <!--Добавляем тэг meta -->
  <meta charset=”utf-8">
  <title>Моя первая веб-страница</title>
 </head>
 <body>
<!--Добавляем тэг p, который определяет текстовый абзац -->
  <p title = “Information”>Это текст моей первой страницы</p>

  <pre>CSS - 
    это      язык        описания 
    внешнего       вида         документа, 
    написанного 
    с       использованием 
    языка                        разметки</pre>
  <a href = "http://www.w3.org">Это гиперссылка на сайт Консорциума Всемирной паутины</a><br />
  <img src="mountain.jpg" alt="Tulips" width="104" height="142"/> 
 </body>
</html>

```

![image](https://github.com/user-attachments/assets/e4751d28-659a-4f75-a32a-5177299a35c6)

-	pre - тег, который сохраняет все пробелы и переносы строк

#### Вывод
Пробелы и переносы строк не являются значимыми в html

## Упражнение 1.6

```
<!-- Таким образом создаются комментарии -->
<!-- Комментарии могут быть в любой части кода HTML -->
<!DOCTYPE html>
<html>
 <head>
  <!--Добавляем тэг meta -->
  <meta charset=”utf-8">
  <title>Моя первая веб-страница</title>
 </head>
 <body>
<!--Добавляем тэг p, который определяет текстовый абзац -->
  <p title = “Information”>Это текст моей первой страницы</p>

  <pre>CSS - 
    это      язык        описания 
    внешнего       вида         документа, 
    написанного 
    с       использованием 
    языка                        разметки</pre>
  <a href = "http://www.w3.org">Это гиперссылка на сайт Консорциума Всемирной паутины</a><br />
  <img src="mountain.jpg" alt="Tulips" width="104" height="142"/>
  <p> Цену товаров компании &quot;QWERTY &trade;&quot; необходимо пересчитать с учетом курса &euro; к &pound; &plusmn; наценка для региона</p></br>
 </body>
</html>
```

![image](https://github.com/user-attachments/assets/9cf8ea5e-4788-4ea5-858c-5fb898f653c7)

#### Вывод
В html есть спецсимволы, которые отсутствуют на клавиатуре или они являются специализированными

## Упражнение 2.1

```
<!DOCTYPE html>
<html>
<head>
  <title>Работа с текстом</title>
</head>
<body>
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>
</body>
</html>
```

![image](https://github.com/user-attachments/assets/928b8a13-8e62-4f86-9446-94ec511dc5ee)

-	h1-6 - теги, который создают разные по значимости заголовки

## Упражнение 2.2

```
<!DOCTYPE html>
<html>
<head>
  <title>Работа с текстом</title>
</head>
<body>

<h1>ООО "Рога & K<sup>o</sup>"</h1>

<h2><i>Наши пуговицы - Ваше все!</i></h2>

<p>Мы осуществляем выпуск <em>всех</em> разновидностей <b>пуговиц</b>, 
изготавливаем пришивные пуговицы на ножке или традиционные, 
с несколькими отверстиями посередине.</p> 

<p>Нашу продукцию можно приобрести по <del> всему Северо-Западному региону </del> <ins>по всей России</ins>  у представителей компании.</p>

<p>Кроме того, именно у нас вы можете сделать заказ на <strong>эксклюзивные изделия</strong>, которые будут только на вашей одежде. Мы также выполняем заказы различных  компаний на производство пуговиц <mark>с логотипами или любыми другими надписями и рисунками</mark>. Посетите наш каталог, и вы обязательно найдете для себя изделия по душе!</p>

<h2>Интересное о пуговицах</h2>

<p>Пуговица — небольшой предмет любой формы с отверстиями или ушком для пришивания к одежде. В более узком варианте — застёжка на одежде и других швейных изделиях, предназначенная для соединения её частей (пуговица на одной части одежды вдевается в петлю, находящуюся на другой части, и тем самым осуществляется застёгивание).</p> 

<p>Коллекционирование пуговиц называется филобутонистика.</p>

<p>Знаете ли вы, что Первая Мировая война случилась из-за плохо расстегивающихся пуговиц? Эрцгерцог Франц-Фердинанд умер после выстрела только из-за того, что на расстегивание 
всех его пуговиц для обработки раны потребовалось слишком много времени.</p>

<p><b>Наша контактная информация:</b></p>
<p> 
Россия, <br />
Санкт-Петербург, <br />
ул.Ленина, д.1<br />
(812)123-4567
</p>
</body>
</html>
```

![image](https://github.com/user-attachments/assets/b2d68b64-0e90-4302-b329-f7c7bd0aa5b9)


- b - bold  - жирное начертание; 
- em - emphasized – смысловое ударение;  
- i - italic – курсив; 
- small - smaller – шрифт, уменьшенный на единицу относительно текущего; 
- strong - important – акцентирование текста; 
- sub - subscripted – подстрочный текст; 
- sup - superscripted – надстрочный текст; 
- ins - inserted – выделение добавленного в новую версию документа текст; 
- del - deleted – удаленный (вычеркнутый) текст; 
- mark - marked/highlighted – выделенный текст. 

#### Вывод
В html есть тэги для базовой стилизации текста не используя CSS.

## Упражнение 2.3

```
<!DOCTYPE html>
<html>
<head>
  <title>Работа с текстом</title>
</head>

<body>

<h1>ООО "Рога & K<sup>o</sup>"</h1>
<h2><i>Наши пуговицы - Ваше все!</i></h2>
<p>Мы осуществляем выпуск <em>всех</em> разновидностей <b>пуговиц</b>, 
изготавливаем пришивные пуговицы на ножке или традиционные, с несколькими отверстиями посередине.</p> 
<p>Нашу продукцию можно приобрести по <del> всему Северо-Западному региону </del>
<ins>по всей России</ins> у представителей компании.</p>
<p>Кроме того, именно у нас вы можете сделать заказ на <strong>эксклюзивные изделия</strong>, которые будут только на вашей одежде. Мы также выполняем заказы различных компаний на производство пуговиц <mark>с логотипами или любыми другими надписями и рисунками</mark>. Посетите наш каталог, и вы обязательно найдете для себя изделия по душе!</p>

<h2>Интересное о пуговицах</h2>
<p>Пуговица — небольшой предмет любой формы с отверстиями или ушком для пришивания  к одежде. В более узком варианте — застёжка на одежде и других швейных изделиях, предназначенная для соединения её частей (пуговица на одной части одежды вдевается в петлю, находящуюся на другой части, и тем самым осуществляется застёгивание).</p> 
<p>Коллекционирование пуговиц называется
<dfn title = "Коллекционирование пуговиц">филобутонистика</dfn>.</p>

<p>Знаете ли вы, что Первая Мировая война случилась из-за плохо расстегивающихся пуговиц? 
<blockquote> <cite>"http://glamik.ru/blog/2012-03-07-640"></cite>Эрцгерцог Франц-Фердинанд 
умер после выстрела только из-за того, что на расстегивание 
всех его пуговиц для обработки раны потребовалось слишком много времени.</blockquote></p>


<p><b>Наша контактная информация:</b></p>
<p> 
<address>
Россия, <br />
Санкт-Петербург, <br />
ул.Ленина, д.1<br />
(812)123-4567
</address>
</p>

</body>
</html>
```

![image](https://github.com/user-attachments/assets/1c66cefb-696a-4155-8f4e-ab86a3b4f101)

- dfn - тэг для выделения термина, который упоминается впервые; 
- blockquote - тэг для вставки длинных цитат на страницу; 
- address - тэг для  указания контактной информации автора или владельца страницы; 
- cite - тэг для указания цитаты или ссылки на источник информации; 

#### Вывод
В html есть тэги для выполнения симантической верстки, для лучшего понимания поисковиков для индексации сайта.

## Упражнение 2.4

```
<p>Для обозначения ввода с клавиатуры используется тэг &lt;kbd&gt;</p>
<p><kbd>File | Save...</kbd></p>
<samp>
  demo.info Jan 2015 09:10:17
  Linux -grsec+gg3+e+gr2b-reslog-
</samp>
```

![image](https://github.com/user-attachments/assets/1b9a326c-509e-451a-a85e-afebca4bb183)


- kbd - тэг для обозначения текста, который набирается на клавиатуре или для названия клавиш; 
- samp - тэг для отображения текста, который является результатом вывода компьютерной программы или скрипта; 
- code - тэг для отображения одной или нескольких строк текста, который представляет собой программный код; 
- var - тэг для отображения переменных в математических выражениях и программном коде; 

#### Вывод
Данные теги связанных с компьютерным кодом и также мы увидели, что можем использовать спецсимволы чтобы имитировать вставку тегов, таким образом делают markdown для безопасности сайтов

## Упражнение 2.5

```
<p>Разновидности пуговиц:</p>
<ul type = "square">
  <li>Пуговица со сквозными отверстиями;</li>
  <li>Пуговица с ушком; </li>
  <li>Джинсовая пуговица; </li>
  <li>Канадка двухщелевая.</li>
</ul>
  
<ul style="list-style-type: circle">
  <li>Пуговица со сквозными отверстиями;</li>
  <li>Пуговица с ушком; </li>
  <li style='color:red;'>Джинсовая пуговица; </li>
  <li>Канадка двухщелевая.</li>
</ul>
```

![image](https://github.com/user-attachments/assets/cbaad186-d9b6-493b-916f-b4b356cd7a0b)

- ul - тэг для создания не нумерованного списка; 
- li - тэг для создания элемента списка; 
- list-style-type:circle - css свойство для изменения поинтера у элемента списка; 

## Упражнение 2.6

```
<p>По форме пуговицы могут быть:</p>
<ol start="5"  type="i">
<li>Квадратные;</li>
<li>Треугольные; </li>
<li>Цилиндрические; </li>
<li>Шарообразные; </li>
<li>Другие. </li>
</ol>
```

![image](https://github.com/user-attachments/assets/191614b6-20ae-4540-9f0a-28bd03e6939a)

- ol - тэг для создания нумерованного списка; 
- start - аргумент для выбора цифры с какой начинается отсчет нумерованного списка; 
- type - аргумент для изменения типа цифры;

## Упражнение 2.7

```
<p>По форме пуговицы могут быть:</p>
<ol start="5"  type="i">
<li>Квадратные;</li>
<li>Треугольные; </li>
<li>Цилиндрические; </li>
<li>Шарообразные; </li>
<li>Другие. </li>
</ol>

<p>Пуговицы могут выполнять следующие функции:</p>
<dl>
<dt>Утилитарная</dt>
<dd> – застежка на одежде, аксессуаре и т.п.;</dd>
<dt>Декоративная</dt> 
<dd> - украшение; </dd>
<dt>Магическая</dt> 
<dd> - выступает в качестве оберега или талисмана, отпугивающего враждебные силы; </dd>
<dt>Информативная</dt>
 <dd>   - опознавательный знак принадлежности к определенной группе, профессии,  роду войск (сил) и т. д. </dd>
</dl>
```

![image](https://github.com/user-attachments/assets/9c2d7fef-eb71-4490-970d-edb8edf8c747)

- dl - тэг для создания списка определений; 
- dd - тэг для создания указания подробностей или определения термина в списке описаний;

## Упражнение 2.8

```
<p>Швейная фурнитура</p>

<ol>
 <li>Аксессуары для одежды и обуви:</li>
 <ol type = "a">
  <li>Броши;</li>
  <li>Булавки;</li>
  <li>Другие принадлежности:</li>
  <ul type = "square">
   <li>Принадлежности для глажки;</li>
   <li>Принадлежности для стирки;</li>
   <li>Принадлежности для ухода за одеждой;</li>
  </ul>
  <li>Другие принадлежности;</li>
 </ol>

<li>Нитки;</li>
<li>Молнии:</li>
 <ol type = "i">
  <li>Витые;</li>
  <li>Металлические;</li>
 </ol>
<li>Пуговицы.</li>
</ol>
```

![image](https://github.com/user-attachments/assets/1c63275b-ff8d-4524-9e6a-8bd53ccd4688)

## Упражнение 3.1

```
<a href = "classification.html">Переход к странице классификации</a> <br>

<a href = "https://ru.wikipedia.org/wiki/%CF%F3%E3%EE%E2%E8%F6%E0">Статья в Википедии</a><br />

<a href = “http://www.yandex.ru” target = "_blank" >Yandex</a> <br>

<a href = “http://www.yandex.ru” target = "_top" >Yandex</a>
```

![image](https://github.com/user-attachments/assets/7cddb741-56ae-494c-aef1-d19be00c5bab)

```
<a href = "index.html">Вернуться на главную страницу</a> 
```

![image](https://github.com/user-attachments/assets/480c530c-0b44-4d5d-941a-b8d783952ec1)

- target  - атрибут тега a, мы видим вариант _blank для создания новой вкладки при переходе или _top по умолчанию перейти в данной вкладке;

## Упражнение 3.2

```
<!DOCTYPE html>
<html>
 <head>
  <title>Links</title>
  <style>
    a:visited{color:blue;}
    a:active{color:Fuchsia;}
    a:hover {color:yellow;}
   </style> 
 </head>
<body  alink="Fuchsia" vlink="Aqua">
<p>This is a link:</p>
  <a href = "http://www.yandex.ru">Yandex</a>
</body>
</html>

2.	Сохраните изменения, убедитесь в работоспособности гиперссылки. 
3.	Для изменения цветовых решений гиперссылки, как правило, используют CSS, но возможно встретить и вариант с HTML. В этом случае цвета ссылок задаются в качестве атрибутов тега <body>. Измените код ex4.html следующим образом (изменения обозначены полужирным шрифтом):

<html>
 <head>
  <title>Links</title>
 </head>
 <body alink="Fuchsia" vlink="Aqua" >
 <! - - alink – активная ссылка, vlink – посещенная ссылка - ->
<p>This is a link:</p>
  <a href = "http://www.yandex.ru" target = "_blank">Yandex</a>
</body>
</html>
```

![image](https://github.com/user-attachments/assets/028de5dc-b988-41c5-9fb4-c7f1f6da6352)


- alink  - атрибут тега body, для указания цвета активной ссылки в документе; 
- vlink  - атрибут тега body, для указания цвета посещенных ссылки в документе;
- style  - тэг для указания css стилей, где указаны с помощью псевдо стилей стили для тэга a ;
- 
## Упражнение 3.3

```
<!DOCTYPE html>
<html>
 <head>
  <title>Links</title>
  <style>
    a:visited{color:blue;}
    a:active{color:Fuchsia;}
    a:hover {color:yellow;}
   </style> 
 </head>
<body  alink="Fuchsia" vlink="Aqua">
<p>This is a link:</p>
  <a href = "http://www.yandex.ru">Yandex</a>
</body>
</html>

2.	Сохраните изменения, убедитесь в работоспособности гиперссылки. 
3.	Для изменения цветовых решений гиперссылки, как правило, используют CSS, но возможно встретить и вариант с HTML. В этом случае цвета ссылок задаются в качестве атрибутов тега <body>. Измените код ex4.html следующим образом (изменения обозначены полужирным шрифтом):

<html>
 <head>
  <title>Links</title>
 </head>
  <body alink="Fuchsia" vlink="Aqua" >
  <! - - alink – активная ссылка, vlink – посещенная ссылка - ->
  <p>This is a link:</p>
  <a href = "http://www.yandex.ru" target = "_blank">Yandex</a> <br>

  <a href="mailto:myAdress@domain.ru">Отправьте мне письмо</a>
</body>
</html>

```

![image](https://github.com/user-attachments/assets/991bb13e-60ef-4615-b395-8265a4d2219d)

#### Вывод
С помощью ссылок, можно также сделать ссылку на почтовый клиент, чтобы быстро написать сообщение на данный email

## Упражнение 3.4

```
<h1 id = "history_1">Несколько историй</h1>

<a href = "#history_1">История первая</a><br />
<a href = "#history_2">История вторая</a><br />

<h2  id = "history_1">История первая</h2>
```

![image](https://github.com/user-attachments/assets/d5bd856a-5e95-4a58-b5c7-e2e21cd6e1d0)


#### Вывод
Ссылки также можно использовать для навигации по сайту и быстро переходить по ссылкам


