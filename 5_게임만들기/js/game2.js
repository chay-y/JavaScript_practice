//1. 컴퓨터가 먼저 시작한다.
//2. 사용자가 컴퓨터의 슛 버튼을 클릭한다.
//3. 컴퓨터는 2점슛을 쏠지, 3점슛을 쏠지 랜덤으로 결정한다.
//4. 슛이 성공하면 컴퓨터의 점수를 올려준다.
//5. 화면에 성공 또는 실패 메세지를 출력
//6. 사용자의 차례로 바꿔준다.
//7. 사용자가 2점슛 또는 3점슛 중 버튼을 클릭한다.
//8. 슛이 성공하면 사용자의 점수를 올려준다.
//9. 화면에 성공 또는 실패 메세지를 출력
//10. 컴퓨터의 차례로 바꿔주고 남은 슛 횟수만큼 1을 줄인다.
//11. 남은 슛 횟수가 0이 될때까지 반복
//12. 양쪽의 점수를 비교해서 승자를 결정한다.

let isComputerTurn=true;  //컴퓨터의 차례면 true로 지정
let shotsLeft = 15; //슛 횟수

//컴퓨터와 유저의 슛 확률 조작하기...ㄷㄷ;;
//슛의 확률을 변경하기위해 변수 선언
let comScore = 0;   //컴퓨터의 점수를 저장할 전역변수
let comPercent2 = 0.5;
let comPercent3 = 0.33;

let userScore = 0;  //사용자의 점수를 저장할 전역변수
let userPercent2 =0.5;
let userPercent3 =0.33;

// *****objcet*****
// let computer = {
//     score: 0,
//     percent2: 0.5,
//     percent3: 0.33
// }

// let user ={
//     score: 0,
//     percent2: 0.5,
//     percent3: 0.33
// }

// let game = {
//     isCompterTurn: true,
//     shotsLeft: 15
// }
// *****objcet*****

//컴퓨터와 사용자의 버튼을 활성화 또는 비활성화 시키기 위해 버튼 지정
let computerButtons = document.getElementsByClassName("btnComputer");
let userButtons = document.getElementsByClassName("btnUser");

//메세지 출력하는 함수
function showText(t) {
    let textElem = document.getElementById('text');
    textElem.innerHTML = "** " + t + " **";
}

//컴퓨터의 점수를 변경
function updateComputerScore(score) {
    let comScoreElem = document.getElementById("computerScore");
    comScore += score;  //점수 증가
    comScoreElem.innerHTML = comScore;
}

//사용자의 점수를 변경
function updateUserScore(score) {
    let userScoreElem = document.getElementById("userScore");
    userScore += score;
    userScoreElem.innerHTML= userScore;
}

//컴퓨터 버튼
function disableComputerButtons(flag) {
    let computerButtons = document.getElementsByClassName("btnComputer");
    for (let i=0; i<computerButtons.length; i++) {
        computerButtons[i].disabled = flag;
    }
}

//사용자 버튼
function disableUserButtons(flag) {
    let userButtons = document.getElementsByClassName("btnUser");
    for (let i=0; i<userButtons.length; i++) {
        userButtons[i].disabled = flag;
    }
}

//확률조작하기 - 컴퓨터
function updateAI(){
    let diff = userScore - comScore;
    
    if(diff>=10){
        comPercent2=0.7;
        comPercent3=0.43;
    }else if(diff>=6){
        comPercent2=0.6;
        comPercent3=0.38;
    }else if(diff<=-10){
        comPercent2=0.3;
        comPercent3=0.23;
    }else if(diff<=-6){
        comPercent2=0.4;
        comPercent3=0.28;
    }else{
        comPercent2=0.5;
        comPercent3=0.33;
    }
}

function onComputerShoot() {

    if (!isComputerTurn) {
        return;
    }
    
    updateAI();
    //컴퓨터의 슛 결정
    let shootType = Math.random() < 0.5 ? 2 : 3;

    if (shootType == 2) { //2점슛
        
        //2점슛의 성공확률은 50% 계산
        if (Math.random() < comPercent2) {
            showText("컴퓨터가 2점슛 성공*-*!")
            updateComputerScore(2);

        } else {
            showText("컴퓨터가 2점슛 실패..!")
        }

    } else {    //3점슛

        //3점슛의 성공확률은 33% 계산
        if (Math.random() < comPercent3) {
            showText("컴퓨터가 3점슛 성공6_6!")
            updateComputerScore(3);
        } else {
            showText("컴퓨터가 3점슛 실패..!")
        }
    }

    //컴퓨터 턴 종료
    isComputerTurn = false;

    disableComputerButtons(true);
    disableUserButtons(false);


}

function onUserShoot(shootType) {

    //사용자의 차례가 아니면 = 컴퓨터의 턴일 때 = 해당 변수가 true일때
    if (isComputerTurn) {
        return;
    }


    if (shootType == 2) {       //2점슛

        if (Math.random() < userPercent2) {
            showText("2점슛 성공ㅎ-ㅎ!")
            updateUserScore(2);
        } else {
            showText("2점슛 실패..8o8")
        }

    } else {        //3점슛
        if (Math.random() < userPercent3) {
            showText("3점슛 성공 WoW!")
            updateUserScore(3);
        } else {
            showText("3점슛 실패ToT")
        }
    }

    //사용자의 턴 종료
    isComputerTurn = true;

    disableComputerButtons(false)
    disableUserButtons(true)

    //남은 슛 횟수를 감소 
    shotsLeft--;

    //남은 슛 횟수 출력
    let shotsLeftElem = document.getElementById("shotsCount");
    shotsLeftElem.innerHTML= shotsLeft;

    //남은 횟수가 0이면 결과를 출력하고 버튼을 비활성화
    if (shotsLeft == 0) {
        if (comScore > userScore) {
            showText("you lose ㅠOㅠ")
        } else if (comScore < userScore) {
            showText("you win!")
        } else {
            showText("drow...=_=")
        }

        disableComputerButtons(true);
        disableUserButtons(true);

    }
}