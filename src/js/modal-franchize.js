(() => {
  const refs = {
    openModalFrn: document.querySelector('[data-modal-open-franchize]'),
    closeModaFrn: document.querySelector('[data-modal-close-franchize]'),
    modal: document.querySelector('[data-modal-franchize]'),
  };

  refs.openModalFrn.addEventListener('click', toggleModal);
  refs.closeModalFrn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
