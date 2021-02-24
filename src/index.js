import './main.scss';

const header = document.querySelector('header');
const heroSection = document.querySelector('.section-hero');
const searchIcon = document.querySelector('.icon-search');
const crossIcon = document.querySelector('.icon-cross');
const burgerIcon = document.querySelector('.header-icon-burger');
const searchButton = document.querySelector('.header-search-button');
const basket = document.querySelector('.header-search-button');

const categories = ['Women fashion','Accessories', 'Kids'];

searchButton.addEventListener('click',handler);


function handler(){
    heroSection.classList.toggle('active');
    header.classList.toggle('isFormOpen');
    crossIcon.classList.toggle('active');
    burgerIcon.classList.toggle('isFormOpen');
    searchIcon.classList.toggle('isFormOpen');
}


const footerList = document.querySelector('.footer-list');
const footerItems = Array.from(document.querySelectorAll('.footer-list-item'));
const footerIconRight = Array.from(document.querySelectorAll('.icon-right'));
const categoriesList = Array.from(
  document.querySelectorAll('.categories-list'),
);

footerList.addEventListener('click', handlerFooter);

function handlerFooter(e) {
  footerItems.forEach((item, index) => {
    if (Number(e.target.dataset.index) === index) {
      footerIconRight[index].classList.toggle('is-open');
      categoriesList[index].classList.toggle('categories-list');
    }
  });
}














