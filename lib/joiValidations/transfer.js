var joi = require('joi');
module.exports = {
    /**
     * @param {object}  result - result to validate (result)
     * @return {joiObject} - joiValidation
     */
    validateExecuteTransaction: function(result) {
        var schema = joi.object().keys({
            amount: joi.number(),
            balance: joi.number(),
            sourceAccount: joi.object().keys({
                accountNumber: joi.string().required(),
                accountName: joi.string().required()
            }).required(),
            destinationAccount: joi.object().keys({
                accountNumber: joi.string().required(),
                accountName: joi.string().required()
            }),
            fee: joi.number(),
            vat: joi.number(),
            otherFee: joi.number(),
            transferId: joi.string(),
            pullTransferId: joi.string(),
            pullTransferStatus: joi.string(),
            transferIdAcquirer: joi.string().required(),
            transferType: joi.string().required(),
            currency: joi.string(),
            dateTime: joi.date(),
            description: joi.string()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result)
     * @return {joiObject} - joiValidation
     */
    validateValidateTransaction: function(result) {
        var schema = joi.object().keys({
            sourceAccount: joi.object().keys({
                accountName: joi.string().required(),
                accountNumber: joi.string().required(),
                msisdn: joi.string().required(),
                customerName: joi.string().required()
            }).required(),
            destinationAccount: joi.object().keys({
                accountName: joi.string().required(),
                accountNumber: joi.string().required(),
                msisdn: joi.string().required().allow(null),
                customerName: joi.string().required()
            }),
            fee: joi.number().required(),
            vat: joi.number().required(),
            otherFee: joi.number().required(),
            pullTransferId: joi.string(),
            currency: joi.string().required(),
            dateTime: joi.date().required(),
            transferType: joi.string().required(),
            description: joi.string(),
            amount: joi.number()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result)
     * @return {joiObject} - joiValidation
     */
    validateGetTransaction: function(result) {
        var schema = joi.object().keys({
            transferId: joi.number().required(),
            transferTypeId: joi.number().required(),
            itemCode: joi.string().required(),
            acquirerCode: joi.string().required(),
            transferIdAcquirer: joi.string().required(),
            transferIdLedger: joi.string().required().allow(null),
            transferIdIssuer: joi.string().required().allow(null),
            transferIdMerchant: joi.string().required().allow(null),
            transferDateTime: joi.date().required(),
            localDateTime: joi.date().required().allow(null),
            issuerSettlementDate: joi.date().required().allow(null),
            channelId: joi.number().integer().required(),
            channelType: joi.string().required(),
            ordererId: joi.number().integer().required().allow(null),
            merchantId: joi.string().required().allow(null),
            merchantInvoice: joi.string().required().allow(null),
            merchantPort: joi.string().required().allow(null),
            merchantType: joi.string().required().allow(null),
            cardId: joi.number().integer().required().allow(null),
            sourceAccount: joi.string().required().allow(null),
            destinationAccount: joi.string().required().allow(null),
            expireTime: joi.date().required().allow(null),
            expireCount: joi.number().integer().required().allow(null),
            reversed: joi.boolean().required(),
            retryTime: joi.date().required().allow(null),
            retryCount: joi.number().integer().required().allow(null),
            ledgerTxState: joi.number().integer().required().allow(null),
            issuerTxState: joi.number().integer().required().allow(null),
            acquirerTxState: joi.number().integer().required().allow(null),
            merchantTxState: joi.number().integer().required().allow(null),
            issuerId: joi.string().required().allow(null),
            ledgerId: joi.string().required().allow(null),
            transferCurrency: joi.string().required(),
            transferAmount: joi.number().required(),
            acquirerFee: joi.number().required().allow(null),
            issuerFee: joi.number().required().allow(null),
            transferFee: joi.number().required().allow(null),
            description: joi.string().required().allow(null),
            issuerPort: joi.string().required().allow(null),
            ledgerPort: joi.string().required().allow(null),
            udfAcquirer: joi.string().required().allow(null),
            split: joi.array().items(joi.object().keys({
                splitId: joi.number().integer().required(),
                transferId: joi.number().integer().required(),
                conditionId: joi.number().integer().required().allow(null),
                splitNameId: joi.number().integer().required().allow(null),
                debit: joi.string().required().allow(null),
                credit: joi.string().required().allow(null),
                amount: joi.number().required().allow(null),
                description: joi.string().required(),
                tag: joi.string().required().allow(null),
                debitActorId: joi.number().integer().required().allow(null),
                creditActorId: joi.number().integer().required().allow(null),
                debitItemId: joi.number().integer().required().allow(null),
                creditItemId: joi.number().integer().required().allow(null),
                state: joi.number().integer().required().allow(null),
                transferIdPayment: joi.number().integer().required().allow(null)
            })),
            pending: joi.object().keys({
                pendingId: joi.number().integer().required().allow(null),
                pullTransactionId: joi.number().integer().required().allow(null),
                pushTransactionId: joi.number().integer().required().allow(null),
                expireTime: joi.date().required().allow(null),
                params: joi.string().required().allow(null)
            })
        });
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result)
     * @return {joiObject} - joiValidation
     */
    validaFetchcPendingUserTransfers: function(result) {
        var schema = joi.object().keys({
            pushTransactions: joi.array().items(
                joi.object().keys({
                    transferId: joi.number().integer().required(),
                    transferTypeId: joi.number().integer().required(),
                    acquirerCode: joi.string().required(),
                    settlementDate: joi.date().required().allow(null),
                    localDateTime: joi.date().required().allow(null),
                    transferIdAcquirer: joi.string().required(),
                    transferIdLedger: joi.string().required().allow(null),
                    transferIdIssuer: joi.string().required().allow(null),
                    transferIdMerchant: joi.string().required().allow(null),
                    channelId: joi.number().integer().required(),
                    channelType: joi.string().required(),
                    ordererId: joi.number().integer().required().allow(null),
                    merchantId: joi.string().required().allow(null),
                    merchantInvoice: joi.string().required().allow(null),
                    merchantPort: joi.string().required().allow(null),
                    merchantType: joi.string().required().allow(null),
                    cardId: joi.number().integer().required().allow(null),
                    sourceAccount: joi.string().required().allow(null),
                    destinationAccount: joi.string().required().allow(null),
                    expireTime: joi.date().required().allow(null),
                    expireCount: joi.number().integer().required().allow(null),
                    reversed: joi.boolean().required(),
                    retryTime: joi.date().required().allow(null),
                    retryCount: joi.number().integer().required().allow(null),
                    ledgerTxState: joi.number().integer().required().allow(null),
                    issuerTxState: joi.number().integer().required().allow(null),
                    acquirerTxState: joi.number().integer().required().allow(null),
                    merchantTxState: joi.number().integer().required().allow(null),
                    issuerId: joi.string().required().allow(null),
                    ledgerId: joi.string().required().allow(null),
                    acquirerFee: joi.number(),
                    issuerFee: joi.number(),
                    transferFee: joi.number(),
                    description: joi.string().allow(null),
                    transferType: joi.string().required(),
                    amount: joi.number().required(),
                    currency: joi.string().required(),
                    dateTime: joi.date().required()
                })
            ),
            pullTransactions: joi.array().items(
                joi.object().keys({
                    transferId: joi.number().integer().required(),
                    transferTypeId: joi.number().integer().required(),
                    acquirerCode: joi.string().required(),
                    settlementDate: joi.date().required().allow(null),
                    localDateTime: joi.date().required().allow(null),
                    transferIdAcquirer: joi.string().required(),
                    transferIdLedger: joi.string().required().allow(null),
                    transferIdIssuer: joi.string().required().allow(null),
                    transferIdMerchant: joi.string().required().allow(null),
                    channelId: joi.number().integer().required(),
                    channelType: joi.string().required(),
                    ordererId: joi.number().integer().required().allow(null),
                    merchantId: joi.string().required().allow(null),
                    merchantInvoice: joi.string().required().allow(null),
                    merchantPort: joi.string().required().allow(null),
                    merchantType: joi.string().required().allow(null),
                    cardId: joi.number().integer().required().allow(null),
                    sourceAccount: joi.string().required().allow(null),
                    destinationAccount: joi.string().required().allow(null),
                    expireTime: joi.date().required().allow(null),
                    expireCount: joi.number().integer().required().allow(null),
                    reversed: joi.boolean().required(),
                    retryTime: joi.date().required().allow(null),
                    retryCount: joi.number().integer().required().allow(null),
                    ledgerTxState: joi.number().integer().required().allow(null),
                    issuerTxState: joi.number().integer().required().allow(null),
                    acquirerTxState: joi.number().integer().required().allow(null),
                    merchantTxState: joi.number().integer().required().allow(null),
                    issuerId: joi.string().required().allow(null),
                    ledgerId: joi.string().required().allow(null),
                    acquirerFee: joi.number(),
                    issuerFee: joi.number(),
                    transferFee: joi.number(),
                    description: joi.string().allow(null),
                    transferType: joi.string().required(),
                    amount: joi.number().required(),
                    currency: joi.string().required(),
                    dateTime: joi.date().required()
                })
            )
        });
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result)
     * @return {joiObject} - joiValidation
     */
    validateListReason: function(result) {
        var schema = joi.object().keys({
            transferReasonList: joi.array().items(
                joi.object().keys({
                    itemNameId: joi.number().integer().required(),
                    itemName: joi.string().required(),
                    itemNameTranslation: joi.string().required()
                })
            )
        });
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.partner)
     * @return {joiObject} - joiValidation
     */
    validateAddTransferPartner: function(result) {
        var schema = joi.array().items(joi.object({
            actorId: joi.number().required(),
            partnerId: joi.string().required(),
            name: joi.string().required(),
            port: joi.string().required(),
            mode: joi.string().required(),
            settlementDate: joi.string().allow(null).required(),
            settlementAccount: joi.string().allow(null).required(),
            feeAccount: joi.string().allow(null).required(),
            commissionAccount: joi.string().allow(null).required(),
            serialNumber: joi.number().allow(null).required(),
            settings: joi.string().allow(null).required()
        }));
        return schema.validate(result, {abortEarly: false});
    }
};
