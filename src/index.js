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


const footerItems = Array.from(document.querySelectorAll('.footer-list-item'));
const footerIconRight = Array.from(document.querySelectorAll('.icon-right'));



footerItems.forEach(item=>{
    item.addEventListener("click",handlerFooter);
});

function handlerFooter(e){
   
    footerIconRight.forEach((icon,index)=>{
        if(index==e.target.dataset.index){
            icon.classList.toggle('is-open');
            listMarkUpRender()
        }
        // e.target.insertAdjacentHTML('beforeend', listMarkUpRender());
    })

}

function listMarkUpRender(){
    footerIconRight.map(item => {
        return item.innerHTML = `<ul>${categoryRender(categories)}</ul>`;
    })
}




function categoryRender(array){
    array.map(item=>`<li>${item}</li>`)
}














