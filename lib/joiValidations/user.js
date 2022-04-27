const joi = require('joi');
module.exports = {
    // validations for add
    /**
     * @param {object}  result - result to validate (result.user[0])
     * @param {string} username - An optional param.
     * @return {joiObject} - joiValidation
     */
    validateAddUser: function(result) {
        const schema = joi.object({
            actorId: joi.number(),
            primaryLanguageId: joi.number(),
            dateFormat: joi.string().allow(null),
            numberFormat: joi.string().allow(null),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            isDeleted: joi.boolean().allow(0, 1, '0', '1'),
            isApproved: joi.boolean().allow(0, 1, '0', '1'),
            updatedBy: joi.string().allow(null),
            statusId: joi.string(),
            policyId: joi.number(),
            rejectReason: joi.string().allow(null),
            isNew: joi.boolean().allow(0, 1, '0', '1'),
            accessDeniedFrom: joi.date().allow(null)
        });
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.role)
     * @return {joiObject} - joiValidation
     */
    validateAddRole: function(result) {
        const schema = joi.object().keys({
            actorId: joi.number().allow(null).allow(''),
            name: joi.string().allow(null).allow(''),
            description: joi.string().allow(null).allow(''),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            isDeleted: joi.boolean().allow(0, 1, '0', '1'),
            fieldOfWorkId: joi.string().allow('', null),
            policyId: joi.number().allow(null),
            isSystem: joi.boolean().allow(0, 1, '0', '1'),
            isApproved: joi.boolean().allow(0, 1, '0', '1'),
            updatedBy: joi.string().allow(null),
            statusId: joi.string(),
            rejectReason: joi.string().allow(null),
            isNew: joi.boolean().allow(0, 1, '0', '1')
        }).required();
        return schema.validate(result, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.document)
     * @return {joiObject} - joiValidation
     */
    validateAddRoleDocument: function(result) {
        const schema = joi.array().items(joi.object({
            documentUnapprovedId: joi.string().required(),
            documentId: joi.string().allow(null).required(),
            documentTypeId: joi.string().required(),
            documentTypeName: joi.string().required(),
            statusId: joi.string().required(),
            expirationDate: joi.string().allow(null).required(),
            oldValues: joi.object().allow(null).required(),
            documentNumber: joi.string().allow(null).required(),
            description: joi.string().required(),
            createdDate: joi.string().required(),
            documentOrder: joi.number().required(),
            updatedBy: joi.string().allow(null).required(),
            updatedOn: joi.string().allow(null).required(),
            countryId: joi.string().allow(null).required(),
            isNew: joi.number().required()
        }));
        return schema.validate(result);
    },
    /**
     * @param {object}  result - result to validate (result.attachment)
     * @return {joiObject} - joiValidation
     */
    validateAddRoleAttachment: function(result) {
        const schema = joi.array().items(joi.object({
            attachmentUnapprovedId: joi.number().required(),
            attachmentId: joi.string().allow(null).required(),
            documentUnapprovedId: joi.string().required(),
            contentType: joi.string().required(),
            extension: joi.string().required(),
            filename: joi.string().required(),
            attachmentSizeId: joi.string().required(),
            page: joi.string().allow(null).required(),
            oldValues: joi.object().allow(null).required(),
            updatedBy: joi.string().allow(null).required(),
            updatedOn: joi.string().allow(null).required(),
            isNew: joi.number().required()
        }));
        return schema.validate(result);
    },
    /**
     * @param {object}  result - result to validate (result.role[0])
     * @return {joiObject} - joiValidation
     */
    validateEditRole: function(result) {
        const schema = joi.object().keys({
            roleUnapprovedId: joi.number().required(),
            actorId: joi.number().required(),
            name: joi.string().required(),
            description: joi.string().allow(null).allow(''),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            isDeleted: joi.boolean().allow(0, 1, '0', '1'),
            fieldOfWorkId: joi.string().allow(['', null]),
            isSystem: joi.boolean().allow(0, 1, '0', '1'),
            isApproved: joi.boolean().allow(0, 1, '0', '1'),
            statusId: joi.string(),
            rejectReason: joi.string().allow(null),
            updatedBy: joi.number().allow(null),
            updatedOn: joi.date().allow(null)
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    // login validations
    /**
     * @param {object}  result - result to validate (result['identity.check'])
     * @return {joiObject} - joiValidation
     */
    validateLogin: function(result) {
        const schema = joi.object().keys({
            sessionId: joi.string(),
            actorId: joi.alternatives().try(
                joi.number().integer().required(),
                joi.string().regex(/^[0-9]{1,19}$/, 'numeric').required()
            ),
            cookie: joi.string(),
            language: joi.string().allow(null, ''),
            module: joi.string().allow(''),
            remoteIP: joi.string().allow(null),
            userAgent: joi.string().allow(''),
            expire: joi.date(),
            dateCreated: joi.date(),
            channel: joi.string().required(),
            inactivityTimeout: joi.number().integer().allow(null, ''),
            deletedChannel: joi.string().allow(null)
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    // roles validations
    /**
     * @param {arr} result - result array to validate (result.role)
     * @return {joiObject} - joiValidation
     */
    validateFetchRoles: function(result) {
        const schema = joi.array().items(joi.object({
            actorId: joi.string(),
            name: joi.string().allow(['', null]),
            description: joi.string().allow(['', null]),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            statusId: joi.string(),
            rejectReason: joi.string().allow(null),
            visibleFor: joi.string()
        }));
        return schema.validate(result);
    },
    validateFetchDeletedRoles: function(result) {
        const schema = joi.array().items(joi.object({
            actorId: joi.string(),
            name: joi.string().allow(['', null]),
            description: joi.string().allow(['', null])
        }));
        return schema.validate(result);
    },
    /**
     * @param {arr} result - result array to validate (result.rolesPossibleForAssign)
     * @return {joiObject} - joiValidation
     */
    validateGetRolesPossibleForAssign: function(result) {
        const schema = joi.array().items(joi.object({
            roleId: joi.number(),
            name: joi.string().allow(null, ''),
            isAssigned: joi.boolean().allow(0, 1, '0', '1'),
            isDefault: joi.boolean().allow(0, 1, '0', '1', null),
            isEnabled: joi.boolean().allow(0, 1, '0', '1', null)
        }));
        return schema.validate(result);
    },
    /**
     * @param {arr} result - result array to validate (result.role)
     * @return {joiObject} - joiValidation
     */
    validateGetRolesAssignFetch: function(result) {
        const schema = joi.array().items(joi.object({
            actorId: joi.number(),
            name: joi.string().allow(['', null]),
            description: joi.string().allow(['', null]),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            isDeleted: joi.boolean().allow(0, 1, '0', '1'),
            subject: joi.string(),
            predicate: joi.string(),
            object: joi.string(),
            value: joi.string(),
            roleId: joi.string(),
            fieldOfWorkId: joi.string().allow(['', null]),
            isDefault: joi.boolean().allow(0, 1, '0', '1'),
            isSystem: joi.boolean().allow(0, 1, '0', '1')
        }));
        return schema.validate(result);
    },
    /**
     * @param {object} result - result to validate (result[role.['role.assignedRoles'][0])
     * @param {string} actorId - role actorId
     * @param {string} name - role name
     * @return {joiObject} - joiValidation
     */
    validateGetAssignedRoles: function(result, roleId, roleName) {
        const schema = joi.object().keys({
            actorId: joi.string().valid(roleId),
            name: joi.string().valid(roleName)
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
    * @param {arr} result - result array to validate (result[0][0])
    * @return {joiObject} - joiValidation
    */
    validateFetchPermission: function(result) {
        const schema = joi.array().items(joi.object({
            actorId: joi.string().allow(null).allow(''),
            actionId: joi.string().allow(null).allow(''),
            objectId: joi.string().allow(null).allow('')
        }));
        return schema.validate(result);
    },
    /**
     * @param {object} result - result to validate (result.role[0])
     * @param {sting} roleActorId - role actorId
     * @param {string} roleName - role name
     * @param {string} roleDescription - role description
     * @return {joiObject} - joiValidation
     */
    validateGetRole: function(result, roleActorId, roleName, roleDescription) {
        // when role name is like 'TELLER deleted Jun 23 2016 10:56AM'
        let validateRoleName = joi.string().allow(null).allow('');
        if (roleName !== null) {
            validateRoleName = joi.string().valid(roleName);
        }
        const schema = joi.object().keys({
            actorId: joi.string().valid(roleActorId),
            name: validateRoleName,
            description: joi.string().valid(roleDescription),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            isDeleted: joi.boolean().allow(0, 1, '0', '1'),
            fieldOfWorkId: joi.string().allow(['', null]),
            policyId: joi.number().allow(null),
            isSystem: joi.boolean().allow(0, 1, '0', '1'),
            isApproved: joi.boolean().allow(0, 1, '0', '1').allow(null),
            updatedBy: joi.string().allow(null),
            statusId: joi.string(),
            rejectReason: joi.string().allow(null),
            isNew: joi.boolean().allow(0, 1, '0', '1'),
            roleUnapprovedId: joi.string().allow(null),
            updatedOn: joi.string().allow(null)
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result['user.hash'])
     * @param {string} actorId - the actorId of the customer
     * @param {string} identifier - username
     * @return {joiObject} - joiValidation
     */
    validateGetUserHash: function(result, identifier) {
        const schema = joi.object().keys({
            hashId: joi.number().allow(null),
            actorId: joi.string(),
            type: joi.string(),
            identifier: joi.string().valid(identifier),
            algorithm: joi.string(),
            params: joi.string(),
            value: joi.string(),
            failedAttempts: joi.number().integer(),
            lastAttempt: joi.string(),
            lastChange: joi.string(),
            expireDate: joi.string(),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            hashUnapprovedId: joi.number().allow(null, '')
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object}  result - result to validate (result.user[0])
     * @return {joiObject} - joiValidation
     */
    validateFetchUser: function(result) {
        const schema = joi.object().keys({
            actorId: joi.number(),
            userName: joi.string().allow(['', null]),
            firstName: joi.string(),
            lastName: joi.string(),
            roles: joi.string(),
            branches: joi.string(),
            isApproved: joi.boolean().allow(0, 1, '0', '1'),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            statusId: joi.string().required(),
            rejectReason: joi.string().allow(['', null]),
            failed: joi.string().allow(null),
            userType: joi.string().allow(null),
            ldapPolicy: joi.string().allow(null),
            lastAttempt: joi.string().allow(null),
            accessDeniedFrom: joi.date().allow(null)
        });
        return joi.validate(result, schema, {abortEarly: false});
    },
    validateFetchDeletedUsers: function(result) {
        const schema = joi.array().items(joi.object().keys({
            actorId: joi.number(),
            userName: joi.string().allow(['', null]),
            firstName: joi.string(),
            lastName: joi.string(),
            userType: joi.string().allow(null)
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object} result - result to validate (result[0][0]) - user.action.get
     * @param {string} actionId - actionId
     * @param {string} objectId
     * @param {boolean} level - action right
     * @return {joiObject} - joiValidation
     */
    validateGetAction: function(result, actionId, objectId, level) {
        const schema = joi.object().keys({
            actionId: joi.string().valid(actionId),
            objectId: joi.string().valid(objectId),
            level: joi.boolean().allow(0, 1, '0', '1').valid(level),
            actionCategoryId: joi.string().allow(null),
            name: joi.string(),
            table: joi.string(),
            keyColumn: joi.string(),
            displayColumn: joi.string(),
            filter: joi.string().allow(null),
            depth: joi.number()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     *  @param {arr} result - result array to validate (result[0]) - getActions
     *  @return {joiObject} - joiValidation
     */
    validateGetActions(result) {
        const schema = joi.array().items(joi.object({
            actionId: joi.string(),
            objectId: joi.string(),
            level: joi.boolean().allow(0, 1, '0', '1'),
            actionCategoryId: joi.string().allow(null),
            name: joi.string(),
            table: joi.string(),
            keyColumn: joi.string(),
            displayColumn: joi.string(),
            filter: joi.string().allow(null),
            depth: joi.number()
        }));
        return schema.validate(result);
    },
    /**
     * @param {object} result - result to validate (result[0][0])
     * @param {string} actorId - user or organization actor Id
     * @param {string} actionId - actionId
     * @return {joiObject} - joiValidation
     */
    validatePermissionFetch(result, actorId, actionId) {
        const schema = joi.object().keys({
            actorId: joi.string().valid(actorId),
            actionId: joi.string().valid(actionId),
            objectId: joi.string()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    // policy validations
    /**
     * validate policy
     * @param {array} result - result to validate policy.policy
     * @return {joiObject} - joiValidation
     */
    validatePolicy: function(result) {
        const schema = joi.object().keys({
            policyId: joi.number().required(),
            name: joi.string().allow(''),
            priority: [joi.string().required(), joi.number().required()],
            description: joi.string().allow(''),
            loginAttempts: joi.number().allow(null),
            loginTimeframe: joi.string().allow(null),
            actionId: joi.number().allow(null),
            inactivityLockValue: joi.number().allow(null),
            inactivityLockKey: joi.string().allow(null),
            inactivityTimeoutValue: joi.number().allow(null),
            inactivityTimeoutKey: joi.string().allow(null),
            isEnabled: joi.boolean().allow(0, 1, '0', '1'),
            isDeleted: joi.boolean().allow(0, 1, '0', '1'),
            allowNewUserLogin: joi.boolean().allow(0, 1, '0', '1'),
            actionTimeframe: joi.number().allow(null),
            checkDeviceId: joi.boolean().allow(0, 1, '0', '1'),
            checkSession: joi.boolean().allow(0, 1, '0', '1'),
            restrictionIpRange: joi.array(),
            mobileRestriction: joi.string().allow(null),
            isVisible: joi.boolean().allow(0, 1, '0', '1')
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate (result.categories) - system role categories
     * @return {joiObject} - joiValidation
     */
    validateFetchSystemCategories(result) {
        const schema = joi.array().items(joi.object({
            actionCategoryId: joi.number().required().allow(null),
            name: joi.string(),
            categoryCode: joi.string()
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate (result.actions) - system roles
     * @return {joiObject} - joiValidation
     */
    validateFetchSystemRoles(result) {
        const schema = joi.array().items(joi.object({
            actionCategoryId: joi.number().required().allow(null),
            actionName: joi.string(),
            actionId: joi.number().required(),
            description: joi.string().allow(null, ''),
            hasSettings: joi.boolean().allow(0, 1, '0', '1')
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate policy.credentials
     * @return {joiObject} - joiValidation
     */
    validatePolicyCredentials: function(result) {
        const schema = joi.array().items(joi.object({
            credentialId: joi.number().allow(null, ''),
            policyId: joi.number().required(),
            type: joi.string().required(),
            regex: joi.string().allow(['', null]),
            charMin: joi.number().allow(['', null]),
            charMax: joi.number().allow(['', null]),
            noReuseOfLast: joi.number().allow(null),
            sendMethod: joi.string().allow(null),
            resetMethod: joi.string().allow(null),
            notifyMethod: joi.string().allow(null),
            validityValue: joi.number().allow(['', null]),
            validityKey: joi.string().allow(null),
            allowChange: joi.boolean().allow(0, 1, '0', '1', null),
            allowReset: joi.boolean().allow(0, 1, '0', '1', null),
            secretQuestionsOnReset: joi.boolean().allow(null, 1, 0, '1', '0'),
            fingers: joi.string().allow(null),
            regexInfo: joi.string().allow(null),
            generateMethod: joi.string().allow(null),
            validationErrorMessage: joi.string().allow(['', null]),
            otpOnReset: joi.boolean().allow(null, 1, 0, '1', '0')
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate policy.factor
     * @return {joiObject} - joiValidation
     */
    validatePolicyFactor: function(result) {
        const schema = joi.array().items(joi.object({
            factorId: joi.number().required(),
            policyId: joi.number().required(),
            order: joi.number(),
            name: joi.string().allow(['', null]),
            description: joi.string().allow(['', null]),
            channelName: joi.string().required(),
            channelId: joi.number().integer().required()
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate policy.term
     * @return {joiObject} - joiValidation
     */
    validatePolicyTerm: function(result) {
        const schema = joi.array().items(joi.object({
            termId: joi.number().required(),
            factorId: joi.number(),
            termOrder: joi.number(),
            factorOrder: joi.number(),
            name: joi.string().allow(['', null])
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate - policy.restrictionDate
     * @return {joiObject} - joiValidation
     */
    validatePolicyRestrictionDate: function(result) {
        const schema = joi.array().items(joi.object({
            restrictionId: joi.string().required(),
            policyId: joi.number(),
            date: joi.string(),
            workingHourStart: joi.string(),
            workingHourEnd: joi.string(),
            restrictionType: joi.string(),
            isRestricted: joi.boolean().allow(0, 1, '0', '1')
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate - policy.restrictionTime
     * @return {joiObject} - joiValidation
     */
    validatePolicyRestrictionTime: function(result) {
        const schema = joi.array().items(joi.object({
            restrictionId: joi.string().required(),
            policyId: joi.number(),
            weekdayName: joi.string(),
            workingHourStart: joi.string(),
            workingHourEnd: joi.string(),
            restrictionType: joi.string()
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate (result.policy)
     * @return {joiObject} - joiValidation
     */
    validatePolicyFetch: function(result) {
        const schema = joi.array().items(joi.object({
            policyId: joi.number().required(),
            name: joi.string().allow(''),
            priority: joi.string().required(),
            description: joi.string().allow(['', null])
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {array} result - result to validate (result.policyFunctions[0])
     * @return {joiObject} - joiValidation
     */
    validatePolicyFunction: function(result) {
        const schema = joi.object().keys({
            functionId: joi.number().required(),
            name: joi.string().allow(''),
            type: joi.string(),
            customName: joi.string(),
            isEnabled: joi.boolean().allow(0, 1, '1', '0'),
            description: joi.string().allow(['', null])
        });
        return joi.validate(result, schema, {abortEarly: false});
    },
    // external user validations
    /**
     * @param {object} result - result to validate ([user].[externalUser.add])
     * @return {joiObject} - joiValidation
     */
    validateAddExternalUser: function(result) {
        const schema = joi.object().keys({
            externalUserId: joi.number().required(),
            externalSystemId: joi.number().required(),
            userAlias: joi.string().allow(['', null]),
            userName: joi.string().required(),
            cryptArgs: joi.string().allow(['', null]),
            isGeneric: joi.boolean().allow(0, 1, '0', '1').required(),
            isActive: joi.boolean().allow(0, 1, '0', '1').required(),
            isDeleted: joi.boolean().allow(0, 1, '0', '1').required(),
            dateCreated: joi.string().required(),
            createdBy: joi.number().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object} result - result to validate ([user].[visibleExternalSystem.fetch])
     * @return {joiObject} - joiValidation
     */
    validateFetchExternalSystem: function(result) {
        const schema = joi.object().keys({
            externalSystemId: joi.number().required(),
            externalSystemName: joi.string().required(),
            organizationId: joi.number().required(),
            organizationName: joi.string().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object} result - result to validate ([user].[externalUser.fetch])
     * @return {joiObject} - joiValidation
     */
    validateFetchExternalUser: function(result) {
        const schema = joi.object().keys({
            externalUserId: joi.number().required(),
            externalSystemName: joi.string().required(),
            branchName: joi.string().required(),
            userAlias: joi.string().required().allow(['', null]),
            userName: joi.string().required(),
            isActive: joi.boolean().allow(0, 1, '0', '1').required(),
            isGeneric: joi.boolean().allow(0, 1, '0', '1').required(),
            canBeDeleted: joi.boolean().allow(0, 1, '0', '1').required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object} result - result to validate ([user].[externalUser.update])
     * @return {joiObject} - joiValidation
     */
    validateUpdateExternalUser: function(result) {
        const schema = joi.object().keys({
            externalUserId: joi.number().required(),
            externalSystemId: joi.number().required(),
            userAlias: joi.string().required().allow(['', null]),
            userName: joi.string().required(),
            cryptArgs: joi.string().allow(['', null]),
            isGeneric: joi.boolean().allow(0, 1, '0', '1').required(),
            isActive: joi.boolean().allow(0, 1, '0', '1').required(),
            isDeleted: joi.boolean().allow(0, 1, '0', '1').required(),
            dateCreated: joi.string().required(),
            createdBy: joi.number().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object} result - result to validate (result.externalSystemCredentials)
     * @param {string} isApproved - true or false
     * @return {joiObject} - joiValidation
     */
    validateUserToExternalUser: function(result, isApproved) {
        let validateUserToExternalUserUnapprovedId;
        let validateUserToExternalUserId;
        if (isApproved) {
            validateUserToExternalUserUnapprovedId = joi.number().required().allow(null);
            validateUserToExternalUserId = joi.number().required();
        } else {
            validateUserToExternalUserUnapprovedId = joi.number().required();
            validateUserToExternalUserId = joi.number().required().allow(null);
        }
        const schema = joi.object().keys({
            userToExternalUserUnapprovedId: validateUserToExternalUserUnapprovedId,
            userToExternalUserId: validateUserToExternalUserId,
            userName: joi.string().required().allow(['', null]),
            userAlias: joi.string().required().allow(['', null]),
            isGeneric: joi.boolean().allow(0, 1, '0', '1').required(),
            isActive: joi.boolean().allow(0, 1, '0', '1').required(),
            externalUserId: joi.number().required().allow(null),
            externalSystemId: joi.number().required(),
            externalSystemName: joi.string().required(),
            organizationId: joi.string().required(),
            organizationName: joi.string().required(),
            hasPassword: joi.number().required(),
            udf: joi.object().allow(null),
            genericUdf: joi.object().allow(null),
            nonGenericUdf: joi.object().allow(null)
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object} result - (result.externalUser)
     * @return {joiObject} - joiValidation
     */
    validateGetExternalUser: function(result) {
        const schema = joi.object().keys({
            externalUserId: joi.number().required(),
            externalSystemId: joi.number().required(),
            userName: joi.string().required(),
            password: joi.string().required(),
            cryptArgs: joi.string().required(),
            isGeneric: joi.boolean().allow(0, 1, '0', '1').required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object} result.externalUser
     * @return {joiObject} - joiValidation
     */
    validateDeleteExternalUser: function(result) {
        const schema = joi.object().keys({
            externalUserId: joi.number().required(),
            externalSystemId: joi.number().required(),
            userAlias: joi.string().required(),
            userName: joi.string().required(),
            isGeneric: joi.boolean().allow(0, 1, '0', '1').required(),
            isActive: joi.boolean().allow(0, 1, '0', '1').required(),
            isDeleted: joi.boolean().allow(0, 1, '0', '1').required(),
            dateCreated: joi.string().required(),
            createdBy: joi.string().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object} result.externalUser
     * @return {joiObject} - joiValidation
     */
    validateActivateDeactivateExternalUser: function(result) {
        const schema = joi.object().keys({
            externalUserId: joi.number().required(),
            externalSystemId: joi.number().required(),
            userAlias: joi.string().required(),
            userName: joi.string().required(),
            isGeneric: joi.boolean().allow(0, 1, '0', '1').required(),
            isActive: joi.boolean().allow(0, 1, '0', '1').required(),
            isDeleted: joi.boolean().allow(0, 1, '0', '1').required(),
            dateCreated: joi.string().required(),
            createdBy: joi.string().required()
        }).required();
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {arr} result - result array to validate (result.externalSystems)
     * @return {joiObject} - joiValidation
     */
    validateFetchExternalSystemForBU: function(result) {
        const schema = joi.array().items(joi.object().keys({
            externalSystemId: joi.number().required(),
            externalSystemName: joi.string().required()
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object} result - result object to validate (result.policyChannels)
     * @return {joiObject} - joiValidation
     */
    validateGetChannels: function(result) {
        const schema = joi.object().keys({
            channelId: joi.number().required(),
            channelName: joi.string().required(),
            channelType: joi.string().required(),
            isOnline: joi.boolean().required().allow([0, 1, '0', '1'])
        });
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object} result - result to validate ([user].[details.get])
     * @return {joiObject} - joiValidation
     */
    validateGetProfileDetails: function(result, username) {
        const schema = joi.object().keys({
            username: joi.object().keys({
                identifier: joi.string().valid(username).required(),
                failedAttempts: joi.number().integer().required(),
                lastAttempt: joi.date().required(),
                lastChange: joi.date().required(),
                expireDate: joi.date().required()
            }).required(),
            customerPhone: joi.array().items({
                actorId: joi.string().required(),
                phoneId: joi.number().integer().required(),
                frontEndRecordId: joi.string().allow(null).required(),
                phoneTypeId: joi.string().required(),
                phoneNumber: joi.string().required(),
                statusId: joi.string().required(),
                oldValues: joi.object().allow(null).required(),
                udf: joi.string().allow(null).required(),
                mnoId: joi.number().allow(null).required(),
                mnoName: joi.string().allow(null),
                isPrimary: joi.boolean().allow(0, 1, '0', '1').required(),
                mnoKey: joi.string().allow(null).required()
            }).required(),
            roles: joi.array().items({
                roleId: joi.string(),
                name: joi.string()
            }).required(),
            permissions: joi.array().items({
                actionId: joi.string(),
                actionName: joi.string(),
                actionCategoryId: joi.number()
            }).required(),
            passwordPolicy: joi.array().items({
                charMax: joi.number(),
                charMin: joi.number(),
                regex: joi.string(),
                regexInfo: joi.string(),
                validationErrorMessage: joi.string()
            }),
            usernamePolicy: joi.array().items({
                charMax: joi.number(),
                charMin: joi.number(),
                regex: joi.string(),
                regexInfo: joi.string(),
                validationErrorMessage: joi.string()
            })
        });
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object} result - result object to validate (result)
     * @return {joiObject} - joiValidation
     */
    validateGetLdapUser: function(result) {
        const schema = joi.object().keys({
            identifier: joi.string().required(),
            firstName: joi.string().required(),
            lastName: joi.string().required(),
            email: joi.string().required(),
            cn: joi.string()
        });
        return joi.validate(result, schema, {abortEarly: false});
    },
    // pin
    /**
     * @param {array} result - result to validate (result.device)
     * @return {joiObject} - joiValidation
     */
    validateUserDevice: function(result) {
        const schema = joi.array().items(joi.object().keys({
            actorDeviceId: joi.string().required(),
            actorId: joi.string().required(),
            installationId: joi.string(),
            imei: joi.string(),
            pushNotificationToken: joi.string(),
            deviceModel: joi.string(),
            deviceOS: joi.string(),
            encryptionKey: joi.string()
        }));
        return joi.validate(result, schema, {abortEarly: false});
    },
    /**
     * @param {object} result - result to validate
     * @result {joiObject} - joiValidation
     */
    validatePINRequest: function(result) {
        const schema = joi.object().keys({
            secretQuestionsOnReset: joi.boolean(),
            charMin: joi.number(),
            charMax: joi.number(),
            uuid: joi.string()
        });
        return joi.validate(result, schema, {abortEarly: false});
    }
};
