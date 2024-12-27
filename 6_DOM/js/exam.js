let isCheck = false;

let btns=document.querySelectorAll(".check");

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function(){
        if (isCheck == false){
            this.parentNode.style.color = "#ccc"
            isCheck = true;
        }else{
            this.parentNode.style.color = "#111"
            isCheck = false;
        }
    })
}