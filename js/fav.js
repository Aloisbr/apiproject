let movies;
let list = document.querySelector('#movies');
let infos = document.querySelector('#infos');
let prev;
let next;


fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=01af314f34b767f06d2445d9fc982dd9')
.then((response) => {
   return response.json();
})
.then((data) => {
    movies = data.results;
    let ul = document.createElement('ul');
    movies.forEach(movie => {
        let li = document.createElement('li');
        li.innerHTML = movie.title;
        li.dataset.id = movie.id;
        ul.appendChild(li);
    });
    list.appendChild(ul);
});



document.querySelector('#movies').addEventListener('click', (el) => {
    el = el.target;
    if (el.dataset.id) {
        fetch('https://api.themoviedb.org/3/movie/' + el.dataset.id +'?api_key=01af314f34b767f06d2445d9fc982dd9'
        )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.querySelector('#titre').innerHTML = data.title;
            document.querySelector('#original_title').innerHTML = data.original_title;
            document.querySelector('#vote_average').innerHTML = data.vote_average
            document.querySelector('#popularity').innerHTML = data.popularity;
            document.querySelector('#release_date').innerHTML = data.release_date;
            infos.classList.remove('none');
        });
    }
})
document.querySelector('#movies').addEventListener('click', (el) => {
    el = el.target;
    if (el.id == 'page') {
        list.innerHTML = '';
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=01af314f34b767f06d2445d9fc982dd9')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            movies = data.results;
            let ul = document.createElement('ul');
            movies.forEach(movie => {
                let li = document.createElement('li');
                li.innerHTML = movie.title;
                li.dataset.id = movie.id;
                ul.appendChild(li);
            });
            list.appendChild(ul);
        });
    }
})