let products = {
    data: [
        {
            name: "MATRIX 1999 DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/matrix-1999-1.jpg"
        },

        {
            name: "RAEDA DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Raeda-Deck.jpg"
        },

        {
            name: "MUSTY DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Musty-Deck.jpg"
        },

        {
            name: "TRISTIQUE DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Tristique-deck.jpg"
        },

        {
            name: "FIELD TRIP DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Fied-Trip-deck.jpg"
        },

        {
            name: "TARO RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-5.jpg"
        },

        {
            name: "NEON RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-1.jpg"
        },

        {
            name: "ORANAGE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-2.jpg"
        },

        {
            name: "BLUE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-3.jpg"
        },

        {
            name: "WHITE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-4.jpg"
        },

        {
            name: "CUTIS MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cutis.jpg"
        },

        {
            name: "CAM VU MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cam-vu.jpg"
        },

        {
            name: "SON NGUYEN MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/son-nguyen.jpg"
        },
    ]
};

for (let i = 0; i < products.data.length; i++) {
    // console.log(products.data[i]);
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.classList.add("img-container");
    img.src = products.data[i].image;
    card.appendChild(img);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.innerText = products.data[i].name;
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price: </b>" + products.data[i].price;
    container.appendChild(price);

    let btn = document.createElement("button");
    btn.innerText = "Thêm vào giỏ hàng";
    btn.setAttribute("onclick", `addToCard("${products.data[i].name}")`)
    container.appendChild(btn);

    card.appendChild(container);
    //console.log(card);
    document.getElementById("products").appendChild(card);
}

let carts = [
    {
        name: "MATRIX 1999 DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/matrix-1999-1.jpg",
        quantity: 0
    },

    {
        name: "RAEDA DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Raeda-Deck.jpg",
        quantity: 0
    },

    {
        name: "MUSTY DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Musty-Deck.jpg",
        quantity: 0
    },

    {
        name: "TRISTIQUE DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Tristique-deck.jpg",
        quantity: 0
    },

    {
        name: "FIELD TRIP DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Fied-Trip-deck.jpg",
        quantity: 0
    },

    {
        name: "TARO RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-5.jpg",
        quantity: 0
    },

    {
        name: "NEON RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-1.jpg",
        quantity: 0
    },

    {
        name: "ORANAGE RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-2.jpg",
        quantity: 0
    },

    {
        name: "BLUE RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-3.jpg",
        quantity: 0
    },

    {
        name: "WHITE RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-4.jpg",
        quantity: 0
    },

    {
        name: "CUTIS MODEL DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/cutis.jpg",
        quantity: 0
    },

    {
        name: "CAM VU MODEL DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/cam-vu.jpg",
        quantity: 0
    },

    {
        name: "SON NGUYEN MODEL DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/son-nguyen.jpg",
        quantity: 0
    },
];

console.log(carts);

function addToCard(name) {
    for (i = 0; i< carts.length; i++) {
        if (carts[i].name == name){
            carts[i].quantity += 1;
            console.log(carts);
        }
    }
}