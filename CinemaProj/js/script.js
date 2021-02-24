/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => { //необходимо, чтобы скрипт не сломался,
    //  пока грузится вся страница. 
    //А начал работать только после загрузки
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = document.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        btn = document.querySelector('button'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]');


    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); //отменяет стандартное поведение браузера (он не перезагружается при нажатии кнопки)

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (favorite) {
            console.log('Добавлен Любимый фильм');
        }

       if (newFilm) {

        if (newFilm.length>21) {

            newFilm= `${newFilm.substring(0, 22)}...`;
           }
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);

        createMovieList(movieDB.movies, movieList);
       }

      
        addForm.reset();

    });

const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};
    
const makeChanges = () => {
    genre.textContent = 'Драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';


};

const sortArr= (arr) => {
    arr.sort();
};


    function createMovieList(films, parent) {
        parent.innerHTML = '';

        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
                    <li class="promo__interactive-item">${i+1}  ${movieDB.movies[i]}
                        <div class="delete"></div>
                    </li>
                `;
        });

        document.querySelectorAll('.delete').forEach((basket, i) => {
            basket.addEventListener('click', () => {
                basket.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(movieDB.movies, movieList);
            });
    
        });

        
    }

    

    createMovieList(movieDB.movies, movieList);
    deleteAdv(adv);
    makeChanges();
    

});