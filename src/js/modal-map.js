(() => {
  const refs = {
    openModalMap: document.querySelector("[data-modal-open-map]"),
    closeModalMap: document.querySelector("[data-modal-close-map]"),
    modal: document.querySelector("[data-modal-map]"),
    body: document.querySelector("[data-body-modal]"),
  };

  refs.openModalMap.addEventListener("click", toggleModal);
  refs.closeModalMap.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("overflow");
    
  }
})();
