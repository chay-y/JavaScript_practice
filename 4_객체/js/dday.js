/*
    1. 오늘 날짜 저장
    2. 처음 만난 날짜 저장
    3. 오늘 날짜 밀리초 변환
    4. 처음 만난 날짜 밀리초 변환
    5. 날짜의 차이를 계산 -> 밀리초
    6. 밀리초를 일로 변환
    7. 해당 영역에 결과를 표시

    1. 처음 만난 날에 일수를 더해서 저장
    2. Date객체로 변환
    3. 년, 월, 일 가져와서 출력
*/

let today = new Date();
let metday = new Date(2022, 10, 15);

document.querySelector(".today").innerHTML=(
    "Start from,,,"+metday.getFullYear()+"년 "+(metday.getMonth()+1)+"월 "+metday.getDate()+"일"
);

let fromMetdate = today.getTime() - metday.getTime();
let resultFromMetdate = Math.ceil(fromMetdate / (1000*60*60*24))
document.querySelector(".accent").innerHTML=("*＊✿❀ ["+resultFromMetdate+"일] ❀✿＊*");

let hundred = new Date(metday.getTime() + 100 * (1000 * 60 * 60 * 24));
let hundredDate = hundred.getFullYear() + '년 ' + (hundred.getMonth()+1) + '월 ' + (hundred.getDate())+'일';
document.querySelector(".hundredDate").innerHTML=(hundredDate);

let oneyear = new Date(metday.getTime() + 365 * (1000 * 60 * 60 * 24));
let oneyearDate = oneyear.getFullYear() + '년 ' + (oneyear.getMonth()+1) + '월 ' + (oneyear.getDate())+'일';
document.querySelector(".oneyearDate").innerHTML=(oneyearDate);

let thousand = new Date(metday.getTime() + 1000 * (1000 * 60 * 60 * 24));
let thousandDate = thousand.getFullYear() + '년 ' + (thousand.getMonth()+1) + '월 ' + (thousand.getDate())+'일';
document.querySelector(".thousandDate").innerHTML=(thousandDate);

let threehund = new Date(metday.getTime() + 3000 * (1000 * 60 * 60 * 24));
let threehundDate = threehund.getFullYear() + '년 ' + (threehund.getMonth()+1) + '월 ' + (threehund.getDate())+'일';
document.querySelector(".threehundDate").innerHTML=(threehundDate);