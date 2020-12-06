 const personalMovieDB = {
     count: 0,
     movies: {},
     actors: {},
     genres: [],
     privat: false,
     start: function () {
         personalMovieDB.count = +prompt('Сколько фильмов Вы уже просмотрели?', "");

         while (isNaN(personalMovieDB.count) || (personalMovieDB.count) == "" || personalMovieDB.count == null) {
             personalMovieDB.count = +prompt('Сколько фильмов Вы уже просмотрели?', "");
         }
     },

     rememberMyFilms: function () {
         for (let i = 0; i < 2; i++) {
             let a = prompt('Один из последних просмотренных фильмов?', ''),
                 b = prompt('На сколько оцените его?', '');

             if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                 personalMovieDB.movies[a] = b;
                 console.log('done');
             } else {
                 console.log('error');
                 i--;
             }
         }
     },

     detectPersonaLevel: function () {

         if (personalMovieDB.count < 10) {
             console.log('Просмотрено довольно мало фильмов');
         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
             console.log('Вы классический зритель');
         } else if (personalMovieDB.count >= 30) {
             console.log('Вы киноман!');
         } else {
             console.log('Произошла ошибка');
         }
     },

     showMyDB: function (hidden) {
         if (!hidden) {
             console.log(personalMovieDB);
         }
     },

     toggleBisibleMyDB: function () {
         if (personalMovieDB.privat) {
             personalMovieDB.privat = false;
         } else {
             personalMovieDB.privat = true;
         }
     },

     writeYourGenres: function () {
         for (let i = 1; i <= 3; i++) {
             let genre = prompt(`Ваш любимый жанр под номером ${i}`);

    
             if (genre === null || (genre) === '') {
                 i--;
             }  else {
                personalMovieDB.genres[i - 1] = genre;
             }
         }
         personalMovieDB.genres.forEach((item, i) => {
             console.log(`Любимый жанр № ${i+1} - это ${item}`); 
         });
     },


 };