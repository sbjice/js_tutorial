"use strict";
// video 18

let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function start() {
    while (numberOfFilms == " " ||
        numberOfFilms == null ||
        typeof (numberOfFilms) != "number") { // isNan(numberOfFilms)
            numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
    personalMovieDB.count = numberOfFilms;
}

function askQuestions() {
    for (let i = 0; i < 2; i++) {
        let movieName = '';
        while (movieName == '' || movieName.length > 50 || movieName == null){
            movieName = prompt("Один из последних просмотренных фильмов?", "");
        }
        let movieScore;
        while (movieScore == "" || movieScore == null || isNaN(movieScore)){
            movieScore = +prompt("На сколько оцените его?", "");
        }
        personalMovieDB.movies[movieName] = movieScore;
    }
}

start();

function logPersonalMovieDB() {
    console.log(`Просмотрено ${personalMovieDB.count} фильмов.`);
    console.log("Просмотренные фильмы:");
    for (let [key, value] of Object.entries(personalMovieDB.movies)) {
        console.log(`${key}: ${value}`);        
    }    
    console.log("Любимые актеры:");
    for (let key in personalMovieDB.actors) {
        console.log(`${key}`);        
    }
    console.log("Любимые жанры:");
    for (let i = 0; i < personalMovieDB.genres.length; i++) {
        console.log(personalMovieDB.genres[i]);
    }
}

askQuestions();
logPersonalMovieDB();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы - классический зритель.");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы - киноман!");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.privat) {
        logPersonalMovieDB();
    }
}

showMyDB();

function writeYourGenres() {
    for (let i=0; i < 3; i++) {
        let genre;
        while (genre == null || genre == ""){
            genre = prompt(`Ваш любимый жанр под номером ${i + 1}?`, "")
        }
        personalMovieDB.genres.push(genre);
    }
}

writeYourGenres();
logPersonalMovieDB();
