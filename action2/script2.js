'use strict';
// スクロールしたら青いボックスが表示される
{
    const $box_fixed = document.getElementById('box_fixed');
    window.addEventListener('scroll', () => {

        let scrollY = window.scrollY;
        if(100 < scrollY){
            $box_fixed.classList.add('on');
        }else{
            $box_fixed.classList.remove('on');
        }
        let h = document.documentElement.scrollHeight;
        let win_h =document.documentElement.clientHeight;
        if( h == scrollY + win_h){
            $box_fixed.classList.remove('on');
        }
        
    });


    

}