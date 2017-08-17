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
            auditId: joi.string(),
            globalId: joi.string(),
            eventClass: joi.string(),
            actionId: joi.string(),
            channel: joi.string().allow(null),
            userId: joi.number().allow(null),
            businessUnit: joi.string().allow(null),
            businessUnitId: joi.number().allow(null),
            userName: joi.string().allow(null),
            auditDate: joi.string(),
            auditDateLocal: joi.string(),
            eventOutcome: joi.string(),
            sourceIp: joi.string(),
            destinationIp: joi.string(),
            localPort: joi.number().allow(null),
            deviceId: joi.string().allow(null),
            latitude: joi.number().allow(null),
            longitude: joi.number().allow(null),
            severityLevel: joi.string().allow(null),
            component: joi.string(),
            utVersion: joi.string().allow(null),
            os: joi.string(),
            machineName: joi.string(),
            errorMessage: joi.string().allow(null),
            utService: joi.string().allow(null),
            hostName: joi.string().allow(null),
            timeZone: joi.string().allow(null),
            rowNum: joi.number(),
            recordsTotal: joi.number()
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate (result.auditLog)
     * @return {joiObject} - joiValidation
     */
    validateGetAuditLog: function(result) {
        var schema = joi.array().items(joi.object().keys({
            auditId: joi.string(),
            actionId: joi.string(),
            eventClass: joi.string(),
            actorId: joi.string().allow(null),
            userId: joi.number().allow(null),
            userName: joi.string().allow(null),
            sourceIp: joi.string(),
            destinationIp: joi.string().allow(null),
            objectId: joi.string().allow(null),
            os: joi.string(),
            auditDate: joi.date(),
            eventOutcome: joi.string(),
            errorMessage: joi.string().allow(null),
            severityLevel: joi.string(),
            latitude: joi.number().allow(null),
            longitude: joi.number().allow(null),
            machineName: joi.string().allow(null),
            component: joi.string(),
            componentVersion: joi.string().allow(null),
            utVersion: joi.string().allow(null),
            channel: joi.string().allow(null),
            hostName: joi.string().allow(null),
            utService: joi.string().allow(null),
            businessUnitId: joi.number().allow(null),
            businessUnit: joi.string().allow(null),
            timeZone: joi.string().allow(null),
            globalId: joi.string(),
            localPort: joi.number(),
            deviceId: joi.string().allow(null)
        }));
        return joi.validate(result, schema, {abortEarly: false});
    }
};
