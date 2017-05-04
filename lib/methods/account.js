var commonFunc = require('./commonFunc');
var accountParams = require('./../requestParams/account');
var accountJoiValidation = require('./../joiValidations/account');

module.exports = {
    addAccount: function(stepname, contextStep, accountName) {
        return commonFunc.createStep('ledger.account.add', stepname, context => accountParams.addAccountParams(context, contextStep, accountName),
        (result, assert) => {
            assert.equals(accountJoiValidation.validateAddAccount(result).error, null, 'Return all details after adding an account');
        });
    },
    fetchAccount: function(stepname, contextStep) {
        return commonFunc.createStep('ledger.account.fetch', stepname, context => accountParams.fetchAccountParams(context, contextStep),
        (result, assert) => {
            assert.equals(accountJoiValidation.validateFetchAccount(result.account).error, null, 'Return all details after fetching account');
        });
    }
};
