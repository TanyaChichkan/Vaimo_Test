import {refs} from './refs';

refs.registrBtnBlock.addEventListener('click',registrHandler);

function registrHandler(e){
    if(e.target.dataset.name==="register"){
        refs.header.classList.toggle('is-registered');
        refs.heroSection.classList.toggle('is-registered');
        refs.registrBtnBlock.classList.toggle('is-registered');
        refs.deliveryWrapper.classList.toggle('is-registered');
        refs.cartButtons.classList.toggle('is-registered');
    }
}

refs.registerBtnMobile.addEventListener('click',registrHandlerMob);

function registrHandlerMob(e){
    if(e.target.dataset.name==="register-mobile"){
        refs.cartMobile.classList.toggle('is-registered');
    }
}