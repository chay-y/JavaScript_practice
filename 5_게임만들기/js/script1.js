let num1, num2, num3, num4, num5, num6;

//1~45사이의 숫자를 랜덤으로 결정하여
//각 변수에 저장

//1.숫자 6개를 하나씩 저장할 변수를 선언
//2.1~45사이의 랜덤수를 생성
//3.이걸 6번 반복

num1 = Math.ceil(Math.random()*45)

num2 = Math.ceil(Math.random()*45)
while(num1==num2){
    num2 = Math.ceil(Math.random()*45)
}
num3 = Math.ceil(Math.random()*45)
while(num3==num1||num3==num2){
    num3 = Math.ceil(Math.random()*45)
}
num4 = Math.ceil(Math.random()*45)
while(num4==num1||num4==num2||num4==num3){
    num4 = Math.ceil(Math.random()*45)
}
num5 = Math.ceil(Math.random()*45)
while(num5==num1||num5==num2||num5==num3||num5==num4){
    num5 = Math.ceil(Math.random()*45)
}
num6 = Math.ceil(Math.random()*45)
while(num6==num1||num6==num2||num6==num3||num6==num4||num6==num5){
    num6 = Math.ceil(Math.random()*45)
}

document.write("num1 : "+num1+"<br>")
document.write("num2 : "+num2+"<br>")
document.write("num3 : "+num3+"<br>")
document.write("num4 : "+num4+"<br>")
document.write("num5 : "+num5+"<br>")
document.write("num6 : "+num6+"<br>")