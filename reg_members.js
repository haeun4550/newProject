var input_id;
var input_pw;
var input_pwRe;
var id_length;
var pw_length;
var ipGenders;
var input_name;
var input_email;
var gender;
var year;
var month;
var day;
var x;
var y;
var z;

function regCheck(){
    for(var i=0; i<ipGenders.length; i++){
        if(ipGenders[i].checked==true){
            gender=ipGenders[i].value;
        }
    }
    id_length=input_id.value.length;
    pw_length=input_pw.value.length;
    if(id_length<4 || id_length>12 || pw_length<4 || pw_length>12){
        alert("아이디와 비밀번호는 4글자 이상 12글자 이하로 입력하세요");
    }
    else if(input_pw.value!=input_pwRe.value){
        alert("비밀번호가 맞지 않습니다.");
    }
    else{
        alert("회원가입 완료");
        alert("아이디:"+input_id.value+"\n비밀번호:"+input_pw.value+"\n이름:"+input_name.value+"\n이메일"+input_email.value
        +"\n생년월일:"+year.value+month.value+day.value+"\n성별:"+gender+"\n전화번호:"+x.value+"-"+y.value+"-"+z.value);
    }
}

window.onload = function(){
    input_id = document.getElementById("id");
    input_pw = document.getElementById("password");
    input_pwRe = document.getElementById("password_re");
    input_name = document.getElementById("name");
    input_email = document.getElementById("email");
    year = document.getElementsByClassName("ip_birth2")[0];
    month = document.getElementsByClassName("ip_birth2")[1];
    day = document.getElementsByClassName("ip_birth2")[2];
    ipGenders=document.getElementsByName("gender");
    x = document.getElementsByClassName("userPhoneNum")[0];
    y = document.getElementsByClassName("userPhoneNum")[1];
    z = document.getElementsByClassName("userPhoneNum")[2];
}
