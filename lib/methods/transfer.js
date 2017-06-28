var commonFunc = require('./../methods/commonFunc');
var transferParams = require('./../requestParams/transfer');
var transferJoiValidation = require('./../joiValidations/transfer');

module.exports = {
    executeTransaction: function(stepname, contextStep) {
        return commonFunc.createStep('transaction.execute', stepname, context => transferParams.executeTransactionParams(context, contextStep),
        (result, assert) => {
            assert.equals(transferJoiValidation.validateExecuteTransaction(result).error, null, 'Return all detals after executing transaction');
        });
    },
    // setBalance method is used only for testing purposes for transfer tests!
    setBalance: function(stepname, contextStep, credit) {
        return commonFunc.createStep('ledgerTest.account.setBalance', stepname, context => transferParams.setBalanceParams(context, contextStep, credit),
        (result, assert) => {
            assert.equals(result.balance[0].credit, credit, 'return correct credit');
            assert.equals(result.balance[0].debit, 0, 'return zero debit');
        });
    },
    listReason: function(stepname, contextStep) {
        return commonFunc.createStep('transfer.reason.list', stepname, context => transferParams.listReasonParams(context, contextStep),
        (result, assert) => {
            assert.equals(transferJoiValidation.validateListReason(result).error, null, 'return all details for listed reasons');
        });
    }
};
