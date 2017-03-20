var joi = require('joi');
module.exports = {
    /**
     * @param {object}  result - result to validate (result)
     * @return {joiObject} - joiValidation
     */
    validateAddProduct: function(result) {
        var schema = joi.object().keys({
            product: joi.array().items(joi.object().keys({
                productUnapprovedId: joi.string().required(),
                productId: joi.string().allow(null),
                name: joi.string().required(),
                customerTypeId: joi.number().integer().required(),
                branchId: joi.string().required(),
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
                updatedBy: joi.string(),
                updatedOn: joi.date(),
                statusId: joi.string().required(),
                rejectReason: joi.string().allow(null),
                isNew: joi.boolean().allow(0, 1, '0', '1')
            })),
            kyc: joi.array().items(joi.object().keys({
                kycId: joi.number().integer().required()
            })).required(),
            customerCategory: joi.array().items(joi.object().keys({
                customerCategoryId: joi.number().integer()
            })).required(),
            productType: joi.array().items(joi.object().keys({
                productTypeId: joi.number().integer()
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
            productUnapprovedId: joi.string().allow(null).required(),
            productId: joi.string().allow(null).required(),
            productName: joi.string().required(),
            customerType: joi.string().required(),
            businessUnitName: joi.string().required(),
            currency: joi.string().required(),
            startDate: joi.date().required(),
            endDate: joi.date().allow(null),
            kyc: joi.string().required(),
            customerCategory: joi.string().required(),
            productType: joi.string().required(),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            statusId: joi.string().required(),
            rejectReason: joi.string().allow(null)
        })).required();
        return joi.validate(result, schema, {abortEarly: false});
    }
};