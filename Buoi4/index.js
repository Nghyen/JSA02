//xóa local storage 
localStorage.clear()

//lưu dữ liệu xuống local storage
localStorage.setItem("name","Yến");
localStorage.setItem("age","16");
localStorage.setItem("school","THTH ĐHSP")

let Student = {
    namee: "Yến",
    age: "16",
}
localStorage.setItem("student",JSON.stringify(Student));

let namee = localStorage.getItem("name");
console.log(namee);

let studentFromLocal = JSON.parse(localStorage.getItem("student"));
console.log(studentFromLocal);
console.log(typeof studentFromLocal);