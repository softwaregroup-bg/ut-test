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
    },
    getAccountBalance: function(stepname, contextStep, expectedBalance) {
        return commonFunc.createStep('ledger.account.get', stepname, context => {
            return {
                accountId: contextStep(context)
            };
        },
        (result, assert) => {
            assert.equals(result.account[0].balance, expectedBalance, 'return correct balance');
        });
    },
    editAccount: function(stepname, contextStep, accountName) {
        return commonFunc.createStep('ledger.account.edit', stepname, context => accountParams.editAccountParams(context, contextStep, accountName),
        (result, assert) => {
            assert.equals(result.account[0].accountName, accountName, 'return correct accountName');
            assert.equals(accountJoiValidation.validateEditAccount(result).error, null, 'return all detais after editting an account');
        });
    },
    approveAccount: function(stepname, contextStep) {
        return commonFunc.createStep('ledger.account.approved', stepname, context => accountParams.approveAccountParams(context, contextStep),
        (result, assert) => {
            assert.same(result, [], 'return empty array after approve');
        });
    }
};
