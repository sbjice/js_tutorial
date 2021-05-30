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

// 3
const movie1 = prompt("Один из последних просмотренных фильмов?", ""),
    movie1Score = +prompt("На сколько оцените его?", ""),
    movie2 = prompt("Один из последних просмотренных фильмов?", ""),
    movie2Score = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[movie1] = movie1Score;
personalMovieDB.movies[movie2] = movie2Score;
console.log(personalMovieDB);