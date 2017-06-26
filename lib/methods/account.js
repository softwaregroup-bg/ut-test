var commonFunc = require('./commonFunc');
var accountParams = require('./../requestParams/account');
var accountJoiValidation = require('./../joiValidations/account');

module.exports = {
    disableAccountMCH: function(stepname, contextStep, isDisabled) {
        return commonFunc.createStep('ledgerTest.account.mChStatusChange', stepname, context => {
            return {
                isMCHDisabled: isDisabled
            };
        },
        (result, assert) => {
            return result;
        });
    },
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
    getAccountBalance: function(stepname, contextStep, expectedBalance, precision) {
        return commonFunc.createStep('ledger.account.get', stepname, context => {
            return {
                accountId: contextStep(context)
            };
        },
        (result, assert) => {
            if (precision) {
                assert.equals(result.account[0].balance, commonFunc.roundNumber(expectedBalance, precision), 'return correct balance');
            } else {
                assert.equals(result.account[0].balance, expectedBalance, 'return correct balance');
            }
        });
    },
    editAccount: function(stepname, contextStep, accountName) {
        return commonFunc.createStep('ledger.account.edit', stepname, context => accountParams.editAccountParams(context, contextStep, accountName),
        (result, assert) => {
            result.unapprovedAccount ? assert.equals(result.unapprovedAccount[0].accountName, accountName, 'return correct accountName')
            : assert.equals(result.account[0].accountName, accountName, 'return correct accountName');
            assert.equals(accountJoiValidation.validateEditAccount(result).error, null, 'return all detais after editing an account');
        });
    },
    approveAccount: function(stepname, contextStep) {
        return commonFunc.createStep('ledger.account.approve', stepname, context => accountParams.approveAccountParams(context, contextStep),
        (result, assert) => {
            assert.same(result, [], 'return empty array after approve');
        });
    },
    discardAccount: function(stepname, contextStep) {
        return commonFunc.createStep('ledger.account.discard', stepname, context => accountParams.discardAccountParams(context, contextStep),
        (result, assert) => {
            assert.same(result, [], 'return empty array after discard');
        });
    },
    closeAccount: function(stepname, contextStep) {
        return commonFunc.createStep('ledger.account.close', stepname, context => accountParams.closeAccountParams(context, contextStep),
        (result, assert) => {
            assert.same(result, [], 'return empty array after approve');
        });
    },
    rejectAccount: function(stepname, contextStep, rejectReason) {
        return commonFunc.createStep('ledger.account.reject', stepname, context => accountParams.rejectAccountParams(context, contextStep, rejectReason),
        (result, assert) => {
            assert.same(result, [], 'return empty array after reject');
        });
    },
    getAccount: function(stepname, contextStep) {
        return commonFunc.createStep('ledger.account.get', stepname, context => accountParams.getAccountParams(context, contextStep),
        (result, assert) => {
            assert.equals(accountJoiValidation.validateGetAccount(result.account).error, null, 'return account details');
        });
    }
};
