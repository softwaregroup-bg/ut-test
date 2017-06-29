var joi = require('joi');
module.exports = {
    /**
     * @param {array} result - result to validate (result.actions)
     * @return {joiObject} - joiValidation
     */
    validateFetchActions: function(result) {
        var schema = joi.array().items(joi.object().keys({
            categoryName: joi.string(),
            actionId: joi.string(),
            description: joi.string().allow(['', null]),
            severityLevel: joi.string(),
            isAuditable: joi.boolean(),
            rowNum: joi.number(),
            recordsTotal: joi.number()
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate (result.action)
     * @return {joiObject} - joiValidation
     */
    validateEditAction: function(result) {
        var schema = joi.array().items(joi.object().keys({
            categoryName: joi.string(),
            actionId: joi.string(),
            description: joi.string().allow(['', null]),
            severityLevel: joi.string(),
            isAuditable: joi.boolean()
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate (result.auditLogs)
     * @return {joiObject} - joiValidation
     */
    validateFetchAuditLog: function(result) {
        var schema = joi.array().items(joi.object().keys({
            auditLogId: joi.string(),
            auditAction: joi.string(),
            userName: joi.string(),
            sourceIpAddress: joi.string(),
            objectId: joi.string().allow(null),
            auditDate: joi.date(),
            eventOutcome: joi.string(),
            severityLevel: joi.string().allow(null),
            rowNum: joi.number()
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate (result.auditLog)
     * @return {joiObject} - joiValidation
     */
    validateGetAuditLog: function(result) {
        var schema = joi.array().items(joi.object().keys({
            auditLogId: joi.string(),
            auditAction: joi.string(),
            eventClass: joi.string(),
            actorId: joi.string(),
            userName: joi.string(),
            sourceIpAddress: joi.string(),
            destinationIpAddress: joi.string().allow(null),
            objectId: joi.string().allow(null),
            auditDate: joi.date(),
            eventOutcome: joi.string(),
            severityLevel: joi.string(),
            latitude: joi.number(),
            longitude: joi.number(),
            machineName: joi.string().allow(null),
            component: joi.string(),
            componentVersion: joi.string().allow(null),
            utVersion: joi.string().allow(null)
        }));
        return joi.validate(result, schema, {abortEarly: false});
    }
};
