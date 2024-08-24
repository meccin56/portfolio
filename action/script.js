'use strict';
{
    const open= document.getElementById('modal-open');
    const container= document.getElementById('modal-container');
    const modalBg= document.getElementById('modal-bg');
    const close= document.getElementById('modal-close');
    
    open.addEventListener('click', ()=>{
        container.classList.add('active');
        modalBg.classList.add('active');
    });
    close.addEventListener('click', () => {
        container.classList.remove('active');
        modalBg.classList.remove('active');
    });
    modalBg.addEventListener('click', () => {
        container.classList.remove('active');
        modalBg.classList.remove('active');
    });
    
}