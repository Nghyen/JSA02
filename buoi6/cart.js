let carts = JSON.parse(localStorage.getItem("carts")) || [];

for (let i = 0; i < carts.length; i++) {
    if (carts[i].quantity > 0) {
        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        img.classList.add("img-container");
        img.src = carts[i].image;
        card.appendChild(img);

        let container = document.createElement("div");
        container.classList.add("container");

        let name = document.createElement("h5");
        name.innerText = carts[i].name;
        container.appendChild(name);

        let price = document.createElement("h6");
        price.innerHTML = "<b>Price: </b>" + carts[i].price;
        container.appendChild(price);

        let quantity = document.createElement("h6");
        quantity.innerHTML = "<b>Quantity: </b>" + carts[i].quantity;
        container.appendChild(quantity);

        card.appendChild(container);
        document.getElementById("products").appendChild(card);
    }
}
