function search() {
    let searchInput = document.getElementById("searchInput").value;
    const url = 'https://covid-193.p.rapidapi.com/statistics?country=Vietnam';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '73b7d28d60msh203041ceb7dcf6ep189174jsn30a3067fa147',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};
}

fetch(url,options).then((_respon=s) => {
    return response.json();
}).then((data) => {
    displayTitle(data.response.country, data.response.population);
    displayCases(data.response.cases.new, data.response.cases.total);
    displayDeaths(data.response.deaths.new,data.response.deaths.total)
});

function displayTitle(country, populations) {
    document.getElementById("name-country").innerHTML = "";
    let h3 = document.createElement("h3");
    h3.innerText = country +"-" + "population:" +populations;
    document.getElementById("name-country").appendChild(h3);
}

function displayCases (new, total) {
    document.getElementById("cases").innerHTML = "";

    let c1 = document.createElement("h1");
    h3Temp.innerText = "Số ca nhiễm mới"+ cases.new +"=>"+"Tổng số ca nhiễm"+cases.total;

    let div = document.createElement("div");
    div.appendChild(c1);

    document.getElementById("cases").appendChild(div)
}

function displayDeaths (new, total) {
    document.getElementById("deaths").innerHTML = "";


    let d1 = document.createElement("h1");
    h3Temp.innerText = "Số ca tử vong tăng thêm"+ deaths.new +"=>"+"Tổng số ca tử vong"+deaths.total;

    let div = document.createElement("div");
    div.appendChild(d1);

    document.getElementById("deaths").appendChild(div)
}


