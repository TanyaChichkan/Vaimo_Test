import {refs} from './refs';

refs.header.addEventListener('click', formOpenHandler);

function formOpenHandler(e){
    if(refs.container.style.width<1440){

        if(e.target.dataset.name ==="input-toggler"){
            refs.togglerButtons[1].classList.toggle('is-input-open');
            refs.headerInput.classList.toggle('is-input-open');
        }

        if(e.target.dataset.name==="menu-toggler"){
            refs.togglerButtons[0].classList.toggle('is-menu-open');
            refs.menuWrapper.classList.toggle('is-menu-open');
            refs.backdrop.classList.toggle('is-open');
        }

        if(e.target.dataset.name === "close-backdr"){
            refs.togglerButtons[0].classList.remove('is-menu-open');
            refs.menuWrapper.classList.remove('is-menu-open');
            refs.backdrop.classList.remove('is-open');
        }
    }
};