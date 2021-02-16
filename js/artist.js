let list= document.querySelector('#sidebar');

function getList () {
    fetch('https://api.themoviedb.org/3/person/popular?api_key=01af314f34b767f06d2445d9fc982dd9')
    .then((response) => {
       return response.json();
    })
    .then((data) => {
        let actors = data.results;
        let ul = document.createElement('ul');
        actors.forEach(actor => {
            let li = document.createElement('li');
            li.innerHTML = actor.name;
            li.dataset.id = actor.id;
            ul.appendChild(li);
        });
        list.appendChild(ul);
    })
}
getList();

list.addEventListener('click', (el) => {
    el = el.target;
    if(el.dataset.id) {
        fetch('https://api.themoviedb.org/3/person/' + el.dataset.id + '?api_key=01af314f34b767f06d2445d9fc982dd9')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.querySelector('#profile').src = "https://image.tmdb.org/t/p/w200" + data.profile_path;
            if(data.gender == 2)
                document.querySelector("#gender").innerHTML = "Homme";
            else
                document.querySelector("#gender").innerHTML = "Femme";
            document.querySelector("#birthday").innerHTML = data.birthday;
            document.querySelector("#place_of_birth").innerHTML = data.place_of_birth;
            document.querySelector("#name").innerHTML = data.name;
            document.querySelector("#biography").innerHTML = data.biography;
            document.querySelector("#main").classList.replace('none', 'flex');
        });
    }
})