const navSlide = () => {
    const burger = document.querySelector('.nav__burger');
    const nav = document.querySelector('.nav__list');
    const navItems = document.querySelectorAll('.nav__item');
    const burgerLines = document.querySelectorAll('.nav__burger div');


    burger.addEventListener('click', () => {
        //toggle mobile nav
        nav.classList.toggle('nav__list--active');
        
        //links animation
        navItems.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = ``;
            }else {
                item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });
        // burger animation
         
        burgerLines.forEach((line, index) => {
            console.log(line.classList);
         
            line.classList.toggle(`burger__line${index+1}--toggle`);
        })
    });


}

navSlide();


