var joi = require('joi');
module.exports = {
    /**
     * add loan application
     * @param {object}  result
     * @return {joiObject} joivalidation
     */
    validateAddLoanApplication: function(result) {
        var schema = joi.object().keys({
            applicationId: joi.string().required(),
            typeId: joi.number().required(),
            externalId: joi.number().allow(null),
            productId: joi.number().allow([null, '']),
			proposition: joi.object().allow(null).optional(),
            currencyId: joi.number(),
            purposeId: joi.number().required(),
            frequencyId: joi.number().required(),
            requestedTerm: joi.number().allow([null, '']),
            installmentMethodId: joi.number().allow([null, '']),
            installmentSchemeId: joi.string().allow(null),
            actorId: joi.string().required(),
            createdBy: joi.string(),
            createdOn: joi.string().allow(null),
            evaluatedBy: joi.string().allow(null),
            evaluatedOn: joi.string().allow(null),
            updatedBy: joi.string().allow(null),
            updatedOn: joi.string().allow(null),
            disbursedOn: joi.string().allow(null),
            firstPaymentOn: joi.string().allow(null),
            lastPaymentOn: joi.string().allow(null),
            applicationStateId: joi.number().required(),
            statusId: joi.string().allow([null, '']).required(),
            organizationId: joi.string(),
            renewedExternalId: joi.string(),
            udf: joi.any().allow(null),
            applicationCharges: joi.string().allow([null, '']),
            requestedAmount: joi.number().allow([null, '']),
            boxProductId: joi.string().allow(null),
            boxTypeId: joi.string().allow(null),
            interestRate: joi.string().allow(null),
            customerNumber: joi.string().allow(null),
            boxPurposeId: joi.number().allow([null, '']),
            comment: joi.string().allow([null, '']),
            charges: joi.array().allow([null, '']),
            disbursementFee: joi.number().allow([null, '']),
            insuranceFee: joi.number().allow([null, '']),
            rejectedBy: joi.number().allow(null),
            rejectedOn: joi.string().allow(null),
            approvedBy: joi.number().allow(null),
            approvedOn: joi.string().allow(null)
        }).required();
        return joi.validate(result, schema, { abortEarly: false });
    },
    /**
     * get loan application
     * @param {object}  result
     * @return {joiObject} joivalidation
     */
    validateGetLoanApplication: function(result) {
        var schema = joi.object().keys({
            applicationId: joi.string().required(),
            typeId: joi.number().required(),
            externalId: joi.number().allow(null),
            productId: joi.number().allow([null, '']),
			proposition: joi.object().allow(null).optional(),
            currencyId: joi.number(),
            purposeId: joi.number().required().allow([null, '']),
            frequencyId: joi.number().required(),
            requestedTerm: joi.number().allow(null),
            approvedTerm: joi.number().allow(null),
            installmentMethodId: joi.number().allow([null, '']),
            installmentSchemeId: joi.string().allow(null),
            actorId: joi.string().required(),
            createdBy: joi.string(),
            createdOn: joi.string().allow(null),
            evaluatedBy: joi.string().allow(null),
            evaluatedOn: joi.string().allow(null),
            updatedBy: joi.string().allow(null),
            updatedOn: joi.string().allow(null),
            disbursedOn: joi.string().allow(null),
            firstPaymentOn: joi.string().allow(null),
            lastPaymentOn: joi.string().allow(null),
            applicationStateId: joi.number().required(),
            statusId: joi.string().required(),
            organizationId: joi.string(),
            udf: joi.string().allow(null),
            activities: joi.alternatives().try(joi.string(), joi.array(), joi.object()).allow(null),
            household: joi.alternatives().try(joi.string(), joi.array(), joi.object()).allow(null),
            synthesis: joi.alternatives().try(joi.string(), joi.array(), joi.object()).allow(null),
            amountId: joi.string().required(),
            requestedAmount: joi.number().allow([null, '']),
            approvedAmount: joi.string().allow(null),
            guarantors: joi.array().allow(null),
            collaterals: joi.array().allow(null),
            microcred: joi.object().allow(null),
            documents: joi.array().allow(null),
            decisions: joi.array().allow(null),
            assignedOn: joi.string().allow(null),
            assignedTo: joi.string().allow(null),
            interestRate: joi.string().allow(null),
            boxProductId: joi.string().allow(null),
            customerNumber: joi.string().allow(null),
            customerFirstName: joi.string().allow(null),
            customerLastName: joi.string().allow(null),
            customerImage: joi.string().allow(null),
            customerPhone: joi.string().allow(null),
            productName: joi.string().allow(null),
            currencyName: joi.string().allow(null),
            applicationState: joi.string().allow(null),
            comment: joi.string().allow([null, '']),
            lapBox: joi.string().allow(null),
            rejectedReasonId: joi.string().allow(null),
            amountDue: joi.string().allow(null),
            dueDays: joi.string().allow(null),
            otherGuarantors: joi.string().allow(null),
            indicators: joi.object().allow(null),
            repaymentTypeId: joi.string().allow(null),
            gracePeriod: joi.string().allow(null),
            firstInstallmentDate: joi.string().allow(null),
            history: joi.array().allow(null),
            historicReport: joi.array().allow(['', null]),
            loans: joi.array().allow(['', null]),
            assigneeFirstName: joi.string().allow(['', null]),
            assigneeLastName: joi.string().allow(['', null]),
            currentAccount: joi.string().allow(['', null]),
            currentAccountBalance: joi.number().allow(['', null]),
            savingAccount: joi.string().allow(['', null]),
            savingAccountBalance: joi.number().allow(['', null]),
            dao: joi.string().allow(['', null]),
            charges: joi.array().allow(['', null]),
            applicationCharges: joi.string().allow([null, '']),
            loanContractId: joi.string().allow(['', null]),
            loanCycle: joi.string().allow(['', null]),
            disbursementFee: joi.number().allow([null, '']),
            insuranceFee: joi.number().allow([null, '']),
            rejectedBy: joi.number().allow(null),
            rejectedOn: joi.string().allow(null),
            approvedBy: joi.number().allow(null),
            approvedOn: joi.string().allow(null),
            itemOrganizationId: joi.number().allow(null),
            countryId: joi.number().allow(null),
            renewedExternalId: joi.any(),
            activeLoans: joi.array().allow(['', null])
        }).required();
        return joi.validate(result, schema, { abortEarly: false });
    },
    /**
     * @param {arr}  result - result to validate (result.currecncy)
     * @return {joiObject} - joiValidation
     */
    validateGetLoanCurrency: function(result) {
        var schema = joi.array().items(joi.object({
            currencyId: joi.number(),
            itemNameId: joi.string().required(),
            itemTypeId: joi.number(),
            itemName: joi.string(),
            itemCode: joi.string(),
            itemSyncId: joi.string().allow(null),
            organizationId: joi.string().allow(null),
            itemDescription: joi.any(),
            isEnabled: joi.boolean(),
            itemNameTranslation: joi.string(),
            itemNameTranslationEn: joi.string(),
            itemNameTranslationFr: joi.string(),
            itemNameTranslationCn: joi.string(),
            itemOrder: joi.string().allow(null),
            parentId: joi.string().allow(null),
            parentName: joi.string().allow(null),
            countryId: joi.number().allow(null)
        }));
        return schema.validate(result);
    },
    /**
     * @param {arr}  result - result to validate (result.applicationState)
     * @return {joiObject} - joiValidation
     */
    validateGetLoanApplicationState: function(result) {
        var schema = joi.array().items(joi.object({
            applicationStateId: joi.number(),
            itemNameId: joi.string().required(),
            itemCode: joi.string(),
            itemSyncId: joi.string().allow(null),
            organizationId: joi.string().allow(null),
            itemName: joi.string(),
            itemTypeId: joi.number(),
            itemNameTranslation: joi.string(),
            itemNameTranslationEn: joi.string(),
            itemNameTranslationFr: joi.string(),
            itemNameTranslationCn: joi.string(),
            itemDescription: joi.any(),
            isEnabled: joi.boolean(),
            itemOrder: joi.string().allow(null),
            parentId: joi.string().allow(null),
            parentName: joi.string().allow(null),
            countryId: joi.number().allow(null)
        }));
        return schema.validate(result);
    },
    /**
     * @param {arr}  result - result to validate (result.purpose)
     * @return {joiObject} - joiValidation
     */
    validateGetLoanPurpose: function(result) {
        var schema = joi.array().items(joi.object({
            purposeId: joi.number().required(),
            itemNameId: joi.string().required(),
            itemCode: joi.string().allow(null),
            itemSyncId: joi.string().allow(null),
            organizationId: joi.string().allow(null),
            itemName: joi.string(),
            itemTypeId: joi.number(),
            itemNameTranslation: joi.string(),
            itemNameTranslationEn: joi.string(),
            itemNameTranslationFr: joi.string(),
            itemNameTranslationCn: joi.string(),
            itemDescription: joi.any(),
            parentId: joi.string().allow(null),
            parentName: joi.string().allow(null),
            countryId: joi.number().allow(null)
        }));
        return schema.validate(result);
    },
    /**
     * @param {arr}  result - result to validate (result.product)
     * @return {joiObject} - joiValidation
     */
    validateGetLoanProduct: function(result) {
        var schema = joi.array().items(joi.object({
            productId: joi.number(),
            itemNameId: joi.string().required(),
            itemCode: joi.string().allow(null),
            itemSyncId: joi.string().allow(null),
            organizationId: joi.string().allow(null),
            itemName: joi.string(),
            itemTypeId: joi.number(),
            isEnabled: joi.boolean(),
            itemNameTranslation: joi.string(),
            itemNameTranslationEn: joi.string(),
            itemNameTranslationFr: joi.string(),
            itemNameTranslationCn: joi.string(),
            itemDescription: joi.any(),
            itemOrder: joi.string().allow(null),
            parentId: joi.string().allow(null),
            parentName: joi.string().allow(null),
            countryId: joi.number().allow(null)
        }));
        return schema.validate(result);
    },
    /**
     * @param {arr}  result - result to validate (result.frequency)
     * @return {joiObject} - joiValidation
     */
    validateGetLoanFrequency: function(result) {
        var schema = joi.array().items(joi.object({
            frequencyId: joi.number().required(),
            itemNameId: joi.string().required(),
            itemCode: joi.string().allow(null),
            itemSyncId: joi.string().allow(null),
            organizationId: joi.string().allow(null),
            itemName: joi.string(),
            itemTypeId: joi.number(),
            itemNameTranslation: joi.string(),
            itemNameTranslationEn: joi.string(),
            itemNameTranslationFr: joi.string(),
            itemNameTranslationCn: joi.string(),
            parentId: joi.string().allow(null),
            itemDescription: joi.any(),
            parentName: joi.string().allow(null),
            countryId: joi.number().allow(null)
        }));
        return schema.validate(result);
    },
    /**
     * @param {object} result - result to validate
     * @return {joiObject} - joiValidation
     */
    validateAddLoanDocument: function(result) {
        var schema = joi.object().keys({
            loanDocumentTypeId: joi.string().allow(null).required(),
            applicationId: joi.string().required(),
            contentType: joi.string(),
            extension: joi.string().allow(null),
            attachmentSizeId: joi.string().allow(null),
            filename: joi.string().allow(null),
            hash: joi.string().allow(null),
            thumbnail: joi.string().allow(null),
            documentId: joi.string().allow(null).required(),
			proposition: joi.object().allow(null).optional(),
            docDocumentId: joi.string().allow(null).required(),
            createdDate: joi.date().allow(null)
        }).required();
        return joi.validate(result, schema, { abortEarly: false });
    },
    /**
     * @param {arr}  result - result to validate
     * @return {joiObject} - joiValidation
     */
    validateGetLoanDocument: function(result) {
        var schema = joi.array().items(joi.object({
            applicationId: joi.string().required(),
            documentId: joi.string().required(),
            docDocumentId: joi.string().required(),
			proposition: joi.object().allow(null).optional(),
            loanDocumentTypeId: joi.string().allow(null),
            documentTypeId: joi.string(),
            hash: joi.string().allow(null),
            description: joi.string().allow(['', null]),
            createdDate: joi.date(),
            contentType: joi.string(),
            extension: joi.string().allow(null),
            filename: joi.string().allow(null),
            thumbnail: joi.string().allow(null)
        }));
        return joi.validate(result, schema, { abortEarly: false });
    },
    /**
     * @param {object}  result - result to validate
     * @return {joiObject} - joiValidation
     */
    validateEditLoanDocument: function(result) {
        var schema = joi.object().keys({
            applicationId: joi.string().required(),
            documentId: joi.string().required(),
            docDocumentId: joi.string().required(),
            hash: joi.string().allow(null),
            loanDocumentTypeId: joi.string().allow(null),
            documentTypeId: joi.string().allow(null),
            documentNumber: joi.string().allow(null),
            description: joi.string().allow(['', null]),
            createdDate: joi.date(),
            attachmentId: joi.number().required(),
            contentType: joi.string(),
            extension: joi.string().allow(null),
            filename: joi.string().allow(null),
            thumbnail: joi.string().allow(null),
            attachmentSizeId: joi.string()
        }).required();
        return joi.validate(result, schema, { abortEarly: false });
    },
    /**
     * @param {arr}  result - result to validate
     * @return {joiObject} - joiValidation
     */
    validateGetLoanCollateral: function(result) {
        var schema = joi.array().items(joi.object({
            collateralId: joi.string(),
            externalId: joi.string().allow(null),
			proposition: joi.object().allow(null).optional(),
            applicationId: joi.string().required(),
            organizationId: joi.string(),
            name: joi.string(),
			proposition: joi.object().allow(null).optional(),
            value: joi.number(),
            collateralType: joi.string(),
            udf: joi.string().allow('')
        }));
        return joi.validate(result, schema, { abortEarly: false });
    },
    /**
     * @param {object} result - result to validate
     * @retutn {joiObject} - joiValidation
     */
    validateAddLoanGuarantor: function(result) {
        var schema = joi.object().keys({
            guarantorId: joi.string(),
            actorId: joi.string().required(),
            predicate: joi.string(),
            applicationId: joi.string().required(),
            guarantorTypeId: joi.string().allow(null),
            attachmentFilename: joi.string().allow(null),
            otherGuarantors: joi.string().allow(null),
            totalLoanAmount: joi.string().allow(null),
            delayedDays: joi.string().allow(null)
        }).required();
        return joi.validate(result, schema, { abortEarly: false });
    },
    /**
     * @param {arr} result - result to validate (result.guarantors)
     * @return {joiObject} - joiValidation
     */
    validateGetLoanGuarantors: function(result) {
        var schema = joi.array().items(joi.object({
            guarantorId: joi.string().required(),
            predicate: joi.string(),
            guarantorTypeId: joi.string().allow(null),
            customerId: joi.string(),
            customerNumber: joi.string().allow(null),
			proposition: joi.object().allow(null).optional(),
            personId: joi.string(),
            phoneNumber: joi.string().allow(null),
            nationalId: joi.string().allow(null),
            firstName: joi.string().allow(['', null]),
            lastName: joi.string().allow(['', null]),
            dateOfBirth: joi.string().allow(null),
            placeOfBirth: joi.string().allow(null),
            nationality: joi.string().allow(null),
            gender: joi.string().allow(null),
            age: joi.string().allow(null),
            udf: joi.string().allow(null),
            attachmentFilename: joi.string().allow(null),
            otherGuarantors: joi.string().allow(null),
            totalLoanAmount: joi.string().allow(null),
            delayedDays: joi.string().allow(null)
        }));
        return joi.validate(result, schema, { abortEarly: false });
    },
    /**
     * get activity Dashboard
     * @param {object}  result
     * @return {joiObject} joivalidation
     */
    validateGetActivityDashboard: function(result) {
        var schema = joi.object().keys({
            isBM: joi.bool().required(),
            isHQ: joi.bool().required(),
            isPM: joi.bool().required(),
            organizations: joi.array().items(joi.object().keys({
                actorId: joi.string().required(),
                countryId: joi.number().allow(null).required(),
                isDefault: joi.bool().required(),
                organizationName: joi.string().required()
            })).required(),
            report: joi.array().items(joi.object().keys({
                activeCustomersCount: joi.number().optional(),
                activeLoansAmount: joi.allow(null),
                activeLoansCount: joi.number().required(),
                approvedAmount: joi.allow(null).required(),
                approvedCount: joi.allow(null).required(),
                assignedAmount: joi.number().required(),
                assignedCount: joi.number().required(),
                averageDays: joi.allow(null).required(),
                disbursedAmount: joi.allow(null).required(),
                disbursedCount: joi.number().required(),
                evaluatedAmount: joi.number().required(),
                evaluatedCount: joi.number().required(),
                outstandingAmount: joi.allow(null).required(),
                parOver0: joi.allow(null).required(),
                parOver0Percent: joi.allow(null).required(),
                parOver30: joi.allow(null).required(),
                parOver30Percent: joi.allow(null).required(),
                parOver90: joi.allow(null).required(),
                parOver90Percent: joi.allow(null).required(),
                rejectedAmount: joi.allow(null).optional(),
                rejectedCount: joi.number().required()
            }))
        });
        return joi.validate(result, schema, { abortEarly: false });
    }
};
