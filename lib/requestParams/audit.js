var customerConstants = require('./../constants/customer').constants();

module.exports = {
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
            auditAction: contextStep(context).auditAction,
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
