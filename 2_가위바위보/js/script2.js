let userInput = prompt("가위, 바위, 보!!")

const SCISSORS = "가위";
const ROCK = "바위";
const PAPER = "보";

if(userInput!=SCISSORS && userInput!=ROCK && userInput!=PAPER){
    alert("가위, 바위, 보 중 하나를 입력하세요."); location.reload();
}else{
    let rnd = Math.random();
    let comInput;

    if(rnd<0.33){comInput = SCISSORS}
    else if(rnd<0.66){comInput = ROCK}
    else{comInput = PAPER}

    switch(userInput){
        case SCISSORS:
            switch(comInput){
                case SCISSORS:
                    alert(`컴퓨터 : ${comInput},사용자 : ${userInput} / 비겼습니다.`)
                    break;
                case ROCK:
                    alert(`컴퓨터 : ${comInput},사용자 : ${userInput} / 졌습니다.`)
                    break;
                default:
                    alert(`컴퓨터 : ${comInput},사용자 : ${userInput} / 이겼습니다.`)
                    break;
            }
            break;
        case ROCK:
            switch(comInput){
                case SCISSORS:
                    alert(`컴퓨터 : ${comInput},사용자 : ${userInput} / 이겼습니다.`)
                    break;
                case ROCK:
                    alert(`컴퓨터 : ${comInput},사용자 : ${userInput} / 비겼습니다.`)
                    break;
                default:
                    alert(`컴퓨터 : ${comInput},사용자 : ${userInput} / 졌습니다.`)
                    break;
            }
            break;
        case PAPER:
            switch(SCISSORS){
                case SCISSORS:
                    alert(`컴퓨터 : ${comInput},사용자 : ${userInput} / 졌습니다.`)
                    break;
                case ROCK:
                    alert(`컴퓨터 : ${comInput},사용자 : ${userInput} / 이겼습니다.`)
                    break;
                default:
                    alert(`컴퓨터 : ${comInput},사용자 : ${userInput} / 비겼습니다.`)
                    break;
            }
            break;
        
    }; location.reload();
}