var input_id;
var input_pw;
function login(){
    if(input_id.value=="cat" && input_pw.value=="1234"){
        alert("로그인 성공");
        div.innerHTML = input_id.value +"회원님 반갑습니다.";
    }
    else{
        alert("로그인 실패");
    }
}

window.onload = function(){

   input_id = document.getElementById("id");
   input_pw = document.getElementById("pw");
    div= document.getElementById("loginForm");
}
