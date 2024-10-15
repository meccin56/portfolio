// アコーディオンメニュー     ----------------------------------------------------
{
const MenuBtn = document.querySelector('.menu-btn');
const ToggleBtn = document.querySelector('.toggle_btn');
const MenuItems = document.querySelector('.menu-items');
const MenuItemAll = document.querySelectorAll('.menu-item');

MenuBtn.addEventListener('click', ()=> {
    ToggleBtn.classList.toggle('active');
    MenuItems.classList.toggle('active');
});
}



// スライドメニュー     ----------------------------------------------------
{
    const ToggleOpen = document.querySelector('.toggle_open');
    const ToggleClose = document.querySelector('.toggle_close');
    const MenuBoxB = document.querySelector('.menu-boxB');
    const MenuItemBs = document.querySelectorAll('.menu-itemB');
    const Options = {
        duration: 1400,
        easing: 'ease',
        fill: 'forwards',
    };


    ToggleOpen.addEventListener('click', ()=> {
        MenuBoxB.animate(
            {
                translate:[  0, '-300px 0'],
                opacity:[0, 1],
            },
            Options);
        MenuItemBs.forEach((MenuItemB,index) => 
            {
                MenuItemB.animate(
                    {
                        opacity:[ 0, 1],
                        translate:[ '4rem',0],
                    },
                    {
                        duration: 2400,
                        delay: 200* index,
                        easing: 'ease',
                        fill: 'forwards',
                    }
                );   
             });
             ToggleClose.animate(
                {
                    opacity: [0, 1],
                },Options);
    });

    ToggleClose.addEventListener('click', ()=>{
        MenuBoxB.animate(
            {
                translate: ['-300px 0', 0],
                opacity:[1, 0],
            }, 
            Options);
        MenuItemBs.forEach((MenuItemB)=> {
            MenuItemB.animate({opacity: [1, 0]}, Options);
        });
        ToggleClose.animate(
            {
                opacity: [1, 0],
            },Options);
});
}
