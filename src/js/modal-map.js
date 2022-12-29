(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-map]"),
    closeModalBtn: document.querySelector("[data-modal-close-map]"),
    modal: document.querySelector("[data-modal-map]"),
    body: document.querySelector("[data-body-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("overflow");
    
  }
})();
