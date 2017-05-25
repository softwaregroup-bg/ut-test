var joi = require('joi');
module.exports = {
    /**
     * @param {object}  result - result to validate (product)
     * @return {joiObject} - joiValidation
     */
    validateAddProduct: function(result) {
        var schema = joi.object().keys({
            product: joi.array().items(joi.object().keys({
                productUnapprovedId: joi.number().required(),
                productId: joi.number().allow(null),
                name: joi.string().required(),
                itemNameId: joi.number().allow(null),
                customerTypeId: joi.number().integer().allow(null),
                businessUnitId: joi.string().required(),
                currencyId: joi.number().integer().required(),
                startDate: joi.date().required(),
                endDate: joi.date().allow(null),
                minCustomerAge: joi.number().allow(null),
                maxCustomerAge: joi.number().allow(null),
                minAccountBalance: joi.number().allow(null),
                maxAccountBalance: joi.number().allow(null),
                minAccountOpeningBalance: joi.number().allow(null),
                isEnabled: joi.boolean().allow(0, 1, '0', '1'),
                isDeleted: joi.boolean().allow(0, 1, '0', '1'),
                updatedBy: joi.string().allow(null),
                updatedOn: joi.date().allow(null),
                statusId: joi.string().required(),
                rejectReason: joi.string().allow(null),
                isNew: joi.boolean().allow(0, 1, '0', '1'),
                productGroupId: joi.number(),
                productTypeId: joi.string().required(),
                productCode: joi.string().allow(null),
                accountDormantDays: joi.number().integer().allow(null),
                accountPendingDays: joi.number().integer().allow(null),
                periodicFeeId: joi.string(),
                currentVersion: joi.number()
            })),
            kyc: joi.array().items(joi.object().keys({
                kycId: joi.number().integer().required()
            })).required(),
            customerCategory: joi.array().items(joi.object().keys({
                customerCategoryId: joi.number().integer(),
                name: joi.string()
            })).required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
     /**
     * @param {object}  result - result to validate (result.product)
     * @return {joiObject} - joiValidation
     */
    validateFetchProduct: function(result) {
        var schema = joi.array().items(joi.object().keys({
            productId: joi.string().allow(null).required(),
            productCode: joi.string().required(),
            productName: joi.string().required(),
            customerType: joi.string().allow(null),
            businessUnitName: joi.string().required(),
            currency: joi.string().required(),
            startDate: joi.date().required(),
            endDate: joi.date().allow(null),
            kyc: joi.string().required(),
            customerCategory: joi.string().allow(null).required(),
            productGroup: joi.string().required(),
            productType: joi.string().required(),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            statusId: joi.string().required(),
            rejectReason: joi.string().allow(null)
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate (result.product)
     * @return {joiObject} - joiValidation
     */
    validateGetProduct: function(result) {
        var schema = joi.array().items(joi.object().keys({
            productId: joi.number().allow(null).required(),
            productUnapprovedId: joi.number().allow(null),
            itemNameId: joi.string().allow(null),
            name: joi.string(),
            productCode: joi.string().required(),
            customerTypeId: joi.number().allow(null),
            businessUnitId: joi.string(),
            currencyId: joi.number().integer().required(),
            productGroupId: joi.number().integer().required(),
            productTypeId: joi.number().integer().required(),
            startDate: joi.date().required(),
            endDate: joi.date().allow(null),
            minCustomerAge: joi.number().allow(null),
            maxCustomerAge: joi.number().allow(null),
            minAccountBalance: joi.number().allow(null),
            maxAccountBalance: joi.number().allow(null),
            minAccountOpeningBalance: joi.number().allow(null),
            accountDormantDays: joi.number().allow(null),
            accountPendingDays: joi.number().allow(null),
            periodicFeeId: joi.string(),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            isDeleted: joi.boolean().allow(0, 1, '0', '1'),
            statusId: joi.string(),
            rejectReason: joi.string().allow(null),
            isNew: joi.boolean().allow(0, 1, '0', '1'),
            updatedBy: joi.string().allow(null),
            currentVersion: joi.number().allow(null)
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    }
};
