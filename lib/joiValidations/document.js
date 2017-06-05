var joi = require('joi');
module.exports = {
     /**
     * @param {object}  result - result to validate (result.documentAttachment)
     * @return {joiObject} - joiValidation
     */
    validateGetDocument: function(result) {
        var schema = joi.array().items(joi.object().keys({
            documentUnapprovedId: joi.string().allow(null).required(),
            documentId: joi.string().allow(null).required(),
            documentTypeId: joi.string().required(),
            statusId: joi.string().required(),
            expirationDate: joi.string().allow(null).required(),
            oldValues: joi.object().allow(null),
            documentNumber: joi.string().allow(null),
            description: joi.string().allow(null),
            createdDate: joi.string().allow(null),
            updatedBy: joi.string().allow(null),
            updatedOn: joi.string().allow(null),
            countryId: joi.string().allow(null),
            documentOrder: joi.number().allow(null),
            isNew: joi.number().allow(null).required()
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    validateGetAttachment: function(result) {
        var schema = joi.array().items(joi.object().keys({
            attachmentUnapprovedId: joi.number().allow(null).required(),
            attachmentId: joi.number().allow(null).required(),
            documentUnapprovedId: joi.string().allow(null),
            contentType: joi.string().allow(null),
            extension: joi.string().allow(null),
            filename: joi.string().allow(null),
            hash: joi.string().allow(null),
            attachmentSizeId: joi.string().allow(null),
            page: joi.number().allow(null).required(),
            oldValues: joi.object().allow(null),
            updatedBy: joi.string().allow(null),
            updatedOn: joi.string().allow(null),
            isNew: joi.number().allow(null).required()
        }));
        return joi.validate(result, schema, {abortEarly: false});
    }
};
