
// let i=1; //biểu thức1: khởi tạo biến lặp
// while (i<14){ //Biểu thức 2: Điều kiện lặp
//     console.log(i);
//     i++;//Biểu thức 3: Thay đổi biến lặp sau mỗi lần lặp
// };
// //vòng ặp do while sẽ thực code ít nhất 1 lần
// do {
//     console.log("Số lần lặp:"+i);
//     i++;
// } while (i<15)

// for (let x = 1;x<15;x--) {
//     console.log(x)
// }

//Array: mảng- dùng để lưu nhiều biến số
// let nameo = ["1 ", "2", "3", "4"];
// console.log(nameo);
// //thêm 1 tên(object) vào name
// nameo.push("5");
// console.log(nameo)

// //read
// console.log(nameo[3]);

// //update
// nameo[0] = "11";
// console.log(nameo);

// //Delete
// nameo.pop();//xóa đi ptu cuối cùng
// console.log(nameo);
// nameo.splice(2, 1);// xóa phần tử ở vị trí bất kì (vị trí bắt đầu, số ptu muốn xóa)
// console.log(nameo);


// for (let y = 0; y < nameo.length; y++) {
//     console.log(nameo[y]);
// }

//object: vật thể
// let user = {
//     name: "Yến",
//     age: 16,
//     job: "Student",
//     location: "HCM"
// };
// console.log(user);
// console.log(typeof(user));

// //read
// console.log(user);
// //console.log(user.job);
// //console.log(user['job']);
// //console.log(typeof(user));

// //creat
// user.company="thth";
// console.log(user);

// //update
// user.location = 'hcm';
// console.log(user);

// //delete
// delete user.age
// console.log(user);

let computer = {
    brand: "Asus",
    os: "window",
    ram: "8gb",
    ssd:"512gb",
    weight: "108gr",
    img:"https://thegioipc.vn/uploads/22/10/laptop-asus-l510ma-wb04-1.jpg"
};
let computer = {
    brand: "Macbook",
    os: "MacOs",
    ram: "8gb",
    ssd:"512gb",
    weight: "108gr",
    img:"https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(5):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/7/637901935594127150_macbook-pro-m2-2022-xam-1.jpg"
};
let product = document.getElementById ("product");
product.style="border: 1px solid red","width: 80%","height:80%";
let img = document.createElement("img");
img.src= computer.img;
product.appendChild(img);

let brand = document.createElement("h3");
brand.innerText = computer.brand;
product.appendChild(brand);

let os = document.createElement("p");
os.innerText = computer.os;
product.appendChild(os);

let ram = document.createElement("p");
ram.innerText = computer.ram;
product.appendChild(ram);

let ssd = document.createElement("p");
ssd.innerText = computer.ssd;
product.appendChild(ssd);

let weight = document.createElement("p");
weight.innerText = computer.weight;
product.appendChild(weight);



