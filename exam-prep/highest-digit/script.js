// The split() method splits a string into an array of substrings.

let form = { number: 649 };

console.log(highestDigit(form));

function highestDigit(numObj) {

    let integerValue = numObj.number;
    let stringArr = integerValue.toString().split("");
    let numArr = stringArr.map(Number); // Number function to convert string to number


    // console.log(stringArr);
    // console.log(numArr);

    let max = 0;
    for (i = 0; i < numArr.length; i++) {
        if (numArr[i] > max) {
            max = numArr[i];
        }
    }

    return max;
}