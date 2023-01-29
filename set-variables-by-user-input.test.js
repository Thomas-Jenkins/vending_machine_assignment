const { describe, it } = require('@jest/globals');
// const process =  require('process');

const { setVariablesByUserInput } = require('./set-variables-by-user-input');

describe('Set Variable by user input function' , () => {
    it('sets itemCost and UserPayment variables', () => {
      const args = [
        '--item-cost',
        1.29,
        '--payment',
        5,
      ];
      const change = setVariablesByUserInput(args);
      expect(change).toBe(3.71);
     
    })
})
