console.log("hello!");

// 3.a iterate through an array of objects called myArray
let form = [{ make: "Toyota", model: "Focus", age: 2 },
{ make: "Toyota", model: "Yaris", age: 3 },
{ make: "Toyota", model: "Focus", age: 4 }]

function incrementAge(arr) {

    arr.forEach(obj => {
        obj.age = obj.age + 1;
    })

    // for (i = 0; i < arr.length; i++) {
    //     form[i].age = form[i].age + 1;
    // }

}

incrementAge(form);
console.log("after", form);

function validate() {

    // 3.b-1 validating if any of the form input is empty
    if (!username.value) {
        window.alert("username is empty, please enter username");
    } else if (!phone.value) {
        window.alert("phone number is empty, please enter phone number");
    } else if (!Number(phone.value)) {
        // 3.b-2 validating if form input is correct type
        window.alert("please enter a correct phone number");
    } else {
        // submit();
        console.log("all clear");
    }

}

// 3.c
function double() {
    for (i = 0; i < numbers.length; i++) {
        // console.log(numbers[i])
        // console.log(numbers[i].value)
        numbers[i].value = numbers[i].value * 2;
    }
}