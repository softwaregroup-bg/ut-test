var commonFunc = require('./commonFunc');
var userConstants = require('./../constants/user').constants();
var userJoiValidation = require('./../joiValidations/user');
var userParams = require('./../requestParams/user');
var customerJoiValidation = require('./../joiValidations/customer');
var customerConstants = require('./../constants/customer').constants();

module.exports = {
    login: function(stepname, username, password, timezone, newPassword) {
        return commonFunc.createStep('identity.check', stepname, function(context) {
            return {
                username,
                password,
                newPassword,
                uri: userConstants.URI,
                timezone,
                channel: userConstants.CHANNEL
            };
        }, (result, assert) => {
            assert.equals(userJoiValidation.validateLogin(result['identity.check']).error, null,
                'Return all details after login a user');
        });
    },
    loginMobile: function(stepname, username, password, timezone, newPassword) {
        return commonFunc.createStep('identity.check', stepname, function(context) {
            return {
                username,
                password,
                newPassword,
                uri: userConstants.URI,
                timezone,
                channel: 'mobile'
            };
        }, (result, assert) => {
            assert.equals(userJoiValidation.validateLogin(result['identity.check']).error, null,
                'Return all details after login a user');
        });
    },
    logout: function(stepname, contextStep) {
        return commonFunc.createStep('identity.closeSession', stepname, context => userParams.sessionParams(context, contextStep),
        (result, assert) => {
            assert.true(result.length === 0, 'empty resultset after logout');
        });
    },
    changePassword: function(stepname, contextStep, username, password, newPassword) {
        return commonFunc.createStep('identity.changePassword', stepname, context => userParams.changePasswordParams(context, contextStep, username, password, newPassword),
        (result, assert) => {
            assert.same(result, [], 'empty resultset after changing password');
        });
    },
    getUser: function(stepname, contextStep, name) {
        return commonFunc.createStep('user.user.get', stepname, context => userParams.actorIdParams(context, contextStep),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateGetPerson(result.person, name || userConstants.ADMINFIRSTNAME).error, null, 'return person');
        });
    },
    approveUser: function(stepname, contextStep) {
        return commonFunc.createStep('user.user.approve', stepname, context => userParams.actorIdParams(context, contextStep),
        (result, assert) => {
            assert.true(result.length === 0, 'empty resultset after approve user');
        });
    },
    addUser: function(stepname, contextStep, username, policyId) {
        return commonFunc.createStep('user.user.add', stepname, context => userParams.addUserParams(context, contextStep, username, policyId),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateGetPerson(result.person, customerConstants.FIRSTNAME).error, null, 'Return all person details after adding a user');
            assert.equals(userJoiValidation.validateAddUser(result.user[0]).error, null, 'Return all user details after adding a user');
            assert.equals(result['user.hash'][0].identifier || result['user.hashUnapproved'][0].identifier, username, 'return username');
            assert.equals(userJoiValidation.validateGetRolesPossibleForAssign(result.rolesPossibleForAssign).error, null, 'Return all possible for assign roles after adding a user');
            assert.equals(userJoiValidation.validatePolicyCredentials(result['policy.credentials']).error, null, 'Return policy.credentials after adding a user');
            assert.equals(userJoiValidation.validatePolicy(result['policy.basic'][0]).error, null, 'Return policy after adding a user');
        });
    },
    editUser: function(stepname, contextStep, firstName) {
        return commonFunc.createStep('user.user.edit', stepname, context => userParams.editUserParams(context, contextStep, firstName),
        (result, assert) => {
            assert.equals(customerJoiValidation.validateGetPerson(result.person ? result.person : result.personUnapproved, firstName).error, null, 'Return all person details after editing a user');
            assert.equals(userJoiValidation.validateAddUser(result.user ? result.user[0] : result.userUnapproved[0]).error, null, 'Return all user details after editing a user');
            assert.equals(userJoiValidation.validateGetRolesPossibleForAssign(result.rolesPossibleForAssign).error, null, 'Return all possible for assign roles after editing a user');
            assert.equals(userJoiValidation.validatePolicyCredentials(result['policy.credentials']).error, null, 'Return policy.credentials after editing a user');
            assert.equals(userJoiValidation.validatePolicy(result['policy.basic'][0]).error, null, 'Return policy after editing a user');
        });
    },
    deleteUser: function(stepname, contextStep) {
        return commonFunc.createStep('user.user.delete', stepname, (context) => userParams.actorIdListParams(context, contextStep),
        (result, assert) => {
            assert.true(result.length === 0, 'empty resultset after delete user');
        });
    },
    lockUser: function(stepname, contextStep) {
        return commonFunc.createStep('user.user.lock', stepname, (context) => userParams.lockUserParams(context, contextStep),
        (result, assert) => {
            assert.true(result.length === 0, 'empty resultset after lock/unlock user');
        });
    },
    grantAction: function(stepname, contextStep, actionId, objectId, level) {
        return commonFunc.createStep('user.action.grant', stepname, context => userParams.grantActionParams(context, contextStep, actionId, objectId, level),
        (result, assert) => {
            assert.true(result.length === 0, 'empty resultset after grant action to user');
        });
    },
    addRole: function(stepname, contextStep, name, description) {
        return commonFunc.createStep('user.role.add', stepname, context => userParams.addRoleParams(context, contextStep, name, description),
        (result, assert) => {
            assert.equals(userJoiValidation.validateAddRole(result.role[0]).error, null, 'Return all details after adding role');
            assert.equals(result.role[0].name, name, 'return role name');
            assert.equals(result.role[0].description, description, 'return role description');
            assert.equals(result.role[0].isEnabled, false, 'return unlocked role status');
        });
    },
    editRole: function(stepname, contextStep, name, description) {
        return commonFunc.createStep('user.role.edit', stepname, context => userParams.editRoleParams(context, contextStep, name, description),
        (result, assert) => {
            assert.equals(userJoiValidation.validateEditRole(result.role[0]).error, null, 'Return all details after editing a role');
            assert.equals(result.role[0].name, name, 'return role name');
            assert.equals(result.role[0].description, description, 'return role description');
            assert.equals(result.role[0].statusId, customerConstants.STATUSIDPENDING, 'return status pending');
        });
    },
    approveRole: function(stepname, contextStep) {
        return commonFunc.createStep('user.role.approve', stepname, context => userParams.actorIdParams(context, contextStep),
        (result, assert) => {
            assert.true(result.length === 0, 'empty resultset after approve role');
        });
    },
    rejectRole: function(stepname, contextStep, rejectReason) {
        return commonFunc.createStep('user.role.reject', stepname, (context) => userParams.rejectRoleParams(context, contextStep, rejectReason),
        (result, assert) => {
            assert.true(result.length === 0, 'empty resultset after reject role');
        });
    },
    copyRole: function(stepname, contextStep, isOverwriting) {
        return commonFunc.createStep('user.role.copy', stepname, context => userParams.copyRoleParams(context, contextStep, isOverwriting),
        (result, assert) => {
            assert.same(result, [], 'empty resultset after copy role');
        });
    },
    deleteRole: function(stepname, contextStep) {
        return commonFunc.createStep('user.role.delete', stepname, (context) => userParams.actorIdListParams(context, contextStep),
        (result, assert) => {
            assert.true(result.length === 0, 'empty resultset after delete role');
        });
    },
    lockRole: function(stepname, contextStep) {
        return commonFunc.createStep('user.role.lock', stepname, (context) => userParams.lockRoleParams(context, contextStep),
        (result, assert) => {
            assert.true(result.length === 0, 'empty resultset after lock/unlock role');
        });
    },
    discardRole: function(stepname, contextStep) {
        return commonFunc.createStep('user.role.discard', stepname, (context) => userParams.actorIdParams(context, contextStep),
        (result, assert) => {
            assert.true(result.length === 0, 'empty resultset after discard role');
        });
    },
    getRole: function(stepname, contextStep) {
        return commonFunc.createStep('user.role.get', stepname, (context) => userParams.actorIdParams(context, contextStep),
        (result, assert) => {
            assert.equals(userJoiValidation.validateAddRole(result.role[0]).error, null, 'Return all details for role');
            assert.equals(userJoiValidation.validateAddRole(result.roleUnapproved[0]).error, null, 'Return all details for roleUnapproved');
        });
    },
    fetchRoles: function(stepname, contextStep) {
        return commonFunc.createStep('user.role.fetch', stepname, (context) => userParams.fetchRoleParams(context, contextStep),
        (result, assert) => {
            assert.equals(userJoiValidation.validateFetchRoles(result.role).error, null, 'Return all details after fetching roles');
        });
    },
    getChannels: function(stepname, contextStep) {
        return commonFunc.createStep('policy.policy.channelsGet', stepname, context => contextStep(context),
        (result, assert) => {
            assert.equals(userJoiValidation.validateGetChannels(result.policyChannels[0]).error, null, 'Return all details for channels');
        });
    },
    addExternalUser: function(stepname, contextStep, username, externalSystemId) {
        return commonFunc.createStep('user.externalUser.add', stepname, context => userParams.addExternalUserParams(context, contextStep, username, externalSystemId),
        (result, assert) => {
            assert.equals(userJoiValidation.validateAddExternalUser(result.addedExternalUsers[0]).error, null, 'Return all details after adding external user');
            assert.equals(result.addedExternalUsers[0].userName, username, 'the user is created with the correct username');
            if (externalSystemId) {
                assert.equals(result.addedExternalUsers[0].externalSystemId, externalSystemId, 'the user is created with the correct external system');
            }
        });
    },
    deleteExternalUser: function(stepname, contextStep, externalUserId) {
        return commonFunc.createStep('user.externalUser.delete', stepname, context => userParams.deleteExternalUserParams(context, contextStep, externalUserId),
        (result, assert) => {
            if (externalUserId) {
                assert.equals(result[0][0].externalUserId, externalUserId, 'return externalUserId of deleted user');
            }
            assert.true(result[0][0].isDeleted, 'return isDeleted true');
            assert.equals(userJoiValidation.validateDeleteExternalUser(result[0][0]).error, null, 'return all details after delete');
        });
    },
    activateDeactivateExternalUser: function(stepname, contextStep, isActive) {
        return commonFunc.createStep('user.externalUser.activateDeactivate', stepname, context => userParams.activateDeactivateExternalUserParams(context, contextStep, isActive),
        (result, assert) => {
            assert.equals(result[0][0].isActive, isActive, 'return isActive ' + isActive);
            assert.equals(userJoiValidation.validateActivateDeactivateExternalUser(result[0][0]).error, null, 'return all externalUser details after activate/deactivate');
        });
    }
};
