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
            fee: joi.number().required(),
            vat: joi.number().required(),
            otherFee: joi.number().required(),
            transferId: joi.string().required(),
            transferIdAcquirer: joi.string().required(),
            transferType: joi.string().required(),
            currency: joi.string().required(),
            dateTime: joi.date().required(),
            description: joi.string().required()
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
                msisdn: joi.string().required(),
                customerName: joi.string().required()
            }),
            fee: joi.number().required(),
            vat: joi.number().required(),
            otherFee: joi.number().required(),
            currency: joi.string().required(),
            dateTime: joi.date().required(),
            transferType: joi.string().required(),
            description: joi.string().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    }
};
