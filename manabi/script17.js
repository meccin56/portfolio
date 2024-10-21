'use strict'

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const today = date.getDate();

// 今月の初日
const firstDate = new Date(year,month - 1,1);
const firstDay = firstDate.getDay();

// 今月の最終日
const lastDate = new Date(year,month,0);
const lastDayCount = lastDate.getDate();

let dayCount = 1;
let createHtml = '';
createHtml = '<p class="hiniti">' + '今日は' + year + '年' + month + '月' + today + '日' + '</p>' ;
createHtml += '<table>' + '<tr>';


const weeks = ['日','月','火','水','木','金','土'];
for(let i = 0; i <weeks.length; i++){
    createHtml += '<td>' + weeks[i] + '</td>';
}
createHtml += '</tr>';

for(let n = 0; n < 5; n++){
    createHtml += '<tr>'

        for(let d = 0; d < 7; d++){
            if( n == 0 && d < firstDay){
                createHtml += '<td></td>'
            }else if(dayCount > lastDayCount){
                createHtml += '<td></td>'
            }else {
                // 日曜日か土曜日ならフォントカラーを変える
                if(d === 0){
                    createHtml += '<td style="color: red;">' + dayCount + '</td>';
                } else if(d === 6){
                    createHtml += '<td style="color: blue;">' + dayCount + '</td>';
                } else {
                    createHtml += '<td>' + dayCount + '</td>';
                }
                dayCount++;
            }
        }
    createHtml += '</tr>'
}
createHtml += '</table>'

document.querySelector('.calendar').innerHTML = createHtml;

console.log(createHtml);









