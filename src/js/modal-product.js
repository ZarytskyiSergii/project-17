(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-product]'),
    closeModalBtn: document.querySelector('[data-modal-close-product]'),
    modal: document.querySelector('[data-modal-product]'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();