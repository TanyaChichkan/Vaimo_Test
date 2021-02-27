import {refs} from './refs';

let headerHover = false;

refs.header.addEventListener('mouseenter',handleChangeColor);
refs.header.addEventListener('mouseleave',handleRemoveColor);

function handleChangeColor(e){
    if(e.target.nodeName==="HEADER"){
        headerHover = true;
        refs.deliveryWrapper.style.backgroundColor="#F7F7F7";
        refs.deliveryWrapper.style.position="fixed";
        refs.deliveryWrapper.style.width="100%";
    } 
}

function handleRemoveColor(e){
    refs.header.classList.contains('is-registered')?
    refs.deliveryWrapper.style.backgroundColor="#F7F7F7":
    refs.deliveryWrapper.style.backgroundColor="white" ;
    refs.headerInput.classList.remove('is-input-open');
    refs.togglerButtons[1].classList.remove('is-input-open');
    headerHover = false;
}


