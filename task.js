const links = Array.from(document.getElementsByClassName('menu__link'));




for (let i = 0; i < links.length; i++) {
    links[i].onclick = function(){
        if (links[i].nextElementSibling != null) {
            event.preventDefault();
            let menu = links[i].nextElementSibling;
            menu.classList.toggle('menu_active');
        }
      }
}


