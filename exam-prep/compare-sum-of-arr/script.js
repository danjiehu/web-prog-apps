
arr1 = [1, 2, 4];
arr2 = [2, 4, 6];

console.log(compareArrs(arr1, arr2));

function compareArrs(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    for (i = 0; i < arr1.length; i++) { // same length according to question
        sum1 = sum1 + arr1[i];
        sum2 = sum2 + arr2[i];
    }
    if (sum1 > sum2) {
        return true;
    } else { return false; }
}