// 1. 컴퓨터가 먼저 시작한다.
// 2. 사용자가 컴퓨터의 슛 버튼을 클릭한다.
// 3. 컴퓨터는 2점슛을 쏠지, 3점슛을 쏠지 랜덤으로 결정한다.
// 4-2. 만약 컴퓨터가 슛에 성공하면 컴퓨터의 점수를 올려준다.
// 4-2. 만약 컴퓨터가 슛에 실패하면 컴퓨터의 점수를 올리지 않는다.
// 5. 화면에 성공 또는 실패 메세지를 출력한다.
// 6. 사용자의 차례로 바꿔준다.
// 7. 사용자는 2점슛 또는 3점슛 중 버튼을 클릭한다. 
// 8-1. 만약 사용자가 슛에 성공하면 사용자의 점수를 올려준다.
// 8-1. 만약 사용자가 슛에 실패하면 사용자의 점수를 올리지 않는다.
// 9. 화면에 성공 또는 실패 메세지를 출력한다.
// 10. 컴퓨터의 차례로 바꿔준다. 남은 슛 횟수만큼 1을 줄인다.
// 11. 남은 슛 횟수가 0이 될 때까지 2 번부터 10 번까지 반복한다.
// 12. 양쪽의 점수를 비교해서 승자를 결정한다.
// 13. 화면에 승자 메세지를 출력한다.

let textElem = document.getElementById('text');
let comScore = 0; //컴퓨터의 점수를 저장할 전역변수
let userScore = 0; //사용자의 점수를 저장할 전역변수
let isCompterTurn = true; //컴퓨터의 턴
let isUserTurn = true; //유저의 턴
let shotsLeft = 15; //슛 횟수

// 컴퓨터와 사용자의 버튼을 활성화 또는 비활성화 시키기 위해 버튼 지정
let computerButtons = document.getElementsByClassName("btnCompuer")
let userButtons = document.getElementsByClassName("btnUser")

function onComputerShoot(){

    //!는 not이라는 뜻
    if(!isCompterTurn){return;}

    let comScoreElem = document.getElementById("computerScore");

    //컴퓨터의 슛 결정
    let shootType = Math.random()<0.5?2:3;

    if(shootType == 2){
        //2점슛의 성공확률은 50%로 계산
        if(Math.random()<0.5){
            textElem.innerHTML = "컴퓨터가 2점슛을 성공*-*!"
            comScore += 2;
            comScoreElem.innerHTML = comScore;
        }else{
            textElem.innerHTML = "컴퓨터가 2점슛을 실패..!"
        }
    }else{
        //3점슛의 성공확률은 33%로 계산
        if(Math.random()<0.33){
            textElem.innerHTML = "컴퓨터가 3점슛을 성공6_6!"
            comScore += 3;
            comScoreElem.innerHTML = comScore;
        }else{
            textElem.innerHTML = "컴퓨터가 3점슛을 실패..!"
        }
    }
    isCompterTurn = false;

    //컴퓨터의 턴이 종료하면
    //컴퓨터의 버튼은 비활성화시키고
    //사용자의 버튼을 활성화시킴
    for(let i=0; i<computerButtons.length; i++){
        computerButtons[i].disabled = true;
    }
    for(let i=0; i<userButtons.length; i++){
        userButtons[i].disabled = false;
    }
}

function onUserShoot(shootType){

    if(!isUserTurn){return;}

    let userScoreElem = document.getElementById("userScore")
    
    if(shootType == 2){
        //2점슛의 성공확률은 50%로 계산
        if(Math.random()<0.5){
            textElem.innerHTML = "2점슛 성공ㅎ-ㅎ!"
            userScore += 2;
            userScoreElem.innerHTML = userScore;
        }else{
            textElem.innerHTML = "2점슛 실패..8o8"
        }
    }else{
        //3점슛의 성공확률은 33%로 계산
        if(Math.random()<0.33){
            textElem.innerHTML = "3점슛 성공 WoW!"
            userScore += 3;
            userScoreElem.innerHTML = userScore;
        }else{
            textElem.innerHTML = "3점슛 실패ToT"
        }
    }
    
    isCompterTurn = true;

    for(let i=0; i<computerButtons.length; i++){
        computerButtons[i].disabled = false;
    }
    for(let i=0; i<userButtons.length; i++){
        userButtons[i].disabled = true;
    }

    shotsLeft--;
    
    let shotsLeftElem = document.getElementById("shotsCount");
    shotsLeftElem.innerHTML = shotsLeft;
    
    if (shotsLeft == 0){
        if(comScore>userScore){
            textElem.innerHTML="컴퓨터 win!"
        }else if(comScore<userScore){
            textElem.innerHTML="컴퓨터 win!" 
        }else{
            textElem.innerHTML="컴퓨터 win!"
        }
    }

}

for(let i=0; i<computerButtons.length; i++){
    computerButtons[i].disabled = true;
}
for(let i=0; i<userButtons.length; i++){
    userButtons[i].disabled = true;
}