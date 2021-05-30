"use strict";

// 1
const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

// 2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// for (let i = 0; i < 2; i++) {
//     let movieName = '';
//     while (movieName == '' || movieName.length > 50 || movieName == null){
//         movieName = prompt("Один из последних просмотренных фильмов?", "")
//     }
//     let movieScore;
//     while (movieScore == undefined || movieScore == null){
//         movieScore = +prompt("На сколько оцените его?", "")
//     }
//     personalMovieDB.movies[movieName] = movieScore;
// }
// console.log(personalMovieDB);




if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
    console.log("Вы - классический зритель.");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы - киноман!");
} else {
    console.log("Произошла ошибка");
}