const process = require('process');

let itemCost = null;
let userPayment = null;
// console.log('argv', process.argv);


for (let i = 0; i < process.argv.length; ++i) {
    const argument = process.argv[i];
    if (argument === '--item-cost') {
        itemCost = process.argv[i+1];
    }
    if (argument === '--payment') {
        userPayment = process.argv[i+1];
    }
}

if (isNaN(itemCost) || isNaN(userPayment)) {
    console.error('This Machine only accepts coins. Please Try Again');
    process.exit(1);
} 
if (itemCost === null) {
    console.error('Please make a selection first, Thank you.');
    process.exit(1);
}



let change = userPayment - itemCost;
let changeBreakdown = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
};

const calculatePhysicalChange = (change) => {
    let initial = change * 100;
    // console.log(initial);
    let quarters = Math.floor(initial/25);
    let minusQuarters = initial - quarters * 25;
    let dimes = Math.floor(minusQuarters/10);
    let minusDimes = minusQuarters - dimes * 10;
    let nickels = Math.floor(minusDimes/5);
    let minusNickels = minusDimes - nickels *5;
    let pennies = Math.floor(minusNickels/1);
    changeBreakdown.quarters = quarters;
    changeBreakdown.dimes = dimes;
    changeBreakdown.nickels = nickels;
    changeBreakdown.pennies = pennies;
    
    // console.log(quarters);
    // console.log(dimes);
    // console.log(nickels);
    // console.log(pennies);
    console.log(changeBreakdown);
}
calculatePhysicalChange(change);


