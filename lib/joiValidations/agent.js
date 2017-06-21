var joi = require('joi');
module.exports = {
    // network
    /**
     * @param {arr} - result to validate (result.network)
     * @result {joiObject} - joiValidation
     */
    validateAddNetwork: function(result) {
        var schema = joi.array().items(joi.object().keys({
            actorId: joi.string(),
            organizationUnapprovedId: joi.number(),
            organizationName: joi.string(),
            description: joi.string(),
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
    validateGetNetwork: function(result) {
        var schema = joi.array().items(joi.object().keys({
            actorId: joi.string(),
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
        var schema = joi.array().items(joi.object().keys({
            actorId: joi.string(),
            networkName: joi.string(),
            networkOwner: joi.string().allow(null),
            networkOwnerId: joi.string().allow(null),
            businessUnitName: joi.string(),
            networkType: joi.string(),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            statusId: joi.string(),
            rejectReason: joi.string().allow(null)
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} - result to validate (result.networkType)
     * @result {joiObject} - joiValidation
     */
    validateFetchNetworkTypes: function(result) {
        var schema = joi.array().items(joi.object().keys({
            itemNameId: joi.string(),
            name: joi.string()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    }
};
