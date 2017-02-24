var joi = require('joi');
module.exports = {

    /**
     * @param {object}  result - result to validate (result.customer)
     * @param {string} customerTypeId - customerTypeId (client)
     * @return {joiObject} - joiValidation
     */
    validateAddCustomer: function(result, customerTypeId) {
        var schema = joi.object().keys({
            actorId: joi.string().required(),
            documentId: joi.number().allow(null),
            frontEndRecordId: joi.string().allow(null),
            customerNumber: joi.string().allow(null),
            customerTypeId: joi.string().valid(customerTypeId),
            kycId: joi.number().allow(null),
            stateId: joi.string(),
            statusId: joi.string(),
            createdBy: joi.string().allow(null),
            createdOn: joi.date().allow(null),
            updatedBy: joi.string().allow(null),
            updatedOn: joi.string().allow(null),
            oldValues: joi.object().allow(null),
            customerCategoryId: joi.string().allow(null),
            dao: joi.string().allow(null),
            description: joi.string().allow(null),
            cbSystemId: joi.number().allow(null),
            isEnabled: joi.number().allow([0, 1]),
            isDeleted: joi.number().allow([0, 1]),
            cbsId: joi.number().allow(null),
            countryId: joi.number().allow(null),
            industryId: joi.number().allow(null),
            sectorId: joi.number().allow(null),
            loanCycle: joi.string().allow(null),
            organizationId: joi.string().allow([null, '']),
            prospectClient: joi.string().allow([null, '']),
            adminFee: joi.string().allow([null, '']),
            udf: joi.string().allow([null, '']),
            kycValue: joi.string().allow([null, '']),
            stateValue: joi.string().allow([null, '']),
            cbsPort: joi.string().allow([null, '']),
            country: joi.string().allow([null, '']),
            phonePrefix: joi.string().allow([null, '']),
            departmentId: joi.string().allow([null, '']),
            itemOrganizationId: joi.any()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result['identity.check'])
     * @return {joiObject} - joiValidation
     */
    validateAddAccount: function(result) {
        var schema = joi.object().keys({
            accountTypeId: joi.string().allow(null).allow(''),
            accountNumber: joi.number().integer().allow(null).allow(''),
            accountName: joi.string().allow(null).allow(''),
            isEnabled: joi.boolean().allow(0, 1, '0', '1', null, ''),
            actorId: joi.string().allow(null).allow('').required(),
            accountId: joi.number().integer().allow(null).allow(''),
            frontEndRecordId: joi.number().integer().allow(null).allow(''),
            statusId: joi.string().allow(null).allow(''),
            oldValues: joi.string().allow(null).allow('')
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result['organization.info'])
     * @return {joiObject} - joiValidation
     */
    validateAddOrganization: function(result) {
        var schema = joi.object().keys({
            actorId: joi.string().required(),
            frontEndRecordId: joi.number().integer().allow(null).allow(''),
            organizationName: joi.string().required(),
            code: joi.string().allow(null).allow(''),
            executiveOfficer: joi.string().allow(null).allow(''),
            tradeName: joi.string().allow(null).allow(''),
            workingHourStart: joi.string().allow(null).allow(''),
            workingHourEnd: joi.string().allow(null).allow(''),
            weekendStart: joi.string().allow(null).allow(''),
            capital: joi.string().allow(null).allow(''),
            currency: joi.string().allow(null).allow(''),
            timeZone: joi.string().allow(null).allow(''),
            primaryLanguageId: joi.string().allow(null),
            oldValues: joi.string().allow(null).allow(''),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            isDeleted: joi.boolean().allow(0, 1, '0', '1'),
            cbsId: joi.number().allow(null),
            cbsName: joi.string().allow(null),
            countryId: joi.number().allow(null),
            statusId: joi.string(),
            updatedBy: joi.string().allow(null),
            rejectReason: joi.string().allow(null),
            isNew: joi.boolean().valid(1, '1', 0, '0')
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.organization[0])
     * @return {joiObject} - joiValidation
     */
    validateEditOrganization: function(result) {
        var schema = joi.object().keys({
            organizationUnapprovedId: joi.string().required(),
            actorId: joi.string().required(),
            frontEndRecordId: joi.number().integer().allow(null).allow(''),
            organizationName: joi.string().allow(''),
            code: joi.string().allow(null).allow(''),
            executiveOfficer: joi.string().allow(null).allow(''),
            tradeName: joi.string().allow(null).allow(''),
            workingHourStart: joi.string().allow(null).allow(''),
            workingHourEnd: joi.string().allow(null).allow(''),
            weekendStart: joi.string().allow(null).allow(''),
            capital: joi.string().allow(null).allow(''),
            currency: joi.string().allow(null).allow(''),
            timeZone: joi.string().allow(null).allow(''),
            primaryLanguageId: joi.string().allow(null),
            oldValues: joi.string().allow(null).allow(''),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            isDeleted: joi.boolean().allow(0, 1, '0', '1'),

            cbsId: joi.number().allow(null),
            countryId: joi.number().allow(null),
            updatedBy: joi.string(),
            updatedOn: joi.date(),
            statusId: joi.string(),

            rejectReason: joi.string().allow(null)
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    // get validations
    /**
     * @param {object}  result - result to validate (result.person)
     * @param {string} actorId - actorId of the person
     * @param {string} firstName - firstName of the person
     * @return {joiObject} - joiValidation
     */
    validateGetPerson: function(result, firstName) {
        var schema = joi.object().keys({
            actorId: joi.string().required(),
            bioId: joi.string().allow(null),
            frontEndRecordId: joi.string().allow(null),
            firstName: joi.string().valid(firstName),
            lastName: joi.string().allow(''),
            nationalId: joi.string().allow(null).allow(''),
            dateOfBirth: joi.string().allow(null).allow(''),
            placeOfBirth: joi.string().allow(null).allow(''),
            nationality: joi.string().allow(null).allow(''),
            gender: joi.string().allow(null).allow(''),
            oldValues: joi.object().allow(null),
            udf: joi.string().allow(['', null]),
            isEnabled: joi.allow([0, 1]),
            isDeleted: joi.allow([0, 1]),
            phoneModel: joi.string().allow(null),
            computerModel: joi.string().allow(null),
            maritalStatusId: joi.number().allow(null),
            age: joi.number().allow(null),
            maritalStatus: joi.string().allow(null),
            deviceId: joi.string().allow(null)
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.customer)
     * @param {string} actorId - the actorId of the customer
     * @param {string} customerTypeId - customerTypeId (client)
     * @return {joiObject} - joiValidation
     */
    validateGetCustomer: function(result, customerTypeId) {
        var schema = joi.object().keys({
            actorId: joi.string().required(),
            frontEndRecordId: joi.string().allow(null),
            customerNumber: joi.string().allow(null),
            customerTypeId: joi.string().valid(customerTypeId),
            kycId: joi.number().allow(null),
            stateId: joi.string(),
            statusId: joi.string(),
            createdBy: joi.string().allow(null),
            createdOn: joi.date().allow(null),
            updatedBy: joi.string().allow(null),
            updatedOn: joi.string().allow(null),
            oldValues: joi.object().allow(null),
            customerCategoryId: joi.number().allow(null),
            dao: joi.string().allow(null),
            description: joi.string().allow(null),
            kycValue: joi.string(),
            cbSystemId: joi.number().allow(null),
            cbsName: joi.string().allow(null),
            stateValue: joi.string().allow(''),
            cbsId: joi.number().allow(null),
            countryId: joi.number().allow(null),
            cbsPort: joi.string().allow(null),
            country: joi.string().allow(null),
            phonePrefix: joi.string().allow(null),
            departmentId: joi.number().allow(null),
            industryId: joi.number().allow(null),
            sectorId: joi.number().allow(null),
            loanCycle: joi.string().allow(null),
            organizationId: joi.string().allow([null, '']),
            prospectClient: joi.string().allow([null, '']),
            adminFee: joi.string().allow([null, '']),
            udf: joi.string().allow([null, '']),
            itemOrganizationId: joi.any()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result['organization.info'])
     * @param {string} orgActorId - organization actorId
     * @param {string} orgName - organization name
     * @return {joiObject} - joiValidation
     */
    vaidateGetOrganizationInfo: function(result) {
        var schema = joi.object().keys({
            actorId: joi.string().required(),
            frontEndRecordId: joi.number().integer().allow(null).allow(''),
            organizationName: joi.string(),
            code: joi.number().integer().allow(null).allow(''),
            executiveOfficer: joi.string().allow(null).allow(''),
            tradeName: joi.string().allow(null).allow(''),
            workingHourStart: joi.string().allow(null).allow(''),
            workingHourEnd: joi.string().allow(null).allow(''),
            weekendStart: joi.string().allow(null).allow(''),
            capital: joi.string().allow(null).allow(''),
            currency: joi.string().allow(null).allow(''),
            timeZone: joi.string().allow(null).allow(''),
            oldValues: joi.string().allow(null).allow(''),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            isDeleted: joi.boolean().allow(0, 1, '0', '1'),
            primaryLanguageId: joi.string().allow(null),
            cbsId: joi.string().allow(null),
            cbsName: joi.string().allow(null),
            countryId: joi.string().allow(null),
            isNew: joi.boolean().valid(1, 0, '1', '0'),
            updatedBy: joi.string().allow(null),
            updatedOn: joi.date().allow(null),
            statusId: joi.string(),
            rejectReason: joi.string().allow(null)
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object} result - result to validate (result.memberOF)
     * @param {string} object - actorId of the organization
     * @param {string} organizationName - name of the organization the person is member of
     * @return {joiObject} - joiValidation
     */
    validateGetMemberOF: function(result, orgActorId, orgName) {
        var schema = joi.object().keys({
            object: joi.string().valid(orgActorId),
            organizationName: joi.string().valid(orgName),
            isDefault: joi.boolean().allow(0, 1, '0', '1')
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object} result - result to validate (result['role.visibleFor'])
     * @param {actorId} actorId - organization actorId
     * @param {string} organizationName - organization for which the role is visibleFor
     * @return {joiObject} - joiValidation
     */
    validateGetVisibleFor: function(result, orgActorId, orgName) {
        var schema = joi.object().keys({
            actorId: joi.string().valid(orgActorId).required(),
            organizationName: joi.string().valid(orgName),
            policyId: joi.number().allow(null)
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.phone)
     * @param {string} phoneNumber - customer phoneNumber
     * @param {string} phoneType - phoneTypeId (personal, work, home)
     * @return {joiObject} - joiValidation
     */
    validateGetPhone: function(result, phoneNumber, phoneType) {
        var schema = joi.object().keys({
            actorId: joi.string().required(),
            phoneId: joi.number().allow(null),
            frontEndRecordId: joi.string().allow(null),
            phoneTypeId: joi.string().valid(phoneType),
            phoneNumber: joi.string().valid(phoneNumber).allow(null).allow(''),
            statusId: joi.string(),
            oldValues: joi.object().allow(null),
            udf: joi.string().allow(null),
            mnoId: joi.number().allow(null),
            mnoKey: joi.string().allow(null),
            //mnoName: joi.string().allow(null), TODO
            name: joi.string().allow(null),
            isPrimary: joi.boolean().allow(0, 1, '0', '1'),
            phoneUnapprovedId: joi.number().allow([null, ''])
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.address)
     * @param {string} addressValue - customer address
     * @param {string} addressType - addressTypeId (work, home)
     * @return {joiObject} - joiValidation
     */
    validateGetAddress: function(result, addressValue, addressType) {
        var schema = joi.object().keys({
            actorId: joi.string().required(),
            addressId: joi.number().allow(null),
            frontEndRecordId: joi.string().allow(null),
            addressTypeId: joi.string().valid(addressType),
            value: joi.string().valid(addressValue).allow(null).allow(''),
            statusId: joi.string(),
            oldValues: joi.object().allow(null),
            city: joi.string().allow(null).allow(''),
            lat: joi.string().allow(null).allow(''),
            lng: joi.string().allow(null).allow(''),
            addressUnapprovedId: joi.string().allow([null, ''])
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.email)
     * @param {string} email - customer email
     * @param {string} emailType - emailTypeId (personal, work)
     * @return {joiObject} - joiValidation
     */
    validateGetEmail: function(result, email, emailType) {
        var schema = joi.object().keys({
            actorId: joi.string().required(),
            emailId: joi.number().allow(null),
            frontEndRecordId: joi.string().allow(null),
            emailTypeId: joi.string().valid(emailType),
            value: joi.string().valid(email).allow(null).allow(''),
            statusId: joi.string(),
            oldValues: joi.object().allow(null),
            emailUnapprovedId: joi.string().allow([null, '']),
            isPrimary: joi.boolean().allow(0, 1, '0', '1')
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * validate counts
     * @param {arr} result - result array to validate (result.clientFiles)
     * @param {str} field to validate - state or stateId
     * @param {str} state - valid values
     * @result {joiObject} - joiValidation
     */
    validateGetCount: function(result, state) {
        var schema = joi.array().items(joi.object({
            stateId: joi.string().valid(state),
            count: joi.number()
        }));
        return schema.validate(result);
    },
    /**
    * @param {arr} result - result array to validate (result.customer)
    * @param {str} statusId
    * @param {str} stateId
    * @param {str} firstname
    * @param {str} lastname
    * @return {joiObject} - joiValidation
    */
    validateFetchCustomers: function(result, statusId, stateId, firstName, lastName) {
        var validateStateId = joi.string().allow(null).allow('');
        var validateStatusId = joi.string().allow(null).allow('');
        var validateFirstName = joi.string().allow(null).allow('').required();
        var validateLastName = joi.string().allow(null).allow('').required();
        var reg, reg1;
        if (statusId) {
            validateStatusId = joi.string().valid(statusId);
        };
        if (stateId) {
            validateStateId = joi.string().valid(stateId);
        };
        if (firstName) {
            reg = new RegExp(firstName, 'gmi');
            validateFirstName = joi.string().regex(reg).required();
        };
        if (lastName) {
            reg1 = new RegExp(lastName, 'gmi');
            validateLastName = joi.string().regex(reg1).required();
        }
        var schema = joi.array().items(joi.object({
            actorId: joi.string().required(),
            customerNumber: joi.string().allow(null).allow(''),
            firstName: validateFirstName,
            lastName: validateLastName,
            fullName: joi.string().allow(null).allow(''),
            stateId: validateStateId,
            createdOn: joi.date().allow(null).required(),
            updatedBy: joi.string().allow(null).allow(''),
            agencyId: joi.string().allow(null).allow(''),
            agencyName: joi.string().allow([null, '']),
            kycId: joi.number().allow(null).allow(''),
            rowNum: joi.number().allow(null).allow(''),
            cbsPort: joi.string().allow(null).allow(''),
            description: joi.string().allow(null).allow(''),
            statusId: validateStatusId,
            customerType: joi.string(),
            documentFileName: joi.any()
        }));
        return schema.validate(result);
    },
     /**
     * @param {arr}  result - result to validate (result.organization)
     * @return {joiObject} - joiValidation
     */
    validateFetchOrganization: function(result) {
        var schema = joi.array().items(joi.object({
            actorId: joi.string().required(),
            organizationName: joi.string().allow('').allow(null),
            parents: joi.string().allow('').allow(null),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            statusId: joi.string().required(),
            rejectReason: joi.string().allow(null)
        }));
        return schema.validate(result);
    },
     /**
     * @param {arr}  result - result to validate (result.organization)
     * @return {joiObject} - joiValidation
     */
    validateFetchOrganizationGraph: function(result) {
        var schema = joi.array().items(joi.object({
            id: joi.string(),
            title: joi.string().allow('').allow(null),
            parents: joi.string().allow('').allow(null)
        }));
        return schema.validate(result);
    },
    // validate search
    /**
     * @param {arr}  result - result to validate (result.customer)
     * @return {joiObject} - joiValidation
     */
    validateSearchCustomer: function(result) {
        var schema = joi.array().items(joi.object({
            actorId: joi.string().required(),
            customerNumber: joi.string().allow('').allow(null),
            firstName: joi.string().allow(''),
            lastName: joi.string().allow(''),
            address: joi.string().allow('').allow(null),
            nationalId: joi.string().allow('').allow(null),
            phoneNumber: joi.string().allow('').allow(null),
            filename: joi.string().allow(null),
            documentNumber: joi.string().allow(null).allow('')
        }));
        return schema.validate(result);
    },
    validateDeleteCustomer: function(result, customerTypeId) {
        var schema = joi.object().keys({
            actorId: joi.string().required(),
            frontEndRecordId: joi.string().allow(null),
            customerNumber: joi.string().allow(null),
            customerTypeId: joi.string().valid(customerTypeId),
            kycId: joi.number().allow(null),
            stateId: joi.string(),
            statusId: joi.string(),
            createdBy: joi.string().allow(null),
            createdOn: joi.date().allow(null),
            updatedBy: joi.string().allow(null),
            updatedOn: joi.string().allow(null),
            oldValues: joi.string().allow(null),
            customerCategoryId: joi.number().allow(null),
            dao: joi.string().allow(null),
            description: joi.string().allow(null),
            cbsId: joi.number().allow(null),
            countryId: joi.number().allow(null),
            industryId: joi.number().allow(null),
            sectorId: joi.number().allow(null),
            loanCycle: joi.string().allow(null),
            organizationId: joi.string().allow([null, '']),
            prospectClient: joi.string().allow([null, '']),
            adminFee: joi.string().allow([null, '']),
            udf: joi.string().allow([null, ''])
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    }
};
