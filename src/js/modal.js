(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-slick-open]'),
    closeModalBtn: document.querySelector('[data-slick-close]'),
    modal: document.querySelector('[data-slick]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('slick-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
