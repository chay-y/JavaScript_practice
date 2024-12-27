const SCISSORS = "가위";
const ROCK = "바위";
const PAPER = "보";

function onScissorsClick(){
    let rnd = Math.random();
    let comInput;

    if(rnd<0.33){comInput = SCISSORS}
    else if(rnd<0.66){comInput = ROCK}
    else{comInput = PAPER}

    switch(userInput){
        case SCISSORS:
            switch(comInput){
                case SCISSORS:
                    alert(`컴퓨터 : ${comInput},사용자 : 가위 / 비겼습니다.`)
                    break;
                case ROCK:
                    alert(`컴퓨터 : ${comInput},사용자 : 가위 / 졌습니다.`)
                    break;
                default:
                    alert(`컴퓨터 : ${comInput},사용자 : 가위 / 이겼습니다.`)
                    break;
            }
            break;
    }
}

function onRockClick(){
    let rnd = Math.random();
    let comInput;

    if(rnd<0.33){comInput = SCISSORS}
    else if(rnd<0.66){comInput = ROCK}
    else{comInput = PAPER}
    
    switch(userInput){
        case ROCK:
            switch(comInput){
                case SCISSORS:
                    alert(`컴퓨터 : ${comInput},사용자 : 바위 / 이겼습니다.`)
                    break;
                case ROCK:
                    alert(`컴퓨터 : ${comInput},사용자 : 바위 / 비겼습니다.`)
                    break;
                default:
                    alert(`컴퓨터 : ${comInput},사용자 : 바위 / 졌습니다.`)
                    break;
            }
            break;
    }
}

function onPaperClick(){
    let rnd = Math.random();
    let comInput;

    if(rnd<0.33){comInput = SCISSORS}
    else if(rnd<0.66){comInput = ROCK}
    else{comInput = PAPER}
    
    switch(userInput){
        case PAPER:
            switch(SCISSORS){
                case SCISSORS:
                    alert(`컴퓨터 : ${comInput},사용자 : 보 / 졌습니다.`)
                    break;
                case ROCK:
                    alert(`컴퓨터 : ${comInput},사용자 : 보 / 이겼습니다.`)
                    break;
                default:
                    alert(`컴퓨터 : ${comInput},사용자 : 보 / 비겼습니다.`)
                    break;
            }
            break;
    }
}