let list = document.querySelector("#container");

fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=01af314f34b767f06d2445d9fc982dd9"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    result = data.results;
    console.log(result);
    let ul = document.createElement("ul");
    ul.className = "title";
    result.forEach((movie) => {
      let li = document.createElement("li");
      li.innerHTML = movie.original_title;
      li.className = "movie-title";
      li.dataset.id = movie.id;
      ul.appendChild(li);
    });
    list.appendChild(ul);
  });

document.querySelector("#container").addEventListener("click", (el) => {
  console.log(el);
  el = el.target;
  if (el.dataset.id) {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        el.dataset.id +
        "?api_key=01af314f34b767f06d2445d9fc982dd9"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector("#poster_path").src =
          "https://image.tmdb.org/t/p/w300/" + data.poster_path;
        document.querySelector("#release_date").innerHTML = data.release_date;
        document.querySelector("#vote_average").innerHTML = data.vote_average;
        document.querySelector("#overview").innerHTML = data.overview;
      });
  }
});

