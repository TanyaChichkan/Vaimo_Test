const footerList = document.querySelector('.footer-list');
const footerItems = Array.from(document.querySelectorAll('.footer-list-item'));
const footerIconRight = Array.from(document.querySelectorAll('.icon-right'));
const categoriesList = Array.from(
  document.querySelectorAll('.categories-list'),
);

footerList.addEventListener('click', handlerFooter);

function handlerFooter(e) {
  footerItems.forEach((item, index) => {
    if (Number(e.target.dataset.index) === index) {
      footerIconRight[index].classList.toggle('is-open');
      categoriesList[index].classList.toggle('is-open');
    }
  });
}