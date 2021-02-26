import {refs} from './refs';

refs.iconList.addEventListener('click', formOpenHandler);

function formOpenHandler(e){
    if(refs.container.style.width<1440){

        if(e.target.dataset.name ==="input-toggler"){
            refs.togglerButtons[1].classList.toggle('is-input-open');
            refs.headerInput.classList.toggle('is-input-open');
        }

        if(e.target.dataset.name==="menu-toggler" && refs.container.style.width<1440){
            refs.togglerButtons[0].classList.toggle('is-menu-open');
            refs.menuWrapper.classList.toggle('is-menu-open');
            // refs.backdrop.classList.toggle('is-open');
        }
    }
};