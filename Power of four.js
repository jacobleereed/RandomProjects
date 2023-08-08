

let testNum = 16;
let power = 4;

let testArr = [];

for (let i = 0; i <= 100; i++) {
    let currentNum = Math.pow(power, i);
    testArr.push(currentNum);
}
let logReturn = `Not a power of 4`;
for (let j = 0; j < testArr.length; j++) {
    if (testNum === testArr[j]) {
        logReturn = `Equal to power of 4 to the ${j}`;
    }
}

console.log(logReturn);