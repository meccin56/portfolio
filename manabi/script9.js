let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

const showSlides = () => {
    // すべてのスライドから active クラスを外して透明にする
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove('active');
    }

    // インデックスを更新し、スライド数を超えたら最初に戻る
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1;
    }

    // 現在のスライドに active クラスを追加して表示
    slides[slideIndex - 1].classList.add('active');
    
    // 3秒ごとに次のスライドに切り替え
    setTimeout(showSlides, 2000);
};

// ページが読み込まれたら自動でスライドショーを開始
showSlides();



