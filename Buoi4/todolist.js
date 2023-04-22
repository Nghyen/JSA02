const button = document.getElementById("button");

let tasks = [];

//thêm vào
button.addEventListener("click", (e) => {
    e.preventDefault();//khi bấm ok hay submit trang web ko load lại
    let task = {
        taskName: document.getElementById("input").value,
        isDone: false
    };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    render();
})

//lấy ra
function render() {
    let todo = document.getElementById("todo");
    console.log(todo);
    todo.innerHTML = null
    let tasksFromLocal = JSON.parse
        (localStorage.getItem("tasks"));

    for (let i = 0; i < tasksFromLocal.length; i++) {
        console.log(tasksFromLocal[i]);
        let li = document.createElement("li");
        li.innerHTML = tasksFromLocal[i].taskName;
        todo.appendChild(li);
    }
}
