let nomberOfFilms;

function start () {
    nomberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");

    while (nomberOfFilms == '' || nomberOfFilms == null || isNaN(nomberOfFilms)) {
        nomberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", ""); 
    }
}

start ();


const personalMovieDB = {
    count: nomberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = prompt("На сколько оцените его?", "");
    
        if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms ();





function detectPersonalLevel() {  
    if ( personalMovieDB.count < 10 ) {
        console.log('Посмотрено довольно мало фильмов');
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count <30 ){
        console.log('Вы классический зритель');
    } else if ( personalMovieDB.count >=30 ) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function wtiteYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres [i-1] = prompt(`ваш любимый жанр под номером ${i}`);   
    }
}

wtiteYourGenres();