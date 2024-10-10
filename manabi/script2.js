// 監視1対象1つ  ----------------------------------------------------

// 1.仕事内容
const Job = (entries) => {
    entries[0].target.animate(
        {
            opacity:[0 ,1],
            translate:['-300px 0', 0],
        },
        {
            duration: 2000,
            easing: 'ease',
            fill: 'forwards',
        }
    );
};
// 2.監視ロボ登場、仕事を言い渡す
const Robo = new IntersectionObserver(Job);
// 3.監視対象
const Left = document.querySelector('.left');
// 4.監視ロボ、監視開始
Robo.observe(Left);


