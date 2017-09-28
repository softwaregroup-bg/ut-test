var joi = require('joi');
module.exports = {
    /**
     * @param {arr} - result to validate (result.terminal)
     * @result {joiObject} - joiValidation
     */
    validateAddTerminal: function(result) {
        var schema = joi.array().items(joi.object().keys({
            terminalID: joi.string().required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.atmFileTypes)
     * @result {joiObject} - joiValidation
     */
    validateListConfigurationFileType: function(result) {
        var schema = joi.array().items(joi.object().keys({
            typeId: joi.number().required(),
            itemCode: joi.string().required(),
            itemName: joi.string().required(),
            typeName: joi.string().required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.atmFiles)
     * @result {joiObject} - joiValidation
     */
    validateAddConfigurationFile: function(result) {
        var schema = joi.array().items(joi.object().keys({
            fileId: joi.number().required(),
            label: joi.string().required(),
            typeId: joi.number().required(),
            typeName: joi.string().required(),
            createdOn: joi.string().required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.atmFiles)
     * @result {joiObject} - joiValidation
     */
    validateFetchConfigurationFile: function(result) {
        var schema = joi.array().items(joi.object().keys({
            fileId: joi.number().required(),
            label: joi.string().required(),
            typeId: joi.number().required(),
            typeName: joi.string().required(),
            createdOn: joi.string().required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    }
};
