const total = 4260000;
const maxWorkers = 500;
const iterations = 0;
const place = 'ones';


const divisibleBy = (to, mw, pl) => {
    for (let i = 1; i <= mw; i++) {
        if (pl === 'ones') {
            if (to % i === 0) {
                if (i <= 9) {
                    console.log(`${i}     total amount per worker is $${to / i}`);
                } else if (i > 9 && i <= 99) {
                    console.log(`${i}    total amount per worker is $${to / i}`);
                } else if (i > 99 && i <= 999) {
                    console.log(`${i}   total amount per worker is $${to / i}`);
                } else {
                    console.log(`${i}  total amount per worker is $${to / i}`);
                }
            } else {
                continue;
            }
        } else if (pl === 'tens') {
            let plCalc = to / i;
            if ((plCalc % 10) === 0) {
                if (i <= 9) {
                    console.log(`${i}     total amount per worker is $${to / i}`);
                } else if (i > 9 && i <= 99) {
                    console.log(`${i}    total amount per worker is $${to / i}`);
                } else if (i > 99 && i <= 999) {
                    console.log(`${i}   total amount per worker is $${to / i}`);
                } else {
                    console.log(`${i}  total amount per worker is $${to / i}`);
                }
            } else {
                continue;
            }
        } else if (pl === 'hundreds') {
            let plCalc = to / i;
            if ((plCalc % 100) === 0) {
                if (i <= 9) {
                    console.log(`${i}     total amount per worker is $${to / i}`);
                } else if (i > 9 && i <= 99) {
                    console.log(`${i}    total amount per worker is $${to / i}`);
                } else if (i > 99 && i <= 999) {
                    console.log(`${i}   total amount per worker is $${to / i}`);
                } else {
                    console.log(`${i}  total amount per worker is $${to / i}`);
                }
            } else {
                continue;
            }
        } else if (pl === 'thousands') {
            let plCalc = to / i;
            if ((plCalc % 1000) === 0) {
                if (i <= 9) {
                    console.log(`${i}     total amount per worker is $${to / i}`);
                } else if (i > 9 && i <= 99) {
                    console.log(`${i}    total amount per worker is $${to / i}`);
                } else if (i > 99 && i <= 999) {
                    console.log(`${i}   total amount per worker is $${to / i}`);
                } else {
                    console.log(`${i}  total amount per worker is $${to / i}`);
                }
            } else {
                continue;
            }
        }
    }
}

divisibleBy(total, maxWorkers, place);
