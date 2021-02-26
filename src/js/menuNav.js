import {refs} from './refs';



if(refs.container.style.width<1440){
    console.log(refs.container.style.width);
    refs.navList.addEventListener('click',navHandler);
} 

const arr = ["clothing", "collections", "collabs", "brands" ]

function navHandler(e){
    console.log(refs.container.style.width);
    refs.navListItem.forEach((item,index,array)=>{
        if (Number(e.target.dataset.index) === 1) {

            refs.categoryBlock.classList.toggle('is-rendered');
            refs.categoryBlock.children[0].textContent = e.target.firstElementChild.textContent;
            refs.navList.innerHTML=markUpRender();
        }
    })
    
};


function markUpRender(){
    const markup = arr.map((el,index)=>{
    return `<li class="navigation-list-item" data-index=${String(index)}>
        <div class="list-wrapper">
        ${el}
        <svg class="icon-right">
        <use href="./images/symbol-defs.svg#icon-right"></use>
        </svg>
        </div>
        </li>`
    });

    return markup;
        
}