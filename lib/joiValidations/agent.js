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
            networkUnapprovedId: joi.number(),
            name: joi.string(),
            description: joi.string(),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            isDeleted: joi.boolean().allow(0, 1, '0', '1'),
            statusId: joi.string(),
            updatedBy: joi.string().allow(null),
            rejectReason: joi.string().allow(null),
            isNew: joi.boolean().allow(0, 1, '0', '1')
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    }
};
