let products = {
    data: [
        {
            productName: "LEVENTS® COLORFUL PAINT TEE/ GREY",
            price: "35",
            image: "https://product.hstatic.net/1000378196/product/z3455500959841_f71631b2ce35e8032e4207941a5b602e_9ed5fecfe9b445bca6554bb101274011_master.jpg"
        },

        {
            productName: "LEVENTS® COLORFUL PAINT TEE/ BLACK",
            price: "34",
            image: "https://product.hstatic.net/1000378196/product/z3455501297595_3f6b310d318f366593980e24ddf77594_24a562f8db3f48bb99f9fe5f04c6455b_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ LIGHT BROWN",
            price: "35",
            image: "https://product.hstatic.net/1000378196/product/z3455501297595_3f6b310d318f366593980e24ddf77594_24a562f8db3f48bb99f9fe5f04c6455b_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ BLACK",
            price: "22",
            image: "https://product.hstatic.net/1000378196/product/z3436335150524_9bdd740660202d7d596d0b03e6f4f059_e820e35d18084faa8f779264ab6f2892_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ CREAM WHITE",
            price: "38",
            image: "https://product.hstatic.net/1000378196/product/z3436335020793_d8e1fb26890b00d378c4b4d0cf797573_0363c49ecdb641d49ddfa56d65e1ac4f_master.jpg"
        },

        {
            productName: "LEVENTS® DIAMOND 2E LOGO TEE/ BLACK",
            price: "42",
            image: "https://product.hstatic.net/1000378196/product/z3393718306380_9cb83d1efba39fe0bb0c7e4ba74f9024_e46acded798a4d7b97a0261c1a2048cf_master.jpg"
        },

        {
            productName: "THẮNG",
            price: "30",
            image: "404"
        }
    ]
};
// for (let i=0; i<products.data.length;i++){
//     console.log(products.data[i].productName)
// }
const productsDiv = document.getElementById("productsDiv");

for (let i = 0; i < products.data.length; i++) {
    //Tạo 1 thẻ div có class là card thông qua biến card
    let card = document.createElement("div");
    card.classList.add("card");
    //Tạo thẻ div có class là image-container thông qua biến imgContainer
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //Tạo thẻ img có src là giá trị từ obj trong vòng lặp 
    let img = document.createElement("img");
    img.setAttribute("src", products.data[i].image);
    //cho thẻ img thành con của thẻ div có class là image-container
    imgContainer.appendChild(img);

    let container = document.createElement("div");
    container.classList.add("container");
    
    let productName = document.createElement("h5");
    productName.innerHTML = products.data[i].productName;

    let price = document.createElement("p");
    price.innerHTML = products.data[i].price;

    container.appendChild(productName);
    container.appendChild(price);
    //cho thẻ div imgContainer thành con của thẻ div card
    card.appendChild(imgContainer);
    card.appendChild(container);
    //cho thẻ div card thành con của thẻ div productsDiv
    productsDiv.appendChild(card);
}
document.getElementById("search").addEventListener("click", function () {
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let cards = document.getElementsByClassName("card");
    let h5s = document.getElementsByTagName("h5");

    for (let i = 0; i < h5s.length; i++) {
        if (h5s[i].innerText.includes(searchInput)) {
            cards[i].classList.remove("hide");
        } else {
            cards[i].classList.add("hide");
        }
    }
})