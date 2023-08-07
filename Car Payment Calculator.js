const carPrice = 60000;
const vaTax = .0415;
const months = 60;
const intrestRate = .045;


const paymentCalculator = (price, tax, term, rate) => {
    let totalPrice = price + (price * tax);
    let adjPrice = totalPrice;
    let totalPlusIntrest = totalPrice;
    let intrest = 0;
    for (let i = 0; i < months; i++) {
        adjPrice = adjPrice - (price / term);
        intrest = adjPrice * (rate / 12)
        totalPlusIntrest = totalPlusIntrest + intrest;
    }
    return totalPlusIntrest / term;
}

console.log(paymentCalculator(carPrice, vaTax, months, intrestRate));