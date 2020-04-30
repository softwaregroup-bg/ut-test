const joi = require('joi');
module.exports = {
    // network
    /**
     * @param {arr} - result to validate (result.network)
     * @result {joiObject} - joiValidation
     */
    validateAddNetwork: function(result) {
        const schema = joi.array().items(joi.object().keys({
            actorId: joi.number().integer(),
            organizationUnapprovedId: joi.number().integer(),
            organizationName: joi.string(),
            description: joi.string(),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            isDeleted: joi.boolean().allow(0, 1, '0', '1'),
            statusId: joi.string(),
            updatedBy: joi.number().integer(),
            rejectReason: joi.string().allow(null),
            isNew: joi.boolean().allow(0, 1, '0', '1')
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.network)
     * @result {joiObject} - joiValidation
     */
    validateGetNetwork: function(result) {
        const schema = joi.array().items(joi.object().keys({
            actorId: joi.number().integer(),
            organizationUnapprovedId: joi.number().allow(null),
            organizationName: joi.string(),
            description: joi.string().allow(null),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            isDeleted: joi.boolean().allow(0, 1, '0', '1'),
            statusId: joi.string(),
            updatedBy: joi.string().allow(null),
            rejectReason: joi.string().allow(null),
            isNew: joi.boolean().allow(0, 1, '0', '1')
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.network)
     * @result {joiObject} - joiValidation
     */
    validateFetchNetwork: function(result) {
        const schema = joi.array().items(joi.object().keys({
            actorId: joi.number().integer(),
            networkName: joi.string(),
            networkOwner: joi.string().allow(null),
            networkOwnerId: joi.number().integer().allow(null),
            businessUnitName: joi.string(),
            networkType: joi.string(),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            statusId: joi.string(),
            rejectReason: joi.string().allow(null)
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    validateFetchDeletedNetwork: function(result) {
        const schema = joi.array().items(joi.object().keys({
            actorId: joi.number().integer(),
            networkName: joi.string(),
            networkType: joi.string()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.networkType)
     * @result {joiObject} - joiValidation
     */
    validateFetchNetworkTypes: function(result) {
        const schema = joi.array().items(joi.object().keys({
            itemNameId: joi.number().integer(),
            name: joi.string()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    }
};
