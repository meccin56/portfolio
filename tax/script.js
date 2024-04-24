// const heading =document.querySelector('#main-message1');

// const keyframes = {
//     opacity:[0,1],
//     translate:['100px 0px',0],
// };
// heading.animate(keyframes,800);

const btn=document.querySelector('#main-btn');
const ugoki={
    opacity:[0,1],
    translate:['-160px 0px',0],
}
btn.animate(ugoki,800);





const Icon = document.querySelector('.icon');
const Hum = document.querySelector('.hum');
const Batu = document.querySelector('.batu');
const Menu=document.querySelector('.menu');



Icon.addEventListener('click', () => {
		Hum.classList.toggle('active');
		Batu.classList.toggle('active');
		Menu.classList.toggle('active');
	});