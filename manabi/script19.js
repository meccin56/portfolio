'use strict'

const fortune = document.querySelector('.fortune');
const result = document.querySelector('.fortune-result');
const resultComment = document.querySelector('.fortune-result-comment');

// 占うをクリックすると、イベントを発動
fortune.addEventListener('click', ()=> {

    // ラッキーカラーのリストを定めておく
    const colorList = ['赤','青','黄','紫','緑'];

    // ランダムに発行される数をカラーリストのインデックス数分、取得する
    const Random = Math.floor(Math.random() * colorList.length);

    // 占い結果をテキストで表示
    result.textContent = colorList[Random];

    // 背景色をリセットしておく、既存のクラスをクリア
    result.classList.remove('red', 'blue', 'yellow','purple','green');

    if(colorList[Random] === '赤'){
        result.classList.add('red');
        resultComment.textContent = '赤い食材が疲労回復につながります'
    }
    else if(colorList[Random] === '青'){
        result.classList.add('blue');
        resultComment.textContent = '青のレインコートで俯きがちな気持ちも上向きに'
    }
    else if(colorList[Random] === '黄'){
        result.classList.add('yellow');
        resultComment.textContent = '黄色のハンカチで新しい出会いがあるでしょう'
    }
    else if(colorList[Random] === '紫'){
        result.classList.add('purple');
        resultComment.textContent = '紫のスカーフをどこかに巻きましょう'
    }
    else if(colorList[Random] === '緑'){
        result.classList.add('green');
        resultComment.textContent = '緑の何か新しいファッションアイテムを買いましょう'
    }
});

