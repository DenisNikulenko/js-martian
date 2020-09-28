/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advertising = document.querySelectorAll(".promo__adv img"),
      poster = document.querySelector(".promo__bg"),
      genre = poster.querySelector(".promo__genre"),
      movieList = document.querySelector(".promo__interactive-list");


advertising.forEach(item => { //1)
    item.remove();
});

genre.textContent = "драма"; //2)

poster.style.backgroundImage = "url('img/bg.jpg')"; //3

movieList.innerHTML = ""; //Обнуление

movieDB.movies.sort(); // 4)

movieDB.movies.forEach( (film, i) => { // 4,5)
    movieList.innerHTML += `
         <li class = "promo__interactive-item">
            ${i + 1}. ${film} 
            <div class = "delete"></div>
         </li>
    `;
});


