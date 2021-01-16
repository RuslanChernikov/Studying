const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", " ");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", " ");
        }
    },


    rememberMyFilms: function () {
        for (let i = 1; i < 3; i++) {
            let a = prompt("Один из последних просмотренных фильмов?", " "),
                b = +prompt("На сколько оцените его?", "");

            if (a != null && b != null && a.length <= 50 && a != '' && b != '') {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }

        }
    },

    detectPersonaLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Error!");
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {

        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function () {

        for (let i = 1; i < 4; i++) {

            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre != "" && genre != null) {
                personalMovieDB.genres.push(genre);
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }
};