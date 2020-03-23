const customerConstants = require('./../constants/customer').constants();

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
            sortBy: contextStep(context).sortBy || 'auditDate',
            sortOrder: contextStep(context).sortOrder || 'DESC'
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
            localPort: context.localPort || context.$meta.localPort,
            eventStoreEnabled: contextStep(context).eventStoreEnabled,
            auditId: contextStep(context).auditId,
            userName: contextStep(context).userName,
            sourceIp: contextStep(context).sourceIpAddress,
            destinationIp: contextStep(context).destinationIpAddress,
            actionId: contextStep(context).actionId,
            eventOutcome: contextStep(context).eventOutcome,
            objectId: contextStep(context).objectId,
            fromDate: contextStep(context).fromDate,
            toDate: contextStep(context).toDate,
            pageSize: contextStep(context).pageSize || customerConstants.PAGESIZE,
            pageNumber: contextStep(context).pageNumber || customerConstants.PAGENUMBER,
            sortBy: contextStep(context).sortBy || 'auditDate',
            sortOrder: contextStep(context).sortOrder || 'DESC',
            severityLevels: contextStep(context).severityLevels,
            eventClasses: contextStep(context).eventClasses,
            utService: contextStep(context).utService,
            channel: contextStep(context).channel
        };
    },
    getAuditLogParams: function(context, contextStep) {
        return {
            auditLogId: contextStep(context).auditLogId,
            eventStoreEnabled: contextStep(context).eventStoreEnabled
        };
    },
    migrateParams: function(context, contextStep) {
        return {};
    }
};
