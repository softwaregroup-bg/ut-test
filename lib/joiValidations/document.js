var joi = require('joi');
module.exports = {
     /**
     * @param {object}  result - result to validate (result.documentAttachment)
     * @return {joiObject} - joiValidation
     */
    validateGetDocument: function(result) {
        var schema = joi.array().items(joi.object({
            actorId: joi.string().required(),
            documentId: joi.string().allow(null).required(),
            documentTypeId: joi.string().allow(null).required(),
            documentStatusId: joi.string().allow(null),
            expirationDate: joi.string().allow(null),
            documentNumber: joi.string().allow(null),
            documentOldValues: joi.object().allow(null),
            attachmentId: joi.number().allow(null).required(),
            attachmentContentType: joi.string().allow(null),
            attachmentExtension: joi.string().allow(null),
            attachmentFilename: joi.string().allow(null),
            attachmentSizeId: joi.string().allow(null),
            attachmentPage: joi.string().allow(null),
            attachmentOldValues: joi.object().allow(null)
        }));
        return joi.validate(result, schema, {abortEarly: false});
    }
};
