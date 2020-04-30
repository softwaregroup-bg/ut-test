const customerConstants = require('./../constants/customer').constants();

module.exports = {
    // network
    addNetworkParams: function(context, contextParams) {
        return {
            network: {
                organizationName: contextParams(context).organizationName,
                description: contextParams(context).description
            },
            parent: contextParams(context).parent,
            networkTypeIds: contextParams(context).networkTypeIds
        };
    },
    actorIdParams: function(context, contextActorId) {
        return {
            actorId: contextActorId(context)
        };
    },
    fetchNetworkParams: function(context, contextParams) {
        return {
            filterBy: {
                networkName: contextParams(context).networkName,
                networkOwner: contextParams(context).networkOwner,
                businessUnitId: contextParams(context).businessUnitId,
                networkTypeId: contextParams(context).networkTypeId,
                breadcrumbs: contextParams(context).breadcrumbs,
                statusId: contextParams(context).statusId,
                isEnabled: contextParams(context).isEnabled
            },
            orderBy: {
                column: contextParams(context).column || 'networkName',
                direction: contextParams(context).direction || 'ASC'
            },
            paging: {
                pageSize: customerConstants.PAGESIZE,
                pageNumber: customerConstants.PAGENUMBER
            }
        };
    },
    editNetworkParams: function(context, contextParams) {
        return {
            network: {
                actorId: contextParams(context).actorId,
                organizationName: contextParams(context).organizationName,
                description: contextParams(context).description
            },
            networkTypeIds: contextParams(context).networkTypeIds,
            parent: contextParams(context).parent,
            roleHierarchy: contextParams(context).roleHierarchy
        };
    },
    rejectNetworkParams: function(context, contextParams) {
        return {
            actorId: contextParams(context).actorId,
            rejectReason: contextParams(context).rejectReason
        };
    }
};
