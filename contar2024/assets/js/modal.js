includeHTML(() => {
      const openModalButton = document.getElementById('openModal');
      const closeModalButton = document.getElementById('closeModal');
      const modal = document.getElementById('myModal');
      const overlay = document.querySelector('.modal__overlay');
  
      if (openModalButton && closeModalButton && modal && overlay) {
        openModalButton.addEventListener('click', () => {
          modal.classList.add('modal--active');
          document.body.style.overflow = 'hidden';  
        });
          closeModalButton.addEventListener('click', () => {
          modal.classList.remove('modal--active');
          document.body.style.overflow = '';  
        });
          overlay.addEventListener('click', () => {
          modal.classList.remove('modal--active');
          document.body.style.overflow = '';  
        });
      }
  });
  