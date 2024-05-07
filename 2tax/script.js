const Menu = document.querySelector('.menu');
const Hum = document.querySelector('#hum');
const Batu = document.querySelector('#batu');
const Ul = document.querySelector('ul');

Menu.addEventListener('click',()=>{
	Hum.classList.toggle('active');
	Batu.classList.toggle('active');
	Ul.classList.toggle('active');
});


// const btn=document.querySelector('#main-btn');
// const ugoki={
//     opacity:[0,1],
//     translate:['-160px 0px',0],
// 	easing:'ease',
// }
// btn.animate(ugoki,1200);


// const Icon = document.querySelector('.icon');
// const Hum = document.querySelector('.hum');
// const Batu = document.querySelector('.batu');
// const Menu=document.querySelector('.menu');



// Icon.addEventListener('click', () => {
// 		Hum.classList.toggle('active');
// 		Batu.classList.toggle('active');
// 		Menu.classList.toggle('active');
// 	});