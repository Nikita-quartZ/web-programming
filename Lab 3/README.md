# Лабораторная №3

## Цель работы:
Научиться работать с утилитой автоматизации задач Gulp, инструментом для отладки и тестирования BrowserSync, разработать форму для отправки обратной связи с помощью PHP, локально развернуть WordPress

## Упражнение 1

В данном задании необходимо настроить gulp следующий образом:

- создать два таска и настроить на последовательное и параллельное выполнение

- настроить отображение файлов проекта в браузере и автоматическую перезагрузку при изменении одного из контролируемых файлов проекта

Для выполнения задания был инициализирован проект с помощью команды npm
init. После выполнения данной команды в корне проекта появился файл package.json,
содержащий информацию о проекте . Данный файл содержит название, версию и описание зависимостей проекта.

```
{
  "name": "task-1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" ^&& exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "browser-sync": "^2.29.3",
    "gulp": "^4.0.2"
  }
}
```

После этого в проект был установлен Gulp с помощью команды npm i gulp -g. Также с помощью команды npm i browser-sync был установлен BrowserSync — утилита, которая автоматически перезагружает измененные файлы и страницы, синхронизирует навигацию между браузерами, а также позволяет тестировать сайт сразу на нескольких устройствах.

Далее представлен исходный код, создающий две задачи, которые с помощью функции gulp.series запускаются последовательно. Далее изображен результат выполнения команды gulp.

```
const gulp = require("gulp");
gulp.task("one", function (callback) {
  console.log("one");
  callback();
});

gulp.task("two", function (callback) {
  console.log("two");
  callback();
});

gulp.task("default", gulp.series("one", "two"));
```

![image](https://github.com/user-attachments/assets/e8c7eee0-9a48-4b34-bf9b-551872220857)


Далее представлен исходный код, который запускает те же две задачи
паралелльно с помощью функции gulp.parallel. Далее изображен результат выполнения команды gulp.

```
const gulp = require("gulp");
gulp.task("one", function (callback) {
console.log("one");
callback();
});
gulp.task("two", function (callback) {
console.log("two");
callback();
});
gulp.task("default", gulp.parallel("one", "two"));
```

![image](https://github.com/user-attachments/assets/08de1f39-2e7a-482f-bc67-41148cf4ae29)


Далее представлен исходный код, который создает задачу browserSync.
Данная задача отслеживает изменения в HTML-файлах, и при изменении перезагружает страницу веб-браузера. При выполнении этой команды запустится сервер,
который и будет отслеживать изменения файлов.

```
const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("browserSync", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("*.html").on("change", browserSync.reload);
});
gulp.task("default", gulp.series("browserSync"));
```

![image](https://github.com/user-attachments/assets/a97e646c-688f-4c9c-8971-dfb8396d61dc)


При изменении содержимого index.html браузер автоматически перезагрузится
с новым содержимым

![image](https://github.com/user-attachments/assets/c1f59192-2155-475c-90f0-adae92a5f323)

## Упражнение 2

В данном задании необходимо создать форму для отправки информации по обратной связи от пользователя сайта. В ней пользователь должен передать информацию о себе: имя, фамилию, электронную почту, обратную связь. Также в форме должны быть радио-кнопки (по меньшей мере 2 шт.) и должны быть чек-боксы (не менее трех).

Для хранения обратной связи в качестве СУБД была выбрана MySQL, поскольку это очень популярная технология, на которую можно запросто найти множество полезной информации по любому вопросу. Кроме того, в языке PHP есть встроенная библиотека, позволяющая напрямую работать с MySQL, что сильно упрощает процесс разработки.

В соответствии с заданием была сверстана форма, которая содержит следующие поля:
- имя пользователя;
- фамилия пользователя;
- электронная почта пользователя;
- оценка качества обслуживания (от 1 до 5 в виде радио-кнопок);
- возможность отметить то, что понравилось больше всего (например, скорость обслуживания, простой и понятный интерфейс или широкий ассортимент товаров);
- комментарий, в котором пользователь может более подробно раскрыть свою обратную связь.

Далее показана форма, получившаяся в итоге. При ее заполнении пользователь обязательно должен указать свое имя, фамилию, электронную почту, а также поставить оценку качества обслуживания. В дополнение, пользователь может отметить то, что ему понравилось больше всего, а также написать комментарий, если это потребуется. После того, как пользователь отправит обратную связь, его перекинет на страницу с благодарностью. На ней пользователя встретит ссылка, которая позволит вернуться обратно на страницу заполнения формы обратной связи, в случае, если он захочет оставить еще больше обратной связи.

<img width="1509" alt="image" src="https://github.com/user-attachments/assets/817a5b53-f228-4683-8729-da28acf65eef" />

<img width="1508" alt="image" src="https://github.com/user-attachments/assets/9ff93ea6-d40a-4466-8882-5cdaf2e1cee6" />

В качестве обработчика POST-запроса при отправке формы используется PHP-скрипт. Код, использующийся для взаимодействия с базой данных, был вынесен в отдельный файл.
