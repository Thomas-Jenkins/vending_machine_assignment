
/**The changeBreakdown object is used to log the breakdown of change into individual coins. It's Values are set in the calculatePhysicalChange function */
let changeBreakdown = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
    total: 0
};

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

    let totalChange = (quarters * 25 + dimes * 10 + nickels * 5 + pennies) / 100;

    changeBreakdown.quarters = quarters;
    changeBreakdown.dimes = dimes;
    changeBreakdown.nickels = nickels;
    changeBreakdown.pennies = pennies;
    changeBreakdown.total = totalChange;
    
    return changeBreakdown;
    
}

module.exports = {
    calculatePhysicalChange,
}