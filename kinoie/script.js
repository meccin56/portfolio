// オープニング
const heading =document.querySelector('#heading');
const keyframes = {
    opacity:[0,1],
    translate:['0 -50px',0],
};
const option = {
    duration:3000,
    easing:'ease',
}
heading.animate(keyframes,option);

// 縦書きエリア
// 監視対象が範囲内に現れたら実行する動作
const ko = (entries) => {
    const key = {
      opacity: [0, 1],
      translate: ['14rem 0', 0],
    };
    const op = {
        duration:2000,
        fill:'forwards',
    };
    entries[0].target.animate(key, op);
  };    
  // 監視ロボットの設定
  const koObserver = new IntersectionObserver(ko);
  // #kirinを監視するよう指示
  koObserver.observe(document.querySelector('.consept'));

// 建築事例
// const ca = document.querySelectorAll('.cases');

// // console.log(ca);

// for(let i = 0; i < ca.length; i++){
//     const keyframes={
//         opacity:[0,1]
//     };
//     const options = {

//         duration:4000,
//         delay:i*300,
//         fill:'forwards',
//     };

// ca[i].animate(keyframes, options);
// }

// 建築事例
// スクロールで要素を表示

// 監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'], 
          translate: ['4rem 0', 0],
        },
        {
          duration: 2000,
          easing: 'ease',
          fill: 'forwards',
        }
      );
      // 一度ふわっと表示されたら監視をやめる
      obs.unobserve(entry.target);
    }
  });
};

// 監視設定
const fadeObserver = new IntersectionObserver(animateFade);

// .casesを監視するよう指示
const fadeElements = document.querySelectorAll('.cases');
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});



// 減税制度
// 監視対象が範囲内に現れたら実行する動作
const genzei = (entries) => {
    const key = {
      opacity: [0, 1],
      translate: ['-4rem 0', 0],
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

