let height = 5;

for (let i = height; i >= 1; i--) {
    let line = " ";
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}

