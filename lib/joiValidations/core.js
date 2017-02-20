var joi = require('joi');
module.exports = {
    // validations for addItemTranslation
    /**
     * @param {object} result - result to validate (result.addItemTranslation)
     * @param {string} allowEmptyString - used for testing with both valid and invalid itemName
     * @return {joiObject} - joiValidation
     */
    validateFetchItemTranslation: function(result, allowEmptyString) {
        /**
        *  var validateItemName = joi.string().allow(null).allow('').required();
        *  if (!allowEmptyString) {
        *      validateItemName = joi.string().required();
        *  }
        *  the above script should be used once we have checks for empty string
        */

        var schema = joi.object().keys({
            itemNameId: joi.number().required(),
            itemTypeName: joi.string().required(),
            itemTypeId: joi.number().required(),
            itemSyncId: joi.string().allow(null).allow(''),
            itemName: joi.string().allow('').required(), // validateItemName,   - should be used once we have checks for empty string
            itemTranslationId: joi.number().allow(null).allow(''),
            itemTranslationLanguageId: joi.number().allow(null).allow(''),
            itemNameTranslation: joi.string().allow(null).allow(''),
            itemCode: joi.string().allow(null).allow(''),
            isEnabled: joi.boolean().allow(0, 1, '0', '1').required(),
            organizationId: joi.number().allow(null).allow(''),
            organizationName: joi.string().allow(null).allow(''),
            itemOrder: joi.number().allow(null).allow('')
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    // validation for itemTypeId
    /**
     * @param {object} result - result to validate (result.addItemTranslation)
     * @return {joiObject} - joiValidation
     */
    validateFetchItemType: function(result) {
        var schema = joi.object().keys({
            itemTypeId: joi.number().required(),
            alias: joi.string().required(),
            name: joi.string().required(),
            description: joi.string().allow(null),
            table: joi.string().allow(null).allow(''),
            keyColumn: joi.string().allow(null).allow(''),
            nameColumn: joi.string().allow(null).allow('')
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    // validation for itemNameByItemType
    /**
     * @param {object} result - result to validate (result.addItemTranslation)
     * @return {joiObject} - joiValidation
     */
    validateitemNameByItemType: function(result) {
        var schema = joi.object().keys({
            itemNameId: joi.number().required(),
            itemNameTranslation: joi.string().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    }
};
