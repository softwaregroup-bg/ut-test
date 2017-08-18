var joi = require('joi');
module.exports = {
    // validations for add
    /**
     * @param {object}  result - result to validate (result.cardProduct[0])
     * @return {joiObject} - joiValidation
     */
    validateAddProduct: function(result, cardName) {
        var schema = joi.object().keys({
            productId: joi.number().required(),
            name: joi.string().required().valid(cardName),
            description: joi.string().allow(null),
            startDate: joi.string().required(),
            endDate: joi.string().allow(null),
            cardBrandId: joi.number().required(),
            embossedTypeId: joi.number().required(),
            ownershipTypeId: joi.number().required(),
            binId: joi.number().required(),
            cardNumberConstructionId: joi.number().allow(null),
            termMonth: joi.number().allow(null),
            createdBy: joi.string().required(),
            createdOn: joi.string().required(),
            updatedBy: joi.string().allow(null),
            updatedOn: joi.string().allow(null),
            isActive: joi.boolean().allow(0, 1, '0', '1').required(),
            periodicCardFeeId: joi.number().allow(null),
            itemNameId: joi.string().allow(null),
            branchId: joi.string().required(),
            cipher: joi.string().required(),
            pvk: joi.string().regex(/[a-f0-9]{64}/i).required(),
            decimalisation: joi.string().regex(/[a-f0-9]{32}/).required(),
            flow: joi.string().allow(null),
            issuerId: joi.string().required(),
            cvk: joi.string().regex(/[a-f0-9]{64}/i).required(),
            cvv1: joi.boolean().allow(0, 1, '0', '1'),
            cvv2: joi.boolean().allow(0, 1, '0', '1'),
            icvv: joi.boolean().allow(0, 1, '0', '1'),
            cavv: joi.boolean().allow(0, 1, '0', '1'),
            serviceCode1: joi.number().valid(1, 2, 5, 6, 7, 9).required(),
            serviceCode2: joi.number().valid(0, 2, 4).required(),
            serviceCode3: joi.number().valid(0, 1, 2, 3, 4, 5, 6, 7).required(),
            accountLinkLimit: joi.number().required(),
            pinRetriesLimit: joi.number().integer().required(),
            pinRetriesDailyLimit: joi.number().integer().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.cardProduct[0])
     * @return {joiObject} - joiValidation
     */
    validateEditProduct: function(result) {
        var schema = joi.object().keys({
            productId: joi.number().required(),
            name: joi.string().required(),
            description: joi.string().allow(null),
            startDate: joi.string().required(),
            endDate: joi.string().allow(null),
            cardBrandId: joi.number().required(),
            embossedTypeId: joi.number().required(),
            ownershipTypeId: joi.number().required(),
            binId: joi.number().required(),
            cardNumberConstructionId: joi.number().allow(null),
            termMonth: joi.number().allow(null),
            createdBy: joi.string().required(),
            createdOn: joi.string().required(),
            updatedBy: joi.string().allow(null),
            updatedOn: joi.string().allow(null),
            isActive: joi.boolean().allow(0, 1, '0', '1').required(),
            itemNameId: joi.string().allow(null),
            periodicCardFeeId: joi.number().allow(null),
            branchId: joi.string().required(),
            cipher: joi.string().allow(null),
            pvk: joi.string().allow(null),
            decimalisation: joi.string().allow(null),
            flow: joi.string().allow(null),
            issuerId: joi.string().required(),
            cvk: joi.string().allow(null),
            cvv1: joi.boolean().allow(null).optional(),
            cvv2: joi.boolean().allow(null).optional(),
            icvv: joi.boolean().allow(null).optional(),
            cavv: joi.boolean().allow(null).optional(),
            serviceCode1: joi.number().integer().allow(null).optional(),
            serviceCode2: joi.number().integer().allow(null).optional(),
            serviceCode3: joi.number().integer().allow(null).optional(),
            accountLinkLimit: joi.number().integer(),
            pinRetriesLimit: joi.number().required(),
            pinRetriesDailyLimit: joi.number().integer().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.accountType[0])
     * @return {joiObject} - joiValidation
     */
    validateAccountType: function(result) {
        var schema = joi.object().keys({
            accountTypeId: joi.number().required(),
            accountTypeName: joi.string().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.customerType[0])
     * @return {joiObject} - joiValidation
     */
    validateCustomerType: function(result) {
        var schema = joi.object().keys({
            customerTypeId: joi.number().required(),
            customerTypeName: joi.string().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    // validation for get
        /**
     * @param {object}  result - result to validate (result.bin[0])
     * @return {joiObject} - joiValidation
     */
    validateFetchBin: function(result) {
        var schema = joi.array().items(joi.object().keys({
            binId: joi.number().required(),
            bin: joi.string().required(),
            description: joi.string().allow(null),
            createdBy: joi.string().allow(null),
            isActive: joi.boolean()
        }));
        return schema.validate(result, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.cardBrand[0])
     * @return {joiObject} - joiValidation
     */
    validateFetchCardBrand: function(result) {
        var schema = joi.object().keys({
            cardBrandId: joi.number().required(),
            name: joi.string().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.embossedType[0])
     * @return {joiObject} - joiValidation
     */
    validateFetchEmbossedType: function(result) {
        var schema = joi.object().keys({
            embossedTypeId: joi.number().required(),
            embossedTypeName: joi.string().required(),
            itemCode: joi.string().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    validateFetchPartners: function(result) {
        var schema = joi.object().keys({
            partnerId: joi.string().required(),
            partnerName: joi.string().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.ownershipType[0])
     * @return {joiObject} - joiValidation
     */
    validateFetchOwnershipType: function(result) {
        var schema = joi.object().keys({
            ownershipTypeId: joi.number().required(),
            ownershipTypeName: joi.string().required(),
            itemCode: joi.string().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.cardType[0])
     * @return {joiObject} - joiValidation
     */
    validateFetchCardNumberConstruction: function(result) {
        var schema = joi.object().keys({
            cardNumberConstructionId: joi.number().required(),
            description: joi.string().allow(null).required(),
            cardLength: joi.number().allow(null).required(),
            pattern: joi.string().allow(null).required(),
            generateControlDigit: joi.boolean().allow(null).required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result[0])
     * @return {joiObject} - joiValidation
     */
    validateListAccountTypes: function(result) {
        var schema = joi.object().keys({
            accountTypeId: joi.number().required(),
            accountTypeName: joi.string().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result[0])
     * @return {joiObject} - joiValidation
     */
    validateListCustomerTypes: function(result) {
        var schema = joi.object().keys({
            customerTypeId: joi.number().required(),
            name: joi.string().required(),
            description: joi.string().allow(null),
            code: joi.string()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result[0])
     * @return {joiObject} - joiValidation
     */
    validateListDocumentTypes: function(result) {
        var schema = joi.object().keys({
            key: joi.string().required(),
            name: joi.string().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.cardType[0])
     * @return {joiObject} - joiValidation
     */
    validateFetchPeriodicCardFee: function(result) {
        var schema = joi.object().keys({
            periodicCardFeeId: joi.number().required(),
            name: joi.string().allow(null)
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.cardApplication[0])
     * @return {joiObject} - joiValidation
     */
    validateAddApplication: function(result) {
        var schema = joi.object().keys({
            applicationId: joi.number().required(),
            batchId: joi.number().allow(null),
            branchId: joi.string(),
            comments: joi.string().allow(null),
            createdBy: joi.string().allow(null),
            createdOn: joi.string().allow(null),
            customerId: joi.string().allow(null),
            customerName: joi.string(),
            customerNumber: joi.string(),
            holderName: joi.string().allow(null),
            personId: joi.string().allow(null),
            personName: joi.string().allow(['', null]),
            personNumber: joi.string().allow(['', null]),
            previousStatusId: joi.number().allow(null),
            productId: joi.number().allow(null),
            reasonId: joi.number().allow(null),
            statusId: joi.number().allow(null),
            targetBranchId: joi.string().allow(null),
            embossedTypeId: joi.number().allow(null),
            updatedBy: joi.string().allow(null),
            updatedOn: joi.string().allow(null),
            issuingBranchId: joi.number().allow(null),
            makerComments: joi.string().allow(null)
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.cardApplicationAccount[0])
     * @return {joiObject} - joiValidation
     */
    validateCardApplicationAccount: function(result) {
        var schema = joi.object().keys({
            applicationAccountId: joi.number().required(),
            applicationId: joi.number(),
            accountId: [joi.string().allow(null), joi.number().allow(null)],
            isPrimary: joi.boolean(),
            createdBy: joi.string().allow(null),
            createdOn: joi.string().allow(null),
            accountNumber: joi.string(),
            accountTypeName: joi.string(),
            currency: joi.string(),
            accountOrder: joi.number(),
            updatedBy: joi.string().allow(null),
            updatedOn: joi.string().allow(null),
            accountLinkId: [joi.string().allow(null), joi.number().allow(null)]
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result[0][0])
     * @return {joiObject} - joiValidation
     */
    validateUpdateApplication: function(result) {
        var schema = joi.object().keys({
            actionToPerform: joi.string().required(),
            applicationId: joi.number().required(),
            comments: joi.string().allow(null),
            reasonId: joi.number().integer().allow(null),
            toStatusId: joi.number().integer()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.batch[0])
     * @return {joiObject} - joiValidation
     */
    validateAddNoNameBatch: function(result) {
        var schema = joi.object().keys({
            batchId: joi.number().required(),
            batchName: joi.string().required().allow('', null),
            batchTypeId: joi.number(),
            embossedTypeId: joi.number().required(),
            branchId: joi.string().required(),
            comments: joi.string().allow(null),
            createdBy: joi.string().allow(null),
            createdOn: joi.string().allow(null),
            downloads: joi.string().allow(null),
            generatedPinMails: joi.string().allow(null),
            numberOfCards: joi.number(),
            previousStatusId: joi.number().allow(null),
            productId: joi.number(),
            reasonId: joi.number().allow(null),
            sentOn: joi.string().allow(null),
            statusId: joi.number(),
            targetBranchId: joi.string().allow(null),
            updatedBy: joi.string().allow(null),
            updatedOn: joi.string().allow(null),
            issuingBranchId: joi.string(),
            isAutogenerated: joi.boolean().allow(0, 1, '1', '0'),
            areAllCardsGenerated: joi.boolean().allow(null).optional()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} result - result to validate (result.product)
     * @return {joiObject} - joiValidation
     */
    validateFetchProduct: function(result) {
        var schema = joi.array().items(joi.object().keys({
            productId: joi.number().required(),
            name: joi.string().required(),
            description: joi.string().allow(null).required(),
            startDate: joi.string().required(),
            endDate: joi.string().allow(null).required(),
            cardBrandId: joi.number().required(),
            embossedTypeId: joi.number().required(),
            embossedTypeName: joi.string().required(),
            cardBrandName: joi.string().required(),
            binId: joi.number().required(),
            bin: joi.string().required(),
            cardNumberConstructionId: joi.number().required(),
            cardNumberConstruction: joi.string().required(),
            termMonth: joi.number().allow(null).required(),
            isActive: joi.boolean().required(),
            periodicCardFeeId: joi.number().required(),
            periodicCardFeeName: joi.string().required(),
            branchName: joi.string().required(),
            rowNum: joi.number().required(),
            recordsTotal: joi.number().required()
        }));
        return schema.validate(result, {abortEarly: false});
    },
    /**
     * @param {arr} result - result to validate (result)
     * @return {joiObject} - joiValidation
     */
    validateFetchConfig: function(result) {
        var schema = joi.object().keys({
            Application: joi.array().items({
                fromStatusId: joi.number(),
                fromStatusLabel: joi.string(),
                fromStatusName: joi.string(),
                actionId: joi.number(),
                actionLabel: joi.string(),
                actionName: joi.string(),
                actionDescription: joi.string(),
                toStatusId: joi.number(),
                toStatusLabel: joi.string(),
                toStatusName: joi.string(),
                embossedTypeId: joi.number().allow(null),
                actionOrder: joi.number(),
                flagToConfirm: joi.boolean(),
                hasReasons: joi.number()
            }).required(),
            Batch: joi.array().items({
                fromStatusId: joi.number(),
                fromStatusLabel: joi.string(),
                fromStatusName: joi.string(),
                actionId: joi.number(),
                actionLabel: joi.string(),
                actionName: joi.string(),
                actionDescription: joi.string(),
                toStatusId: joi.number(),
                toStatusLabel: joi.string(),
                toStatusName: joi.string(),
                embossedTypeId: joi.number().allow(null),
                actionOrder: joi.number(),
                flagToConfirm: joi.boolean(),
                hasReasons: joi.number()
            }).required(),
            Card: joi.array().items({
                fromStatusId: joi.number(),
                fromStatusLabel: joi.string(),
                fromStatusName: joi.string(),
                actionId: joi.number(),
                actionLabel: joi.string(),
                actionName: joi.string(),
                actionDescription: joi.string(),
                toStatusId: joi.number(),
                toStatusLabel: joi.string(),
                toStatusName: joi.string(),
                embossedTypeId: joi.number().allow(null),
                actionOrder: joi.number(),
                flagToConfirm: joi.boolean(),
                hasReasons: joi.number()
            }).required(),
            CardInUse: joi.array().items({
                fromStatusId: joi.number(),
                fromStatusLabel: joi.string(),
                fromStatusName: joi.string(),
                actionId: joi.number(),
                actionLabel: joi.string(),
                actionName: joi.string(),
                actionDescription: joi.string(),
                toStatusId: joi.number(),
                toStatusLabel: joi.string(),
                toStatusName: joi.string(),
                embossedTypeId: joi.number().allow(null),
                actionOrder: joi.number(),
                flagToConfirm: joi.boolean(),
                hasReasons: joi.number()
            }).required(),
            ApplicationReason: joi.array().items({
                reasonId: joi.number(),
                name: joi.string(),
                actionId: joi.number(),
                actionLabel: joi.string(),
                actionDescription: joi.string()
            }).required(),
            BatchReason: joi.array().items({
                reasonId: joi.number(),
                name: joi.string(),
                actionId: joi.number(),
                actionLabel: joi.string(),
                actionDescription: joi.string()
            }).required(),
            CardReason: joi.array().items({
                reasonId: joi.number(),
                name: joi.string(),
                actionId: joi.number(),
                actionLabel: joi.string(),
                actionDescription: joi.string()
            }).required(),
            CardInUseReason: joi.array().items({
                reasonId: joi.number(),
                name: joi.string(),
                actionId: joi.number(),
                actionLabel: joi.string(),
                actionDescription: joi.string()
            }).required()
        });
        return schema.validate(result, {abortEarly: false});
    },
    /**
     * @param {arr} result - result to validate (result.batch)
     * @return {joiObject} - joiValidation
     */
    validateFetchBatch: function(result) {
        var schema = joi.array().items(joi.object().keys({
            id: joi.number().required(),
            batchName: joi.string().required().allow('', null),
            numberOfCards: joi.number().required().allow(null),
            productId: joi.number().required().allow(null),
            productName: joi.string().allow(null),
            branchId: joi.number().required(),
            currentBranchName: joi.string(),
            targetBranchId: joi.number().required(),
            targetBranchName: joi.string(),
            issuingBranchId: joi.string().required().allow(null),
            issuingBranchName: joi.string().allow(null),
            generatedPinMails: joi.number().allow(null).required(),
            batchDateCreated: joi.string().required(),
            batchDateSent: joi.string().allow(null).required(),
            downloads: joi.number().allow(null).required(),
            embossedTypeId: joi.number().required(),
            embossedTypeName: joi.string().required(),
            statusId: joi.number().required(),
            batchStatus: joi.string().required(),
            areAllCardsGenerated: joi.boolean().required(),
            updatedOn: joi.string().allow(null)
        }));
        return schema.validate(result, {abortEarly: false});
    },
    /**
     * @param {arr} result - result to validate (result.applications)
     * @return {joiObject} - joiValidation
     */
    validateFetchApplication: function(result) {
        var schema = joi.array().items(joi.object().keys({
            applicationId: joi.number().required(),
            customerId: joi.string().allow(null),
            customerNumber: joi.string().required(),
            customerName: joi.string().required(),
            personName: joi.string().allow([null, '']).required(),
            targetBranchId: joi.string().allow(null).required(),
            targetBranchName: joi.string().required(),
            statusId: joi.number().required(),
            statusName: joi.string().required(),
            productId: joi.number().required(),
            productName: joi.string().required(),
            embossedTypeId: joi.number().required(),
            embossedTypeName: joi.string().required(),
            createdOn: joi.string().required(),
            reason: joi.string().allow(null).required(),
            comments: joi.string().allow(null).required(),
            issuingBranchId: joi.string().allow(null),
            issuingBranchName: joi.string().allow(null),
            cardnumber: joi.string().allow(null),
            currentBranchName: joi.string(),
            batchName: joi.string().allow(null),
            updatedOn: joi.string().allow(null)
        }));
        return schema.validate(result, {abortEarly: false});
    },
    /**
     * @param {arr} result - result to validate (result.application)
     * @return {joiObject} - joiValidation
     */
    validateGetApplication: function(result) {
        var schema = joi.object().keys({
            application: joi.array().items({
                cardnumber: joi.number().allow(null).required(),
                applicationId: joi.number().required(),
                customerId: joi.number().allow(null).required(),
                customerNumber: joi.string().required(),
                customerType: joi.string().required().allow(null),
                customerName: joi.string().required(),
                personName: joi.string().required(),
                targetBranchId: joi.string().required(),
                targetBranchName: joi.string().required(),
                issuingBranchId: joi.string().required(),
                issuingBranchName: joi.string().required(),
                creationBranchName: joi.string().required(),
                reasonId: joi.number().allow(null).required(),
                comments: joi.string().allow(null).required(),
                reasonText: joi.string().allow(null).required(),
                statusId: joi.number().required(),
                statusLabel: joi.string().required(),
                statusName: joi.string().required(),
                productName: joi.string().required(),
                embossedTypeId: joi.number().required(),
                embossedTypeName: joi.string().required(),
                nameType: joi.string().required(),
                createdOn: joi.string().required(),
                updatedOn: joi.string().allow(null).required(),
                holderName: joi.string().required(),
                productId: joi.number().required(),
                accountLinkLimit: joi.number().required(),
                batchName: joi.string().allow('').required(),
                batchId: joi.number().allow(null).required(),
                canBeRemovedFromBatch: joi.number().required(),
                personNumber: joi.string().required(),
                makerComments: joi.string().allow(null),
                canBeEdited: joi.boolean().allow([0, 1])
            }).required(),
            accounts: joi.array().items({
                accountNumber: joi.string().required(),
                accountTypeName: joi.string().required(),
                availableBalance: joi.number().allow(null),
                currency: joi.string().required(),
                customerNumber: joi.string(),
                applicationAccountId: joi.number(),
                accountId: joi.string().allow(null),
                isPrimary: joi.boolean(),
                isLinked: joi.number(),
                accountOrder: joi.number(),
                accountLinkId: joi.number().allow(null),
                accountLinkText: joi.string().allow(null),
                name: joi.string().allow(null),
                methodOfOperationId: joi.string().allow(['', null])
            }).required(),
            documents: joi.array().items({
                documentId: joi.string().required(),
                documentTypeId: joi.string().required(),
                attachmentId: joi.number().required(),
                contentType: joi.string().required(),
                extension: joi.string().required(),
                filename: joi.string().required(),
                hash: joi.string().required()
            }).required(),
            accountLink: joi.array().items({
                accountLinkId: joi.number(),
                name: joi.string().required(),
                code: joi.string().required()
            }).required()
        });
        return schema.validate(result, {abortEarly: false});
    },
    /**
     * @param {arr} result - result to validate (result.product)
     * @return {joiObject} - joiValidation
     */
    validateListCardProduct: function(result) {
        var schema = joi.array().items(joi.object().keys({
            productId: joi.number().required(),
            accountLinkLimit: joi.number().integer().allow(null).required(),
            name: joi.string().required()
        }));
        return schema.validate(result, {abortEarly: false});
    },
    /**
     * @param {arr} result - result to validate (result)
     * @return {joiObject} - joiValidation
     */
    validateListBatch: function(result) {
        var schema = joi.array().items(joi.object().keys({
            batchId: joi.number().required(),
            batchName: joi.string().required()
        }));
        return schema.validate(result, {abortEarly: false});
    },
    /**
     * @param {arr} result - result to validate (result.batch)
     * @return {joiObject} - joiValidation
     */
    validateGetBatch: function(result) {
        var schema = joi.array().items(joi.object().keys({
            batchId: joi.number().required(),
            statusId: joi.number().required(),
            statusName: joi.string().required(),
            embossedTypeName: joi.string().required(),
            embossedTypeId: joi.number().required(),
            batchName: joi.string().required(),
            nameType: joi.string().valid(['named', 'noNamed']).required(),
            targetBranchName: joi.string().required(),
            issuingBranchName: joi.string().allow(null).required(),
            numberOfCards: joi.number().required(),
            reason: joi.string().allow(null).required(),
            comments: joi.string().allow(null).required(),
            branchId: joi.string().required(),
            productId: joi.number().allow(null).required(),
            productName: joi.string().allow(null).required(),
            targetBranchId: joi.string().required(),
            issuingBranchId: joi.string().allow(null).required(),
            areAllCardsGenerated: joi.boolean().allow(null).optional()
        }));
        return schema.validate(result, {abortEarly: false});
    },
    validateListModuleAction: function(result) {
        var schema = joi.array().items(joi.object().keys({
            actionId: joi.number().required(),
            actionName: joi.string().required(),
            itemDescriptionTranslation: joi.string().required()
        }));
        return schema.validate(result, {abortEarly: false});
    },
    validateAddCardReason: function(result) {
        var schema = joi.array().items(joi.object({
            reasonId: joi.number().required(),
            code: joi.string().allow(null).required(),
            name: joi.string().allow(null).required(),
            itemNameId: joi.string().allow(null).required(),
            createdBy: joi.string().required(),
            createdOn: joi.string().allow(null).required(),
            isActive: joi.boolean().required(),
            updatedOn: joi.string().allow(null).required(),
            updatedBy: joi.string().allow(null).required(),
            module: joi.string().required(),
            isDeleted: joi.boolean().required()
        }));
        return schema.validate(result, {abortEarly: false});
    },
    validateGetCardReason: function(result) {
        var schema = joi.object().keys({
            reasonAction: joi.array().items({
                actionId: joi.number().required(),
                actionName: joi.string().required(),
                actionLabel: joi.string().required()
            }).required(),
            cardReason: joi.array().items({
                reasonId: joi.number().required(),
                code: joi.string().allow(null).required(),
                module: joi.string().required(),
                reasonName: joi.string().required(),
                isActive: joi.boolean().required()
            }).required()
        });
        return schema.validate(result, {abortEarly: false});
    },
    validateAccountSearch: function(result) {
        var schema = joi.array().items(joi.object({
            accountLinkId: joi.number().required(),
            name: joi.string().required(),
            code: joi.string().required()
        }));
        return schema.validate(result, {abortEarly: false});
    },
    validateFetchReason: function(result) {
        var schema = joi.array().items(joi.object({
            reasonId: joi.number().required(),
            module: joi.string().required(),
            reasonName: joi.string().required(),
            isActive: joi.boolean().required(),
            code: joi.string().allow(null).required(),
            actionName: joi.string().required(),
            updatedOn: joi.string().required()
        }));
        return schema.validate(result, {abortEarly: false});
    },
    /**
     * @param {arr} result - result to validate (result.cardBin)
     * @return {joiObject} - joiValidation
     */
    validateAddBin: function(result) {
        var schema = joi.object().keys({
            binId: joi.number().required(),
            bin: joi.string().required(),
            description: joi.string().required(),
            createdBy: joi.number().required(),
            createdOn: joi.string().required(),
            updatedBy: joi.number().required(),
            updatedOn: joi.string().required(),
            isActive: joi.boolean().required(),
            itemNameId: joi.string().required()
        }).required();
        return schema.validate(result, {abortEarly: false});
    },
    /**
     * @param {arr} result - result to validate (result.cardBin)
     * @return {joiObject} - joiValidation
     */
    validateGetBin: function(result) {
        var schema = joi.object().keys({
            binId: joi.number().required(),
            bin: joi.string().required(),
            description: joi.string().required(),
            isActive: joi.boolean().required()
        }).required();
        return schema.validate(result, {abortEarly: false});
    }
};
