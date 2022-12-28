(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-open-header1]'),
    openModalBtn: document.querySelector('[data-modal-open-header]'),
    closeModalBtn: document.querySelector('[data-modal-close-header]'),
    modal: document.querySelector('[data-modal-header]'),
    openModalBtn1: document.querySelector("[data-modal-open-header1]"),
    openModalBtn: document.querySelector("[data-modal-open-header]"),
    closeModalBtn: document.querySelector("[data-modal-close-header]"),
    modal: document.querySelector("[data-modal-header]"),
    body: document.querySelector("[data-body-modal]"),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
