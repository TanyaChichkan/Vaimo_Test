import {refs} from './refs';



if(refs.container.style.width<1440){
    refs.menuWrapper.addEventListener('click',navHandler);
} 

const arr = ["clothing", "collections", "collabs", "brands" ];
const navLinks = ["What's new", "women", "accessories", "kids", "beauty", "outlet", "stories" ];
const miniCategeory = ["T-shirts","Sweatshirts","Knitwear","Jeans","Jumpsuits","Skirts","Dresses"];

function navHandler(e){
    console.log(e.target);
    refs.navListItem.forEach((item,index)=>{
      
        if ((Number(e.target.dataset.index) === 1) && refs.navList.dataset.id==="first-page") {
            refs.categoryBlock.classList.toggle('is-rendered');
            refs.categoryBlock.children[1].textContent = e.target.firstElementChild.textContent;
            refs.navList.dataset.id='second-page';
            refs.navList.innerHTML=markUpRender(arr,2);
        }

        if((Number(e.target.dataset.index) === 0) && refs.navList.dataset.id==="second-page"){
            refs.navList.innerHTML=markUpRender(miniCategeory,3);
            refs.categoryBlock.children[1].textContent = e.target.firstElementChild.textContent;
            refs.iconGoBack.style.display="block";
            refs.navList.dataset.id='third-page';
        }
    });

    if(e.target.classList.contains('history-link')){
        refs.categoryBlock.classList.toggle('is-rendered');
        refs.navList.innerHTML=markUpRender(navLinks,1);
        refs.navList.dataset.id="first-page";
    }  

    if(e.target.dataset.id==="go-back" && refs.navList.dataset.id==="third-page"){
        refs.categoryBlock.children[1].textContent = e.target.firstElementChild.textContent;
        refs.navList.dataset.id='second-page';
        refs.navList.innerHTML=markUpRender(arr,2);
    }

    if(e.target.dataset.id==="go-back" && refs.navList.dataset.id==="third-page"){
        refs.categoryBlock.children[1].textContent = e.target.firstElementChild.textContent;
        refs.navList.dataset.id='second-page';
        refs.navList.innerHTML=markUpRender(arr,2);
    }

    if(e.target.dataset.id==="go-back" && refs.navList.dataset.id==="second-page"){
        refs.categoryBlock.classList.toggle('is-rendered');
        refs.navList.innerHTML=markUpRender(navLinks,1);
        refs.navList.dataset.id="first-page";
    }

};


function markUpRender(array, pageNumber){
    let markup;

    if(pageNumber !== 3){
        markup = array.map((el,index)=>{
            return `<li class="navigation-list-item" data-index=${String(index)}>
            <div class="list-wrapper">
            ${el}
            <svg class="icon-right">
            <use href="./images/symbol-defs.svg#icon-right"></use>
            </svg>
            </div>
            </li>`
        });
    } else {
        markup = array.map((el,index)=>{
            return `<li class="navigation-list-item" data-index=${String(index)}>
            <div class="list-wrapper">
            ${el}
           </div>
            </li>`
        });
    }

    return markup.join("");
        
}