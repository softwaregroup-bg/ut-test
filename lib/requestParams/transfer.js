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
    },
    listReasonParams: function(context, contextStep) {
        return {
            action: contextStep(context)
        };
    },
    transferFlowExecutePushParams: function(context, contextStep) {
        return {
            channelId: contextStep(context).channelId,
            settlementDate: contextStep(context).settlementDate,
            sourceAccount: contextStep(context).sourceAccount,
            transferIdAcquirer: contextStep(context).transferIdAcquirer,
            transferIdMerchant: contextStep(context).transferIdMerchant,
            transferType: contextStep(context).transferType,
            acquirerCode: contextStep(context).acquirerCode,
            channelType: contextStep(context).channelType,
            destinationType: contextStep(context).destinationType,
            expireSeconds: contextStep(context).expireSeconds,
            reversed: contextStep(context).reversed,
            amount: {
                transfer: {
                    currency: contextStep(context).amount.transfer.currency,
                    amount: contextStep(context).amount.transfer.amount,
                    scale: contextStep(context).amount.transfer.scale,
                    cents: contextStep(context).amount.transfer.cents
                }
            },
            description: contextStep(context).description,
            mode: contextStep(context).mode,
            issuerId: contextStep(context).issuerId,
            merchantId: contextStep(context).merchantId,
            merchantType: contextStep(context).merchantType,
            credentialId: contextStep(context).credentialId,
            udfAcquirer: {
                bcTxeventId: contextStep(context).udfAcquirer.bcTxeventId,
                prevBcTxeventId: contextStep(context).udfAcquirer.prevBcTxeventId,
                prevIssuerTxeventRef: contextStep(context).udfAcquirer.prevIssuerTxeventRef,
                acquirer: contextStep(context).udfAcquirer.acquirer,
                acquirerTxRef: contextStep(context).udfAcquirer.acquirerTxRef,
                acquirerTxeventRef: contextStep(context).udfAcquirer.acquirerTxeventRef,
                acquirerCountry: contextStep(context).udfAcquirer.acquirerCountry,
                issuer: contextStep(context).udfAcquirer.issuer,
                merchantName: contextStep(context).udfAcquirer.merchantName,
                merchantCountry: contextStep(context).udfAcquirer.merchantCountry,
                branch: contextStep(context).udfAcquirer.branch,
                branchAddress: contextStep(context).udfAcquirer.branchAddress,
                bcTxeventTime: contextStep(context).udfAcquirer.bcTxeventTime,
                txType: contextStep(context).udfAcquirer.txType
            },
            destinationAccount: contextStep(context).destinationAccount
        };
    }
};
