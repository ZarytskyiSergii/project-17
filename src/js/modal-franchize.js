(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-franchize]'),
    closeModalBtn: document.querySelector('[data-modal-close-franchize]'),
    modal: document.querySelector('[data-modal-franchize]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
