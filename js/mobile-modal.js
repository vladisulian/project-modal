(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-mobile-modal-open]"),
      closeModalBtn: document.querySelector("[data-mobile-modal-close]"),
      modal: document.querySelector("[data-mobile-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();