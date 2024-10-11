// アコーディオンメニュー     ----------------------------------------------------
const MenuBtn = document.querySelector('.menu-btn');
const ToggleBtn = document.querySelector('.toggle_btn');
const MenuItems = document.querySelector('.menu-items');
const MenuItemAll = document.querySelectorAll('.menu-item');

MenuBtn.addEventListener('click', ()=> {
    ToggleBtn.classList.toggle('active');
    MenuItems.classList.toggle('active');
});
