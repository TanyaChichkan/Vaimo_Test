(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{OSpC:function(e,t,r){},QfWi:function(e,t,r){"use strict";r.r(t);r("OSpC"),r("4owi"),r("WoWj");var s={header:document.querySelector("header"),deliveryWrapper:document.querySelector(".header-delivery-wrapper"),headerInput:document.querySelector(".input-mobile"),togglerButtons:Array.from(document.querySelectorAll(".header-toggler-button")),cart:document.querySelector(".registr-cart"),cartMobile:document.querySelector(".mobile-cart"),container:document.querySelector(".container"),registrBtnBlock:document.querySelector(".registr-wrapper"),heroSection:document.querySelector(".section-hero"),cartButtons:document.querySelector(".registr-cart-buttons"),menuWrapper:document.querySelector(".menu-wrapper"),backdrop:document.querySelector(".backdrop"),navList:document.querySelector(".navigation-list"),navListItem:Array.from(document.querySelectorAll(".navigation-list-item")),categoryBlock:document.querySelector(".category-block"),iconGoBack:document.querySelector(".icon-back"),mobileDelivery:document.querySelector(".delivery-wrapper"),deliverySlogan:document.querySelector(".delivery-slogan"),registerBtnMobile:document.querySelector(".registr-button-wrapper.mobile"),footerList:document.querySelector(".footer-list"),footerItems:Array.from(document.querySelectorAll(".footer-list-item")),footerIconRight:Array.from(document.querySelectorAll("footer .icon-right")),categoriesList:Array.from(document.querySelectorAll(".categories-list"))};r("RtS0"),r("fp7Y"),r("3dw1");s.footerList.addEventListener("click",(function(e){s.footerItems.forEach((function(t,r){Number(e.target.dataset.index)===r&&(s.footerIconRight[r].classList.toggle("is-open"),s.categoriesList[r].classList.toggle("is-open"))}))}));s.header.addEventListener("mouseenter",(function(e){"HEADER"===e.target.nodeName&&(!0,s.deliveryWrapper.style.backgroundColor="#F7F7F7",s.deliveryWrapper.style.position="fixed",s.deliveryWrapper.style.width="100%")})),s.header.addEventListener("mouseleave",(function(e){s.header.classList.contains("is-registered")?s.deliveryWrapper.style.backgroundColor="#F7F7F7":s.deliveryWrapper.style.backgroundColor="white",s.headerInput.classList.remove("is-input-open"),s.togglerButtons[1].classList.remove("is-input-open"),!1}));r("D/wG");s.registrBtnBlock.addEventListener("click",(function(e){"register"===e.target.dataset.name&&(s.header.classList.toggle("is-registered"),s.heroSection.classList.toggle("is-registered"),s.registrBtnBlock.classList.toggle("is-registered"),s.deliveryWrapper.classList.toggle("is-registered"),s.cartButtons.classList.toggle("is-registered"))})),s.registerBtnMobile.addEventListener("click",(function(e){"register-mobile"===e.target.dataset.name&&s.cartMobile.classList.toggle("is-registered")}));document.body.addEventListener("click",(function(e){if(e.target.classList.contains("registr-button")){var t=Number(s.cart.textContent);"add"===e.target.dataset.name&&(t+=1),"remove"===e.target.dataset.name&&(t-=1),s.cart.textContent=t>=0?t:0}})),s.header.addEventListener("click",(function(e){s.container.style.width<1440&&("input-toggler"===e.target.dataset.name&&(s.togglerButtons[1].classList.toggle("is-input-open"),s.headerInput.classList.toggle("is-input-open")),"menu-toggler"===e.target.dataset.name&&(s.togglerButtons[0].classList.toggle("is-menu-open"),s.menuWrapper.classList.toggle("is-menu-open"),s.backdrop.classList.toggle("is-open")),"close-backdr"===e.target.dataset.name&&(s.togglerButtons[0].classList.remove("is-menu-open"),s.menuWrapper.classList.remove("is-menu-open"),s.backdrop.classList.remove("is-open")))}));r("8cZI"),r("lmye");s.menuWrapper.addEventListener("click",(function(e){s.navListItem.forEach((function(t,r){1===Number(e.target.dataset.index)&&"first-page"===s.navList.dataset.id&&(s.categoryBlock.classList.toggle("is-rendered"),s.categoryBlock.children[1].textContent=e.target.firstElementChild.textContent,s.navList.dataset.id="second-page",s.navList.innerHTML=a(i,2),s.mobileDelivery.classList.toggle("is-rendered"),s.deliverySlogan.classList.toggle("is-rendered")),0===Number(e.target.dataset.index)&&"second-page"===s.navList.dataset.id&&(s.navList.innerHTML=a(n,3),s.categoryBlock.children[1].textContent=e.target.firstElementChild.textContent,s.iconGoBack.classList.toggle("is-rendered"),s.mobileDelivery.classList.toggle("is-shown"),s.navList.dataset.id="third-page")})),e.target.classList.contains("history-link")&&(s.categoryBlock.classList.toggle("is-rendered"),s.navList.innerHTML=a(o,1),s.navList.dataset.id="first-page",s.mobileDelivery.classList.toggle("is-rendered"));"go-back"===e.target.dataset.id&&"third-page"===s.navList.dataset.id&&(s.categoryBlock.children[1].textContent=e.target.firstElementChild.textContent,s.navList.dataset.id="second-page",s.navList.innerHTML=a(i,2),s.iconGoBack.classList.toggle("is-rendered"));"go-back"===e.target.dataset.id&&"second-page"===s.navList.dataset.id&&(s.categoryBlock.classList.toggle("is-rendered"),s.navList.innerHTML=a(o,1),s.navList.dataset.id="first-page")}));var i=["clothing","collections","collabs","brands"],o=["What's new","women","accessories","kids","beauty","outlet","stories"],n=["T-shirts","Sweatshirts","Knitwear","Jeans","Jumpsuits","Skirts","Dresses"];function a(e,t){return(3!==t?e.map((function(e,t){return'<li class="navigation-list-item" data-index='+String(t)+'>\n            <div class="list-wrapper">\n            '+e+'\n            <svg class="icon-right">\n            <use href="./images/symbol-defs.svg#icon-right"></use>\n            </svg>\n            </div>\n            </li>'})):e.map((function(e,t){return'<li class="navigation-list-item" data-index='+String(t)+'>\n            <div class="list-wrapper">\n            '+e+"\n           </div>\n            </li>"}))).join("")}document.querySelector(".icon-search"),document.querySelector(".icon-cross"),document.querySelector(".header-icon-burger"),document.querySelector(".header-search-button"),document.querySelector(".header-search-button")}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.67a23d21176bfb60fc21.js.map