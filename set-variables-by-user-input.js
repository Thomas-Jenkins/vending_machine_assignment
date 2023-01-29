/**
 * The setVariablesByUserInput function assigns the itemCost & userPayment variables from four user inputs. The inputs are
 * '--item-cost', 'cost of the item as a number', '--payment', 'user payment as a number'.
 * It then calculates the difference of the cost from the payment.
 * @returns change.
 */

const setVariablesByUserInput = (argv) => {
    let itemCost = null;
    let userPayment = null;

    for (let i = 0; i < argv.length; ++i) {
        const argument = argv[i];
        if (argument === '--item-cost') {
            itemCost = argv[i+1];
        }
        if (argument === '--payment') {
            userPayment = argv[i+1];
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

module.exports = {
    setVariablesByUserInput,
}
