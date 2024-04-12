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

//const main = document.querySelector('main');

const items = document.querySelectorAll('.img-item');

for(let i = o; i < items.length; i++){
    const keyframes ={
        opacity:[0,1]
    };
    const options = {
        duration:600,
        fill:'forwards'
    }
    items[i].animate(keyframes,options);
}



// const menu = document.querySelector('#menu');


// const lists = [
//     {
//         img:'case1.jpg',
//         name:'中庭につづくリビング',
//         ptext:'N邸　敷地面積140㎡',
//     },
//     {
//         img:'case2.jpg',
//         name:'光と風が吹き抜けるリビング',
//         ptext:'Y邸　敷地面積160㎡',
//     },
//     {
//         img:'case3.jpg',
//         name:'大空間と断熱性能',
//         ptext:'R邸　敷地面積123㎡',
//     },
//     {
//         img:'case4.jpg',
//         name:'中庭につづくリビング',
//         ptext:'B邸　敷地面積180㎡',
//     },
//     {
//         img:'case5.jpg',
//         name:'異素材でモダンなリビング',
//         ptext:'M邸　敷地面積160㎡',
//     },
//     {
//         img:'case6.jpg',
//         name:'自然素材のハイスペック',
//         ptext:'U邸　敷地面積200㎡',
//     },
// ];


// for(let i = 0; i < lists.length; i++){
//     const {name, img, ptext} = lists[i];
//     const content = `<div><img src="img/${img}" alt=""><h2>${name}</h2><p>${ptext}円</p></div>`;
//     menu.insertAdjacentHTML('beforeend', content);
//   }