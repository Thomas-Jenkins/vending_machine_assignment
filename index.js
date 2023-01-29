const { calculatePhysicalChange } = require('./calculate-physical-change');
const { setVariablesByUserInput } = require('./set-variables-by-user-input');

const process = require('process');

calculatePhysicalChange(setVariablesByUserInput(process.argv));


