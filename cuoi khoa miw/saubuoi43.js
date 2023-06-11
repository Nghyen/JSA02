const RegisterForm  = document.getElementById("RegisterForm");

let data =[];

RegisterForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    let infor = {
        username: document.getElementById("txt").value,
        email:document.getElementById("email").value,
        password:document.getElementById("pswd").value
    }
    if (checkInfor(infor)){
        alert("Username hoặc Email đã tồn tại!")
    } else if (checkBlank(infor)) {
        alert("Username hoặc Email không hợp lệ!")
    }else {
        data.push(infor);
        localStorage.setItem("data",JSON.stringify(data));
    }
});

function checkInfor(infor) {
    let data = JSON.parse(localStorage.getItem("data")) || null;

    if (data == null){
        return false;
    }

    for (let i = 0;i < data.length; i++){
        if (data[i].email == infor.email || data[i].username == infor.username) {
            return true;
        }
    }
    return false;}
function checkBlank(infor) {
    if(infor.username.includes(" ") || infor.email.includes(" ")){
        return true;
    } else {
        return false;
    }
}

const LoginForm  = document.getElementById("LoginForm");

LoginForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    let loginInfor = {
        email:document.getElementById("emaillogin").value,
        password:document.getElementById("pswdlogin").value
    }
    if (checkLogin(loginInfor)){
        alert("Đăng nhập thành công");
        location.href = "main.html";
    } else {
        alert("Vui lòng kiểm tra lại Email hoặc mật khẩu");
    }
})

function checkLogin(loginInfor) {
    let data = JSON.parse(localStorage.getItem("data")) || null;

    if (data == null){
        alert("Chưa có thông tin đăng ký");
        return false;
    }
    for (let i = 0;i < data.length; i++){
        if (data[i].emaillogin == loginInfor.emaillogin || data[i].pswdlogin == loginInfor.pswdlogin) {
            return true;
        }
    }
    return false;
}
