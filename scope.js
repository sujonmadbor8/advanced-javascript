function sum(first, second) {
    let result = first + second;
    return result;
}
const output = sum(3, 9);
console.log(output);

var myArr = [0, 1, 2, 3, 1000000];

function getSum() {
    var sum = 0;
    for (var i = 0; i < 1000000; i++) {
        sum += myArr[i];
    }
    return sum;
}

getSum();