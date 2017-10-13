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
            typeName: joi.string().required(),
            itemDescription: joi.string().required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.atmFiles)
     * @result {joiObject} - joiValidation
     */
    validateFetchConfigurationFile: function(result) {
        var schema = joi.array().items(
            joi.object().keys({
                fileId: joi.number().integer().required(),
                label: joi.string().required(),
                filePath: joi.string().required(),
                typeName: joi.string().required(),
                createdOn: joi.string().required(),
                typeId: joi.number().integer()
            })
        );

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
            createdOn: joi.string().required(),
            filePath: joi.string().required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.atmProfiles)
     * @result {joiObject} - joiValidation
     */
    validateFetchProfile: function(result) {
        var schema = joi.array().items(joi.object().keys({
            profileId: joi.number().required(),
            profileName: joi.string().required(),
            isLinked: joi.boolean().allow(0, 1, '0', '1').required(),
            createdOn: joi.string().required(),
            description: joi.string().allow(null),
            atmCount: joi.string().required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.atmProfile)
     * @result {joiObject} - joiValidation
     */
    validateGetProfile: function(result) {
        var schema = joi.array().items(joi.object().keys({
            profileId: joi.number().required(),
            profileName: joi.string().required(),
            isLinked: joi.boolean().allow(0, 1, '0', '1').required(),
            description: joi.string().allow(null)
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.atmProfileFiles)
     * @result {joiObject} - joiValidation
     */
    validateGetProfileFiles: function(result) {
        var schema = joi.array().items(joi.object().keys({
            profileFileId: joi.number().required(),
            profileId: joi.number().required(),
            fileId: joi.number().required(),
            label: joi.string().required(),
            typeId: joi.number().required(),
            typeName: joi.string().required(),
            itemCode: joi.string().required(),
            itemDescription: joi.string().required(),
            filePath: joi.string().required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    }
};
