var commonFunc = require('./commonFunc');
var coreParams = require('./../requestParams/core');
var coreJoiValidation = require('./../joiValidations/core');
var userJoiValidation = require('./../joiValidations/user');

module.exports = {
    listExternalSystemType: function(stepname, contextStep) {
        return commonFunc.createStep('core.externalSystemType.list', stepname, context => contextStep(context),
        (result, assert) => {
            assert.true(result.externalSytemType.length > 0, 'return result in externalSystemType');
            assert.equals(coreJoiValidation.validateListExternalSystemType(result.externalSytemType).error, null, 'return externalSystems');
        });
    },
    getExternalSystemAttributes: function(stepname, contextStep) {
        return commonFunc.createStep('core.externalSystemAttributes.get', stepname, context => coreParams.typeIdParams(context, contextStep),
        (result, assert) => {
            assert.equals(coreJoiValidation.validateGetExternalSystemAttributes(result.defaultValues).error, null, 'return externalSystems');
        });
    },
    addExternalSystem: function(stepname, contextStep) {
        return commonFunc.createStep('core.externalSystem.add', stepname, context => coreParams.addExternalSystemParams(context, contextStep),
        (result, assert) => {
            assert.equals(userJoiValidation.validateAddExternalUser(result.addedExternalUsers[0]).error, null, 'return externalUser');
            assert.equals(coreJoiValidation.validateServerInfo(result.serverInfo).error, null, 'return server info');
            assert.equals(coreJoiValidation.validateUserMapping(result.userMapping).error, null, 'return user mapping');
        });
    }
};
