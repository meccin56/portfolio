const Menu = document.querySelector('.menu');
const Hum = document.querySelector('#hum');
const Batu = document.querySelector('#batu');
const SNAV = document.querySelector('.snav');


Menu.addEventListener('click',()=>{
	Hum.classList.toggle('active');
	Batu.classList.toggle('active');
	SNAV.classList.toggle('active');
});


