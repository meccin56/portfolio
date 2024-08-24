'use strict';

{
    const open= document.getElementById('open');
    const modal= document.getElementById('modal');
    const mask= document.getElementById('mask');
    const close= document.getElementById('close');
    


    open.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
    });

    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });

    mask.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });



}






