// 今日の日付  -----------------------------------------------

// 現在の日付を取得
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるため1を加える
const day = today.getDate();

// 日付を表示する要素を取得
const dateElement = document.querySelector('.dateDisplay');

// 日付をHTML上に表示
dateElement.textContent = `今日は${year}年${month}月${day}日です`;







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
