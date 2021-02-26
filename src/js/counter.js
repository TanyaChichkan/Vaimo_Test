import {refs} from './refs';

document.body.addEventListener('click',cartHandler);

function cartHandler(e){
    if(e.target.classList.contains('registr-button')){

        let counter = Number(refs.cart.textContent);

            if(e.target.dataset.name==="add"){
                counter+=1;
            }

            if(e.target.dataset.name==="remove"){
                counter-=1;
            }

        refs.cart.textContent = counter >=0 ? counter : 0;
    }

}