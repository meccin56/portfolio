// 監視2forEach  ----------------------------------------------------

// 1.仕事内容
const Job2 = (entries,obs) => {
    entries.forEach((entry) => {
    if(entry.isIntersecting){
    entry.target.animate(
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
    obs.unobserve(entry.target);
    }
});
};
// 2.監視ロボ登場、仕事を言い渡す
const Robo2 = new IntersectionObserver(Job2);
// 3.監視対象
const LeftImgs = document.querySelectorAll('.left img');
// 4.監視ロボ、監視開始
LeftImgs.forEach((LeftImg) => {
Robo2.observe(LeftImg)
});