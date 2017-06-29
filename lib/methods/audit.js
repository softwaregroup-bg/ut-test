var commonFunc = require('./commonFunc');
var auditParams = require('./../requestParams/audit');
var auditJoiValidation = require('./../joiValidations/audit');

module.exports = {
    // actions and audit log
    fetchActionLog: function(stepname, contextStep) {
        return commonFunc.createStep('audit.action.fetch', stepname, context => auditParams.fetchActionLogParams(context, contextStep),
        (result, assert) => {
            assert.equals(auditJoiValidation.validateFetchActions(result.actions).error, null, 'return user actions');
        });
    },
    fetchAuditLog: function(stepname, contextStep) {
        return commonFunc.createStep('audit.audit.fetch', stepname, context => auditParams.fetchAuditLogParams(context, contextStep),
        (result, assert) => {
            assert.equals(auditJoiValidation.validateFetchActionLog(result.actionLog).error, null, 'return all details after fetching audit log');
        });
    },
    editAction: function(stepname, contextStep) {
        return commonFunc.createStep('audit.action.edit', stepname, context => auditParams.editActionParams(context, contextStep),
        (result, assert) => {
            assert.equals(auditJoiValidation.validateEditAction(result.action).error, null, 'return all details after editing action');
        });
    },
    getAuditLog: function(stepname, contextStep) {
        return commonFunc.createStep('audit.audit.get', stepname, context => auditParams.getAuditLogParams(context, contextStep),
        (result, assert) => {
            assert.equals(auditJoiValidation.validateGetAuditLog(result.auditLog).error, null, 'Return all details after getting audit log');
        });
    }
};
