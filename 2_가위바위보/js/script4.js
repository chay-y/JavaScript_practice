const SCISSORS = "가위";
const ROCK = "바위";
const PAPER = "보";

function onButtonClick(userInput){
    let rnd = Math.random();
    let comInput;

    if(rnd<0.33){comInput = SCISSORS}
    else if(rnd<0.66){comInput = ROCK}
    else{comInput = PAPER}

    let result = "컴퓨터 : " +comInput+ "/ 사용자 : " +userInput;

    if (userInput==SCISSORS){
        switch(comInput){
            case SCISSORS:
                alert(`${result},비겼습니다.`)
                break;
            case ROCK:
                alert(`${result},졌습니다.`)
                break;
            default:
                alert(`${result},이겼습니다.`)
                break;
            }
        }
    else if(userInput==ROCK){
        switch(comInput){
            case SCISSORS:
                alert(`${result},이겼습니다.`)
                break;
            case ROCK:
                alert(`${result},비겼습니다.`)
                break;
            default:
                alert(`${result},졌습니다.`)
                break;
            }
        }
    else{
        switch(comInput){
            case SCISSORS:
                alert(`${result},졌습니다.`)
                break;
            case ROCK:
                alert(`${result},이겼습니다.`)
                break;
            default:
                alert(`${result},비겼습니다.`)
                break;
        }
    }
}

