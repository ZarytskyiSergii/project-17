(() => {
  const refs = {
    openModalFrv: document.querySelector('[data-modal-open-franchize]'),
    closeModalFrv: document.querySelector('[data-modal-close-franchize]'),
    modal: document.querySelector('[data-modal-franchize]'),
    body: document.querySelector('[data-body-modal]'),
  };

  refs.openModalFrv.addEventListener('click', toggleModal);
  refs.closeModalFrv.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('overflow');
  }
})();
