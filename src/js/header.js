import {refs} from './refs';



let headerHover = false;


refs.header.addEventListener('mouseenter',handleChangeColor);
refs.header.addEventListener('mouseleave',handleRemoveColor);
// header.addEventListener('click',handlerOpenForm);

// function toggleBackgr(){
//     header.classList.toggle('timer');
// }

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

// function handlerOpenForm(e){
//     if(container.style.width<1440){
//         console.log(e.target);
//         if(e.target.dataset.name ==="toggler"){
            
//             e.target.classList.toggle('is-input-open');
//             headerInput.classList.toggle('is-input-open');
//         }
//     }
// }




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
