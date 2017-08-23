var commonFunc = require('./commonFunc');
var atmParams = require('./../requestParams/atm');
var atmJoiValidation = require('./../joiValidations/atm');

module.exports = {
    // network
    addTerminal: function(stepname, contextStep) {
        return commonFunc.createStep('db/atm.terminal.add', stepname, context => atmParams.addTerminalParams(context, contextStep),
        (result, assert) => {
            console.log(result);
            assert.equals(atmJoiValidation.validateAddTerminal(result.terminal).error, null, 'return all terminal details');
        });
    }
};
