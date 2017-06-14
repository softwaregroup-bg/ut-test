var userConstants = require('./../constants/user').constants();
var customerConstants = require('./../constants/customer').constants();
var cardConstants = require('./../constants/card').constants();
var commonFunc = require('./../methods/commonFunc');
const LANGUAGEID = 1;

module.exports = {
    addUserParams: function(context, contextStep, username, policyId) {
        return {
            hash: [{
                identifier: username,
                value: userConstants.USERPASSWORD + 1,
                isEnabled: 1,
                expireDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
                type: userConstants.POLICYTYPE
            }],
            person: {
                isEnabled: true,
                isDeleted: false,
                firstName: customerConstants.FIRSTNAME,
                lastName: customerConstants.LASTNAME
            },
            actorHierarchy: [{
                predicate: 'memberOf',
                object: contextStep(context).object
            }],
            phone: [{
                phoneTypeId: 'home',
                phoneNumber: (commonFunc.generateRandomNumber().toString()).slice(0, 8),
                mnoId: 1,
                isPrimary: 1
            }],
            roles: contextStep(context).roles,
            defaultRoleId: contextStep(context).defaultRoleId,
            user: [{primaryLanguageId: LANGUAGEID}],
            policyId: policyId || contextStep(context).policyId // STD_input
        };
    },
    editUserParams: function(context, contextStep, firstName) {
        return {
            hash: [{
                actorId: contextStep(context).hash.actorId,
                hashUnapprovedId: contextStep(context).hash.hashUnapprovedId,
                identifier: contextStep(context).hash.identifier,
                value: contextStep(context).hash.value,
                isEnabled: contextStep(context).hash.isEnabled,
                expireDate: contextStep(context).hash.expireDate,
                type: contextStep(context).hash.type
            }],
            person: {
                actorId: contextStep(context).person.actorId,
                isEnabled: contextStep(context).person.isEnabled,
                isDeleted: contextStep(context).person.isDeleted,
                firstName: firstName,
                lastName: contextStep(context).person.lastName
            },
            user: [{
                actorId: contextStep(context).user.actorId,
                primaryLanguageId: contextStep(context).user.primaryLanguageId,
                isApproved: contextStep(context).user.isApproved
            }],
            phone: [{
                actorId: contextStep(context).phone.actorId,
                phoneUnapprovedId: contextStep(context).phone.phoneUnapprovedId,
                phoneTypeId: contextStep(context).phone.phoneTypeId,
                phoneNumber: contextStep(context).phone.phoneNumber,
                mnoId: contextStep(context).phone.mnoId,
                isPrimary: contextStep(context).phone.isPrimary
            }],
            roles: contextStep(context).roles,
            defaultRoleId: contextStep(context).defaultRoleId,
            policyId: contextStep(context).policyId
        };
    },
    actorIdParams: function(context, contextActorId) {
        return {
            actorId: contextActorId(context)
        };
    },
    actorIdListParams: function(context, contextActorIdList) {
        return {
            actorIdList: contextActorIdList(context)
        };
    },
    grantActionParams: function(context, setLevelParams, actionId, objectId, level) {
        return {
            setLevel: [{
                actorId: setLevelParams(context),
                actionId: actionId || '%',
                objectId: objectId || '%',
                level: level || 1
            }]
        };
    },
    changePasswordParams: function(context, contextParams, username, password, newPassword) {
        return {
            username: username,
            password: password,
            newPassword: newPassword
        };
    },
    sessionParams: function(context, session) {
        return {
            sessionId: session(context)
        };
    },
    addRoleParams: function(context, contextParams, name, description) {
        return {
            role: {
                name: name,
                description: description,
                isEnabled: 1,
                isDeleted: 0
            },
            policyId: contextParams(context).policyId,
            visibleFor: contextParams(context).visibleFor,
            assignedSubRoles: contextParams(context).assignedSubRoles,
            permissions: contextParams(context).permissions
        };
    },
    editRoleParams: function(context, contextParams, name, description) {
        return {
            role: {
                actorId: contextParams(context).actorId,
                name: name,
                description: description,
                isEnabled: contextParams(context).isEnabled,
                isDeleted: contextParams(context).isDeleted
            },
            policyId: contextParams(context).policyId || 1,
            visibleForAdded: contextParams(context).visibleForAdded,
            visibleForRemoved: contextParams(context).visibleForRemoved,
            grantedRoles: contextParams(context).grantedRoles,
            revokedRoles: contextParams(context).revokedRoles,
            permissions: contextParams(context).permissions
        };
    },
    rejectRoleParams: function(context, contextParams, rejectReason) {
        return {
            actorId: contextParams(context),
            rejectReason: rejectReason
        };
    },
    copyRoleParams: function(context, contextParams, isOverwriting) {
        return {
            isOverwriting: isOverwriting || 0,
            copyTo: contextParams(context).copyTo,
            copyFrom: contextParams(context).copyFrom
        };
    },
    lockRoleParams: function(context, contextParams) {
        return {
            actorIds: contextParams(context).actorIds,
            isEnabled: contextParams(context).isEnabled
        };
    },
    lockUserParams: function(context, contextParams) {
        return {
            actorIdList: contextParams(context).actorIdList,
            isEnabled: contextParams(context).isEnabled
        };
    },
    editCardReasonParams: function(context, editReasonContext, isActive, moduleText, reasonName, reasonId) {
        return {
            action: editReasonContext(context).action,
            reason: {
                isActive: isActive,
                module: moduleText,
                name: reasonName,
                reasonId: editReasonContext(context).reason.reasonId
            }
        };
    },
    fetchReasonParams: function(context, fetchReasonContext) {
        return {
            filterBy: {},
            orderBy: [],
            paging: {
                pageSize: cardConstants.PAGESIZE,
                pageNumber: cardConstants.PAGENUMBER
            }
        };
    },
    addExternalUserParams: function(context, contextParams, username, externalSystemId) {
        return {
            externalUser: {
                externalSystemId: externalSystemId || contextParams(context).externalSystemId,
                userAlias: contextParams(context).userAlias,
                userName: username || contextParams(context).userName,
                password: contextParams(context).password,
                isGeneric: contextParams(context).isGeneric,
                isActive: contextParams(context).isActive,
                isDeleted: contextParams(context).isDeleted
            }
        };
    },
    deleteExternalUserParams: function(context, contextParams, externalUserId) {
        return {
            externalUser: externalUserId || contextParams(context)
        };
    },
    activateDeactivateExternalUserParams: function(context, contextParams, isActive) {
        return {
            externalUser: contextParams(context),
            isActive: isActive
        };
    },
    // actions and audit log
    fetchActionLogParams: function(context, contextStep) {
        return {
            isAuditable: contextStep(context).isAuditable,
            severityLevel: contextStep(context).severityLevel,
            actionCategoryId: contextStep(context).actionCategoryId,
            actionId: contextStep(context).actionId,
            description: contextStep(context).description,
            pageSize: contextStep(context).pageSize || customerConstants.PAGESIZE,
            pageNumber: contextStep(context).pageNumber || customerConstants.PAGENUMBER,
            sortBy: contextStep(context).sortBy,
            sortOrder: contextStep(context).sortOrder || 'ASC'
        };
    },
    editActionParams: function(context, contextStep) {
        return {
            action: {
                actionId: contextStep(context).actionId,
                isAuditable: contextStep(context).isAuditable,
                severityLevel: contextStep(context).severityLevel
            }
        };
    },
    fetchAuditLogParams: function(context, contextStep) {
        return {
            eventStoreEnabled: contextStep(context).eventStoreEnabled,
            auditLogId: contextStep(context).auditLogId,
            userName: contextStep(context).userName,
            sourceIpAddress: contextStep(context).sourceIpAddress,
            destinationIpAddress: contextStep(context).destinationIpAddress,
            eventCodeId: contextStep(context).eventCodeId,
            eventOutcome: contextStep(context).eventOutcome,
            objectId: contextStep(context).objectId,
            fromDate: contextStep(context).fromDate,
            toDate: contextStep(context).toDate,
            pageSize: contextStep(context).pageSize || customerConstants.PAGESIZE,
            pageNumber: contextStep(context).pageNumber || customerConstants.PAGENUMBER,
            sortBy: contextStep(context).sortBy,
            sortOrder: contextStep(context).sortOrder || 'ASC',
            severityLevels: contextStep(context).severityLevels,
            eventClasses: contextStep(context).eventClasses
        };
    },
    getAuditLogParams: function(context, contextStep) {
        return {
            auditLogId: contextStep(context).auditLogId,
            eventStoreEnabled: contextStep(context).eventStoreEnabled
        };
    }
};
