// alert("Hello World");

let salary = window.prompt("enter salary", "salary")

// checking level
if (salary > 100000) {
    alert("wealthy salary")
} else {
    alert("poor salary")
}

// for loop
for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        alert("i: " + i);
    }
}

// while loop
let j = 1;
while (j <= 10) {
    if (j % 2 == 0) { alert("j: " + j); }
    j++;
}
