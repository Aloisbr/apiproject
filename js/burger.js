// Récupére les blocs que je veux afficher
var mainMenu = document.querySelector("#menu");
var burgerMenu = document.querySelector("#menu-burger");

/*=== Clic sur le menu burger 
/*===============================*/
// Vérifie si l'événement touchstart existe et est le premier déclenché
var clickedEvent = "click"; // Au clic si "touchstart" n'est pas détecté
window.addEventListener(
  "touchstart",
  function detectTouch() {
    clickedEvent = "touchstart"; // Transforme l'événement en "touchstart"
    window.removeEventListener("touchstart", detectTouch, false);
  },
  false
);

// Créé un "toggle class" en Javascrit natif (compatible partout)
burgerMenu.addEventListener(
  clickedEvent,
  function (evt) {
    console.log(clickedEvent);
    // Modification du menu burger
    if (!this.getAttribute("class")) {
      this.setAttribute("class", "clicked");
    } else {
      this.removeAttribute("class");
    }

    // Créé l'effet pour le menu slide (compatible partout)
    if (mainMenu.getAttribute("class") != "visible") {
      mainMenu.setAttribute("class", "visible");
    } else {
      mainMenu.setAttribute("class", "invisible");
    }
  },
  false
);

if(window.innerWidth > 1100) {
    document.querySelector("#group").style.display = 'none';
}

window.addEventListener('resize', () => {
    let burger = document.querySelector('#group')
    let menu = document.querySelector("#header")
    if (window.innerWidth < 1100) {
        burger.style.display = '';
        menu.style.display = 'none';
    } else {
        burger.style.display = 'none';
        menu.style.display = '';
    }
});
