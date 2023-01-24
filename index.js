const process = require('process');
/**The changeBreakdown object is used to log the breakdown of change into individual coins. It's Values are set in the calculatePhysicalChange function */
let changeBreakdown = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
};
/**
 * The setVariablesByUserInput function assigns the itemCost & userPayment variables from four user inputs. The inputs are
 * '--item-cost', 'cost of the item as a number', '--payment', 'user payment as a number'.
 * It then calculates the difference of the cost from the payment.
 * @returns change.
 */

const setVariablesByUserInput = () => {
    let itemCost = null;
    let userPayment = null;

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
    return change;
    
}
/**
 * The calculatePhysicalChange function takes in the setVariablesByUserInput function and calculates the total number of each type of coin needed to give proper change. The values are then set to the changeBreakdown object. This function loops in the changeBreakdown object to console.log its key value pairs to the terminal or console along with a total change variable. 
 */
const calculatePhysicalChange = (change) => {
    let initial = change * 100;

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
    
    let totalChange = (quarters * 25 + dimes * 10 + nickels * 5 + pennies) / 100;
    
    for (let coin in changeBreakdown) {
        console.log(`${coin}: ${changeBreakdown[coin]}`);
    }
    console.log('Total Change = $',totalChange);
    
}

calculatePhysicalChange(setVariablesByUserInput());


