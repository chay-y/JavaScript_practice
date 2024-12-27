// 아이디가 view인 요소를 변수에 선언

// 상세설명보기를 클릭했을 때
// 상세정보가 감춰져있으면 상세 정보를 화면에 표시하고
// '상세 설명 닫기'로 링크 내용을 변경

// 상세정보가 표시되어있다면, 상세정보를 화면에서 감추고
// '상세 설명 보기'로 링크 내용을 변경

let view = document.getElementById("view"); //상세설명보기

let bigPic = document.querySelector("#cup"); //큰 이미지
let smallPics = document.querySelectorAll(".small"); //작은 이미지

let isOpen = false;

view.addEventListener("click", function(){

    //만약에 상세정보가 감쳐진 상태라면...
    if(isOpen == false){
        //상세 정보를 화면에 표시
        document.querySelector("#detail").style.display="block"
        //상세 설명 닫기로 링크를 변경
        document.querySelector("#view").innerHTML="상세 설명 닫기";
        //표시 상태를 true로 변경
        isOpen = true;
    }
    //만약에 상세 정보가 표시되어 있는 상태라면
    else{
        //상세 정보를 화면에서 숨기고
        document.querySelector("#detail").style.display="none"
        //상세 설명 보기로 링크를 변경
        document.querySelector("#view").innerHTML="상세 설명 보기";
        //표시 상태를 false로 변경
        isOpen = false;}
    }
)

for (let i=0; i<smallPics.length; i++){
    smallPics[i].addEventListener("click", changePic);
}

function changePic(){
    let newPic = this.src; //click이벤트가 발생한 대상의 src속성값을 변수에 저장
    bigPic.setAttribute("src", newPic);
    // bigPic.src = newPic
}