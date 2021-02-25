const header = document.querySelector('header');
const deliveryWrapper = document.querySelector('.header-delivery-wrapper');

let headerHover = false;


header.addEventListener('mouseenter',handleChangeColor);
header.addEventListener('mouseleave',handleRemoveColor);

function handleChangeColor(e){
    
    if(e.target.nodeName==="HEADER"){
        headerHover = true;
        console.log(headerHover);
        deliveryWrapper.style.backgroundColor="#F7F7F7";
        deliveryWrapper.style.position="fixed";
        deliveryWrapper.style.width="100%";
    } 
}

function handleRemoveColor(e){
    deliveryWrapper.style.backgroundColor="white";
    headerHover = false;
    console.log(headerHover);
}


window.addEventListener('scroll',handleScroll);


function handleScroll(e){
    
    if(window.pageYOffset>=101){
        header.style.backgroundColor = `yellow`;
    } else {
        headerHover ? header.style.backgroundColor = 'white' : header.style.backgroundColor = 'initial'; 
    }
   
}
