document.body.addEventListener('click',cartHandler);
const cart = document.querySelector('.registr-cart');

function cartHandler(e){
    if(e.target.classList.contains('registr-button')){

        let counter = Number(cart.textContent);

            if(e.target.dataset.name==="add"){
                counter+=1;
            }

            if(e.target.dataset.name==="remove"){
                counter-=1;
            }

        cart.textContent = counter >=0 ? counter : 0;
    }

}