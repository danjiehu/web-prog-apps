// The splice(a,b): a - starting index, b - number of items to remove 

let myArray = [{ make: "Toyota", model: "Focus", age: 0 },
{ make: "Toyota", model: "Yaris", age: 1 }, // to remove
{ make: "Toyota", model: "Focus", age: 2 },
{ make: "Toyota", model: "Focus", age: 3 }, // to remove
{ make: "Toyota", model: "Focus", age: 4 },
{ make: "Toyota", model: "Focus", age: 5 }] // to remove

let delCount = 0;
let arrLength = myArray.length;

for (i = 0; i < arrLength; i++) {
    if (i % 2 != 0) {
        myArray.splice(i - delCount, 1);
        delCount++
    }
}

// deplaying result
for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
