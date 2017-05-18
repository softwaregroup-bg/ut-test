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
            }),
            destinationAccount: joi.object().keys({
                accountNumber: joi.string().required(),
                accountName: joi.string().required()
            }),
            fee: joi.number(),
            vat: joi.number(),
            otherFee: joi.number(),
            transferId: joi.string().required(),
            transferIdAcquirer: joi.string().required(),
            transferType: joi.string().required(),
            currency: joi.string().required(),
            dateTime: joi.date().required(),
            description: joi.string().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    }
};
