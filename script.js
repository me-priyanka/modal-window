'use strict';
const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.show-modal');
const overlayModal   = document.querySelector('.overlay');
const btnCloseModal  = document.querySelector('.close-modal');

btnOpenModal.addEventListener('click',function(){
   modal.classList.remove('hidden');
   overlayModal.classList.remove('hidden');
});

btnCloseModal.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlayModal.classList.add('hidden');

});

