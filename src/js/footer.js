import {refs} from './refs';

const handlerFooter=(e)=> {
  refs.footerItems.forEach((item, index) => {
    if (Number(e.target.dataset.index) === index) {
      refs.footerIconRight[index].classList.toggle('is-open');
      refs.categoriesList[index].classList.toggle('is-open');
    }
  });
};

refs.footerList.addEventListener('click', handlerFooter);
