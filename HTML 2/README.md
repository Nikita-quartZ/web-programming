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

-	## Упражнение 4.2

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

-	## Упражнение 4.3

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
-	
-	## Упражнение 4.4

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
-	
-	## Упражнение 4.5

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
