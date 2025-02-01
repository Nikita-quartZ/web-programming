# Лабораторная №1

## Упражнение 4.1

```
<!DOCTYPE html>
<html>
<head>
  <title>Работа с таблицами</title>
</head>
<body>
  <table>
    <tr>
      <td>Фамилия</td>
      <td>Имя</td>
      <td>Отчество</td>
      <td>Город</td>
    </tr>
    <tr>
      <td>Пупкин</td>
      <td>Василий</td>
      <td>Петрович</td>
      <td>Москва</td>
    </tr>
    <tr>
      <td>Пупкин</td>
      <td>Феофан</td>
      <td>Васильевич</td>
      <td>Москва</td>
    </tr>
    <tr>
      <td>Шашкин</td>
      <td>Сидор</td>
      <td>Богданович</td>
      <td>Санкт-Петербург</td>
    </tr>
    <tr>
      <td>Лютикова</td>
      <td>Аделина</td>
      <td>Федоровна</td>
      <td>Тверь</td>
    </tr>
  </table>
</body>
</html>
```

![image](https://github.com/user-attachments/assets/02bd870e-918d-4940-a17c-1351ad28ba39)


-	table - теги, который создает таблицу
-	tr - теги, который создает строчку в таблице
-	td - теги, который создает столбик в таблице

## Упражнение 4.2

```
<!DOCTYPE html>
<html>
<head>
  <title>Работа с таблицами</title>
</head>
<body>
  <table border = "2" ” style="width:80%">
    <tr>
      <td>Фамилия</td>
      <td>Имя</td>
      <td>Отчество</td>
      <td>Город</td>
    </tr>
    <tr>
      <td>Пупкин</td>
      <td>Василий</td>
      <td>Петрович</td>
      <td>Москва</td>
    </tr>
    <tr>
      <td>Пупкин</td>
      <td>Феофан</td>
      <td>Васильевич</td>
      <td>Москва</td>
    </tr>
    <tr>
      <td>Шашкин</td>
      <td>Сидор</td>
      <td>Богданович</td>
      <td>Санкт-Петербург</td>
    </tr>
    <tr>
      <td>Лютикова</td>
      <td>Аделина</td>
      <td>Федоровна</td>
      <td>Тверь</td>
    </tr>
  </table>
</body>
</html>
```

![image](https://github.com/user-attachments/assets/dfafa2c3-a10a-40dd-bac5-b6258b24918e)

-	border - атрибут для добавления границы таблицы

## Упражнение 4.3

```
<!DOCTYPE html>
<html>
<head>
  <title>Работа с таблицами</title>
</head>
<body>
  <table border = "2" ” style="width:80%">
    <caption style = "caption-side:bottom">Список сотрудников</caption>
    <tr>
      <th>Фамилия</th>
      <th>Имя</th>
      <th>Отчество</th>
      <th>Город</th>
    </tr>
    <tr>
      <td>Пупкин</td>
      <td>Василий</td>
      <td>Петрович</td>
      <td>Москва</td>
    </tr>
    <tr>
      <td>Пупкин</td>
      <td>Феофан</td>
      <td>Васильевич</td>
      <td>Москва</td>
    </tr>
    <tr>
      <td>Шашкин</td>
      <td>Сидор</td>
      <td>Богданович</td>
      <td>Санкт-Петербург</td>
    </tr>
    <tr>
      <td>Лютикова</td>
      <td>Аделина</td>
      <td>Федоровна</td>
      <td>Тверь</td>
    </tr>
  </table>
</body>
</html>
```

![image](https://github.com/user-attachments/assets/d919dc8d-ce26-407e-a506-159f3782631a)

-	th - тег, который создает строчку в оглавлении таблицы
-	caption - тег для описания таблицы, а caption-side позицианимрует где именно находится описание

## Упражнение 4.4

```
<!DOCTYPE html>
<html>
<head>
  <title>Работа с таблицами</title>
</head>
<body>
  <table border = "2" ” style="width:80%">
    <caption style = "caption-side:bottom">Список сотрудников</caption>
    <tr>
      <th>Фамилия</th>
      <th>Имя</th>
      <th>Отчество</th>
      <th>Город</th>
    </tr>
    <tr>
      <td rowspan = "2">Пупкин</td>
      <td>Василий</td>
      <td>Петрович</td>
      <td rowspan = "2">Москва</td>
      </tr>
      <tr>
      <!- - В этом ряду удалены две ячейки - ->
      <td>Феофан</td>
      <td>Васильевич</td>
      </tr>
    <tr>
      <td>Шашкин</td>
      <td>Сидор</td>
      <td>Богданович</td>
      <td>Санкт-Петербург</td>
    </tr>
    <tr>
      <td colspan = "3">Лютикова Аделина Федоровна</td>
      <td>Тверь</td>
    </tr>
  </table>
</body>
</html>
```

![image](https://github.com/user-attachments/assets/577dbae7-a2e8-4391-878a-df8be94377f1)


-	colspan - атрибут бля выделения количество колонок занимаемой одной клеткой
-	rowspan - атрибут бля выделения количество строчек занимаемой одной клеткой

## Упражнение 4.5

```
<!DOCTYPE html>
<html>
<head>
<title>Table Example</title>
</head>
<body>
  <table>
    <!--<colgroup span = "3" style = "background-color:silver"/> -->
    <colgroup>
    <col style="background-color:silver">
    <col span="2"style="background-color:yellow">
    </colgroup>
    <thead style = "color:green; background-color:lavender">
      <tr>
        <th>Месяц</th>
        <th>Продажи</th>
        <th>Менеджер</th>
      </tr>
    </thead>
    <tfoot style = "color:blue">
      <tr>
        <td>Итого</td>
        <td colspan = "2" style= "text-align:right">170 000</td>
      </tr>
    </tfoot>
    <tbody style = "color:red">
      <tr>
        <td>Ноябрь</td>
        <td>70 000</td>
        <td>Шашкин</td>
      </tr>
      <tr>
        <td>Декабрь</td>
        <td>100 000</td>
        <td>Пупкин</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```

![image](https://github.com/user-attachments/assets/11cd35fc-d983-4e6c-a186-f944dc89628c)

-	thead - тег для хранения одной или нескольких строк таблицы
-	tbody - тег для хранения одной или нескольких строк таблицы, который представлены в начале таблицы
-	tfoot - тег для хранения одной или нескольких строк таблицы, который представлены в конце таблицы
-	colgroup - тег для задания ширины и стиля одной или нескольких полей таблицы

## Упражнение 5.1

```
<img src= "/HTML 1/mountain.jpg" alt="Button" title = “This is a button”/>
```

![image](https://github.com/user-attachments/assets/ec5d2411-77cf-40e5-87e8-0afe90edc467)


-	alt - атрибут для размещение альтернативного текста
-	title - атрибут для подсказку к изображению

## Упражнение 5.2

```
<img src= "/HTML 1/mountain.jpg" alt="Button" title = "This is a button" style="width:100px; height:130px"/>
```

![image](https://github.com/user-attachments/assets/b81be537-c845-4f31-8116-374207d93277)

-	width - атрибут ширины
-	height - атрибут высоты
  
## Упражнение 5.3

```
<a href = "/HTML 1/classification.html">
  <img src= "/HTML 1/mountain.jpg" alt="classification" title = “Classification Page” style="width:100px; height:130px"/>
</a>
```

![image](https://github.com/user-attachments/assets/b81be537-c845-4f31-8116-374207d93277)

## Упражнение 5.4

```
<a href = "/HTML 1/classification.html">
  <img src = "/HTML 1/mountain.jpg" usemap = "#MyMap">
  <map name = "MyMap">
    <area shape="circle" alt="yandex" title="" coords="405,195,106" href="http://yandex.ru" />
    <area shape="poligon" alt="google" title="" coords="305,95,106" href="https://www.google.com/" />
  </map>
</a>
```

![image](https://github.com/user-attachments/assets/ef837a63-00b0-46f5-8f38-a3e43eb00ef5)

- map - тег, служит контейнером для элементов <area>, которые определяют активные области для карт-изображений
- area - тег, для создания красивой навигации, разметив обычную картинку областями и указав для них ссылки

## Упражнение 5.5

```
<video width="320" height="240" controls>
  <source controls  src="TCR.mp4" type="video/mp4" width="640" height="480">
  <p>Your browser does not support the video tag.</p>
</video>
```

![image](https://github.com/user-attachments/assets/392c7942-f84b-4ffc-92dd-f03261291e9e)


- video - тег для воспроизведения и управляет настройками видеоролика на веб-странице
- source - тег, для вставки звуковой или видеофайл для элементов

## Упражнение 6.1

```
<html>
<head>
  <title> Test Form </title>
</head>
<body>
  <p>Основные элементы форм:</p>
  <form action = "ex7.html" method = "POST" enctype = "multipart/form-data">
    Простое текстовое поле: <input type = "text" name = "txtField" /><br />
    Поле длинной максимум 5 символов: <input type = "text" name = "txtField" maxlength = “5” /><br />
    Многострочное текстовое поле:<br />
    <textarea name = "txtArea">This is a text area</textarea><br />
    Поле для ввода пароля:<input type = "password" name = "psw" /><br />
    Скрытое поле: <input type = "hidden" name = "hdnTxt"></br>
    <input type = "submit" name = "submit" value = "Отправить!" />
  </form>
</body>
</html>
```

![image](https://github.com/user-attachments/assets/b6eeb057-a067-46f8-82ab-867575809853)



- form - тег для обьединения элементов в общую форму и делать быстро и просто запросы на сервер
- input - тег, для вставки поля ввода у которого есть свои специфические type и name
- textarea - тег, для вставки многострочного поля ввода

  #### Вывод
  Формы позволяют быстро и удобно создавать формы для взаимодействия с сервером

## Упражнение 6.2

```
<html>
<head>
  <title> Test Form </title>
</head>
<body>
  <p>Основные элементы форм:</p>
  <form action = "ex7.html" method = "POST" enctype = "multipart/form-data">
    Простое текстовое поле: <input type = "text" name = "txtField" /><br />
    Поле длинной максимум 5 символов: <input type = "text" name = "txtField" maxlength = “5” /><br />
    Многострочное текстовое поле:<br />
    <textarea name = "txtArea">This is a text area</textarea><br />
    Поле для ввода пароля:<input type = "password" name = "psw" /><br />
    Скрытое поле: <input type = "hidden" name = "hdnTxt"></br>
    <input type = "submit" name = "submit" value = "Отправить!" />
  </form>
</body>
</html>
```

![image](https://github.com/user-attachments/assets/aaf1878e-fe9d-427a-9089-51e86eeeb95a)

#### Вывод
Типы input позволяю адаптировать их под разные сценарии как выбор цвтеа, даты, ввода именно числа, url или почты

## Упражнение 6.3

```
<html>
<head>
  <title> Test Form </title>
</head>
<body>
  <p>Основные элементы форм:</p>
  <form action = "ex7.html" method = "POST" enctype = "multipart/form-data">
    Простое текстовое поле: <input type = "text" name = "txtField" /><br />
    Поле длинной максимум 5 символов: <input type = "text" name = "txtField" maxlength = “5” /><br />
    Многострочное текстовое поле:<br />
    <textarea name = "txtArea">This is a text area</textarea><br />
    Поле для ввода пароля:<input type = "password" name = "psw" /><br />
    Скрытое поле: <input type = "hidden" name = "hdnTxt"></br>
    <input type = "submit" name = "submit" value = "Отправить!" />
  </form>

  <form>
    Работа с цветом:<input type = "color" name = "color"/><br/>
    Работа с датой:<input type = "date" name = "date"/><br/>
    Проверка e-mail:<input type = "email" name = "mail"/><br/>
    Проверка чисел:<input type = "number" name = "num"/><br/>
    Работа с днем недели:<input type = "week" name = "week"/><br/>
    Проверка URL:<input type = "url" name = "url"/><br/>
    <input type = "submit" name = "submit" value = "Отправить!" />
  </form>

  <form>
    Введите данные:<input type = "text" name = "txt"><br/>
    <input type = "reset" name = "reset" value = "Очистить поле!" /><br />
    <input type = "submit" name = "submit" value = "Отправить!" /><br />
    <button name = "myButton">
      <img src = "enot.jpg" title = "This is a button too">
    </button>
  </form>
</body>
</html>

```

![image](https://github.com/user-attachments/assets/313e4568-3d17-43c8-9c38-4c7e0e738805)


#### Вывод
Для отправки формы необходима кнопка с типом submit, в ней может быть любой контент, текст иконка и также можно передать текст через аргумент

## Упражнение 6.4

```
<form>
    <p><input type = "radio" name = "MyRadio" value = "First">First Variant</p>
    <p><input type = "radio" name = "MyRadio" value = "Second">Second Variant</p>
    <p><input type = "radio" name = "MyRadio" value = "Third">Third Variant</p>
    <p><input type = "submit" name = "submit">
  </form>

  <form>
    <p><input type = "checkbox" name = "MyChckBx[]" value = "First">First Variant</p>
    <p><input type = "checkbox" name = "MyChckBx[]" value = "Second">Second Variant</p>
    <p><input type = "checkbox" name = "MyChckBx[]" value = "Third">Third Variant</p>
    <p><input type = "submit" name = "submit">
  </form>
```

![image](https://github.com/user-attachments/assets/8627e56f-bb27-4e33-8155-9f30191d5e74)

#### Вывод
В форме можно создавать с помощью input type radio и checkbox для выбора данных из предложенных вариантов, один или несколько

## Упражнение 6.5

```
<form>
    <select name = "cars" size = "1">
    <optgroup label = "Ford">
    <option value = "F">Focus</option>
    <option value = "M">Mondeo</option>
    <option value = "K">Kuga</option>
    </optgroup>
    <optgroup label = "Volkswagen">
    <option value = "G">Golf</option>
    <option value = "B">Beetle</option>
    <option value = "P">Passat</option>
    </optgroup>
    <optgroup label = "Chevrolet">
    <option value = "Cr">Cruze</option>
    <option value = "Cam">Camaro</option>
    <option value = "Cor">Corvette</option>
    </optgroup>
    </select>
    <input type = “submit” name = “submit” />
  </form>
```

![image](https://github.com/user-attachments/assets/b681089d-cd4f-4462-9270-8e675ff2f24e)

#### Вывод
Мы изучили тег select для создания выпадающего списка для выбора опции из выпадающего списка и выяснили как делить список на категории с помощью optgroup

## Упражнение 6.6

```
<form>
<input type = "file" name = "files" multiple>
</form>
```

![image](https://github.com/user-attachments/assets/d2005ba8-19df-4158-b7e9-7865b13eb9f8)

#### Вывод
Мы type file для input для загрузки файла
