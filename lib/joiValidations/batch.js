var joi = require('joi');
module.exports = {
    /**
     * @param {array} result - result to validate (result.batch)
     * @return {joiObject} - joiValidation
     */
    validateAddBatch: function(result) {
        var schema = joi.object().keys({
            batchId: joi.string().required(),
            name: joi.string().required(),
            description: joi.string().required(),
            batchStatusId: joi.string().required(),
            status: joi.string().required(),
            currency: joi.string().required(),
            transactionType: joi.string().required(),
            statusCode: joi.string().required(),
            batchType: joi.string().required(),
            batchTypeId: joi.string().required(),
            account: joi.string().allow(null).required(),
            updatedOn: joi.string().required(),
            reason: joi.string().allow(null).required(),
            createdOn: joi.string().required(),
            validatedOn: joi.string().allow(null).required(),
            fileName: joi.string().required(),
            originalFilename: joi.string().required(),
            paymentsCount: joi.number().required(),
            recordsTotal: joi.number().required(),
            totalAmount: joi.number().allow(null).required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate (result.batchTypes)
     * @return {joiObject} - joiValidation
     */
    validateFetchBatchType: function(result) {
        var schema = joi.array().items(joi.object().keys({
            key: joi.string().required(),
            code: joi.string().required(),
            name: joi.string().required()
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate (result.batchStatuses)
     * @return {joiObject} - joiValidation
     */
    validateFetchBatchStatus: function(result) {
        var schema = joi.array().items(joi.object().keys({
            key: joi.string().required(),
            code: joi.string().required(),
            name: joi.string().required()
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate (result.batchActions)
     * @return {joiObject} - joiValidation
     */
    validateFetchBatchAction: function(result) {
        var schema = joi.array().items(joi.object().keys({
            key: joi.string().required(),
            code: joi.string().required(),
            name: joi.string().required()
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate (result.transactionTypes)
     * @return {joiObject} - joiValidation
     */
    validateFetchBatchTransactionType: function(result) {
        var schema = joi.array().items(joi.object().keys({
            transactionType: joi.string().required(),
            currency: joi.string().required()
        }));
        return joi.validate(result, schema, {abortEarly: false});
    }
};
