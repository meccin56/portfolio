// モーダル  ----------------------------------------------------

const Modal = document.querySelector('.modal');
const Layer = document.querySelector('.layer');
const Click = document.querySelector('.click');
const Close = document.querySelector('.close');

Click.addEventListener('click', ()=> {

    Modal.classList.add('active');
    Layer.classList.add('active');
});

Close.addEventListener('click', ()=> {
    Modal.classList.remove('active');
    Layer.classList.remove('active');
});

Layer.addEventListener('click', ()=> {
    Modal.classList.remove('active');
    Layer.classList.remove('active');
});