const cards = document.querySelectorAll('.about__card');
const aboutHeader = document.querySelector('.about__header');
const pricesHeader = document.querySelector('.prices__header');
const pricesContainer = document.querySelector('.prices__container')

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  const html = document.documentElement;

  return rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight && html.clientHeight) && 
        rect.right <= (window.innerWidth && html.clientWidth);
};

const animateCardsInView = () => {
  window.addEventListener('scroll', () => {        
        cards.forEach(c => {
          if (isInViewport(c)) {
            console.log('in view')
            c.style.opacity = '1'
          }
          else {
            c.style.opacity = '0'
            console.log('not in view')
          }
        });
      });
};

const animatePricesInView = () => {
  window.addEventListener('scroll', () => {
    if (isInViewport(pricesHeader)) {
      pricesContainer.style.transform = 'translateX(0vw)';
    } else {
      pricesContainer.style.transform = 'translateX(-100vw)';
    }
  });
}

const navSlide = () => {
  const burger = document.querySelector('.nav__burger');
  const nav = document.querySelector('.nav__list');
  const navItems = document.querySelectorAll('.nav__item');
  const burgerLines = document.querySelectorAll('.nav__burger div');

  burger.addEventListener('click', () => {
    //toggle mobile nav
    nav.classList.toggle('nav__list--active');

    //links animation


    // burger animation

    burgerLines.forEach((line, index) => {
      console.log(line.classList);

      line.classList.toggle(`burger__line${index + 1}--toggle`);
    });

      navItems.forEach((item, index) => {

          
        if (item.style.animation) {
          item.style.animation = ``
        } else {
          item.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        };

        item.addEventListener('click', () => {
          nav.classList.remove('nav__list--active')
          navItems.forEach(item => item.style.animation = ``);
          burgerLines.forEach((line, index) => {
          line.classList.remove(`burger__line${index + 1}--toggle`);
          });
    });
  });
  });
};

const setStickyNavbar = () => {
  const nav = document.querySelector('nav');
  const banner = document.querySelector('.banner');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      nav.classList.toggle('sticky', window.scrollY > 0);
      banner.style.paddingTop = '20vh';
    } else if (window.scrollY <= 0) {
      nav.classList.remove('sticky');
      banner.style.paddingTop = '0vh';
    }
  });
};

// const slideCarousel = () => {
//   document.querySelector('.gallery button').addEventListener('click', () => {
//     if () {
      
//     } else {
      
//     }
//   });
// };



animateCardsInView();
animatePricesInView();
navSlide();
setStickyNavbar();
