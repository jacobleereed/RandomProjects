// t= 1 / r ln (c / (c- (W * r)

// Where

// t = The number of years until our nest egg drops to $0.

// r = The return on investment or interest earned from our nest egg.

// c = How much of our principal we use each year.

// W = The initial size of our nest egg.

let total = 10000;
let totalLeft = total;
let numOf = 1;
let costPerMonth = 350;
let usedPerYear = numOf * costPerMonth * 12;
let usedPerMonth = usedPerYear / 12;
let initialValue = 0;
let avgYearlyReturn = .045;
let avgMonthlyReturn = avgYearlyReturn / 12;
let totalMonths = 0;


while (totalLeft > 0) {
    totalMonths++;
    totalLeft = (totalLeft - usedPerMonth) * (1 + avgMonthlyReturn);
    if (totalMonths > 10000) {
        let totalMonths = 'infinite';
        break;
    }
}

let final;

if (totalMonths > 10000) {
    final = 'Infinite';
} else {
    final = totalMonths;
}

if (final === 'Infinite') {
    console.log(final)
} else {
    console.log(`${final} months, or ${final / 12} years.`)
}