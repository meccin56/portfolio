const loaderContainer = document.querySelector('.loader-container');
const section = document.querySelector('.section');

window.addEventListener('click', () => {
  loaderContainer.classList.add('hidden');
  section.classList.add('visible');
});