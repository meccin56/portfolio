
// 配列  ----------------------------------------------------
const Items = document.querySelector('.items');
const Lists = [
    {
        name: 'プランA',
        price: '3000',
        star: '☆☆☆☆',
        img: '022.jpg',
    },
    {
        name: 'プラン1',
        price: '2000',
        star: '☆☆☆',
        img: '021.jpg',
    },
    {
        name: 'プランC',
        price: '1000',
        star: '☆☆',
        img: '020.jpg',
    },
    {
        name: 'プランD',
        price: '8000',
        star: '☆☆☆☆',
        img: '019.jpg',
    },
    {
        name: 'プランE',
        price: '9000',
        star: '☆☆☆☆☆',
        img: '018.jpg',
    },
    {
        name: 'プランF',
        price: '4000',
        star: '☆☆☆',
        img: '017.jpg',
    },
    {
        name: 'プランG',
        price: '4000',
        star: '☆☆☆',
        img: '014.jpg',
    },
    {
        name: 'プランH',
        price: '4000',
        star: '☆☆☆',
        img: '015.jpg',
    },
];

for(let i = 0; i < Lists.length; i++){
const Content = `<div>
<img src="img/${Lists[i].img}">
<h4>${Lists[i].name}</h4>
<p>${Lists[i].price}円</p>
<p>オススメ：${Lists[i].star}</p>
</div>`;
Items.insertAdjacentHTML('beforeend',Content);
}



// 監視  ----------------------------------------------------

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
