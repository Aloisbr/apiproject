let movies;
let list = document.getElementById('movies');

fetch('https://api.themoviedb.org/3/movie/popular?api_key=01af314f34b767f06d2445d9fc982dd9')
.then((response) => {
   return response.json();
})
.then((data) => {
    movies = data.results;
    let ul = document.createElement('ul');
    movies.forEach(movie => {
        let li = document.createElement('li');
        li.innerHTML = movie.title;
        li.dataset.url = movie.id;
        ul.appendChild(li);
    });
    list.appendChild(ul);
    console.log(list);
});
