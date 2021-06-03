"use strict";
// video 24

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        let numberOfFilms;
        while (numberOfFilms == " " ||
            numberOfFilms == null ||
            isNaN(numberOfFilms)) { // isNaN(numberOfFilms)
                numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
        }
        this.count = numberOfFilms; // ????
    },
    askQuestions: function() {
        for (let i = 0; i < 2; i++) {
            let movieName = '';
            while (movieName == '' || movieName.length > 50 || movieName == null){
                movieName = prompt("Один из последних просмотренных фильмов?", "");
            }
            let movieScore;
            while (movieScore == "" || movieScore == null || isNaN(movieScore)){
                movieScore = +prompt("На сколько оцените его?", "");
            }
            this.movies[movieName] = movieScore;
        }
    },
    logDB: function() {
        console.log(`Просмотрено ${this.count} фильмов.`);
        console.log("Просмотренные фильмы:");
        for (let [key, value] of Object.entries(this.movies)) {
            console.log(`${key}: ${value}`);        
        }    
        console.log("Любимые актеры:");
        for (let key in this.actors) {
            console.log(`${key}`);        
        }
        console.log("Любимые жанры:");
        for (let i = 0; i < this.genres.length; i++) {
            console.log(this.genres[i]);
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count < 30) {
            console.log("Вы - классический зритель.");
        } else if (this.count >= 30) {
            console.log("Вы - киноман!");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function() {
        if (this.privat) {
            this.logDB();
        }
        else {
            console.log("DB is private!");
        }
    },
    writeYourGenres: function() {
        // can be done via splittin comma separated string
        for (let i=0; i < 3; i++) {
            let genre;
            while (genre == null || genre == ""){
                genre = prompt(`Ваш любимый жанр под номером ${i + 1}?`, "");
            }
            this.genres.push(genre);
            // this.genres[i] = genre;
        }
        this.genres.forEach(function(item, index){
            console.log(`Ваш любимый жанр №${index + 1} - это ${item}.`);
        });
    },
    toggleVisibleMyDB: function () {
        this.privat = !this.privat;
    }
};

// const db = Object.create(personalMovieDB);
// db.start();
// db.askQuestions();
// db.detectPersonalLevel();
// db.writeYourGenres();
// db.showMyDB();
// db.toggleVisibleMyDB();
// db.showMyDB();
personalMovieDB.start();

