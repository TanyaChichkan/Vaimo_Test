import './main.scss';
import './js/footer';
import './js/header';


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










