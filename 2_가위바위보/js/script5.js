function onButtonClick(userInput){

    let convert = ["가위", "바위", "보"]

    let comInput = Math.floor(Math.random()*3)+1;
    
    let result = "컴퓨터 : " +convert[comInput-1]+ "/ 사용자 : " +convert[userInput-1];

    if(comInput-userInput == 1||comInput-userInput == -1){
        alert(result+" 졌어요T0T...")
    } else if (userInput-comInput == 1||userInput-comInput == -2){
        alert(result+" 이겼어요^0^!!")
    } else { alert(result+" 비겼어요=_=")}
}
