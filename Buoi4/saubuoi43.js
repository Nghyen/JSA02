const button = document.getElementById("button");

let infor = [];
button.addEventListener("click", (e) => {
    e.preventDefault();
    let infors = {
        infors: document.getElementById("input").value,
        isDone: false
    };
    infor.push(infors);
    localStorage.setItem("infor", JSON.stringify(infor));
    render();
})
