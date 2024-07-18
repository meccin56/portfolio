const Menu = document.querySelector('.menu');
const Hum = document.querySelector('#hum');
const Batu = document.querySelector('#batu');
const UlS = document.querySelector('.sul');

Menu.addEventListener('click',()=>{
	Hum.classList.toggle('active');
	Batu.classList.toggle('active');
	UlS.classList.toggle('active');
});


