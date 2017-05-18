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
    // setBalance method is used only for testing purposes!
    setBalance: function(stepname, contextStep, credit, debit) {
        return commonFunc.createStep('ledgerTest.account.setBalance', stepname, context => transferParams.setBalanceParams(context, contextStep, credit, debit),
        (result, assert) => {
            assert.equals(result.balance[0].credit, credit, 'return correct credit');
            assert.equals(result.balance[0].debit, debit, 'return correct debit');
        });
    }
};
