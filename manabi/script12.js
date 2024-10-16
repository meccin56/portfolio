const container = document.querySelector('.container');
const tEnd = document.querySelector('.t-end');


// コンテナをクリックしたときの処理
container.addEventListener('click', ()=> {
  container.classList.toggle('show');
  tEnd.classList.toggle('show');
});

// トランジションが終わったときの処理
container.addEventListener("transitionend", () => {
  if (container.classList.contains('show')) {
      tEnd.textContent = "クリックされたよ！";
  } else {
      tEnd.textContent = "元に戻ったよ！"; // 元に戻った場合のテキスト
  }
});

// .container をクリックすると、show クラスがトグルされ、トランジションが発生します。
// トランジションが終了すると、.t-end のテキストが「クリックされた！」に変更されます。
// 再度クリックして元の状態に戻ると、"元に戻った！" というテキストに変更されます。