// オープニング
const heading =document.querySelector('#heading');
const keyframes = {
    opacity:[0,1],
    translate:['0 50px',0],
};
const option = {
    duration:3000,
    easing:'ease',
}
heading.animate(keyframes,option);

// 建築事例
const ca = document.querySelectorAll('.cases');

// console.log(ca);

for(let i = 0; i < ca.length; i++){
    const keyframes={
        opacity:[0,1]
    };
    const options = {

        duration:4000,
        delay:i*300,
        fill:'forwards',
    };

ca[i].animate(keyframes, options);
}



// 減税制度
// 監視対象が範囲内に現れたら実行する動作
const genzei = (entries) => {

    const key = {
      opacity: [0, 1],
    };
    const op = {
        duration:2000,
        fill:'forwards',
    };

    entries[0].target.animate(key, op);
  };
    
  // 監視ロボットの設定
  const genzeiObserver = new IntersectionObserver(genzei);
  
  // #kirinを監視するよう指示
  genzeiObserver.observe(document.querySelector('.tax-content'));

