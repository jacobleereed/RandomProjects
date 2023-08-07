let testNum = 4242313357;

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const twoPrimes = num => {
    let tempArr = [];
    let k = 1;
    do {
        if (num % k === 0) {
            tempArr.push(k);
        }
        k += 1;
    } while (tempArr.length < 3);
    tempArr.shift();
    console.log(tempArr);
    console.log(`The two primes that multiply together to form ${num} are ${tempArr[0]} and ${tempArr[1]}`)
}

twoPrimes(testNum);

// 273221744844483481]