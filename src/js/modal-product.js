(() => {
  const refs = {
    openModalPro: document.querySelector('[data-modal-open-product]'),
    closeModalPro: document.querySelector('[data-modal-close-product]'),
    modal: document.querySelector('[data-modal-product]'),
    body: document.querySelector('[data-body-modal]'),
  };

  refs.openModalPro.addEventListener('click', toggleModal);
  refs.closeModalPro.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('overflow');
  }
})();
