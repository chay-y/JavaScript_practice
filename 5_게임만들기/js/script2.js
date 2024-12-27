//1. 배열을 선언한다.
let list = [];

//2. 배열에 1부터 45까지의 숫자를 저장
for(let i=1; i<=45; i++){
    list.push(i);
}

//3. 결과를 저장할 배열을 선언
let result = [];

//4. 배열의 위치값을 랜덤으로 결정
for(let i=0; i<6; i++){

    //5. 해당 위치에 있는 배열의 값을 결과를 저장할 배열에 넣어줌
    let index = Math.floor(Math.random() * list.length);

    let num = list[index];

    result.push(num);

    //6. 배열에서 해당 인덱스의 값을 제거
    list.splice(index, 1);
}

//7. 위의 내용을 총 6번 반복한 다음 결고 출력

for(let i=0; i<6; i++){
    document.write("<span class='ball'>"+result[i]+"</span>")
}