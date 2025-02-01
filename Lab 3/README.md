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

//

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

//

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

//

При изменении содержимого index.html браузер автоматически перезагрузится
с новым содержимым

//