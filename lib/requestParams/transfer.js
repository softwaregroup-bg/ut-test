module.exports = {
    executeTransactionParams: function(context, contextStep) {
        return {
            transferType: contextStep(context).transferType,
            sourceAccount: contextStep(context).sourceAccount,
            destinationAccount: contextStep(context).destinationAccount,
            transferIdAcquirer: contextStep(context).transferIdAcquirer,
            description: contextStep(context).description,
            amount: contextStep(context).amount
        };
    },
    setBalanceParams: function(context, contextStep, credit) {
        return {
            accountIds: contextStep(context), // array
            credit: credit,
            debit: 0
        };
    }
};
