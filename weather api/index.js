let q = "  ";
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=${q}&lang=vi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '73b7d28d60msh203041ceb7dcf6ep189174jsn30a3067fa147',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch(url,options).then((respons) => {
    return response.json();
}).then((data) => {
    displayTitle(data.location.country, data.location.name);
    displayCondition(data.curent.condition.icon, data.current.temp_c, data.current.condition.text);
});

displayTitle(country, city) => {
    let h3 = document.createElement("h3");
    h3.innerText = country + "-" +city;
    document.getElementById("title").appendChild(h3);
}

displatCondition(img, temp, status ){
    let imgTag = document.createElement("img");
    imgTag.setAttribute("src", img);

    let div = document.createElement("div");
    let h3Temp = document.createElement("h3");
    h3Temp.innerText = temp + " độ C";
    let h3Status = document.createElement("h3");
    h3Status.innerText = status;
    div.appendChild(h3Temp);
    div.appendChild(h3Status);

    document.getElementById("condition").appendChild(imgTag);
    document.getElementById("condition").appendChild(div);
}
