let movies;
let list = document.querySelector('#movies');
let infos = document.querySelector('#infos');

fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=01af314f34b767f06d2445d9fc982dd9')
.then((response) => {
   return response.json();
})
.then((data) => {
   // debugger;
    movies = data.results;
    console.log (movies);
    let ul = document.createElement('ul');
    movies.forEach(movie => {
        let li = document.createElement('li');
        li.innerHTML = movie.title;
        li.dataset.id = movie.id;
        ul.appendChild(li);
    });
    list.appendChild(ul);
    //next = document.createElement('button');
    //next.dataset.btn = data.next;
    //next.innerHTML = 'Next';
    //next.id = 'next';
    //list.appendChild(next);
});

document.querySelector('#movies').addEventListener('click', (el) => {
    el = el.target;
    if (el.dataset.id) {
        fetch('https://api.themoviedb.org/3/movie/' + el.dataset.id + '?api_key=01af314f34b767f06d2445d9fc982dd9' )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.querySelector('#title').innerHTML = data.title;
            document.querySelector('#overview').innerHTML = data.overview;
            document.querySelector('#release_date').innerHTML = data.release_date;
            document.querySelector('#original_language').innerHTML = data.original_language;
            document.querySelector('#vote_average').innerHTML = data.vote_average;
            infos.classList.remove('none');
        });
    }
})

