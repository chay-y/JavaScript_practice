let userInput = prompt("가위, 바위, 보!!")
if(userInput !="가위"&&userInput !="바위"&&userInput !="보"){
    alert("가위, 바위, 보 중 하나를 입력하세요."); location.reload();
}else{
    let rnd = Math.random();
    let comInput;
    if(rnd<0.33){comInput = "가위"}
    else if(rnd<0.66){comInput = "바위"}
    else{comInput = "보"}

    if(userInput=="가위"){
        if(comInput=="가위"){방
            alert(`컴퓨터:${comInput},사용자:${userInput} / 비겼습니다.`)
        }else if(comInput=="바위"){
            alert(`컴퓨터:${comInput},사용자:${userInput} / 졌습니다.`)
        }else(comInput=="보");{
            alert(`컴퓨터:${comInput},사용자:${userInput} / 이겼습니다.`)
        }
    }else if(userInput=="바위"){
        if(comInput=="가위"){
            alert(`컴퓨터:${comInput},사용자:${userInput} / 이겼습니다.`)
        }else if(comInput=="바위"){
            alert(`컴퓨터:${comInput},사용자:${userInput} / 비겼습니다.`)
        }else(comInput=="보");{
            alert(`컴퓨터:${comInput},사용자:${userInput} / 졌습니다.`)
        }
    }else(userInput=="보");{
        if(comInput=="가위"){
            alert(`컴퓨터:${comInput},사용자:${userInput} / 졌습니다.`)
        }else if(comInput=="바위"){
            alert(`컴퓨터:${comInput},사용자:${userInput} / 이겼습니다.`)
        }else(comInput=="보");{
            alert(`컴퓨터:${comInput},사용자:${userInput} / 비겼습니다.`)
        }
    }
}