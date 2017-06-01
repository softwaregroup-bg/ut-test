var joi = require('joi');
module.exports = {
    /**
     * @param {object}  result - result to validate (result)
     * @return {joiObject} - joiValidation
     */
    validateAddAccount: function(result) {
        var schema = joi.object().keys({
            account: joi.array().items(joi.object().keys({
                accountId: joi.number().required(),
                accountName: joi.string().allow(null),
                accountNumber: joi.string().allow(null),
                updatedBy: joi.string().allow(null),
                businessUnitId: joi.string(),
                statusId: joi.string(),
                stateId: joi.number(),
                stateName: joi.string(),
                createdBy: joi.string(),
                createdOn: joi.date(),
                linkedAccount: joi.string().allow(null),
                ownerId: joi.string().allow(null),
                analytic1TypeId: joi.number().allow(null),
                analytic2TypeId: joi.number().allow(null),
                analytic3TypeId: joi.number().allow(null),
                analytic4TypeId: joi.number().allow(null),
                isDeleted: joi.boolean(),
                balance: joi.number(),
                productGroupId: joi.string(),
                productGroup: joi.string(),
                productTypeId: joi.string(),
                productType: joi.string(),
                productNameId: joi.string(),
                productName: joi.string(),
                currencyName: joi.string(),
                organizationName: joi.string(),
                productCode: joi.string(),
                stateCode: joi.string(),
                currentVersion: joi.string().allow(null),
                rejectReason: joi.string().allow(null),
                isNew: joi.boolean().allow(0, 1, '0', '1')
            })),
            accountPerson: joi.array().items(joi.object().keys({
                accountId: joi.string().required(),
                accountName: joi.string(),
                updatedBy: joi.string().allow(null),
                businessUnitId: joi.string(),
                personId: joi.string(),
                productId: joi.number(),
                balance: joi.number(),
                isNew: joi.boolean().allow(0, 1, '0', '1')
            }))
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
     /**
     * @param {object}  result - result to validate (result.account)
     * @return {joiObject} - joiValidation
     */
    validateFetchAccount: function(result) {
        var schema = joi.array().items(joi.object().keys({
            accountId: joi.string().required(),
            accountNumber: joi.string(),
            accountName: joi.string(),
            ownerId: joi.string(),
            createdOn: joi.string(),
            rowNum: joi.number(),
            recordsTotal: joi.number(),
            productGroup: joi.string(),
            productType: joi.string(),
            productName: joi.string(),
            state: joi.string(),
            balance: joi.number(),
            statusId: joi.string(),
            currency: joi.string()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
     /**
     * @param {object}  result - result to validate (result.account)
     * @return {joiObject} - joiValidation
     */
    validateEditAccount: function(result) {
        var schema = joi.object().keys({
            account: joi.array().items(joi.object().keys({
                accountId: joi.number().required(),
                accountName: joi.string().allow(null),
                accountNumber: joi.string().allow(null),
                updatedBy: joi.string().allow(null),
                businessUnitId: joi.string(),
                statusId: joi.string(),
                stateId: joi.number(),
                stateName: joi.array(),
                createdBy: joi.string(),
                createdOn: joi.date(),
                linkedAccount: joi.string().allow(null),
                ownerId: joi.string().allow(null),
                analytic1TypeId: joi.number().allow(null),
                analytic2TypeId: joi.number().allow(null),
                analytic3TypeId: joi.number().allow(null),
                analytic4TypeId: joi.number().allow(null),
                isDeleted: joi.boolean(),
                balance: joi.number(),
                productGroupId: joi.string(),
                productGroup: joi.string(),
                productTypeId: joi.string(),
                productType: joi.string(),
                productNameId: joi.string(),
                productName: joi.string(),
                currencyName: joi.string(),
                organizationName: joi.string(),
                productCode: joi.string(),
                stateCode: joi.string(),
                currentVersion: joi.string().allow(null),
                rejectReason: joi.string().allow(null),
                isNew: joi.boolean().allow(0, 1, '0', '1')
            })),
            accountPerson: joi.array().items(joi.object().keys({
                // accountId: joi.string().required(),
                // accountName: joi.string(),
                // updatedBy: joi.string().allow(null),
                // businessUnitId: joi.string(),
                // personId: joi.string(),
                // productId: joi.number(),
                // balance: joi.number(),
                // isNew: joi.boolean().allow(0, 1, '0', '1')
            }))
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    validateFetchLedgerAccount: function(result) {
        var schema = joi.array().items(joi.object().keys({
            accountId: joi.string().required(),
            accountNumber: joi.string().required(),
            accountName: joi.string().required(),
            ownerId: joi.string().required(),
            createdOn: joi.string().required(),
            rowNum: joi.number().required(),
            recordsTotal: joi.number().required(),
            productGroup: joi.string().required(),
            productType: joi.string().required(),
            productName: joi.string().required(),
            state: joi.string().required(),
            balance: joi.number().required(),
            statusId: joi.string().required(),
            currency: joi.string().required()
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    }
};
