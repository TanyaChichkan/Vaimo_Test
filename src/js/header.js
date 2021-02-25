import {registFlag} from './registration';

const header = document.querySelector('header');
const deliveryWrapper = document.querySelector('.header-delivery-wrapper');
const container = document.querySelector('.container');
const headerInput = document.querySelector('.input-mobile');

let headerHover = false;


header.addEventListener('mouseenter',handleChangeColor);
header.addEventListener('mouseleave',handleRemoveColor);
header.addEventListener('click',handlerOpenForm);

function toggleBackgr(){
    header.classList.toggle('timer');
}

function handleChangeColor(e){
    
    if(e.target.nodeName==="HEADER"){
        headerHover = true;
        deliveryWrapper.style.backgroundColor="#F7F7F7";
        deliveryWrapper.style.position="fixed";
        deliveryWrapper.style.width="100%";
    } 
}

function handleRemoveColor(e){

    header.classList.contains('is-registered')?
    deliveryWrapper.style.backgroundColor="#F7F7F7":
    deliveryWrapper.style.backgroundColor="white" ;
    headerInput.classList.remove('is-input-open');
    headerHover = false;
   
}

function handlerOpenForm(e){
    if(container.style.width<1440){
        if(e.target.dataset.name ==="toggler"){
            e.target.nextElementSibling.classList.toggle('is-input-open');
            e.target.classList.toggle('is-input-open');
            headerInput.classList.toggle('is-input-open');
        }
    }
}




// window.addEventListener('scroll',handleScroll);


// function handleScroll(e){

//     if(window.pageYOffset>=101){
//         header.style.backgroundImage = `url(../images/logo.jpg)`;
//     } else {
//         !headerHover ? 
//             header.style.backgroundColor = 'white' : 
//             header.style.backgroundColor = 'yellow'; 
//     }
   
// }
