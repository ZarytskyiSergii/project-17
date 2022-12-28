(() => {
  const refs = {
    openModalPro1: document.querySelector('[data-modal-open-product1]'),
    openModalPro2: document.querySelector('[data-modal-open-product2]'),
    openModalPro3: document.querySelector('[data-modal-open-product3]'),

    closeModalPro: document.querySelector('[data-modal-close-product]'),
    modal: document.querySelector('[data-modal-product]'),
    body: document.querySelector('[data-body-modal]'),
  };

  refs.openModalPro1.addEventListener('click', toggleModal);
  refs.openModalPro2.addEventListener('click', toggleModal);
  refs.openModalPro3.addEventListener('click', toggleModal);

  refs.closeModalPro.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('overflow');
  }
})();
