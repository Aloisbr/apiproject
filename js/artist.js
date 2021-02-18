let list = document.querySelector('#sidebar');

function sortInTab (tab) {
    let i = 0;
    let s = 0;
    while (i < tab.length - 1)
    {
        if (tab[i].vote_count < tab[i + 1].vote_count)
        {
            s = tab[i];
            tab[i] = tab[i + 1];
            tab[i + 1] = s;
            i = 0;
        }
        else 
            i++;
    }
    return tab;
}

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
        fetch('https://api.themoviedb.org/3/person/' + el.dataset.id + '/movie_credits?api_key=01af314f34b767f06d2445d9fc982dd9')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            movies = sortInTab(data.cast).slice(0, 12);
            movies.forEach(movie => {
                let item = document.createElement('div');
                let item_img = document.createElement('div');
                let img = document.createElement('img');
                let item_body = document.createElement('div');
                let item_title = document.createElement('div');
                let item_description = document.createElement('div');
                let title = document.createElement('h3');
                let description = document.createElement('p');
                
                img.src = "https://image.tmdb.org/t/p/w200" + movie.poster_path + '?api_key=01af314f34b767f06d2445d9fc982dd9';
                title.innerHTML = movie.title;
                description.innerHTML = movie.release_date;
                item.classList.add("item");
                item_img.classList.add("item__img");
                item_body.classList.add("item__body");
                item_title.classList.add("item__title");
                item_description.classList.add("item__description");

                item_description.appendChild(description);
                item_title.appendChild(title);
                item_img.appendChild(img);
                item_body.appendChild(item_title);
                item_body.appendChild(item_description);
                item.appendChild(item_img);
                item.appendChild(item_body);
                document.querySelector('#carousel1').appendChild(item);
            });
            if(document.querySelector('.carousel'))
                document.querySelector('.carousel').innerHTML = '';  
            new Carousel(document.querySelector('#carousel1'), {
            slidesToScroll: 2,
            slidesVisible: 3,
            loop: false
            })

        })
    }
})

