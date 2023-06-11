let menu = ["rau xào", "thịt luộc", "gà rán"];
console.log(menu)
let answer = prompt('');
if (answer == "C"){
    menu.push(prompt('Mời người dùng nhập món ăn muốn thêm vào menu'));
    console.log(menu)
}
if (answer == "R"){
    alert(menu.join(", "));
}
if (answer == "U"){
    let b = menu.indexOf(prompt('Mời người dùng nhập vào tên món muốn update'));
    let c = prompt('Mời người dùng nhập vào tên món ăn mới');
    menu[b]=c;
    console.log(menu);
}
if (answer == "D"){
    let a = menu.indexOf(prompt('Mời người dùng nhập vào tên món muốn Delete'));
    menu.splice(a,1);
    console.log(menu);
}