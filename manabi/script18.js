'use strict'

// 配列  ----------------------------------------------------
const Items = document.querySelector('.items');
const Lists = [
    {
        name: 'プランA',
        price: '2,000',
        star: '☆☆☆☆',
        img: '022.jpg',
    },
    {
        name: 'プランB',
        price: '2,000',
        star: '☆☆☆',
        img: '021.jpg',
    },
    {
        name: 'プランC',
        price: '3,000',
        star: '☆☆',
        img: '020.jpg',
    },
    {
        name: 'プランD',
        price: '8,000',
        star: '☆☆☆☆',
        img: '019.jpg',
    },
    {
        name: 'プランE',
        price: '7,000',
        star: '☆☆☆☆☆',
        img: '018.jpg',
    },
    {
        name: 'プランF',
        price: '2,000',
        star: '☆☆☆',
        img: '017.jpg',
    },
    {
        name: 'プランG',
        price: '2,000',
        star: '☆☆☆',
        img: '014.jpg',
    },
    {
        name: 'プランH',
        price: '5,000',
        star: '☆☆☆',
        img: '015.jpg',
    },
    {
        name: 'プランI',
        price: '1,200',
        star: '☆',
        img: '011.jpg',
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