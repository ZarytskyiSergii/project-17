new Swiper(".customers__slider",{pagination:{el:".swiper-pagination",clickable:!0},dots:!1,infinite:!0,speed:3e3,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:2e3}),new Swiper(".gallery__slider",{dots:!1,infinite:!0,speed:1e3,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:2e3});(()=>{const e={openModalBtn1:document.querySelector("[data-modal-open-header1]"),openModalBtn:document.querySelector("[data-modal-open-header]"),closeModalBtn:document.querySelector("[data-modal-close-header]"),modal:document.querySelector("[data-modal-header]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn1.addEventListener("click",t),e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),d=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",d),o.addEventListener("click",d),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=index.40899aa5.js.map
