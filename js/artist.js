fetch('https://api.themoviedb.org/3/movie/76341?api_key=01af314f34b767f06d2445d9fc982dd9')
.then((response) => {
   return response.json();
})
.then((data) => {
    console.log(data);
})