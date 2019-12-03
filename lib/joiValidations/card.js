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
            itemNameId: joi.string().allow(null),
            description: joi.string().allow(null),
            code: joi.string().length(2).allow(null),
            branchId: joi.string().required(),
            startDate: joi.string().required(),
            endDate: joi.string().allow(null),
            embossedTypeId: joi.number().required(),
            createdBy: joi.string().required(),
            createdOn: joi.string().required(),
            updatedBy: joi.number().allow(null),
            updatedOn: joi.string().allow(null),
            isActive: joi.boolean().allow(0, 1, '0', '1').required(),
            periodicCardFeeId: joi.number().allow(null),
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
            itemNameId: joi.string().allow(null),
            description: joi.string().allow(null),
            code: joi.string().length(2).allow(null),
            branchId: joi.string().required(),
            startDate: joi.string().required(),
            endDate: joi.string().allow(null),
            embossedTypeId: joi.number().required(),
            createdBy: joi.string().required(),
            createdOn: joi.string().required(),
            updatedBy: joi.number().allow(null),
            updatedOn: joi.string().allow(null),
            isActive: joi.boolean().allow(0, 1, '0', '1').required(),
            periodicCardFeeId: joi.number().allow(null),
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
            startBin: joi.string().required(),
            endBin: joi.string().required(),
            ownershipTypeId: joi.number().required(),
            ownershipTypeName: joi.string().required(),
            description: joi.string().allow(null),
            createdBy: joi.string().allow(null),
            createdOn: joi.string().allow(null),
            updatedBy: joi.string().allow(null),
            updatedOn: joi.string().allow(null),
            isActive: joi.boolean(),
            itemNameId: joi.number(),
            typeId: joi.number().allow(null),
            typeName: joi.string().allow('', null)
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
            pattern: joi.string().allow(null).required()
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
            productId: joi.number(),
            typeId: joi.number(),
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
            typeId: joi.number(),
            productId: joi.number().allow(null),
            reasonId: joi.number().allow(null),
            sentOn: joi.string().allow(null),
            statusId: joi.number(),
            targetBranchId: joi.string().allow(null),
            updatedBy: joi.string().allow(null),
            updatedOn: joi.string().allow(null),
            issuingBranchId: joi.string(),
            isAutogenerated: joi.boolean().allow(0, 1, '1', '0')
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
            embossedTypeId: joi.number().required(),
            embossedTypeName: joi.string().required(),
            isActive: joi.boolean().required(),
            periodicCardFeeId: joi.number().allow(null),
            periodicCardFeeName: joi.string().allow(null),
            branchName: joi.string().required(),
            accountLinkLimit: joi.number().required(),
            pinRetriesLimit: joi.number().required(),
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
            typeId: joi.number().required().allow(null),
            typeName: joi.string().allow(null),
            productId: joi.number().allow(null),
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
            targetBranchName: joi.string().allow(null).required(),
            statusId: joi.number().required(),
            statusName: joi.string().required(),
            productId: joi.number().required(),
            productName: joi.string().required(),
            typeId: joi.number().required(),
            typeName: joi.string().required(),
            embossedTypeId: joi.number().required(),
            embossedTypeName: joi.string().required(),
            createdOn: joi.string().required(),
            reason: joi.string().allow(null).required(),
            comments: joi.string().allow(null).required(),
            issuingBranchId: joi.string().allow(null),
            issuingBranchName: joi.string().allow(null),
            cardNumber: joi.string().allow(null),
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
                cardNumber: joi.number().allow(null).required(),
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
                embossedTypeId: joi.number().required(),
                embossedTypeName: joi.string().required(),
                nameType: joi.string().required(),
                createdOn: joi.string().required(),
                updatedOn: joi.string().allow(null).required(),
                holderName: joi.string().required(),
                productId: joi.number().required(),
                productName: joi.string().required(),
                typeId: joi.number().required(),
                typeName: joi.string().required(),
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
            }).required(),
            usedAccounts: joi.array().items(
                joi.string()
            ).allow([]).optional()
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
            typeId: joi.number().allow(null).required(),
            typeName: joi.string().allow(null).required(),
            productId: joi.number().allow(null),
            targetBranchId: joi.string().required(),
            issuingBranchId: joi.string().allow(null).required()
        }));
        return schema.validate(result, {abortEarly: false});
    },
    validateListModuleAction: function(result) {
        var schema = joi.array().items(joi.object().keys({
            actionId: joi.number().required(),
            actionName: joi.string().required(),
            itemDescriptionTranslation: joi.string().required(),
            flagForReason: joi.boolean().allow(0, 1, '0', '1', null).required()
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
            startBin: joi.string().required(),
            endBin: joi.string().required(),
            ownershipTypeId: joi.string().required(),
            description: joi.string().required(),
            createdBy: joi.number().required(),
            createdOn: joi.string().required(),
            updatedBy: joi.number().required(),
            updatedOn: joi.string().required(),
            isActive: joi.boolean().required(),
            isDeleted: joi.boolean().required(),
            itemNameId: joi.string().required(),
            typeId: joi.string().allow(null).required(),
            timeZone: joi.string().allow(null)
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
            startBin: joi.string().required(),
            endBin: joi.string().required(),
            description: joi.string().required(),
            isActive: joi.boolean().required(),
            ownershipTypeId: joi.string().required(),
            typeId: joi.number().allow(null).required(),
            timeZone: joi.string().allow(null)
        }).required();
        return schema.validate(result, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.cardType)
     * @return {joiObject} - joiValidation
     */
    validateAddCardType: function(result) {
        var schema = joi.array().items(joi.object().keys({
            typeId: joi.number().required(),
            // ownershipTypeId: joi.string().required(),
            name: joi.string().required(),
            description: joi.string().required(),
            cardNumberConstructionId: joi.number().required().allow(null),
            cryptogramMethodIndex: joi.number().required().allow(null),
            modeFlag: joi.number().allow(null),
            modeFlagIndex: joi.number().allow(null),
            emvTagsProfileId: joi.number().required().allow(null),
            cvv1: joi.boolean().required(),
            cvv2: joi.boolean().required(),
            icvv: joi.boolean().required(),
            serviceCode1: joi.number().required().allow(null),
            serviceCode2: joi.number().required().allow(null),
            serviceCode3: joi.number().required().allow(null),
            termMonth: joi.number().required().allow(null),
            generateControlDigit: joi.boolean().required().allow(null),
            createdBy: joi.string().required(),
            createdOn: joi.string().required(),
            updatedBy: joi.string().required(),
            updatedOn: joi.string().required(),
            flow: joi.string().required().allow(null),
            issuerId: joi.string().required(),
            cardBrandId: joi.number().required().allow(null),
            paddingMethod: joi.string().valid('ANSI X.923', 'PKCS7', 'ISO/IEC 7816-4', 'zero', null),
            isEmv: joi.boolean().allow(0, 1, '0', '1').required(),
            pinLength: joi.number().min(4).max(12).allow(null).required(),
            pinVerificationMethod: joi.string().valid('offset', 'pvv', null).required()
        }));
        return schema.validate(result, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.type)
     * @return {joiObject} - joiValidation
     */
    validateGetCardType: function(result) {
        var schema = joi.object().keys({
            type: joi.array().items({
                typeId: joi.number().required(),
                name: joi.string().required(),
                description: joi.string().required(),
                cardBrandId: joi.number().required().allow(null),
                cardNumberConstructionId: joi.number().required().allow(null),
                termMonth: joi.number().required().allow(null),
                cvkExists: joi.boolean().allow(0, 1, '1', '0').required(),
                pvkExists: joi.boolean().allow(0, 1, '1', '0').required(),
                cryptogramMethodIndex: joi.number().required().allow(null),
                cryptogramMethodName: joi.string().required().allow(null),
                modeFlag: joi.number().allow(null),
                modeFlagIndex: joi.number().allow(null),
                schemeId: joi.number().required().allow(null),
                mkacExists: joi.boolean().allow(0, 1, '1', '0').required(),
                mksmiExists: joi.boolean().allow(0, 1, '1', '0').required(),
                ivacExists: joi.boolean().allow(0, 1, '1', '0').required(),
                emvTagsProfileId: joi.number().required().allow(null),
                applicationInterchangeProfile: joi.string().required().allow(null),
                decimalisationExists: joi.boolean().allow(0, 1, '1', '0').required(),
                cvv1: joi.boolean().required(),
                cvv2: joi.boolean().required(),
                icvv: joi.boolean().required(),
                serviceCode1: joi.number().required().allow(null),
                serviceCode2: joi.number().required().allow(null),
                serviceCode3: joi.number().required().allow(null),
                generateControlDigit: joi.boolean().required().allow(null),
                flow: joi.string().required(),
                issuerId: joi.string().required(),
                isActive: joi.boolean().required(),
                paddingMethod: joi.string().valid('ANSI X.923', 'PKCS7', 'ISO/IEC 7816-4', 'zero', null),
                isEmv: joi.boolean().allow(0, 1, '0', '1', null),
                pinLength: joi.number().min(4).max(12).allow(null).required(),
                pinVerificationMethod: joi.string().valid('offset', 'pvv', null).required(),
                pvki: joi.number().min(0).max(9).allow(null).required()
            }).required(),
            typeBin: joi.array().items({
                binId: joi.number().required(),
                startBin: joi.string().required(),
                endBin: joi.string().required(),
                binDescription: joi.string().required(),
                ownershipTypeName: joi.string().required(),
                ownershipTypeId: joi.string().required(),
                isActive: joi.boolean().required()
            }).required()
        });
        return schema.validate(result, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.type)
     * @return {joiObject} - joiValidation
     */
    validateListCardType: function(result) {
        var schema = joi.array().items(joi.object().keys({
            typeId: joi.number().required(),
            name: joi.string().required()
        }));
        return schema.validate(result, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.type)
     * @return {joiObject} - joiValidation
     */
    validateFetchCardType: function(result) {
        var schema = joi.array().items(joi.object().keys({
            typeId: joi.number().required(),
            name: joi.string().required(),
            description: joi.string().allow(null).required(),
            issuerId: joi.string().required(),
            isActive: joi.boolean().required(),
            generateControlDigit: joi.boolean().allow(null).required(),
            cardBrandName: joi.string().allow(null).required(),
            flow: joi.string().required(),
            termMonth: joi.number().allow(null).required(),
            ownershipTypeName: joi.string().required(),
            rowNum: joi.number().required(),
            recordsTotal: joi.number().required()
        }));
        return schema.validate(result, {abortEarly: false});
    }
};
