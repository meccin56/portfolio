const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=> {
  if(container.classList.contains('show')=== false){
  container.classList.add('show');
  }
  if(btn.classList.contains('show')=== false){
    btn.classList.add('show');
  }

});

container.addEventListener("transitionend", (e) => {
  btn.textContent = "クリックされた！";
});
