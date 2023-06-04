const height = Number(prompt("Nhập chiều cao của tam giác: "))

for (let i = 1; i <= height; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}

