const cards = document.querySelectorAll('.about__card');
const aboutHeader = document.querySelector('.about__header');
const pricesHeader = document.querySelector('.prices__header');
const pricesContainer = document.querySelector('.prices__container');
const gallerySlide = document.querySelector('.gallery__slide');
const galleryImgs = document.querySelectorAll('.gallery__photo');
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');
const reviewSection = document.querySelector('.reviews');
const reviewCountContainer = document.querySelector('.reviews__gradeContainer');
const likesCounter = document.querySelector('.reviews__likes');
const likesIcon = document.querySelector('.fa-thumbs-up');
const usersCounter = document.querySelector('.reviews__users');
const usersIcon = document.querySelector('.fa-handshake-o');
const gradesCounter = document.querySelector('.reviews__grades');
const gradesIcon = document.querySelector('.fa-star');

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  const html = document.documentElement;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight && html.clientHeight) &&
    rect.right <= (window.innerWidth && html.clientWidth)
  );
};

const animateCardsInView = () => {
  window.addEventListener('scroll', () => {
    cards.forEach((c) => {
      if (isInViewport(c)) {
        console.log('in view');
        c.style.opacity = '1';
      } else {
        c.style.opacity = '0';
        console.log('not in view');
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
};

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
        item.style.animation = ``;
      } else {
        item.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }

      item.addEventListener('click', () => {
        nav.classList.remove('nav__list--active');
        navItems.forEach((item) => (item.style.animation = ``));
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

const slideCarousel = () => {
  let counter = 1;
  const size = galleryImgs[0].clientWidth;
  console.log(size);
  gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  btnNext.addEventListener('click', () => {
    if(counter >= galleryImgs.length - 1) return;
    gallerySlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    console.log(counter);
    gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  });

  btnPrev.addEventListener('click', () => {
    if (counter <= 0) return;
    gallerySlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    console.log(counter);
    gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  });

  gallerySlide.addEventListener('transitionend', () => {
    if (galleryImgs[counter].id === 'last-clone') {
      gallerySlide.style.transition = 'none';
      counter = galleryImgs.length - 2;
      gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    else if (galleryImgs[counter].id === 'first-clone') {
      gallerySlide.style.transition = 'none';
      counter = galleryImgs.length - counter;
      gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
  });
};

const animateCount = (counterElement, icon, count, multiplier, timeout) => {
  window.addEventListener('scroll', () => {
    if(isInViewport(reviewSection)) {
      for (let index = 0; index <= count; index++) {
        setTimeout(() => {
        icon.style.fontSize = index * multiplier + 'px';
        counterElement.textContent = index.toString();               
        }, index * timeout);
      }
    }
    else if (!isInViewport(reviewCountContainer)){
      counterElement.textContent = '';
      icon.style.fontSize = '0px';
    }
  });
};

const countLikes = () => {

    animateCount(likesCounter, likesIcon, 206, 0.15, 10);

};

const countStudents = () => {
  console.log(usersIcon.classList);  
  animateCount(usersCounter, usersIcon, 1000, 0.03, 2);

};

const countGrades = () => {

  animateCount(gradesCounter, gradesIcon, 18, 1.67, 100);

};

animateCardsInView();
animatePricesInView();
navSlide();
setStickyNavbar();
slideCarousel();
countLikes();
countStudents();
countGrades();