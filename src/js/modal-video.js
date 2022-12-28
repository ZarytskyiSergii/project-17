(() => {
    const refs = {
      openModalVid: document.querySelector("[data-modal-open-video]"),
      closeModalVid: document.querySelector("[data-modal-close-video]"),
      modal: document.querySelector("[data-modal-video]"),
       body: document.querySelector("[data-body-modal]"),
    };
  
    refs.openModalVid.addEventListener("click", toggleModal);
    refs.closeModalVid.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("overflow");
    }
  })();
  