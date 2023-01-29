const { describe, it } = require('@jest/globals');
const { calculatePhysicalChange } = require('./calculate-physical-change');

describe('calculate physical change function', () => {
    it('calculates the number of each coin that should be returned as change as well as the total of the coins', () => {
        const change = 3.71;
        const changeObj = calculatePhysicalChange(change);
        expect(changeObj.quarters).toBe(14);
        expect(changeObj.dimes).toBe(2);
        expect(changeObj.nickels).toBe(0);
        expect(changeObj.pennies).toBe(1);
        expect(changeObj.total).toBe(3.71);
    })
})