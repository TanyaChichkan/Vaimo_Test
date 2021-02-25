const registrBtnBlock = document.querySelector('.registr-wrapper');
const heroSection = document.querySelector('.section-hero');
const header = document.querySelector('header');
const deliveryWrapper = document.querySelector('.header-delivery-wrapper');
const cartButtons = document.querySelector('.registr-cart-buttons');

export let registFlag = false;




registrBtnBlock.addEventListener('click',registrHandler);

function registrHandler(e){
    
    if(e.target.dataset.name==="register"){
        registFlag=true;
        
        header.classList.toggle('is-registered');
        heroSection.classList.toggle('is-registered');
        registrBtnBlock.classList.toggle('is-registered');
        deliveryWrapper.classList.toggle('is-registered');
        cartButtons.classList.toggle('is-registered');


    }
}
