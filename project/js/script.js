'use strict';
// video 30

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// video 33
/*
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

document.addEventListener("DOMContentLoaded",() => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    
    const ads = document.querySelectorAll(".promo__adv * "),
        genre = document.querySelector(".promo__genre"),
        bg = document.querySelector(".promo__bg"),
        films = document.querySelectorAll(".promo__interactive-item"),
        inputMovie = document.querySelector(".promo__interactive .add input[type='text']"),
        addButton = document.querySelector(".promo__interactive .add button"),
        makeFav = document.querySelector("input[type='checkbox']"),
        deleteButtons = document.querySelectorAll(".delete");
        
    let filmsList = document.querySelector(".promo__interactive-list");

    function deleteAds(ads) {
        ads.forEach(element => {
            element.remove();
        });
    }

    function sortArray(arr) {
        arr.sort();
    }    
    
    function refreshMovieList(movies, parent) {
        parent.innerHTML = "";
    
        sortArray(movies);

        movies.forEach((item, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">
                ${i+1}. ${item}
                <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                refreshMovieList(movies, parent);
            });
        });
    }
            
    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        let movie = inputMovie.value;
        if (movie) {
            if (movie.length > 21) {
                movie = movie.slice(0, 21) + "...";
            }
            movieDB.movies.push(movie);
        }
        if (makeFav.checked) {
            console.log("Добавляем любимый фильм");
        }
        refreshMovieList(movieDB.movies, filmsList);
        inputMovie.value = "";
        makeFav.checked = false;
    });


    
    genre.textContent = "Драма";
    bg.style.backgroundImage = "url('img/bg.jpg')";
    deleteAds(ads);
    refreshMovieList(movieDB.movies, filmsList);

});

