document.addEventListener("DOMContentLoaded", function(){
    
    let burger = document.querySelector(".nav-icon");

    /* Обробка події "Click" для елемента '.nav-icon' */
    /* 1. По кліку ініціюється перемикання (вкл./викл.)  */
    /*    класу '.open' для '.navbar' та для самого '.nav-icon' */
    /* 2. Також створюється додатковий елемент '.overlay'  */

    burger.addEventListener("click", (e) => {
        burger.classList.toggle("open");                            // Перемикання класу 'open' для бургера
        let navbar = document.querySelector(".navbar");             // Віднайти елемент з класом '.navbar' та записати у змінну navbar
        let overlay = document.querySelector(".navbar .overlay");   // Віднайти елемент з класом '.overlay' та записати у змінну overlay
        navbar.classList.toggle("open");                            // Перемикання класу 'open' для .navbar
        if ( overlay ) {                                            // Якщо елемент з класом '.overlay' існує
            overlay.parentNode.removeChild(overlay);                // то видалити його (закриття меню)
        }
        else {                                                      // Якщо елементу з класом '.overlay' НЕ існує
            let overlay_div = document.createElement("div");        // то створити його (відкриття меню),
            overlay_div.classList.add("overlay");                   // як перший дочірній елемент '.navbar'
            navbar.insertBefore(overlay_div, navbar.firstChild);
            overlay_div.addEventListener("click", (e) => {          // і додати до новоствореного елементу '.overlay'
                navbar.classList.remove("open");                    // обробку події "click", по якій
                burger.classList.remove("open");                    // закривати меню (ремувити клас 'open' для '.navbar' і бургера)
                overlay_div.parentNode.removeChild(overlay_div);    // та видаляти власне сам 'overlay'
            });
        }
    });

    /* Для усіх елементів з класом '.nav-link' (пункти головного меню) */
    /* ініціюється обробка події "click" */

    let navlinks = document.querySelectorAll(".nav-link");

    navlinks.forEach((elem) => {

        elem.addEventListener("click", (evt) => {
            evt.stopImmediatePropagation();                             // зупинити системну обробку кліку
            let navbar = document.querySelector(".navbar");
            let overlay = document.querySelector(".navbar .overlay");
            if ( overlay ) {                                            // Якщо елемент з класом '.overlay' існує,
                navbar.classList.remove("open");                        // то закривати меню 
                burger.classList.remove("open");                        // (ремувити клас 'open' для '.navbar' і бургера)
                overlay.parentNode.removeChild(overlay);                // та видаляти власне сам 'overlay'
            }
            return(true);                                               // відновити системну обробку кліку (перехід по href)
        });
    });

    /* Додати функцію обробки для події 'Scroll' */
    /* При скролі вниз більше, ніж на 160px */
    /* Додавати клас '.topfixed' для елемента "nav"*/
    
    window.addEventListener('scroll', function() {

        let navbox = document.querySelector("nav");
        let y = window.scrollY;
        
        if (y < 160) {
            navbox.classList.remove("topfixed");
        } else {
            navbox.classList.add("topfixed");
        }
      });

    /* Зміна класу для <nav> по скролу */
});

