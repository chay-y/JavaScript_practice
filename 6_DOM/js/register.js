// function newRegister(){
//     let newP = document.createElement("p");
//     let userName = document.querySelector("#userName"); //input선택
//     let newText = document.createTextNode(userName.Value); //텍스트 노드
//     newP.appendChild(newText); //p-텍스트 노드연결

//     let dleBtn = document.createElement("span");
//     let dleText = document.createTextNode("X");
//     dleBtn.setAttribute("class", "del");
//     dleBtn.appendChild(dleText);
//     newP.appendChild(dleBtn);

//     let nameList = document.querySelector("#nameList")
//     nameList.insertBefore(newP, nameList.childNodes[0]);
//     userName.value="";

//     let removeBtns = document.querySelectorAll(".del")

//     for(let i=0; i<removeBtns.length; i++){
//         removeBtns[i].addEventListener("click", function(){
//             //현재노드(this)의 부모의 부모가 있으면실행
//             if (this.parentNode.parentNode){
//                 //현재 노드의 부모의 부모노드를 찾아서
//                 //현재 노드의 부모를 삭제
//                 this.parentNode.parentNode.removeChild(this.parentNode);
//             }
//         })
//     }
// }

function newRegister() {
    let newP = document.createElement("p");
    let userName = document.querySelector("#userName"); //input선택
    let newText = document.createTextNode(userName.value); //텍스트 노드 만들기
    newP.appendChild(newText); // p-텍스트 노드 연결

    let delBtn = document.createElement("span");
    let delText = document.createTextNode("X");
    delBtn.setAttribute("class", "del");
    delBtn.appendChild(delText);
    newP.appendChild(delBtn);

    let nameList = document.querySelector("#nameList");
    nameList.insertBefore(newP, nameList.childNodes[0]);
    userName.value="";
    
    let removeBtns = document.querySelectorAll(".del");

    for (let i=0; i<removeBtns.length; i++) {
        removeBtns[i].addEventListener("click", function() {
            //현재 노드(this)의 부모의 부모가 있으면 실행
            if (this.parentNode.parentNode) {
                //현재 노드의 부모의 부모노드를 찾아서
                //현재 노드의 부모를 삭제
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        })
    }
}