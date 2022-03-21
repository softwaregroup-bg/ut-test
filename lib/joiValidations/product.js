const joi = require('joi');
module.exports = {
    /**
     * @param {object}  result - result to validate (product)
     * @return {joiObject} - joiValidation
     */
    validateAddProduct: function(result) {
        const schema = joi.object().keys({
            product: joi.array().items(joi.object().keys({
                productUnapprovedId: joi.number().required(),
                productId: joi.number().allow(null),
                name: joi.string().required(),
                itemNameId: joi.number().allow(null),
                customerTypeId: joi.number().integer().allow(null),
                businessUnitId: joi.number().required(),
                businessUnitName: joi.string(),
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
                updatedBy: joi.number().allow(null),
                updatedOn: joi.date().allow(null),
                statusId: joi.string().required(),
                rejectReason: joi.string().allow(null),
                isNew: joi.boolean().allow(0, 1, '0', '1'),
                productGroupId: joi.number(),
                productTypeId: joi.number().required(),
                productTypeName: joi.string().required(),
                productCode: joi.string().allow(null),
                accountDormantDays: joi.number().integer().allow(null),
                accountPendingDays: joi.number().integer().allow(null),
                periodicFeeId: joi.number(),
                currentVersion: joi.number(),
                checkAmount: joi.number().allow(null),
                checkMask: joi.number().allow(null),
                cbsCategoryId: joi.string().allow(null)
            })),
            kyc: joi.array().items(joi.object().keys({
                kycId: joi.number().integer().required()
            })).required(),
            customerCategory: joi.array().items(joi.object().keys({
                customerCategoryId: joi.number().integer(),
                name: joi.string()
            })).required(),
            possibleForEdit: joi.array().items(
                joi.object().keys({
                    flagForEdit: joi.number()
                })
            ).allow([]),
            subAccountType: joi.any(),
            subAccountTypeUnapproved: joi.any(),
            productActions: joi.array().items(joi.object().keys({
                productId: joi.number().integer(),
                itemNameId: joi.number().integer(),
                actionName: joi.string()
            }))
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.product)
     * @return {joiObject} - joiValidation
     */
    validateFetchProduct: function(result) {
        const schema = joi.array().items(joi.object().keys({
            productId: joi.number().allow(null).required(),
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
        const schema = joi.array().items(joi.object().keys({
            productId: joi.number().allow(null).required(),
            productUnapprovedId: joi.number().allow(null),
            itemNameId: joi.number().allow(null),
            name: joi.string(),
            productCode: joi.string().required(),
            customerTypeId: joi.number().allow(null),
            businessUnitId: joi.number(),
            businessUnitName: joi.string(),
            currencyId: joi.number().integer().required(),
            productGroupId: joi.number().integer().required(),
            productTypeId: joi.number().integer().required(),
            productTypeName: joi.string().required(),
            startDate: joi.date().required(),
            endDate: joi.date().allow(null),
            minCustomerAge: joi.number().allow(null),
            maxCustomerAge: joi.number().allow(null),
            minAccountBalance: joi.number().allow(null),
            maxAccountBalance: joi.number().allow(null),
            minAccountOpeningBalance: joi.number().allow(null),
            accountDormantDays: joi.number().allow(null),
            accountPendingDays: joi.number().allow(null),
            periodicFeeId: joi.number(),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            isDeleted: joi.boolean().allow(0, 1, '0', '1'),
            statusId: joi.string(),
            rejectReason: joi.string().allow(null),
            isNew: joi.boolean().allow(0, 1, '0', '1'),
            updatedBy: joi.number().allow(null),
            currentVersion: joi.number().allow(null),
            checkAmount: joi.number().allow(null),
            checkMask: joi.number().allow(null),
            cbsCategoryId: joi.string().allow(null)
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    }
};
