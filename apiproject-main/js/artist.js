fetch('https://api.themoviedb.org/3/movie/76341?api_key=01af314f34b767f06d2445d9fc982dd9')
.then((response) => {
   return response.json();
})
.then((data) => {
    console.log(data);
})
.then((data) => {
    characters = data.results;
    let ul = document.createElement('ul');
    characters.forEach(character => {
        let li = document.createElement('li');
        li.innerHTML = character.name;
        li.dataset.url = character.url;
        ul.appendChild(li);
    });
    list.appendChild(ul);
    next = document.createElement('button');
    next.dataset.btn = data.next;
    next.innerHTML = 'Next';
    next.id = 'next';
    list.appendChild(next);
});